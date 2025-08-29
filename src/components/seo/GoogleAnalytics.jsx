import { useEffect } from 'react';

const GoogleAnalytics = () => {
    useEffect(() => {
        // Google Analytics 4 (GA4) tracking code
        const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 measurement ID

        // Load Google Analytics script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(script);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            window.dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID, {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true
        });

        // Track page views on route changes
        const handleRouteChange = () => {
            gtag('config', GA_MEASUREMENT_ID, {
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: true
            });
        };

        // Listen for route changes (for SPA)
        window.addEventListener('popstate', handleRouteChange);

        // Track custom events
        const trackEvent = (eventName, parameters = {}) => {
            gtag('event', eventName, parameters);
        };

        // Track waitlist signups
        const trackWaitlistSignup = () => {
            trackEvent('waitlist_signup', {
                event_category: 'engagement',
                event_label: 'waitlist_form'
            });
        };

        // Track button clicks
        const trackButtonClicks = () => {
            const buttons = document.querySelectorAll('button, a[href="#"], .cta-button');
            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    const buttonText = button.textContent?.trim() || 'unknown_button';
                    trackEvent('button_click', {
                        event_category: 'engagement',
                        event_label: buttonText,
                        button_text: buttonText
                    });
                });
            });
        };

        // Track form submissions
        const trackFormSubmissions = () => {
            const forms = document.querySelectorAll('form');
            forms.forEach(form => {
                form.addEventListener('submit', () => {
                    trackEvent('form_submit', {
                        event_category: 'engagement',
                        event_label: 'contact_form',
                        form_name: form.getAttribute('name') || 'unknown_form'
                    });
                });
            });
        };

        // Track scroll depth
        const trackScrollDepth = () => {
            let maxScroll = 0;
            const scrollThresholds = [25, 50, 75, 90];

            window.addEventListener('scroll', () => {
                const scrollPercent = Math.round(
                    (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
                );

                scrollThresholds.forEach(threshold => {
                    if (scrollPercent >= threshold && maxScroll < threshold) {
                        maxScroll = threshold;
                        trackEvent('scroll_depth', {
                            event_category: 'engagement',
                            event_label: `${threshold}%_scroll`,
                            scroll_depth: threshold
                        });
                    }
                });
            });
        };

        // Track time on page
        const trackTimeOnPage = () => {
            let startTime = Date.now();

            const trackTime = () => {
                const timeSpent = Math.round((Date.now() - startTime) / 1000);
                trackEvent('time_on_page', {
                    event_category: 'engagement',
                    event_label: 'page_engagement',
                    value: timeSpent
                });
            };

            // Track every 30 seconds
            const interval = setInterval(trackTime, 30000);

            // Clean up on page unload
            return () => clearInterval(interval);
        };

        // Initialize tracking
        setTimeout(() => {
            trackButtonClicks();
            trackFormSubmissions();
            trackScrollDepth();
            trackTimeOnPage();
        }, 1000);

        // Cleanup function
        return () => {
            window.removeEventListener('popstate', handleRouteChange);
        };

    }, []);

    return null;
};

export default GoogleAnalytics;
