#!/usr/bin/env python3
"""
Fetches citation-per-year data from Google Scholar and patches the
hardcoded values in App.tsx.

Usage:
    pip install scholarly
    python scripts/update_citations.py
"""

import re
import sys

SCHOLAR_ID = "ZsgWCyMAAAAJ"
APP_TSX = "App.tsx"


def fetch_citation_data():
    from scholarly import scholarly

    print(f"Fetching Scholar profile for {SCHOLAR_ID} ...")
    author = scholarly.search_author_id(SCHOLAR_ID)
    author = scholarly.fill(author, sections=["basics", "citations", "counts"])

    total = author.get("citedby", 0)
    cites_per_year: dict = author.get("cites_per_year", {})

    # Sort and take the 6 most recent years
    sorted_years = sorted(cites_per_year.items())[-6:]
    years = [str(y) for y, _ in sorted_years]
    counts = [int(c) for _, c in sorted_years]

    return total, years, counts


def patch_app_tsx(total: int, years: list[str], counts: list[int]):
    with open(APP_TSX, "r") as f:
        content = f.read()

    counts_str = ", ".join(str(c) for c in counts)
    years_str = ", ".join(f"'{y}'" for y in years)

    content = re.sub(
        r"(const data = \[)[^\]]*(\];)",
        rf"\g<1>{counts_str}\g<2>",
        content,
    )
    content = re.sub(
        r"(const years = \[)[^\]]*(\];)",
        rf"\g<1>{years_str}\g<2>",
        content,
    )
    content = re.sub(
        r"(const totalCitations = )\d+(;)",
        rf"\g<1>{total}\g<2>",
        content,
    )

    with open(APP_TSX, "w") as f:
        f.write(content)

    print(f"Updated App.tsx — total={total}, years={years}, counts={counts}")


if __name__ == "__main__":
    try:
        total, years, counts = fetch_citation_data()
    except Exception as e:
        print(f"ERROR fetching Scholar data: {e}", file=sys.stderr)
        sys.exit(1)

    patch_app_tsx(total, years, counts)
