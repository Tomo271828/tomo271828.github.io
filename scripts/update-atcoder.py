"""Fetch public Algorithm rating history once, preserving saved data on failure."""
import json
import re
import time
from html import unescape
from datetime import datetime, timezone
from pathlib import Path
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parent.parent


def parse_top_percent(html):
    row = re.search(r'<tr\b[^>]*>\s*<th\b[^>]*>\s*Rank\s*</th>\s*<td\b[^>]*>(.*?)</td>', html, re.S | re.I)
    if not row:
        return None
    text = unescape(re.sub(r'<[^>]*>', '', row.group(1)))
    match = re.search(r'Top\s+([0-9]+(?:\.[0-9]+)?)\s*%', text)
    if match and 0 <= float(match.group(1)) <= 100:
        return float(match.group(1))
    return None


def fetch_rating(user, mode):
    url = f"https://atcoder.jp/users/{user}/history/json?contestType={mode}"
    request = Request(url, headers={"User-Agent": "PortfolioRatingUpdater/1.0", "Accept": "application/json"})
    with urlopen(request, timeout=30) as response:
        history = json.load(response)
    if not isinstance(history, list):
        raise ValueError("Expected a rating history array")
    results = []
    for item in history:
        if not isinstance(item, dict) or not isinstance(item.get("IsRated"), bool):
            raise ValueError("Invalid history entry")
        if not item["IsRated"]:
            continue
        if type(item.get("NewRating")) is not int or not isinstance(item.get("ContestName"), str):
            raise ValueError("Invalid rating entry")
        date = datetime.fromisoformat(item["EndTime"])
        if date.tzinfo is None:
            raise ValueError("Missing contest timezone")
        results.append({"date": date.isoformat(), "rating": item["NewRating"], "contest": item["ContestName"]})
    results.sort(key=lambda item: datetime.fromisoformat(item["date"]))
    profile_url = f"https://atcoder.jp/users/{user}?contestType={mode}&lang=en"
    top_percent = None
    try:
        time.sleep(1.1)
        request = Request(profile_url, headers={"User-Agent": "PortfolioRatingUpdater/1.0"})
        with urlopen(request, timeout=30) as response:
            top_percent = parse_top_percent(response.read().decode("utf-8"))
        if top_percent is None:
            print("Top percentage is not available in the public profile")
    except (OSError, UnicodeError) as error:
        print(f"Could not fetch top percentage: {error}")
    data = {"userId": user, "updatedAt": datetime.now(timezone.utc).isoformat(), "source": url,
            "topPercent": top_percent, "profileSource": profile_url, "history": results}
    print(f"{mode}: {len(results)} rated contests; top {top_percent}%")
    return data


def main():
    directory = ROOT / "competitive-programming"
    user = json.loads((directory / "atcoder-config.json").read_text(encoding="utf-8"))["userId"]
    if not isinstance(user, str) or not re.fullmatch(r"[A-Za-z0-9_]{1,32}", user):
        raise ValueError("Invalid AtCoder userId")
    algorithm = fetch_rating(user, "algo")
    time.sleep(1.1)
    heuristic = fetch_rating(user, "heuristic")
    data = {"userId": user, "modes": {"algo": algorithm, "heuristic": heuristic}}
    output = directory / "atcoder-rating.json"
    temporary = output.with_suffix(".json.tmp")
    temporary.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    temporary.replace(output)
    print(f"Updated both rating histories for {user}")


if __name__ == "__main__":
    main()
