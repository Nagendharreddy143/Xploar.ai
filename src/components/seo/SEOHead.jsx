import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

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
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        }

        // Update canonical URL
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', canonicalUrl);
        }
    }, [title, description, canonicalUrl]);

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={pageType} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {ogImage && <meta property="og:image" content={ogImage} />}
            <meta property="og:site_name" content="Xploar.ai" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            {ogImage && <meta property="twitter:image" content={ogImage} />}

            {/* Canonical URL */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Structured Data */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEOHead;
