# Previous website

The static snapshot in `wwwroot/archive` comes from https://github.com/hiomcor/hiomcor.github.io at commit `2cdc1423cf0f380a6bfc47294ea1ef971464fa51`.

The original files and folder structure are retained, excluding Git metadata, .gitignore, and CNAME. The source repository is unchanged. The archive shares this site's hosting and is linked only from page footers. Its styling and scripts remain separate from the Blazor application.

Some original demos contain missing image/icon references, placeholder links, and external font/script/image dependencies. These are preserved rather than redesigned. In particular the travel demo references a missing scotland.png background; older film, news, and video experiments also have missing local resources. The React experiment contains source files rather than a compiled application.

Refresh this snapshot deliberately, rather than automatically pulling future changes. Before deploying, include the full published `archive` directory. Use a normal full-document navigation when linking from Blazor to archived HTML.
