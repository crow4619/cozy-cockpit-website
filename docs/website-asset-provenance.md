# Website asset provenance — 2026-09-26 refresh

Primary design source: [Cozy Cockpit Figma board](https://www.figma.com/design/0XBuQIbeqa3bRRWf7TSWkS/Cozy-Cockpit?node-id=0-1). The orchestrator inspected the board, current Banner01/Main Capsule, title menu typography and old archive before selecting this direction. All game imagery is existing official project art; none is generated or substituted.

## Campaign assets

Assets were retrieved as original image bytes through Figma `get_design_context`, not captured from the Figma interface. The durable Figma node links below identify each source; the committed optimized assets are the website copies.

| Output prefix in `public/assets/campaign/` | Source | Transformation |
| --- | --- | --- |
| `logo-*` | [Logo (79:404)](https://www.figma.com/design/0XBuQIbeqa3bRRWf7TSWkS/Cozy-Cockpit?node-id=79-404) | Transparent-only bounding-box crop (55,123)–(2133,626); lossless WebP at 800/1400px |
| `landscape-*` | [Landscape (79:487)](https://www.figma.com/design/0XBuQIbeqa3bRRWf7TSWkS/Cozy-Cockpit?node-id=79-487) | Full image WebP 1100/2170px, quality 83 |
| `clouds-*` | [Clouds (79:488)](https://www.figma.com/design/0XBuQIbeqa3bRRWf7TSWkS/Cozy-Cockpit?node-id=79-488) | Full transparent image WebP 1100/2170px, quality 83 |
| `aircraft-*` | [Aircraft (79:493)](https://www.figma.com/design/0XBuQIbeqa3bRRWf7TSWkS/Cozy-Cockpit?node-id=79-493) | Transparent-only bounding-box crop (44,121)–(1747,708); WebP 800/1600px, quality 83 |
| `trailer-*`, `social.jpg` | [Night thumbnail01 (79:515)](https://www.figma.com/design/0XBuQIbeqa3bRRWf7TSWkS/Cozy-Cockpit?node-id=79-515) | Complete night thumbnail01 at 800/1672px WebP; 1672×941 JPEG for social metadata |

The hero is a website-specific recomposition of these source layers. The exact campaign tagline is live text: **COZY FLIGHTS. CURIOUS SIGHTS.** The official trailer artwork already contains a play/button treatment; the complete poster acts as the play link with no duplicate play glyph drawn on top. The selected video is the user-requested `https://youtu.be/hgC0cigvGh0`.

## Gallery in required order

| Position | Figma node / source | Output / label |
| --- | --- | --- |
| 1 | [screenshot01 (75:1775)](https://www.figma.com/design/0XBuQIbeqa3bRRWf7TSWkS/Cozy-Cockpit?node-id=75-1775) | `screenshot01-*`, Through the clouds — In-development gameplay |
| 2 | [screenshot04 (75:1778)](https://www.figma.com/design/0XBuQIbeqa3bRRWf7TSWkS/Cozy-Cockpit?node-id=75-1778) | `screenshot04-*`, Under a moonlit sky — In-development gameplay |
| 3 | [screenshot03 (75:1777)](https://www.figma.com/design/0XBuQIbeqa3bRRWf7TSWkS/Cozy-Cockpit?node-id=75-1777) | `screenshot03-*`, After dark — In-development gameplay |
| 4 | [conceptart01 (79:413)](https://www.figma.com/design/0XBuQIbeqa3bRRWf7TSWkS/Cozy-Cockpit?node-id=79-413) | `conceptart01-*`, An island daydream — Concept art |

Gallery source dimensions: first three 2556×1439, concept 1672×941. All source image content, including slight source frame bleed, remains intact. WebP quality 83 with 800px previews and full-size viewing links. First three also have 1600px variants. CSS uses natural ratios, never crops gallery imagery. Alt text describes the inspected image content.

## Typography and existing branding

Rajdhani Semibold (600) matches the current Figma title menu. Official font source: `https://raw.githubusercontent.com/google/fonts/main/ofl/rajdhani/Rajdhani-SemiBold.ttf`. SIL Open Font License copied from the same directory as `public/assets/fonts/OFL.txt`. FontTools creates the local 37KB Latin TTF subset including Latin-1, general punctuation, arrows and the play symbol; the complete font is not shipped. Self-hosting avoids external font requests. Body text uses the visitor's system sans-serif.

Existing app icon/favicon and the studio's four SVG wordmark pieces are retained. Social links continue to use the original studio destinations. No invented awards, release dates, store availability, or additional game-feature claims were added.
