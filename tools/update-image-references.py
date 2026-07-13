from __future__ import annotations

from pathlib import Path


ROOT = Path("images")
TEXT_FILES = [
    *Path(".").glob("*.html"),
    *Path("blog").glob("*.html"),
    *Path("spravy").glob("*.html"),
    Path("script.js"),
    Path("flash-news-data.js"),
    Path("style.css"),
]
CARD_FILES = {
    Path("index.html"),
    Path("blog.html"),
    Path("spravy.html"),
    Path("script.js"),
}


def webp_target(source: Path) -> Path:
    base_name = source.name
    while Path(base_name).suffix.lower() in {".jpg", ".jpeg", ".png"}:
        base_name = Path(base_name).stem
    return source.with_name(f"{base_name}.webp")


def main() -> None:
    replacements: dict[str, str] = {}
    for source in ROOT.rglob("*"):
        if not source.is_file() or source.suffix.lower() not in {".jpg", ".jpeg", ".png"}:
            continue
        target = webp_target(source)
        if target.exists():
            replacements[source.as_posix()] = target.as_posix()

    for text_file in TEXT_FILES:
        if not text_file.exists():
            continue
        content = text_file.read_text(encoding="utf-8")
        for source, target in replacements.items():
            content = content.replace(source, target)

        if text_file in CARD_FILES:
            for target in replacements.values():
                thumb = Path(target).with_name(f"{Path(target).stem}-thumb.webp").as_posix()
                if Path(thumb).exists() and not target.startswith("images/hero/"):
                    content = content.replace(target, thumb)

        text_file.write_text(content, encoding="utf-8", newline="\n")


if __name__ == "__main__":
    main()
