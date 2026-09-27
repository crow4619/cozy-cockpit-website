# Website brand refresh — audit and Builder authorization

## Scope and baseline
User-authorized website-only presentation refresh, 2026-09-26. Baseline 2bc0190. Static HTML/CSS/JS; no framework or build dependency. No website AGENTS.md. Existing untracked mrfuture-games/ and .codex-remote-attachments/ are unrelated and must remain untouched. Game repository is read-only reference; its active gameplay transaction is separate and excluded.

## Audit and research
Live desktop/mobile rendered before implementation. Old wordmark, serif headings, muted gradient sections, excessive vertical gaps and tiny labels dilute the current game identity. Hero has no useful CTA; development copy repeats itself. Existing native dialog and semantic structure are useful. CSS v17 and JS v3 are immutable, requiring new names. Hero PNG is 1.27 MB.
Official reference sites inspected: https://ashorthike.com/ (plain premise then trailer), https://www.somethingwemade.se/toem/ (art and player actions), https://www.firewatchgame.com/ (coherent campaign art, footage, concise story, studio footer). Borrow hierarchy, not appearance/parallax.
Steam main app 5251280 is documented but currently redirects to Steam home and returns success:false from appdetails. Do not publish a nonfunctional wishlist CTA. Primary action is Watch trailer. No invented release date.

## Figma source and direction
https://www.figma.com/design/0XBuQIbeqa3bRRWf7TSWkS/Cozy-Cockpit?node-id=0-1
Inspected full page structure, current campaign assets, screenshot source nodes, old archive, title-screen text properties and studio page structure. Current system: slanted white/royal-blue wordmark with cyan wing bars, orange airplane details, yellow tagline, deep blue night landscape and cloud layering. Current menu font Rajdhani. Banner01 and Main Capsule agree; archive/old landingpage are explicitly older. Three trailer poster alternatives exist; choose night thumbnail01 to match night campaign, an editorial choice rather than a claimed recency.

## Implementation plan / Builder authorization
One Builder owns public/ changes and README. Implement new styles-v18.css and script-v4.js, update HTML and headers. Preserve old cached files. Download official asset bytes from Figma design-context URLs, optimize as WebP (lossless transparent logo where suitable), responsive variants, document provenance. No generated imagery.
Compose responsive hero from actual logo, night background, aircraft and clouds, with accessible live-text tagline COZY FLIGHTS. CURIOUS SIGHTS. Use bold artwork, restrained rectangular controls, thin cyan rules, dark navy surfaces, no generic cards or excessive motion. Recompose freely for phones without squashing logo or clipping aircraft. Use Rajdhani self-hosted with OFL if available, system sans body fallback.
Short premise supported by game PROJECT_OVERVIEW: aircraft flies itself; player observes scenery and follows curiosities. No sim or progression claims. Trailer near top: hgC0cigvGh0, local official poster, click-to-load youtube-nocookie, reserved ratio, visible YouTube fallback and keyboard access. No autoplay before deliberate action.
Gallery exact order Screenshot01 (75:1775), Screenshot04 (75:1778), Screenshot03 (75:1777), conceptart01 (79:413). Preserve full image content, label last Concept art and first three In-development gameplay. Accessible keyboard dialog, alt text and captions. Compact useful footer, real existing social destinations, honest in-development/Steam page coming soon text. Update metadata to current campaign image.

## Verification and publication gate
Check large desktop 1920, laptop 1366/1440, tablet 768, phone 390 plus narrow 320. Actual screenshots, all images loaded, no overflow, keyboard navigation/dialog focus return, trailer privacy/load/ratio/fallback, no broken local assets or JS errors, reduced motion, contrast and no-JS fallback. Independent Reviewer must inspect source and rendered results, corrections by Builder. Static site has no build step; verify served public artifacts. Only after review and preview, publish through documented main-to-Cloudflare integration and verify live bytes/domain. Orchestrator owns publication. Do not touch game or mrfuture-games.
