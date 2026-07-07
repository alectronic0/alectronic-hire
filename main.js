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
