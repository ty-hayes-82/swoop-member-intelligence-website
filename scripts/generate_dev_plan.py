#!/usr/bin/env python3
"""
generate_dev_plan.py

Reads all recommendation files and the MASTER_REPORT.md from a website-critique
output directory and passes them to Gemini to generate a detailed, prioritised
development plan.

Usage:
    python scripts/generate_dev_plan.py [CRITIQUE_DIR]

    CRITIQUE_DIR defaults to the most recent timestamped folder under
    website-critique-output/ (relative to this script's parent directory).

Output:
    Writes DEV_PLAN.md alongside MASTER_REPORT.md in CRITIQUE_DIR.

Requirements:
    pip install google-generativeai
    Set the GEMINI_API_KEY environment variable.
"""

import os
import sys
from datetime import datetime
from pathlib import Path

try:
    import google.generativeai as genai
except ImportError:
    sys.exit(
        "ERROR: google-generativeai package not found.\n"
        "Install it with:  pip install google-generativeai"
    )


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def find_latest_critique_dir(base: Path) -> Path:
    """Return the most recently created timestamped critique directory."""
    output_root = base / "website-critique-output"
    candidates = sorted(
        [p for p in output_root.iterdir() if p.is_dir()],
        key=lambda p: p.name,
        reverse=True,
    )
    if not candidates:
        sys.exit(f"ERROR: No critique directories found under {output_root}")
    return candidates[0]


def read_file(path: Path) -> str:
    """Read a text file; return empty string on failure."""
    try:
        return path.read_text(encoding="utf-8")
    except Exception as exc:
        print(f"  WARNING: Could not read {path}: {exc}", file=sys.stderr)
        return ""


def load_critique_content(critique_dir: Path) -> dict[str, str]:
    """
    Load MASTER_REPORT.md and all per-page recommendation files.
    Returns a dict of { label: content }.
    """
    content: dict[str, str] = {}

    master = critique_dir / "MASTER_REPORT.md"
    if master.exists():
        content["MASTER_REPORT"] = read_file(master)
    else:
        print(f"  WARNING: MASTER_REPORT.md not found in {critique_dir}", file=sys.stderr)

    recs_dir = critique_dir / "recommendations"
    if recs_dir.is_dir():
        for rec_file in sorted(recs_dir.glob("*.md")):
            label = rec_file.stem  # e.g. 01_home__recommendations
            content[label] = read_file(rec_file)
    else:
        print(f"  WARNING: recommendations/ directory not found in {critique_dir}", file=sys.stderr)

    return content


# ---------------------------------------------------------------------------
# Prompt assembly
# ---------------------------------------------------------------------------

SYSTEM_PROMPT = """You are a senior full-stack engineering lead and product manager.
Your job is to read a set of UX/UI/marketing critique reports for a SaaS website and
produce a single, comprehensive, actionable development plan.

The plan must be written for a small, cross-functional team (1-2 engineers, 1 designer,
1 copy/marketing owner) and should cover:

1. A one-page executive summary of the highest-leverage changes.
2. A prioritised backlog grouped into four horizons:
   - Sprint 1 – Quick Wins  (< 1 day each, ship within the week)
   - Sprint 2 – High-Impact  (1–5 days each, ship within the sprint)
   - Sprint 3 – Structural   (1–2 weeks each)
   - Backlog  – Strategic    (next quarter)
3. For EVERY task include:
   - Title and one-line description
   - Exact file(s) to change (use the paths cited in the recommendations)
   - Before / after code or copy snippet (copy verbatim from the source report)
   - Owner role (Design / Front-end / Copy / Engineering / Marketing)
   - Estimated effort
   - Estimated revenue / conversion impact (use the $ figures from the reports)
   - The evidence lenses that surface this issue (e.g. The Closer, The Architect)
4. A "Do Not Break" section listing the positive patterns to preserve.
5. A success metrics table mapping each sprint to measurable KPIs.

Format the output as clean GitHub-flavoured Markdown with clear headings, tables,
and fenced code blocks. Be exhaustive: every single recommendation from the source
reports must appear in the plan."""


def build_user_message(content: dict[str, str]) -> str:
    parts = [
        "Below are all the website critique reports. "
        "Please synthesise them into a complete, detailed development plan "
        "following the structure described in your instructions.\n"
    ]

    # Master report first for highest-level context
    if "MASTER_REPORT" in content:
        parts.append("---\n## MASTER REPORT\n")
        parts.append(content["MASTER_REPORT"])
        parts.append("\n")

    # Per-page recommendation files
    for label, text in content.items():
        if label == "MASTER_REPORT" or not text:
            continue
        page_name = label.replace("__recommendations", "").replace("_", " ").title()
        parts.append(f"---\n## {page_name} — Recommendations\n")
        parts.append(text)
        parts.append("\n")

    return "\n".join(parts)


# ---------------------------------------------------------------------------
# Gemini API call
# ---------------------------------------------------------------------------

MODEL = "gemini-3.1-pro-preview"


def generate_dev_plan(user_message: str) -> str:
    """Send the compiled critique content to Gemini and return the dev plan text."""
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        sys.exit(
            "ERROR: GEMINI_API_KEY environment variable is not set.\n"
            "Export it before running this script."
        )

    genai.configure(api_key=api_key)
    model = genai.GenerativeModel(
        model_name=MODEL,
        system_instruction=SYSTEM_PROMPT,
    )

    print(f"  Sending to Gemini {MODEL}…")

    response = model.generate_content(
        user_message,
        generation_config=genai.GenerationConfig(max_output_tokens=65536),
    )

    # Log token usage when available
    if hasattr(response, "usage_metadata") and response.usage_metadata:
        usage = response.usage_metadata
        print(
            f"  Token usage — input: {getattr(usage, 'prompt_token_count', '?'):,}  "
            f"output: {getattr(usage, 'candidates_token_count', '?'):,}  "
            f"total: {getattr(usage, 'total_token_count', '?'):,}"
        )

    return response.text


# ---------------------------------------------------------------------------
# Entry point
# ---------------------------------------------------------------------------

def main() -> None:
    # Resolve the critique directory
    script_dir = Path(__file__).resolve().parent
    project_root = script_dir.parent  # swoop-member-intelligence-website/

    if len(sys.argv) > 1:
        critique_dir = Path(sys.argv[1]).resolve()
        if not critique_dir.is_dir():
            sys.exit(f"ERROR: Directory not found: {critique_dir}")
    else:
        critique_dir = find_latest_critique_dir(project_root)

    print(f"Model:             {MODEL}")
    print(f"Critique directory: {critique_dir}")

    # Load all source documents
    print("Loading source documents…")
    content = load_critique_content(critique_dir)
    if not content:
        sys.exit("ERROR: No content files found — nothing to process.")

    file_list = ", ".join(content.keys())
    print(f"  Loaded {len(content)} file(s): {file_list}")

    # Build the prompt
    user_message = build_user_message(content)
    print(f"  Total prompt size: {len(user_message):,} characters")

    # Generate the plan
    print("Generating development plan…")
    dev_plan = generate_dev_plan(user_message)

    # Prepend a generation header
    timestamp = datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ")
    header = (
        f"<!-- Generated by generate_dev_plan.py on {timestamp} -->\n"
        f"<!-- Source: {critique_dir} -->\n\n"
    )
    output_text = header + dev_plan

    # Write output
    output_path = critique_dir / "DEV_PLAN.md"
    output_path.write_text(output_text, encoding="utf-8")
    print(f"\nDevelopment plan written to:\n  {output_path}")


if __name__ == "__main__":
    main()
