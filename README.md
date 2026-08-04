# Cozy Cockpit Website

The official static marketing website for **Cozy Cockpit**, a cozy observation adventure through handcrafted places.

## Project structure

All website files live in `public/`:

- `index.html` — page content and metadata
- `styles-v7.css` — responsive styling and artwork
- `script-v3.js` — mobile navigation, screenshot viewer, and current year
- `favicon.png` — Cozy Cockpit favicon
- `_headers` — Cloudflare Pages security and cache headers
- `assets/` — official branding, logo, and cockpit artwork

There is no framework, build system, or runtime dependency.

## Local preview

From the project root, serve the `public` directory with any static file server. For example:

```powershell
python -m http.server 8080 --directory public
```

Then visit `http://localhost:8080`.

## Cloudflare Pages settings

- Production branch: `main`
- Framework preset: `None`
- Build command: leave blank
- Build output directory: `public`
- Root directory: `/`

Every push to `main` automatically deploys to production after the GitHub repository is connected in Cloudflare Pages.

## Domains

- Primary: `https://cozycockpit.com`
- Redirect: `https://www.cozycockpit.com` → `https://cozycockpit.com`

The `www` redirect is configured as a Cloudflare Redirect Rule because Pages `_redirects` files do not support hostname-level redirects.
