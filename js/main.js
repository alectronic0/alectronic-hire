(function () {
    'use strict';
    const C = window.CONTENT;
    const body = document.body;
    if (C) {
        let html = '';
        for (const key in C) {
            html += C[key];
        }
        html += '<button type="button" class="cookie-floating-btn" data-cc="show-preferencesModal" aria-label="Cookie Settings" title="Cookie Settings">🍪</button>';
        body.innerHTML = html;
    }
})();
document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
