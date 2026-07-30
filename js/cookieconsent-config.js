window.addEventListener('load', function() {
    if (typeof CookieConsent === 'undefined') return;

    function handleConsentUpdate() {
        const analyticsAccepted = CookieConsent.acceptedCategory('analytics');

        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'analytics_storage': analyticsAccepted ? 'granted' : 'denied'
            });
        }

        if (!analyticsAccepted) {
            const cookies = document.cookie.split(';');
            const domain = window.location.hostname;
            const parts = domain.split('.');
            const rootDomain = parts.length > 1 ? parts.slice(-2).join('.') : domain;

            cookies.forEach(function(c) {
                const name = c.split('=')[0].trim();
                if (name.startsWith('_ga') || name.startsWith('_gid') || name.startsWith('_gat')) {
                    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.' + domain + ';';
                    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.' + rootDomain + ';';
                }
            });
        }
    }

    CookieConsent.run({
        autoClearCookies: true,
        guiOptions: {
            consentModal: {
                layout: 'box',
                position: 'bottom right',
                equalWeightButtons: true,
                flipButtons: false
            },
            preferencesModal: {
                layout: 'box',
                position: 'right',
                equalWeightButtons: true,
                flipButtons: false
            }
        },
        categories: {
            necessary: {
                readOnly: true
            },
            analytics: {
                autoClear: {
                    cookies: [
                        { name: /^(_ga|_gid|_gat|_ga_.*)/ }
                    ]
                }
            }
        },
        language: {
            default: 'en',
            translations: {
                en: {
                    consentModal: {
                        title: "We value your privacy 🍪",
                        description: "We use cookies to analyze site traffic and improve your browsing experience. You can manage your preferences or accept all cookies.",
                        acceptAllBtn: "Accept All",
                        acceptNecessaryBtn: "Reject Non-Essential",
                        showPreferencesBtn: "Cookie Preferences"
                    },
                    preferencesModal: {
                        title: "Cookie Preferences",
                        acceptAllBtn: "Accept All",
                        acceptNecessaryBtn: "Reject Non-Essential",
                        closeIconLabel: "Close",
                        sections: [
                            {
                                title: "Cookie Usage",
                                description: "We use cookies to ensure basic website functionality and analyze anonymous site performance."
                            },
                            {
                                title: "Strictly Necessary Cookies",
                                description: "Essential for the website to function properly and cannot be disabled.",
                                category: "necessary"
                            },
                            {
                                title: "Performance & Analytics Cookies",
                                description: "Helps us understand how visitors interact with the website through anonymous usage statistics.",
                                category: "analytics"
                            }
                        ]
                    }
                }
            }
        },
        onAccept: handleConsentUpdate,
        onChange: handleConsentUpdate
    });
});
