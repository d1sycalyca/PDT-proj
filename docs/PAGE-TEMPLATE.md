# Internal page pattern

Copy `website/what-we-do.html` when starting the next page. Keep HTML pages
directly in `website/` and browser assets grouped by type in `website/assets/`.

1. Set a unique title, description, and one main `h1` in `.page-hero`.
2. Replace only the main content with the page's sections. Reuse `.container`,
   `.section`, `.section-header`, `.grid`, `.card`, and `.cta-banner`.
3. Give sections descriptive heading IDs and matching `aria-labelledby` values.
4. Keep the same header/footer and navigation order on every page. Mark only
   the current primary link with `class="active" aria-current="page"`.
5. Keep `assets/js/navigation.js` loaded with `defer`. It enables the mobile menu;
   without JavaScript, navigation links stay visible.
6. Add the new destination to all headers and footer navigation once it exists.
7. Check narrow phone, tablet, desktop, keyboard focus, and links before merging.

Next destinations: `our-partners.html`, `work-with-us.html`.
`our-homes.html` currently uses an enquiry notice until approved listings arrive.
Reuse its compact header and footer on future pages. The mobile menu breakpoint
is 1100px in both `assets/css/styles.css` and `assets/js/navigation.js`; keep those in sync.
Keep property and partner information genuine and coordinate wording with Tomiwa.
Do not assume Work With Us means recruitment until its purpose is confirmed.
