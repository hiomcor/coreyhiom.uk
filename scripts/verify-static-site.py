"""Check the generated public pages without a browser or third-party packages."""
import argparse
from html.parser import HTMLParser
from pathlib import Path
import re
from urllib.parse import unquote, urlsplit
import xml.etree.ElementTree as ET


class Document(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.ids, self.urls, self.tags = set(), [], []
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.tags.append(tag)
        if "id" in attrs:
            self.ids.add(attrs["id"])
        for attribute in ("href", "src"):
            if attribute in attrs:
                self.urls.append(attrs[attribute])


parser = argparse.ArgumentParser()
parser.add_argument("--site", default="bin/Release/net10.0/publish/wwwroot")
args = parser.parse_args()
site = Path(args.site).resolve()
flags = ET.parse("SiteVisibility.props").getroot()
enabled = lambda name: flags.findtext(f".//{name}") == "true"
routes = ["index.html", "about/index.html", "contact/index.html", "404.html"]
if enabled("ShowCv"):
    routes.append("cv/index.html")
else:
    assert not (site / "cv/index.html").exists(), "Hidden CV page was exported"

documents = {}
for route in routes:
    text = (site / route).read_text(encoding="utf-8")
    doc = documents[route] = Document(text)
    assert text.startswith("<!DOCTYPE html>"), route
    assert {"html", "head", "title", "main", "h1", "footer"} <= set(doc.tags), route
    assert "script" not in doc.tags and "_framework" not in text, f"Runtime leaked into {route}"
    assert "fonts.googleapis.com" not in text and "fonts.gstatic.com" not in text, route
    assert "Corey-Hiom-CV.pdf" not in text or enabled("ShowCvDownload"), route
    assert "Theatre Tokens" not in text or enabled("ShowSelectedWork"), route
    assert "Things in the making" not in text or enabled("ShowProjects"), route

for route, doc in documents.items():
    for url in doc.urls:
        parts = urlsplit(url)
        if parts.scheme or parts.netloc:
            continue
        # The document's base URL is /, including for relative assets.
        target = site / unquote(parts.path).lstrip("/")
        if target.is_dir():
            target /= "index.html"
        assert target.is_relative_to(site), f"Link escapes public output: {url}"
        assert target.exists(), f"Broken URL in {route}: {url}"
        if parts.fragment and "/archive/" not in url:
            target_doc = Document(target.read_text(encoding="utf-8"))
            assert unquote(parts.fragment) in target_doc.ids, f"Broken fragment in {route}: {url}"

css = (site / "css/app.css").read_text(encoding="utf-8")
assert "@import" not in css and "fonts.googleapis.com" not in css
for font in re.findall(r"url\(['\"]?(\.\./fonts/[^)'\"]+)", css):
    assert (site / "css" / font).is_file(), f"Missing font: {font}"
assert not (site / "_framework").exists(), "Old WebAssembly output remains"
assert not (site / "index.html.br").exists(), "Stale compressed WebAssembly shell remains"
if not enabled("ShowCv") or not enabled("ShowCvDownload"):
    assert not (site / "files/Corey-Hiom-CV.pdf").exists(), "Hidden PDF was exported"

home_bytes = (site / "index.html").stat().st_size
style_bytes = (site / "css/app.css").stat().st_size
font_bytes = sum(p.stat().st_size for p in (site / "fonts").glob("*.woff2"))
print(f"Passed: {len(routes)} complete HTML pages, internal links, fragments, fonts and visibility checks.")
print(f"Home + CSS + all three fonts: {(home_bytes + style_bytes + font_bytes) / 1024:.1f} KiB uncompressed.")
