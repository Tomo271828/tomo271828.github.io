import html
import json
import os
import re
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_PATH = ROOT / "articles" / "qiita-articles.json"
USER_ID = os.environ.get("QIITA_USER_ID", "tomo0211goo")
TOKEN = os.environ.get("QIITA_TOKEN", "").strip()
API_ROOT = "https://qiita.com/api/v2"


class ArticleTextExtractor(HTMLParser):
    BLOCK_TAGS = {
        "address", "article", "aside", "blockquote", "br", "div", "figcaption",
        "figure", "footer", "h1", "h2", "h3", "h4", "h5", "h6", "header",
        "hr", "li", "main", "nav", "ol", "p", "pre", "section", "table",
        "tbody", "td", "th", "thead", "tr", "ul",
    }

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.parts = []
        self.skip_depth = 0

    def handle_starttag(self, tag, attrs):
        if tag in {"script", "style"}:
            self.skip_depth += 1
        elif not self.skip_depth and tag in self.BLOCK_TAGS:
            self.parts.append("\n")

    def handle_endtag(self, tag):
        if tag in {"script", "style"} and self.skip_depth:
            self.skip_depth -= 1
        elif not self.skip_depth and tag in self.BLOCK_TAGS:
            self.parts.append("\n")

    def handle_data(self, data):
        if not self.skip_depth:
            self.parts.append(data)


def make_excerpt(rendered_body, max_lines=4, max_chars=360):
    parser = ArticleTextExtractor()
    parser.feed(rendered_body or "")
    lines = []
    for raw_line in "".join(parser.parts).splitlines():
        line = re.sub(r"\s+", " ", html.unescape(raw_line)).strip()
        if line:
            lines.append(line)
        if len(lines) >= max_lines:
            break
    excerpt = "\n".join(lines)
    if len(excerpt) > max_chars:
        excerpt = excerpt[: max_chars - 1].rstrip() + "…"
    return excerpt


def request_items(page):
    query = urllib.parse.urlencode({"page": page, "per_page": 100})
    url = f"{API_ROOT}/users/{urllib.parse.quote(USER_ID)}/items?{query}"
    headers = {
        "Accept": "application/json",
        "User-Agent": "tomo-portfolio-qiita-updater/1.0",
    }
    if TOKEN:
        headers["Authorization"] = f"Bearer {TOKEN}"
    request = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(request, timeout=30) as response:
        return json.load(response)


def fetch_all_items():
    all_items = []
    for page in range(1, 101):
        items = request_items(page)
        if not isinstance(items, list):
            raise RuntimeError("Qiita API returned an unexpected response.")
        all_items.extend(items)
        if len(items) < 100:
            return all_items
    raise RuntimeError("Qiita API pagination exceeded 100 pages.")


def normalize_item(item):
    return {
        "id": item["id"],
        "title": item.get("title", ""),
        "url": item.get("url", ""),
        "created_at": item.get("created_at", ""),
        "updated_at": item.get("updated_at", ""),
        "tags": [tag.get("name", "") for tag in item.get("tags", []) if tag.get("name")],
        "excerpt": make_excerpt(item.get("rendered_body", "")),
    }


def main():
    items = [normalize_item(item) for item in fetch_all_items()]
    old_payload = {}
    if OUTPUT_PATH.exists():
        old_payload = json.loads(OUTPUT_PATH.read_text(encoding="utf-8"))

    if old_payload.get("user_id") == USER_ID and old_payload.get("items") == items:
        print(f"Qiita articles are already current ({len(items)} items).")
        return

    payload = {
        "user_id": USER_ID,
        "synced_at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "items": items,
    }
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"Updated {OUTPUT_PATH} with {len(items)} Qiita articles.")


if __name__ == "__main__":
    main()
