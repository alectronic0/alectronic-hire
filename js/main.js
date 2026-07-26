(function () {
    'use strict';
    const C = window.CONTENT;
    const body = document.body;
    if (C) {
        let html = '';
        for (const key in C) {
            html += C[key];
        }
        body.innerHTML = html;
    }
})();
document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
