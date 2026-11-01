(function () {
    'use strict';
    const C = window.CONTENT;
    if (!C) return;

    const NON_SECTION_KEYS = ['banner', 'header', 'footer', 'not_found', 'not_found_data', 'structured_data', 'compensation'];
    const COOKIE_BUTTON = '<button type="button" class="cookie-floating-btn" data-cc="show-preferencesModal" aria-label="Cookie Settings" title="Cookie Settings">🍪</button>';

    const body = document.body;
    const mainContent = document.getElementById('main-content');
    const page = mainContent ? mainContent.getAttribute('data-page') : null;

    // The deployed HTML is a prerendered snapshot, so each insert checks what is already there.
    function renderSchema() {
        if (!C.structured_data) return;
        if (document.querySelector('script[type="application/ld+json"]')) return;
        document.head.insertAdjacentHTML('beforeend', C.structured_data);
    }

    function renderLayout() {
        renderSchema();
        if (!document.querySelector('.site-nav')) {
            body.insertAdjacentHTML('afterbegin', (C.banner || '') + (C.header || ''));
        }
        if (!document.getElementById('footer')) {
            body.insertAdjacentHTML('beforeend', C.footer || '');
        }
        if (!document.querySelector('.cookie-floating-btn')) {
            body.insertAdjacentHTML('beforeend', COOKIE_BUTTON);
        }
    }

    function renderHome() {
        if (mainContent.children.length) return;
        let html = '';
        for (const key in C) {
            if (NON_SECTION_KEYS.includes(key)) continue;
            html += C[key];
        }
        mainContent.innerHTML = html;
    }

    function render404() {
        mainContent.innerHTML = C.not_found || '';
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.href = '/' + link.getAttribute('href');
        });

        const pages = C.not_found_data || [];
        if (!pages.length) return;

        const pick = pages[Math.floor(Math.random() * pages.length)];
        const gif = document.getElementById('gif');
        const title = document.getElementById('title');
        const message = document.getElementById('message');

        if (gif) {
            gif.src = pick.gif;
            gif.alt = pick.title;
        }
        if (title) title.textContent = pick.title;
        if (message) message.textContent = pick.message;
    }

    function setupCvMenu() {
        const toggle = document.querySelector('.cv-toggle');
        if (!toggle) return;
        const menu = document.getElementById(toggle.getAttribute('aria-controls'));

        const setOpen = open => {
            menu.hidden = !open;
            toggle.setAttribute('aria-expanded', String(open));
        };

        toggle.addEventListener('click', () => setOpen(menu.hidden));
        menu.addEventListener('click', event => {
            if (event.target.closest('a')) setOpen(false);
        });
        document.addEventListener('click', event => {
            if (menu.hidden) return;
            if (event.target.closest('.cv-split')) return;
            setOpen(false);
        });
        document.addEventListener('keydown', event => {
            if (event.key !== 'Escape') return;
            if (menu.hidden) return;
            setOpen(false);
            toggle.focus();
        });
    }

    // Layout maths in CSS pixels, so chart text stays readable at phone width.
    function salaryChart(pay, width) {
        const compact = width < 560;
        const height = compact ? 294 : 340;
        const margin = { top: 16, right: compact ? 12 : 20, bottom: compact ? 68 : 54, left: 44 };
        const plotRight = width - margin.right;
        const plotBottom = height - margin.bottom;
        const startYear = 2016;
        const endYear = 2029;
        const maxPay = 160;

        const x = year => margin.left + (year - startYear) / (endYear - startYear) * (plotRight - margin.left);
        const y = value => plotBottom - value / maxPay * (plotBottom - margin.top);
        const round = value => Math.round(value * 10) / 10;

        const steps = pay.history;
        const last = steps[steps.length - 1];
        const lineEnd = pay.chart_now;
        let path = `M${round(x(steps[0].year))} ${round(y(steps[0].value))}`;
        steps.slice(1).forEach(step => {
            path += `H${round(x(step.year))}V${round(y(step.value))}`;
        });
        path += `H${round(x(lineEnd))}`;

        const grid = [0, 40, 80, 120, 160].map(value => `
            <line class="chart-grid" x1="${margin.left}" x2="${plotRight}" y1="${round(y(value))}" y2="${round(y(value))}"></line>
            <text class="chart-axis" x="${margin.left - 8}" y="${round(y(value)) + 4}" text-anchor="end">£${value}k</text>`).join('');

        const years = [2016, 2019, 2022, 2025, 2028].map(year => `
            <text class="chart-axis" x="${round(x(year))}" y="${plotBottom + 20}" text-anchor="middle">${year}</text>`).join('');

        // Neighbouring employer names collide at phone width, so they alternate between two rows.
        const employers = pay.employers.map((employer, index) => `
            <text class="chart-employer" x="${round(x(employer.year))}" y="${plotBottom + 40 + (compact && index % 2 ? 16 : 0)}">${employer.name}</text>`).join('');

        const marks = steps.map(step => `
            <g class="chart-point">
              <title>${step.label}: £${step.value}k base</title>
              <circle class="chart-hit" cx="${round(x(step.year))}" cy="${round(y(step.value))}" r="14"></circle>
              <circle class="chart-dot" cx="${round(x(step.year))}" cy="${round(y(step.value))}" r="4.5"></circle>
            </g>`).join('');

        // The first point sits against the axis, so its label runs right instead of left.
        const labels = steps.filter(step => step.direct_label).map(step => `
            <text class="chart-value" x="${round(x(step.year)) + (step === steps[0] ? -4 : -6)}" y="${round(y(step.value)) - 10}" text-anchor="${step === steps[0] ? 'start' : 'end'}">£${step.value}k</text>`).join('');

        const targetX = x(pay.target.year);
        const targetWidth = plotRight - targetX;
        const bandX = x(pay.market.year);
        const bandTop = round(y(pay.market.high));

        return `<svg class="chart-svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="chart-title chart-desc">
          <title id="chart-title">Base salary from 2016 to now, and the next step</title>
          <desc id="chart-desc">${pay.chart_summary}</desc>
          <rect class="chart-band" x="${round(bandX)}" y="${round(y(pay.market.high))}" width="${round(plotRight - bandX)}" height="${round(y(pay.market.low) - y(pay.market.high))}"></rect>
          ${grid}${years}${employers}
          ${compact ? '' : `<text class="chart-band-label" x="${plotRight}" y="${bandTop - 6}" text-anchor="end">Public UK Staff posting</text>`}
          <path class="chart-line" d="${path}"></path>
          <path class="chart-next" d="M${round(x(lineEnd))} ${round(y(last.value))}H${round(targetX)}V${round(y(pay.target.high))}"></path>
          <rect class="chart-target" x="${round(targetX)}" y="${round(y(pay.target.high))}" width="${round(targetWidth)}" height="${round(y(pay.target.low) - y(pay.target.high))}">
            <title>Target base: ${pay.target.text}</title>
          </rect>
          ${compact
            ? `<text class="chart-value" x="${plotRight}" y="${bandTop - 6}" text-anchor="end">${pay.target.text}</text>`
            : `<text class="chart-value" x="${round(targetX) + 6}" y="${round(y(pay.target.low)) + 18}">${pay.target.text}</text>`}
          ${marks}${labels}
        </svg>`;
    }

    function payRows(rows) {
        return rows.map(([label, value]) => `<div class="price-row"><dt>${label}</dt><dd>${value}</dd></div>`).join('');
    }

    function payListItems(items) {
        return items.map(item => `<li>${item}</li>`).join('');
    }

    function payTableRows(history) {
        return history.map(step => `<tr><th scope="row">${step.label}</th><td>${step.employer}</td><td>£${step.value}k</td></tr>`).join('');
    }

    function payDialogHtml(pay) {
        return `
          <div class="pay-head">
            <h2 id="pay-title" tabindex="-1">Pay and availability</h2>
            <button type="button" class="pay-close" aria-label="Close pay and availability">Close</button>
          </div>
          <p class="pay-intro">${pay.intro}</p>
          <div class="pay-prices">
            <section aria-labelledby="pay-target">
              <h3 id="pay-target">What I'm looking for</h3>
              <dl class="price-list">${payRows(pay.target_rows)}</dl>
            </section>
            <section aria-labelledby="pay-current">
              <h3 id="pay-current">What I earn now</h3>
              <dl class="price-list">${payRows(pay.current_rows)}</dl>
              <p class="pay-note">${pay.current_note}</p>
            </section>
          </div>
          <p class="pay-equity">${pay.equity_line}</p>
          <h3>Where the next step goes</h3>
          <div class="pay-chart" data-pay-chart></div>
          <p class="pay-note">${pay.chart_note} <a href="${pay.market.url}" target="_blank" rel="noopener noreferrer">${pay.market.text}</a>.</p>
          <details class="pay-numbers">
            <summary>Show the salary figures as a table</summary>
            <table>
              <thead><tr><th scope="col">From</th><th scope="col">Employer</th><th scope="col">Base</th></tr></thead>
              <tbody>${payTableRows(pay.history)}</tbody>
            </table>
          </details>
          <div class="pay-lists">
            <section aria-labelledby="pay-benefits"><h3 id="pay-benefits">Current benefits</h3><ul>${payListItems(pay.benefits)}</ul></section>
            <section aria-labelledby="pay-must"><h3 id="pay-must">Must-haves</h3><ul>${payListItems(pay.must_haves)}</ul></section>
            <section aria-labelledby="pay-no"><h3 id="pay-no">Hard nos</h3><ul>${payListItems(pay.hard_nos)}</ul></section>
          </div>
          <p class="pay-note">${pay.availability} Last updated ${pay.updated}.</p>`;
    }

    function setupPayDialog() {
        const pay = C.compensation;
        if (!pay) return;
        if (page !== 'home') return;

        let dialog = null;
        let openedFromPage = false;

        const drawChart = () => {
            const holder = dialog.querySelector('[data-pay-chart]');
            holder.innerHTML = salaryChart(pay, holder.clientWidth);
        };

        const clearHash = () => {
            if (location.hash !== '#pay') return;
            if (openedFromPage) {
                history.back();
                return;
            }
            history.replaceState(null, '', location.pathname + location.search);
        };

        const buildDialog = () => {
            dialog = document.createElement('dialog');
            dialog.className = 'pay-dialog';
            dialog.setAttribute('aria-labelledby', 'pay-title');
            dialog.innerHTML = `<div class="pay-body">${payDialogHtml(pay)}</div>`;
            body.appendChild(dialog);

            dialog.querySelector('.pay-close').addEventListener('click', () => dialog.close());
            dialog.addEventListener('click', event => {
                if (event.target === dialog) dialog.close();
            });
            dialog.addEventListener('close', clearHash);
        };

        const openDialog = () => {
            if (document.documentElement.classList.contains('show--preferences')) {
                window.addEventListener('cc:onModalHide', syncWithHash, { once: true });
                return;
            }
            if (!dialog) buildDialog();
            if (dialog.open) return;
            dialog.showModal();
            drawChart();
            dialog.querySelector('#pay-title').focus();
        };

        const syncWithHash = () => {
            if (location.hash === '#pay') {
                openDialog();
                return;
            }
            if (dialog?.open) dialog.close();
        };

        document.addEventListener('click', event => {
            if (event.target.closest('a[href="#pay"]')) openedFromPage = true;
        });
        window.addEventListener('hashchange', syncWithHash);
        window.addEventListener('resize', () => {
            if (dialog?.open) drawChart();
        });
        syncWithHash();
    }

    function setupImageZoom() {
        if (page !== 'home') return;

        const zoomable = '.before-after img, .project-thumb';
        const maxZoom = 2;
        let dialog = null;

        document.querySelectorAll(zoomable).forEach(img => {
            img.setAttribute('tabindex', '0');
            img.setAttribute('role', 'button');
            img.setAttribute('aria-label', `Zoom image: ${img.alt}`);
        });

        const buildDialog = () => {
            dialog = document.createElement('dialog');
            dialog.className = 'image-dialog';
            dialog.setAttribute('aria-label', 'Zoomed image');
            dialog.innerHTML = `
              <button type="button" class="pay-close image-close">Close</button>
              <img class="image-zoomed" alt="">
              <p class="image-caption"></p>`;
            body.appendChild(dialog);
            dialog.addEventListener('click', event => {
                if (event.target.closest('.image-caption')) return;
                dialog.close();
            });
        };

        const openZoom = source => {
            if (!dialog) buildDialog();
            const zoomed = dialog.querySelector('.image-zoomed');
            zoomed.src = source.currentSrc || source.src;
            zoomed.alt = source.alt;
            zoomed.style.width = `${source.getAttribute('width') * maxZoom}px`;
            const caption = source.closest('figure')?.querySelector('figcaption')?.textContent;
            dialog.querySelector('.image-caption').textContent = caption || source.alt;
            dialog.showModal();
            dialog.querySelector('.image-close').focus();
        };

        document.addEventListener('click', event => {
            const source = event.target.closest(zoomable);
            if (!source) return;
            openZoom(source);
        });

        document.addEventListener('keydown', event => {
            const source = event.target.closest(zoomable);
            if (!source) return;
            if (event.key !== 'Enter' && event.key !== ' ') return;
            event.preventDefault();
            if (event.key !== 'Enter') return;
            if (event.repeat) return;
            openZoom(source);
        });

        // Space opens on release, so its key-up can't reach the focused Close button.
        document.addEventListener('keyup', event => {
            const source = event.target.closest(zoomable);
            if (!source) return;
            if (event.key !== ' ') return;
            openZoom(source);
        });
    }

    renderLayout();
    if (page === 'home') renderHome();
    if (page === '404') render404();
    setupCvMenu();
    setupPayDialog();
    setupImageZoom();

    document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
})();
