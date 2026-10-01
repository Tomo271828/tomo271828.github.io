"""Save the latest TomoLibrary main-branch commits for the portfolio."""
import json
import os
from datetime import datetime, timezone
from pathlib import Path
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parent.parent
SOURCE = "https://api.github.com/repos/Tomo271828/TomoLibrary/commits?sha=main&per_page=100"


def main():
    headers = {"User-Agent": "PortfolioLibraryUpdater/1.0", "Accept": "application/vnd.github+json"}
    if os.environ.get("GH_TOKEN"):
        headers["Authorization"] = f"Bearer {os.environ['GH_TOKEN']}"
    with urlopen(Request(SOURCE, headers=headers), timeout=30) as response:
        results = json.load(response)
    if not isinstance(results, list):
        raise ValueError("Expected a commit array")
    commits = []
    for result in results:
        commit = result["commit"]
        message = commit["message"]
        date = commit["committer"]["date"]
        url = result["html_url"]
        if not isinstance(message, str) or not url.startswith("https://github.com/Tomo271828/TomoLibrary/commit/"):
            raise ValueError("Invalid commit entry")
        parsed_date = datetime.fromisoformat(date.replace("Z", "+00:00"))
        if parsed_date.tzinfo is None:
            raise ValueError("Missing commit timezone")
        commits.append({"message": message, "date": date, "url": url})
    commits.sort(key=lambda item: item["date"], reverse=True)
    data = {"updatedAt": datetime.now(timezone.utc).isoformat(), "source": SOURCE, "commits": commits}
    output = ROOT / "competitive-programming" / "library-history.json"
    temporary = output.with_suffix(".json.tmp")
    temporary.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    temporary.replace(output)
    print(f"Saved {len(commits)} TomoLibrary commits")


if __name__ == "__main__":
    main()
