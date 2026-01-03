import { useEffect } from 'react';

interface SEOHeadProps {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    ogType?: 'website' | 'article';
    articlePublishedTime?: string;
    articleAuthor?: string;
    canonicalUrl?: string;
}

/**
 * SEO Head Component
 * Manages all meta tags for search engines and social media
 */
export default function SEOHead({
    title,
    description,
    keywords,
    ogImage = '/logo.png',
    ogType = 'website',
    articlePublishedTime,
    articleAuthor,
    canonicalUrl,
}: SEOHeadProps) {
    const fullTitle = `${title} | ريو للحلول التسويقية`;
    const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    const canonical = canonicalUrl || currentUrl;
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

    useEffect(() => {
        // Update document title
        document.title = fullTitle;

        // Helper function to set meta tag
        const setMetaTag = (name: string, content: string, isProperty = false) => {
            const attribute = isProperty ? 'property' : 'name';
            let element = document.querySelector(`meta[${attribute}="${name}"]`);

            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }

            element.setAttribute('content', content);
        };

        // Basic Meta Tags
        setMetaTag('description', description);
        if (keywords) setMetaTag('keywords', keywords);
        setMetaTag('author', 'ريو للحلول التسويقية - RIO Marketing Solutions');

        // Open Graph Tags (Facebook, LinkedIn)
        setMetaTag('og:title', fullTitle, true);
        setMetaTag('og:description', description, true);
        setMetaTag('og:type', ogType, true);
        setMetaTag('og:url', currentUrl, true);
        setMetaTag('og:image', fullOgImage, true);
        setMetaTag('og:image:width', '1200', true);
        setMetaTag('og:image:height', '630', true);
        setMetaTag('og:site_name', 'ريو للحلول التسويقية', true);
        setMetaTag('og:locale', 'ar_EG', true);

        // Twitter Card Tags
        setMetaTag('twitter:card', 'summary_large_image');
        setMetaTag('twitter:title', fullTitle);
        setMetaTag('twitter:description', description);
        setMetaTag('twitter:image', fullOgImage);

        // Article-specific tags
        if (ogType === 'article') {
            if (articlePublishedTime) {
                setMetaTag('article:published_time', articlePublishedTime, true);
            }
            if (articleAuthor) {
                setMetaTag('article:author', articleAuthor, true);
            }
        }

        // Canonical URL
        let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!linkCanonical) {
            linkCanonical = document.createElement('link');
            linkCanonical.rel = 'canonical';
            document.head.appendChild(linkCanonical);
        }
        linkCanonical.href = canonical;

    }, [fullTitle, description, keywords, ogImage, ogType, articlePublishedTime, articleAuthor, canonical, currentUrl, fullOgImage, siteUrl]);

    return null;
}
