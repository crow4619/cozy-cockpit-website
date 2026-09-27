# Website refinement — September 27, 2026

The hero now opens at full viewport height without a visible header. A compact fixed navigation appears as the hero leaves the viewport, with a subtle 180ms fade and 8px movement. Returning to the top hides it again. Hidden navigation is inert and removed from the accessibility tree. Reduced-motion preferences disable transitions. All three links remain available down to 320px.

The definitive tagline remains COZY FLIGHTS. CURIOUS SIGHTS. Secondary slogans and repeated kickers were removed. Sections now use Trailer, Screenshots, and Follow along. Gallery supporting copy is A few sights from the journey. The trailer retains the concrete premise: The plane flies itself. You take in the scenery.

Screenshot07 replaces Screenshot03 in the third gallery position. Its original 2556×1439 Figma image is exported without cropping at 800/1600/2556px using the existing WebP quality83 standard. Source: Figma85:2928. Alt text and lightbox caption describe the cockpit interior. Concept art remains explicitly labeled, with the descriptive caption Tropical islands.

## Verification

- Visual review: 1920×1080, 1366×900, 768×1024, 390×844, 320×740.
- Header hidden at top; all navigation links visible after the hero; anchor targets remain unobscured; return-to-top hides header again.
- Gallery opens the full Screenshot07 asset and closes with Escape.
- No horizontal overflow or JavaScript errors in the five viewport checks.
- Independent reviewer accepted after correcting the exact trailer-anchor reveal boundary and a mobile background seam. Chromium, Firefox, and WebKit checks passed, including direct hero CTA, keyboard navigation, and reduced motion.
- Static references and JavaScript syntax checked. New immutable versions: styles-v19.css and script-v5.js. Earlier versions remain available for cached pages.

Detailed local verification artifacts are in work/refinement/.
