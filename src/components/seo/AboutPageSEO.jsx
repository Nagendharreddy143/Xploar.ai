import { useEffect } from 'react';

const AboutPageSEO = () => {
    useEffect(() => {
        // Update document title
        document.title = "About Xploar.ai - Our Mission, Vision & Core Values | AI Learning Platform";

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', "Discover Xploar.ai's mission to empower learners worldwide through AI-powered education. Learn about our vision, core values, and commitment to fearless learning.");
        }

        // Update canonical URL
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', "https://xploar.ai/about");
        }

        // Add structured data
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Xploar.ai",
            "description": "AI-powered learning platform that empowers learners worldwide to explore, personalize, and master knowledge through adaptive AI tools.",
            "url": "https://xploar.ai",
            "logo": "https://xploar.ai/logo-xploar.svg",
            "sameAs": [
                "https://twitter.com/xploarai",
                "https://linkedin.com/company/xploar-ai"
            ],
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "addressCountry": "IN"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "support@xploar.ai"
            },
            "foundingDate": "2024",
            "mission": "To become the world's most intelligent and exploratory learning platform where curiosity meets clarity, and AI becomes your lifelong learning partner."
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
            ogTitle.setAttribute('content', "About Xploar.ai - Our Mission, Vision & Core Values | AI Learning Platform");
        }

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute('content', "Discover Xploar.ai's mission to empower learners worldwide through AI-powered education. Learn about our vision, core values, and commitment to fearless learning.");
        }

        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) {
            ogUrl.setAttribute('content', "https://xploar.ai/about");
        }

        // Update Twitter tags
        const twitterTitle = document.querySelector('meta[property="twitter:title"]');
        if (twitterTitle) {
            twitterTitle.setAttribute('content', "About Xploar.ai - Our Mission, Vision & Core Values | AI Learning Platform");
        }

        const twitterDescription = document.querySelector('meta[property="twitter:description"]');
        if (twitterDescription) {
            twitterDescription.setAttribute('content', "Discover Xploar.ai's mission to empower learners worldwide through AI-powered education. Learn about our vision, core values, and commitment to fearless learning.");
        }

        const twitterUrl = document.querySelector('meta[property="twitter:url"]');
        if (twitterUrl) {
            twitterUrl.setAttribute('content', "https://xploar.ai/about");
        }

    }, []);

    return null; // This component doesn't render anything
};

export default AboutPageSEO;
