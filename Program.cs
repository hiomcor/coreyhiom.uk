using CoreyHiom;
using CoreyHiom.Layout;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System.Security.Cryptography;

// .NET runs here during publishing, never in the visitor's browser.
var source = Path.GetFullPath(Argument("--source", "wwwroot"));
var destination = Path.GetFullPath(Argument("--output", "artifacts/site"));
if (!Directory.Exists(source))
    throw new DirectoryNotFoundException($"Asset directory not found: {source}");
var relativeSource = Path.GetRelativePath(destination, source);
var relativeDestination = Path.GetRelativePath(source, destination);
if (IsWithin(relativeSource) || IsWithin(relativeDestination))
    throw new ArgumentException("The source and output directories must be separate.");

Directory.CreateDirectory(destination);
// Remove only known generated folders, including the previous WebAssembly output.
foreach (var folder in new[] { "_framework", "_content", "about", "contact", "cv", "files", "sample-data", "css", "fonts", "lib" })
{
    var stale = Path.GetFullPath(Path.Combine(destination, folder));
    if (!stale.StartsWith(destination + Path.DirectorySeparatorChar, StringComparison.OrdinalIgnoreCase))
        throw new InvalidOperationException("Cleanup must stay inside the output directory.");
    if (Directory.Exists(stale)) Directory.Delete(stale, recursive: true);
}
foreach (var name in new[] { "index.html.br", "index.html.gz", "favicon.svg.br", "favicon.svg.gz" })
    File.Delete(Path.Combine(destination, name));
foreach (var file in Directory.EnumerateFiles(source, "*", SearchOption.AllDirectories))
{
    var relative = Path.GetRelativePath(source, file);
    if (relative == "index.html" || relative.StartsWith("sample-data" + Path.DirectorySeparatorChar) ||
        relative.StartsWith("lib" + Path.DirectorySeparatorChar)) continue;
    if ((!SiteVisibility.ShowCv || !SiteVisibility.ShowCvDownload) &&
        relative.Equals(Path.Combine("files", "Corey-Hiom-CV.pdf"), StringComparison.OrdinalIgnoreCase)) continue;
    var target = Path.Combine(destination, relative);
    Directory.CreateDirectory(Path.GetDirectoryName(target)!);
    File.Copy(file, target, overwrite: true);
}

var cssVersion = Convert.ToHexString(SHA256.HashData(await File.ReadAllBytesAsync(Path.Combine(source, "css", "app.css"))))[..10].ToLowerInvariant();
var pages = new List<(string Path, Type Component, string Title, string Description)>
{
    ("/", typeof(CoreyHiom.Pages.Home), "Corey Hiom — Development & design", "Corey Hiom, a developer based in Swindon. Development, design, experience and ways to get in touch."),
    ("/about/", typeof(CoreyHiom.Pages.About), "About — Corey Hiom", "About Corey Hiom, a developer based in Swindon with an interest in development and design."),
    ("/contact/", typeof(CoreyHiom.Pages.Contact), "Contact — Corey Hiom", "Get in touch with Corey Hiom by email or connect on LinkedIn."),
    ("/404.html", typeof(CoreyHiom.Pages.NotFound), "Page not found — Corey Hiom", "This page could not be found.")
};
#if SHOW_CV
pages.Add(("/cv/", typeof(CoreyHiom.Pages.Cv), "CV — Corey Hiom", "Corey Hiom’s development experience, technical skills and education."));
#endif

foreach (var page in pages)
{
    var services = new ServiceCollection();
    services.AddLogging();
    services.AddSingleton<NavigationManager>(new StaticNavigationManager(page.Path));
    await using var provider = services.BuildServiceProvider();
    await using var renderer = new HtmlRenderer(provider, provider.GetRequiredService<ILoggerFactory>());
    var html = await renderer.Dispatcher.InvokeAsync(async () =>
    {
        var parameters = ParameterView.FromDictionary(new Dictionary<string, object?>
        {
            [nameof(StaticDocument.PageComponent)] = page.Component,
            [nameof(StaticDocument.Title)] = page.Title,
            [nameof(StaticDocument.Description)] = page.Description,
            [nameof(StaticDocument.CssVersion)] = cssVersion,
            [nameof(StaticDocument.PagePath)] = page.Path
        });
        var rendered = await renderer.RenderComponentAsync<StaticDocument>(parameters);
        return "<!DOCTYPE html>\n" + rendered.ToHtmlString();
    });
    var relativeOutput = page.Path == "/404.html" ? "404.html" : Path.Combine(page.Path.Trim('/'), "index.html");
    var output = Path.Combine(destination, relativeOutput);
    Directory.CreateDirectory(Path.GetDirectoryName(output)!);
    await File.WriteAllTextAsync(output, html);
    Console.WriteLine($"Rendered {page.Path}");
}
await File.WriteAllTextAsync(Path.Combine(destination, ".nojekyll"), "");
Console.WriteLine($"Static website: {destination}");

string Argument(string name, string fallback)
{
    var index = Array.IndexOf(args, name);
    if (index < 0) return fallback;
    if (index + 1 == args.Length) throw new ArgumentException($"Missing value for {name}.");
    return args[index + 1];
}

static bool IsWithin(string relative) => relative != ".." && !relative.StartsWith(".." + Path.DirectorySeparatorChar);

sealed class StaticNavigationManager : NavigationManager
{
    public StaticNavigationManager(string path) => Initialize("https://coreyhiom.uk/", "https://coreyhiom.uk" + path);
}
