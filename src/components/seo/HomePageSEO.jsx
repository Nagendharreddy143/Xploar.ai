import { useEffect } from 'react';

const HomePageSEO = () => {
    useEffect(() => {
        // Update document title
        document.title = "Xploar.ai - AI-Powered Learning Platform | Explore. Learn. Become.";

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', "Xploar.ai empowers learners worldwide with AI-powered tools that adapt to individual curiosity and learning styles. From early education to elite exam preparation, explore fearless learning.");
        }

        // Update canonical URL
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', "https://xploar.ai/");
        }

        // Add structured data
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
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
            "offers": {
                "@type": "Offer",
                "description": "AI-powered learning platform with personalized education tools",
                "category": "Educational Technology"
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
            ogTitle.setAttribute('content', "Xploar.ai - AI-Powered Learning Platform | Explore. Learn. Become.");
        }

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute('content', "Xploar.ai empowers learners worldwide with AI-powered tools that adapt to individual curiosity and learning styles. From early education to elite exam preparation, explore fearless learning.");
        }

        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) {
            ogUrl.setAttribute('content', "https://xploar.ai/");
        }

        // Update Twitter tags
        const twitterTitle = document.querySelector('meta[property="twitter:title"]');
        if (twitterTitle) {
            twitterTitle.setAttribute('content', "Xploar.ai - AI-Powered Learning Platform | Explore. Learn. Become.");
        }

        const twitterDescription = document.querySelector('meta[property="twitter:description"]');
        if (twitterDescription) {
            twitterDescription.setAttribute('content', "Xploar.ai empowers learners worldwide with AI-powered tools that adapt to individual curiosity and learning styles. From early education to elite exam preparation, explore fearless learning.");
        }

        const twitterUrl = document.querySelector('meta[property="twitter:url"]');
        if (twitterUrl) {
            twitterUrl.setAttribute('content', "https://xploar.ai/");
        }

    }, []);

    return null; // This component doesn't render anything
};

export default HomePageSEO;
