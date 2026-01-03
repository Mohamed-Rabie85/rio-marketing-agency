/**
 * Structured Data (JSON-LD) utilities for SEO
 * Helps search engines understand the content better
 */

interface Organization {
    name: string;
    url: string;
    logo: string;
    description: string;
    contactPoint?: {
        telephone: string;
        contactType: string;
        areaServed: string;
        availableLanguage: string[];
    };
    sameAs?: string[];
}

interface Article {
    headline: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified?: string;
    author: string;
    publisher: Organization;
}

interface Service {
    name: string;
    description: string;
    provider: Organization;
    areaServed: string;
    serviceType: string;
}

interface Review {
    author: string;
    reviewRating: {
        ratingValue: number;
        bestRating: number;
    };
    reviewBody: string;
    datePublished?: string;
}

export function generateOrganizationSchema(org: Organization) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: org.name,
        url: org.url,
        logo: org.logo,
        description: org.description,
        ...(org.contactPoint && { contactPoint: { '@type': 'ContactPoint', ...org.contactPoint } }),
        ...(org.sameAs && { sameAs: org.sameAs }),
    };
}

export function generateArticleSchema(article: Article) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.headline,
        description: article.description,
        image: article.image,
        datePublished: article.datePublished,
        ...(article.dateModified && { dateModified: article.dateModified }),
        author: {
            '@type': 'Person',
            name: article.author,
        },
        publisher: {
            '@type': 'Organization',
            name: article.publisher.name,
            logo: {
                '@type': 'ImageObject',
                url: article.publisher.logo,
            },
        },
    };
}

export function generateServiceSchema(service: Service) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: {
            '@type': 'Organization',
            name: service.provider.name,
        },
        areaServed: service.areaServed,
        serviceType: service.serviceType,
    };
}

export function generateReviewSchema(review: Review, itemReviewed: { name: string; type: string }) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Review',
        author: {
            '@type': 'Person',
            name: review.author,
        },
        reviewRating: {
            '@type': 'Rating',
            ratingValue: review.reviewRating.ratingValue,
            bestRating: review.reviewRating.bestRating,
        },
        reviewBody: review.reviewBody,
        ...(review.datePublished && { datePublished: review.datePublished }),
        itemReviewed: {
            '@type': itemReviewed.type,
            name: itemReviewed.name,
        },
    };
}

/**
 * Inject JSON-LD script into the page
 */
export function injectStructuredData(schema: object) {
    if (typeof window === 'undefined') return;

    const scriptId = 'structured-data';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);
}
