"""Fetch public rating histories and AC count, preserving saved data on failure."""
import json
import re
import time
from html import unescape
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlencode
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


def fetch_ac_count(user):
    url = f"https://kenkoooo.com/atcoder/atcoder-api/v3/user/ac_rank?user={user}"
    request = Request(url, headers={"User-Agent": "PortfolioRatingUpdater/1.0", "Accept": "application/json"})
    with urlopen(request, timeout=30) as response:
        result = json.load(response)
    if not isinstance(result, dict) or type(result.get("count")) is not int or result["count"] < 0:
        raise ValueError("Invalid AtCoder Problems AC count")
    print(f"AtCoder Problems: {result['count']} accepted problems")
    return {"count": result["count"], "updatedAt": datetime.now(timezone.utc).isoformat(), "source": url}


def fetch_library_checker_count(user):
    url = f"https://v3.api.judge.yosupo.jp/users/{user}/statistics"
    request = Request(url, headers={"User-Agent": "PortfolioRatingUpdater/1.0", "Accept": "application/json"})
    with urlopen(request, timeout=30) as response:
        result = json.load(response)
    solved = result.get("solved_map") if isinstance(result, dict) else None
    if not isinstance(solved, dict) or any(status not in ("AC", "LATEST_AC") for status in solved.values()):
        raise ValueError("Invalid Library Checker solved statistics")
    count = len(solved)
    print(f"Library Checker: {count} accepted problems")
    return {"userId": user, "count": count, "updatedAt": datetime.now(timezone.utc).isoformat(), "source": url}


def fetch_codeforces_count(handle):
    endpoint = "https://codeforces.com/api/user.status"
    page_size = 1000
    start = 1
    solved = set()
    while True:
        query = urlencode({"handle": handle, "from": start, "count": page_size})
        request = Request(f"{endpoint}?{query}", headers={"User-Agent": "PortfolioRatingUpdater/1.0",
                                                       "Accept": "application/json"})
        with urlopen(request, timeout=30) as response:
            payload = json.load(response)
        if not isinstance(payload, dict) or payload.get("status") != "OK":
            raise ValueError("Codeforces API returned an unsuccessful response")
        submissions = payload.get("result")
        if not isinstance(submissions, list) or len(submissions) > page_size:
            raise ValueError("Invalid Codeforces submission list")
        for submission in submissions:
            if not isinstance(submission, dict):
                raise ValueError("Invalid Codeforces submission")
            if submission.get("verdict") != "OK":
                continue
            problem = submission.get("problem")
            if not isinstance(problem, dict):
                raise ValueError("Missing Codeforces problem")
            contest_id = problem.get("contestId")
            problemset = problem.get("problemsetName")
            index = problem.get("index")
            if type(contest_id) is int and contest_id > 0:
                problem_group = contest_id
            elif isinstance(problemset, str) and problemset:
                problem_group = problemset
            else:
                raise ValueError("Missing Codeforces problem group")
            if not isinstance(index, str) or not index:
                raise ValueError("Missing Codeforces problem index")
            solved.add((problem_group, index))
        if len(submissions) < page_size:
            break
        start += len(submissions)
        time.sleep(2.1)
    print(f"Codeforces: {len(solved)} accepted problems")
    return {"userId": handle, "count": len(solved), "updatedAt": datetime.now(timezone.utc).isoformat(),
            "source": f"{endpoint}?{urlencode({'handle': handle})}"}


def fetch_yukicoder_count(user_id):
    url = f"https://yukicoder.me/api/v1/solved/id/{user_id}"
    request = Request(url, headers={"User-Agent": "PortfolioRatingUpdater/1.0", "Accept": "application/json"})
    with urlopen(request, timeout=30) as response:
        problems = json.load(response)
    if not isinstance(problems, list) or any(
        not isinstance(problem, dict) or type(problem.get("ProblemId")) is not int
        or problem["ProblemId"] <= 0 for problem in problems
    ):
        raise ValueError("Invalid yukicoder solved problem list")
    count = len({problem["ProblemId"] for problem in problems})
    print(f"yukicoder: {count} accepted problems")
    return {"userId": user_id, "count": count, "updatedAt": datetime.now(timezone.utc).isoformat(), "source": url}


def main():
    directory = ROOT / "competitive-programming"
    config = json.loads((directory / "atcoder-config.json").read_text(encoding="utf-8"))
    user = config["userId"]
    if not isinstance(user, str) or not re.fullmatch(r"[A-Za-z0-9_]{1,32}", user):
        raise ValueError("Invalid AtCoder userId")
    library_user = config["libraryCheckerUserId"]
    if not isinstance(library_user, str) or not re.fullmatch(r"[A-Za-z0-9_-]{1,30}", library_user):
        raise ValueError("Invalid Library Checker userId")
    codeforces_handle = config["codeforcesHandle"]
    if not isinstance(codeforces_handle, str) or not re.fullmatch(r"[A-Za-z0-9_.-]{1,24}", codeforces_handle):
        raise ValueError("Invalid Codeforces handle")
    yukicoder_user = config["yukicoderUserId"]
    if type(yukicoder_user) is not int or yukicoder_user <= 0:
        raise ValueError("Invalid yukicoder userId")
    algorithm = fetch_rating(user, "algo")
    time.sleep(1.1)
    heuristic = fetch_rating(user, "heuristic")
    ac_count = fetch_ac_count(user)
    library_checker = fetch_library_checker_count(library_user)
    data = {"userId": user, "modes": {"algo": algorithm, "heuristic": heuristic},
            "acCount": ac_count, "libraryChecker": library_checker}
    output = directory / "atcoder-rating.json"
    previous = json.loads(output.read_text(encoding="utf-8")) if output.exists() else {}
    for key, fetch_count, account in (
        ("codeforces", fetch_codeforces_count, codeforces_handle),
        ("yukicoder", fetch_yukicoder_count, yukicoder_user),
    ):
        try:
            data[key] = fetch_count(account)
        except (OSError, ValueError) as error:
            print(f"Could not update {key}: {error}")
            saved = previous.get(key)
            if isinstance(saved, dict) and saved.get("userId") == account:
                data[key] = saved
    temporary = output.with_suffix(".json.tmp")
    temporary.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    temporary.replace(output)
    print(f"Updated both rating histories and AC count for {user}")


if __name__ == "__main__":
    main()
