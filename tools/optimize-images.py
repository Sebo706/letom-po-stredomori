from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path("images")
SKIP_PARTS = {"logo", "social"}
FULL_MAX_EDGE = 1920
THUMB_MAX_EDGE = 800


def prepare(image: Image.Image, max_edge: int) -> Image.Image:
    image = ImageOps.exif_transpose(image)
    if image.mode not in {"RGB", "RGBA"}:
        image = image.convert("RGBA" if "transparency" in image.info else "RGB")

    if max(image.size) > max_edge:
        image.thumbnail((max_edge, max_edge), Image.Resampling.LANCZOS)
    return image


def save_webp(image: Image.Image, target: Path) -> None:
    target.parent.mkdir(parents=True, exist_ok=True)
    image.save(target, "WEBP", quality=90, method=6)


def webp_target(source: Path) -> Path:
    base_name = source.name
    while Path(base_name).suffix.lower() in {".jpg", ".jpeg", ".png"}:
        base_name = Path(base_name).stem
    return source.with_name(f"{base_name}.webp")


def needs_thumbnail(path: Path) -> bool:
    parts = set(path.parts)
    name = path.stem.lower()
    return (
        "novinky" in parts
        or "destinacie" in parts
        or "blog" in parts
        or "hero" in name
        or "nahlad" in name
    )


def main() -> None:
    sources = [
        path
        for path in ROOT.rglob("*")
        if path.is_file()
        and path.suffix.lower() in {".jpg", ".jpeg", ".png"}
        and not any(part in SKIP_PARTS for part in path.parts)
    ]

    for source in sources:
        full_target = webp_target(source)
        with Image.open(source) as original:
            save_webp(prepare(original.copy(), FULL_MAX_EDGE), full_target)

        if needs_thumbnail(source):
            thumb_target = full_target.with_name(f"{full_target.stem}-thumb.webp")
            with Image.open(source) as original:
                save_webp(prepare(original.copy(), THUMB_MAX_EDGE), thumb_target)


if __name__ == "__main__":
    main()
