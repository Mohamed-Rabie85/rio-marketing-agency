/**
 * Analytics Utility
 * Ready for Google Analytics integration
 * Currently in Mock mode - will track when GA Property ID is added
 */

// Set this to your GA4 Property ID when ready (e.g., 'G-XXXXXXXXXX')
const GA_MEASUREMENT_ID = '';

interface EventParams {
    category?: string;
    label?: string;
    value?: number;
    [key: string]: any;
}

/**
 * Track custom events
 * Examples:
 * - Button clicks
 * - Form submissions
 * - External link clicks
 */
export function trackEvent(eventName: string, params?: EventParams) {
    // Check if Google Analytics is loaded
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', eventName, params);
        console.log(`📊 Analytics Event: ${eventName}`, params);
    } else {
        // Mock mode - log to console
        console.log(`📊 [MOCK] Analytics Event: ${eventName}`, params);
    }
}

/**
 * Track page views
 */
export function trackPageView(path: string, title?: string) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', GA_MEASUREMENT_ID, {
            page_path: path,
            page_title: title,
        });
        console.log(`📊 Page View: ${path}`);
    } else {
        console.log(`📊 [MOCK] Page View: ${path}`, { title });
    }
}

/**
 * Track CTA button clicks
 */
export function trackCTAClick(buttonName: string, location: string) {
    trackEvent('cta_click', {
        category: 'engagement',
        label: buttonName,
        location: location,
    });
}

/**
 * Track form submissions
 */
export function trackFormSubmission(formName: string, success: boolean) {
    trackEvent('form_submission', {
        category: 'conversion',
        label: formName,
        value: success ? 1 : 0,
    });
}

/**
 * Track blog post views
 */
export function trackBlogView(postTitle: string, postSlug: string) {
    trackEvent('blog_view', {
        category: 'content',
        label: postTitle,
        slug: postSlug,
    });
}

/**
 * Track external link clicks
 */
export function trackExternalLink(url: string, linkText: string) {
    trackEvent('external_link', {
        category: 'outbound',
        label: linkText,
        url: url,
    });
}

/**
 * Track service card clicks
 */
export function trackServiceClick(serviceName: string) {
    trackEvent('service_click', {
        category: 'engagement',
        label: serviceName,
    });
}

// Export for adding GA script dynamically
export function initGoogleAnalytics() {
    if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return;

    // Add GA script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Add GA config
    const script2 = document.createElement('script');
    script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `;
    document.head.appendChild(script2);
}
