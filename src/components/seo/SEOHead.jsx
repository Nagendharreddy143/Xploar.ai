import { useEffect } from 'react';

const SEOHead = ({
    title,
    description,
    keywords,
    ogImage,
    canonicalUrl,
    structuredData,
    pageType = 'website'
}) => {
    useEffect(() => {
        // Update document title
        document.title = title;

        // Update meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', description);

        // Update keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', keywords);

        // Update canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', canonicalUrl);

        // Update Open Graph tags
        const ogTags = [
            { property: 'og:type', content: pageType },
            { property: 'og:url', content: canonicalUrl },
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:site_name', content: 'Xploar.ai' }
        ];

        if (ogImage) {
            ogTags.push({ property: 'og:image', content: ogImage });
        }

        ogTags.forEach(tag => {
            let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
            if (!ogTag) {
                ogTag = document.createElement('meta');
                ogTag.setAttribute('property', tag.property);
                document.head.appendChild(ogTag);
            }
            ogTag.setAttribute('content', tag.content);
        });

        // Update Twitter tags
        const twitterTags = [
            { property: 'twitter:card', content: 'summary_large_image' },
            { property: 'twitter:url', content: canonicalUrl },
            { property: 'twitter:title', content: title },
            { property: 'twitter:description', content: description }
        ];

        if (ogImage) {
            twitterTags.push({ property: 'twitter:image', content: ogImage });
        }

        twitterTags.forEach(tag => {
            let twitterTag = document.querySelector(`meta[property="${tag.property}"]`);
            if (!twitterTag) {
                twitterTag = document.createElement('meta');
                twitterTag.setAttribute('property', tag.property);
                document.head.appendChild(twitterTag);
            }
            twitterTag.setAttribute('content', tag.content);
        });

        // Add structured data
        if (structuredData) {
            let existingScript = document.querySelector('script[type="application/ld+json"]');
            if (existingScript) {
                existingScript.remove();
            }

            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(structuredData);
            document.head.appendChild(script);
        }

        // Add Google Search Console verification (you'll need to replace with your actual verification code)
        let googleVerification = document.querySelector('meta[name="google-site-verification"]');
        if (!googleVerification) {
            googleVerification = document.createElement('meta');
            googleVerification.name = 'google-site-verification';
            googleVerification.content = 'YOUR_GOOGLE_VERIFICATION_CODE'; // Replace this
            document.head.appendChild(googleVerification);
        }

    }, [title, description, keywords, canonicalUrl, ogImage, pageType, structuredData]);

    return null;
};

export default SEOHead;
