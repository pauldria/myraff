# Exporting myraff.com

How to regenerate the static site in `/docs` from the WordPress source. Written so
an export done a year from now produces the same structure the site has today.

## Source of truth

The WordPress site lives in [Local](https://localwp.com/) (site name `myraff`,
local domain `https://myraff.local`). `myraff.zip` at the repo root is a full Local
export (app + database) for bootstrapping a new computer — see README.

## Export tool & settings

Exports are made with the [Simply Static](https://wordpress.org/plugins/simply-static/)
plugin. Settings verified from the committed export (2024-05):

| Setting | Value | Evidence |
| --- | --- | --- |
| Replacing URLs | **Offline usage** | links are `./`-relative (`./about/index.html`, `./../index.html`) with `index.html` appended everywhere |
| Generator | WordPress 6.4.3 + Kubio (theme `luminai`) | `<meta name="generator">`, asset paths |
| Delivery | local directory / ZIP, contents placed in `/docs` | repo history |

Not verifiable from the artifact (check in the Simply Static UI when next exporting
and update this table): plugin version, include/exclude rules, "force URL replacement"
toggle.

## Steps

1. In Local, start the `myraff` site and edit content in WordPress/Kubio.
2. Run a Simply Static export with **Replacing URLs = Offline usage**.
3. Replace the contents of `/docs` with the export output. **Keep `docs/CNAME`**
   (contents: `myraff.com`) — if the export wiped it, restore it.
4. Commit and push to `master`. GitHub Pages redeploys automatically;
   CI (`.github/workflows/verify-docs.yml`) fails the push if `docs/index.html`
   or `docs/CNAME` is missing.
5. Spot-check https://myraff.com after the Pages deploy finishes.
6. Periodically: re-export the full site from Local and refresh `myraff.zip`.

## Known export artifacts (current /docs)

- Unreplaced dev-host URLs: the comment form on `hello-world` posts to
  `https://myraff.local/wp-comments-post.php` and the search form on several pages
  targets `https://myraff.local`. Harmless on a static site but broken; fix in
  WordPress (disable comments/search or restyle) and re-export rather than
  hand-editing `/docs`.
- WordPress plumbing stubs (`wp-json/`, `xmlrpc.php?rsd` links, `feed/`) are
  exported as static files. Cosmetic.
