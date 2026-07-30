window.addEventListener('load', function() {
    if (typeof CookieConsent === 'undefined') return;

    CookieConsent.run({
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
            analytics: {}
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
                        savePreferencesBtn: "Save Preferences",
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
        onAccept: function() {
            if (typeof gtag === 'function') {
                gtag('consent', 'update', {
                    'analytics_storage': CookieConsent.acceptedCategory('analytics') ? 'granted' : 'denied'
                });
            }
        },
        onChange: function() {
            if (typeof gtag === 'function') {
                gtag('consent', 'update', {
                    'analytics_storage': CookieConsent.acceptedCategory('analytics') ? 'granted' : 'denied'
                });
            }
        }
    });
});
