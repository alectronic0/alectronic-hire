(function () {
    'use strict';
    const C = window.CONTENT;
    if (!C) return;
    
    const body = document.body;
    const mainContent = document.getElementById('main-content');
    const page = mainContent ? mainContent.getAttribute('data-page') : null;

    // Inject structured data into head
    if (C.structured_data) {
        document.head.insertAdjacentHTML('beforeend', C.structured_data);
    }

    // Inject header
    body.insertAdjacentHTML('afterbegin', (C.banner || '') + (C.header || ''));
    
    if (mainContent) {
        if (page === 'home') {
            let html = '';
            for (const key in C) {
                if (['banner', 'header', 'footer', 'not_found', 'not_found_data', 'structured_data'].includes(key)) continue;
                html += C[key];
            }
            mainContent.innerHTML = html;
        } else if (page === '404') {
            mainContent.innerHTML = C.not_found || '';
            
            // 404 logic
            if (C.not_found_data && C.not_found_data.length > 0) {
                const pick = C.not_found_data[Math.floor(Math.random() * C.not_found_data.length)];
                const gif = document.getElementById("gif");
                const title = document.getElementById("title");
                const message = document.getElementById("message");
                
                if (gif) {
                    gif.src = pick.gif;
                    gif.alt = pick.title;
                }
                if (title) title.textContent = pick.title;
                if (message) message.textContent = pick.message;
            }
        }
    }
    
    // Inject footer
    body.insertAdjacentHTML('beforeend', (C.footer || '') + '<button type="button" class="cookie-floating-btn" data-cc="show-preferencesModal" aria-label="Cookie Settings" title="Cookie Settings">🍪</button>');
    
    document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
})();
