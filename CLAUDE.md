# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML website for a Forex trading platform (Forex Signal). No build system or package manager — all dependencies are loaded via CDN.

## Development

**To preview the site:** Open any `.html` file directly in a browser, or use a local server:
```
python3 -m http.server 8000
```

**To compile SCSS:** The project uses SCSS source files that compile to `assets/css/main.css`. Use any SCSS compiler (e.g., the VS Code "Live Sass Compiler" extension, or the CLI):
```
sass assets/scss/main.scss assets/css/main.css --watch
```

## Architecture

### Pages
Five standalone HTML pages: `index.html` (home), `about.html`, `blog.html`, `blog-details.html`, `contact.html`. Each is self-contained and shares the same header/footer structure.

### Styling
- **Source:** `assets/scss/` — modular SCSS with a master `main.scss` that imports all partials
- **Compiled output:** `assets/css/main.css` — edit the SCSS, not the CSS directly
- **Design tokens:** `assets/scss/theme/_variables.scss` — primary color `#F47E37` (orange), secondary `#F7C301` (yellow), black background, white text
- **Responsive breakpoints:** Primary at 1199px (desktop↔mobile nav switch); secondary at 1440px and 1680px

### JavaScript
- `assets/js/main.js` — jQuery initialization: WOW.js scroll animations, counterUp counters, Slick carousel for testimonials
- All libraries (Bootstrap 5.3.3, jQuery, Slick, WOW.js, Font Awesome 6.5.1) loaded via CDN

### Key CSS Classes
- `.primary-btn`, `.secondary-btn`, `.bordered-btn` — button variants
- `.specialty-card` — dark gradient card with borders
- `.section-title` — large section headings
- `.section-gap` — consistent 100px section padding
- Navigation hides at <1199px and switches to Bootstrap offcanvas mobile nav
