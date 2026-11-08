# Corey Hiom — personal website

A local design prototype built with .NET 10 and standalone Blazor WebAssembly. All biography, CV, contact and example project content is provisional.

## Develop

Install the .NET 10 SDK, run `dotnet run --launch-profile http`, and open http://localhost:5136. Run `dotnet publish -c Release` for static hosting files in `bin/Release/net10.0/publish/wwwroot`.

## Design

The accent is `--accent` at the top of `wwwroot/css/app.css`. Try `#165c46` for forest green. There is no decorative outer border. Illustrations are original CSS geometry. Google Fonts is optional; system fonts provide fallbacks.

## Hosting later

GitHub Pages can host the published output without a .NET server. Deployment and domain changes are not configured. Publish the entire wwwroot output, including _framework. The included .nojekyll preserves underscore-prefixed files. The base URL assumes a custom domain or a root user site; repository subpaths need a matching base href. Add a routing fallback before introducing more page routes. Never place private credentials in the browser application.

Keep future API access separate from UI components so components and content can move into a server-backed Blazor Web App later.
The publish target exports contact/index.html so /contact/ loads directly on static hosts.
