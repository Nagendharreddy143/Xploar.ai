import { useEffect } from 'react';

const ContactPageSEO = () => {
    useEffect(() => {
        // Update document title
        document.title = "Contact Xploar.ai - Get in Touch | AI Learning Platform Support";

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', "Contact Xploar.ai for support, partnerships, or inquiries. Get in touch with our team for AI-powered learning platform assistance and collaboration opportunities.");
        }

        // Update canonical URL
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', "https://xploar.ai/contact");
        }

        // Add structured data
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Xploar.ai",
            "description": "Contact page for Xploar.ai - AI-powered learning platform",
            "url": "https://xploar.ai/contact",
            "mainEntity": {
                "@type": "Organization",
                "name": "Xploar.ai",
                "contactPoint": [
                    {
                        "@type": "ContactPoint",
                        "contactType": "customer service",
                        "email": "support@xploar.ai",
                        "availableLanguage": "English"
                    },
                    {
                        "@type": "ContactPoint",
                        "contactType": "business",
                        "email": "partnerships@xploar.ai",
                        "availableLanguage": "English"
                    },
                    {
                        "@type": "ContactPoint",
                        "contactType": "media",
                        "email": "media@xploar.ai",
                        "availableLanguage": "English"
                    }
                ],
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Hyderabad",
                    "addressRegion": "Telangana",
                    "addressCountry": "IN"
                }
            }
        };

        // Remove existing structured data
        const existingScript = document.querySelector('script[type="application/ld+json"]');
        if (existingScript) {
            existingScript.remove();
        }

        // Add new structured data
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);

        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', "Contact Xploar.ai - Get in Touch | AI Learning Platform Support");
        }

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute('content', "Contact Xploar.ai for support, partnerships, or inquiries. Get in touch with our team for AI-powered learning platform assistance and collaboration opportunities.");
        }

        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) {
            ogUrl.setAttribute('content', "https://xploar.ai/contact");
        }

        // Update Twitter tags
        const twitterTitle = document.querySelector('meta[property="twitter:title"]');
        if (twitterTitle) {
            twitterTitle.setAttribute('content', "Contact Xploar.ai - Get in Touch | AI Learning Platform Support");
        }

        const twitterDescription = document.querySelector('meta[property="twitter:description"]');
        if (twitterDescription) {
            twitterDescription.setAttribute('content', "Contact Xploar.ai for support, partnerships, or inquiries. Get in touch with our team for AI-powered learning platform assistance and collaboration opportunities.");
        }

        const twitterUrl = document.querySelector('meta[property="twitter:url"]');
        if (twitterUrl) {
            twitterUrl.setAttribute('content', "https://xploar.ai/contact");
        }

    }, []);

    return null; // This component doesn't render anything
};

export default ContactPageSEO;
