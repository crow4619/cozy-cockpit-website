# Cozy Cockpit Website

The official static marketing website for **Cozy Cockpit**, a cozy observation adventure.

## Project structure

All served files live in `public/`:

- `index.html` — campaign composition, content, accessible gallery, trailer fallback, and metadata
- `styles-v19.css` — responsive art direction and Rajdhani typography
- `script-v5.js` — click-to-load trailer, delayed navigation, keyboard screenshot viewer, and current year
- `assets/campaign/` — optimized official Figma artwork and responsive variants
- `assets/fonts/` — self-hosted Rajdhani Latin subset and OFL license
- `assets/branding/` — existing studio mark and app icon
- `_headers` — Cloudflare Pages security and cache headers

No framework, build step, or runtime dependency. Previous versioned CSS/JS files remain available for older cached HTML. New changes to immutable CSS/JS must use new filenames.

## Local preview

From the repository root:

```powershell
python -m http.server 8080 --directory public
```

Open `http://localhost:8080`. The root page must be served over HTTP for the YouTube player.

## Content and interactions

- The gallery order is screenshot01, screenshot04, screenshot07, conceptart01. Only the last image is concept art; the first three are labeled in-development gameplay.
- Selecting a gallery image opens a native dialog. Escape closes it; arrow keys change images; focus returns to the original image link. Without JavaScript, links open the complete original-resolution WebP.
- The gameplay trailer is `hgC0cigvGh0`. YouTube receives no request until the visitor deliberately selects the local poster. A permanent YouTube link remains available if embedding is blocked. Without JavaScript the poster is a normal YouTube link.
- Steam app 5251280 was not publicly available at the refresh audit. Keep the honest “Steam page coming soon” status until the real store destination works, then add an actual wishlist link.
- Brand source details and transforms are recorded in [docs/website-asset-provenance.md](docs/website-asset-provenance.md). The implementation decision record is [docs/website-brand-refresh.md](docs/website-brand-refresh.md).

## Cloudflare Pages settings

- Production branch: `main`
- Framework preset: `None`
- Build command: leave blank
- Build output directory: `public`
- Root directory: `/`

The existing GitHub-to-Cloudflare integration deploys pushes to `main`. Complete local visual checks and independent review before publishing.

## Domains

- Primary: `https://cozycockpit.com`
- Redirect: `https://www.cozycockpit.com` → `https://cozycockpit.com`

The `www` redirect uses a Cloudflare Redirect Rule; Pages `_redirects` files do not support hostname-level redirects.
