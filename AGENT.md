# Site Architecture & Developer Notes

## MVC Architecture
This static site relies on a client-side MVC (Model-View-Controller) architecture to avoid duplicating HTML across multiple pages:
- **Model (`js/content.js`)**: Acts as the single source of truth for site content and data. It contains raw HTML strings and data objects (e.g. 404 page configurations) assigned to `window.CONTENT`.
- **View (`index.html`, `404.html`)**: The HTML files contain minimal structure. They only host the `<main id="main-content" data-page="...">` container, metadata, and asset imports. 
- **Controller (`js/app.js`)**: The main script that dynamically injects the layout (`<header>`, `<footer>`, and the cookie button) into the `<body>`. It reads the `data-page` attribute from `<main>` to decide which specific content blocks or logic to load from the Model.

## Unified Cookie Consent Strategy
The site uses Vanilla CookieConsent. To ensure consistency and reduce HTTP requests:
- **`js/cookie.js`**: Consolidates both the core cookieconsent library (`cookieconsent.umd.js`) and the configuration logic (`cookieconsent-config.js`).
- **`css/style.css`**: Contains the combined styling for the site, including the cookie consent UI and custom page styles.
HTML pages simply import `cookie.js` and `style.css` to enable full consent management. The persistent cookie settings button is injected dynamically by the Controller.

## JS-Injected Layout Rules
- **Header & Footer**: Automatically prepended and appended to the `<body>` by `js/app.js`, so you don't need to manually duplicate them across HTML pages.
- **Dynamic Content Loading**: The `<main>` container uses `data-page` (`home`, `404`, etc.). `app.js` checks this attribute to determine what to render (e.g. iterating over all sections for the homepage, or running random GIF logic for the 404 page).

## Site-Specific Quirks
- The `404.html` page relies on the `not_found_data` array within `js/content.js` to pick a random GIF and text combination.
- Be careful not to put hardcoded text or data directly into the `.html` files, as the Controller replaces the inner HTML of the `<main>` container based on the Model.
