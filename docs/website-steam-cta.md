# Steam wishlist CTA — September 28, 2026

Verified public storefront: https://store.steampowered.com/app/5251280/Cozy_Cockpit/. Browser response200, title Cozy Cockpit on Steam, developer MR FUTURE GAMES, release date To be announced, and an Add to your wishlist action. No release date or purchase availability is claimed on the website.

## Reference review and layout decision

Official sources inspected:

- [Wanderstop](https://www.wanderstopgame.com/): wishlist announcement at the top and prominent platform links alongside opening media. Browser rendering inspected.
- [Witchbrook](https://www.witchbrook.com/): store/platform links integrated into the opening artwork, trailer nearby, and Steam repeated in platform information. Browser rendering inspected.
- [A Short Hike](https://ashorthike.com/): concise premise and trailer followed by explicit platform/store links. Official page content inspected.

These are design references, not evidence of measured conversion gains. For Cozy Cockpit, the primary orange hero button is now Wishlist on Steam. Watch trailer stays alongside as a lower-emphasis text action; the pair stacks on phones. Two actions keep the hierarchy clear. Screenshot navigation remains in the delayed header.

A second wishlist button replaces the stale Steam page coming soon text in the community section immediately after the gallery. Visitors can act before or after viewing the game without additional banners, slogan copy, embedded widgets, or a crowded mobile header. The tagline, official artwork, trailer, and gallery remain unchanged.

Both CTAs are ordinary links to the verified storefront and work without JavaScript. They do not submit a wishlist action on the visitor's behalf. The existing button colors, focus outline, typography, and touch sizing are retained. No new dependency, third-party embed, tracking script, or artwork is required.

## Verification

Desktop1920×1080, laptop1366×900, tablet768×1024, phone390×844, narrow320×740: CTA fit, no horizontal overflow or JavaScript errors, both link destinations, focusability, direct trailer anchor, delayed navigation, and return to top checked. Clicked the actual primary CTA and confirmed it reaches Cozy Cockpit on Steam.

New immutable CSS filename styles-v20.css avoids serving cached styles-v19.css. JavaScript is unchanged. Local rendered evidence and checks are in work/steam-cta/.

Independent review accepted with no actionable issues: Chromium desktop/tablet/mobile and Firefox/WebKit phone checks passed, including visible focus, CTA/artwork separation, direct trailer anchors, and delayed navigation.
