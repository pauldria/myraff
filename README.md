# Myraff

[myraff.com](https://myraff.com) — personal/professional site for Paul Raff.

Built with WordPress in [Local](https://localwp.com/), exported as a **static site**
into the [./docs](docs) folder, and published via **GitHub Pages**.

## How it's published

| | |
| --- | --- |
| Host | GitHub Pages |
| Source | branch `master`, folder `/docs` |
| Custom domain | `myraff.com` (see [docs/CNAME](docs/CNAME)) |
| `www` | `www.myraff.com` is a CNAME to `pauldria.github.io` and redirects to the apex |
| Generator | WordPress 6.4.3 + [Kubio](https://kubiobuilder.com/) page builder |

Everything served at myraff.com is a **committed static export** under `/docs`.
There is no build step: what is in `/docs` on `master` is exactly what is live.

> **Note:** this repo previously contained unused Jekyll (Hydejack) scaffolding and a
> `netlify.toml`. Those were removed in 2026-07 because they were not used to build or
> publish the site and caused confusion. Please don't re-add a site build here — the
> only publishing path is the static export in `/docs`.
>
> The remaining root content (`about.md`, `mathclub.md`, `insights/`, `whitepapers/`,
> `analyses/`, `assets/`) is **archived source**, kept for reference. It is not built
> and not published.

## Updating the Site

Update the site on your computer, and utilize the
[Simply Static](https://wordpress.org/plugins/simply-static/) plugin to deploy the files.
**Be sure to deploy as a static site**.

Put the deployed files in `/docs`, commit, and push to `master` — and _whoosh_,
GitHub Pages redeploys.

Keep [docs/CNAME](docs/CNAME) in place. If it is lost, GitHub Pages drops the custom
domain and the site reverts to `pauldria.github.io`.

## Setting up a New Computer

The [zip file](./myraff.zip) is periodically updated from an export in Local.
Install Local and import this zip file to get rolling.
