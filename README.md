# Corey Hiom — personal website

A personal website built with .NET 10 and Razor components. A small build-time exporter renders complete HTML pages. Visitors download HTML, CSS and local fonts, with no Blazor/WebAssembly runtime or JavaScript required for the current pages.

## Develop

Install the .NET 10 SDK and run:

```powershell
dotnet publish -c Release
python -m http.server 5137 --bind 127.0.0.1 --directory bin/Release/net10.0/publish/wwwroot
```

Open http://localhost:5137/. After editing a Razor page or asset, publish again and refresh the browser. The Python server only previews the generated files; production needs no Python or .NET server.

`dotnet run` also exports a preview into `artifacts/site`. `dotnet publish --output <directory>` exports hosting files into `<directory>/wwwroot`, matching the GitHub Actions workflow.

Pages are authored in `Pages/`, shared components in `Layout/`, and metadata/routes in `Program.cs`. `Layout/StaticDocument.razor` is the document shell. When adding a page, add its route and metadata to the exporter. Page interactions must work in plain HTML/CSS or be explicitly implemented in JavaScript; Razor event handlers cannot run in exported HTML.

## Design

The accent is `--accent` at the top of `wwwroot/css/app.css`. There is no decorative outer border. Illustrations are original CSS geometry. Paytone One, DM Sans and Geist Mono are hosted locally as WOFF2 fonts, with their licences in `wwwroot/fonts/`. CSS cache versions are generated automatically from the file contents.

## Hosting

GitHub Pages hosts only the generated `wwwroot` output. The publish command stays `dotnet publish -c Release` (with an optional `--output`), so the existing Pages workflow can keep uploading that folder. No framework runtime files should be deployed. The base URL assumes a custom domain or root user site; repository subpaths need a matching base URL and links.

Each route has its own `index.html`, so direct visits to `/about/`, `/contact/` and `/cv/` work on static hosting. `404.html` provides the GitHub Pages error page. The old portfolio remains under `/archive/` with its original assets and scripts.

Keep future API access separate from UI components so components and content can move into a server-backed Blazor Web App later. Never place secrets in generated pages or public assets.

## Verify

After publishing, run `python scripts/verify-static-site.py`. This checks complete HTML, internal links and fragments, local fonts, hidden CV content and the absence of the WebAssembly loader. Use `--site <directory>` to check another publish output.

## Content visibility

SiteVisibility.props controls the CV page, PDF download, and selected-work section independently. The CV page is enabled. ShowCvDownload and ShowSelectedWork are false: download buttons, the published PDF, and selected work (Theatre Tokens, CMS editor, National Book Tokens) stay hidden. Source content is preserved for later review. These switches do not remove earlier GitHub history.
ShowProjects=false also hides the homepage placeholder projects and their navigation link. The original section is preserved in Layout/ProjectsSection.razor.
