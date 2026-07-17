# myraff.com

Paul Raff's personal site, served at **https://myraff.com** (with `www.myraff.com`
redirecting to the apex) via **GitHub Pages** from the `/docs` folder on `master`.

The site is a small, dependency-light **static site built with [Eleventy (11ty)](https://www.11ty.dev/)**.
There is no WordPress, no database, and no page builder — content lives in plain
text files and `npm run build` generates the published `/docs`.

## How it works

```
src/
  _data/site.json      ← site content: nav, contact info, services, stats, career timeline
  _includes/base.njk   ← shared page shell (header nav + footer)
  index.njk            ← Home
  about.njk            ← About (career timeline)
  on-hype.njk          ← "On Hype" keynote essay
  contact.njk          ← Contact
  404.njk              ← 404 page
  assets/              ← css, js, images (copied through as-is)
  CNAME                ← myraff.com (custom domain)
.eleventy.js           ← build config (input: src/, output: docs/)
docs/                  ← BUILD OUTPUT — GitHub Pages serves this. Do not hand-edit.
```

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (`brew install node`)

## Update the site

1. Edit content — most changes are in **`src/_data/site.json`** (contact details,
   services, stats, career timeline) or the relevant page in `src/`.
2. Preview locally with live reload:

   ```bash
   npm install      # first time only
   npm run serve    # open http://localhost:8080
   ```

3. Build the published output:

   ```bash
   npm run build    # regenerates /docs from src/
   ```

4. Commit `src/` **and** the regenerated `/docs`, then push to `master`.
   GitHub Pages redeploys automatically.

> `npm run build` runs `rm -rf docs && eleventy`, so `/docs` is always a clean
> reflection of `src/`. Because GitHub Pages serves committed files from `/docs`,
> the build output must be committed.

## Notes

- `docs/CNAME` (`myraff.com`) and `docs/.nojekyll` are produced from `src/` on every build.
- `node_modules/` is gitignored; run `npm install` after cloning.
- Legacy WordPress/Local material (`myraff.zip`, the old Simply Static `EXPORT.md`,
  `analyses/`, `whitepapers/`, `insights/`) is retained as archived history and is
  not part of the live site. See the project notes for cleanup decisions.
=======
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