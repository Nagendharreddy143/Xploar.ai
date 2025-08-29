import { useEffect } from 'react';

const HomePageSEO = () => {
    useEffect(() => {
        // Update document title with brand focus
        document.title = "Xploar.ai - AI-Powered Learning Platform | UPSC Preparation | Explore. Learn. Become.";

        // Update meta description with brand keywords
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', "Xploar.ai - The leading AI-powered learning platform for UPSC preparation. Personalized AI tutor, adaptive learning, and comprehensive study materials. Join thousands of aspirants achieving success with Xploar.ai.");
        }

        // Add comprehensive keywords including brand name
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', "xploar.ai, xploar, AI learning platform, UPSC preparation, AI tutor, adaptive learning, online education, study planner, AI-powered learning, competitive exams, civil services, UPSC foundation, personalized education, Xploar AI platform");

        // Update canonical URL
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', "https://xploar.ai/");
        }

        // Enhanced structured data with brand focus
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Xploar.ai",
            "alternateName": "Xploar",
            "description": "Xploar.ai is the leading AI-powered learning platform that empowers UPSC aspirants with personalized AI tutors, adaptive learning algorithms, and comprehensive study materials.",
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
                "description": "Xploar.ai offers AI-powered learning platform with personalized UPSC preparation tools",
                "category": "Educational Technology",
                "brand": "Xploar.ai"
            },
            "foundingDate": "2024",
            "slogan": "Explore. Learn. Become.",
            "knowsAbout": [
                "UPSC Preparation",
                "AI-Powered Learning",
                "Adaptive Education",
                "Competitive Exam Coaching",
                "Personalized Learning"
            ]
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

        // Update Open Graph tags with brand focus
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', "Xploar.ai - AI-Powered Learning Platform | UPSC Preparation | Explore. Learn. Become.");
        }

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute('content', "Xploar.ai - The leading AI-powered learning platform for UPSC preparation. Personalized AI tutor, adaptive learning, and comprehensive study materials.");
        }

        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) {
            ogUrl.setAttribute('content', "https://xploar.ai/");
        }

        // Update Twitter tags
        const twitterTitle = document.querySelector('meta[property="twitter:title"]');
        if (twitterTitle) {
            twitterTitle.setAttribute('content', "Xploar.ai - AI-Powered Learning Platform | UPSC Preparation");
        }

        const twitterDescription = document.querySelector('meta[property="twitter:description"]');
        if (twitterDescription) {
            twitterDescription.setAttribute('content', "Xploar.ai - The leading AI-powered learning platform for UPSC preparation. Personalized AI tutor, adaptive learning, and comprehensive study materials.");
        }

        const twitterUrl = document.querySelector('meta[property="twitter:url"]');
        if (twitterUrl) {
            twitterUrl.setAttribute('content', "https://xploar.ai/");
        }

        // Add Google Search Console verification placeholder
        let googleVerification = document.querySelector('meta[name="google-site-verification"]');
        if (!googleVerification) {
            googleVerification = document.createElement('meta');
            googleVerification.name = 'google-site-verification';
            googleVerification.content = 'YOUR_GOOGLE_VERIFICATION_CODE'; // Replace with actual code
            document.head.appendChild(googleVerification);
        }

        // Add additional brand-focused meta tags
        const additionalMetaTags = [
            { name: 'author', content: 'Xploar.ai' },
            { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
            { name: 'language', content: 'English' },
            { name: 'revisit-after', content: '7 days' },
            { name: 'rating', content: 'General' },
            { name: 'distribution', content: 'Global' }
        ];

        additionalMetaTags.forEach(tag => {
            let existingTag = document.querySelector(`meta[name="${tag.name}"]`);
            if (!existingTag) {
                existingTag = document.createElement('meta');
                existingTag.name = tag.name;
                existingTag.content = tag.content;
                document.head.appendChild(existingTag);
            }
        });

    }, []);

    return null;
};

export default HomePageSEO;
