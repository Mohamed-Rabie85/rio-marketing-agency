import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * Back to Top Button Component
 * Shows after scrolling down 100px
 */
export default function BackToTop() {
    const [, setLocation] = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const button = document.getElementById('back-to-top');
            if (!button) return;

            if (window.scrollY > 100) {
                button.classList.remove('opacity-0', 'pointer-events-none');
                button.classList.add('opacity-100');
            } else {
                button.classList.add('opacity-0', 'pointer-events-none');
                button.classList.remove('opacity-100');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            id="back-to-top"
            onClick={scrollToTop}
            className="fixed bottom-8 left-8 z-50 w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all opacity-0 pointer-events-none flex items-center justify-center group"
            aria-label="العودة للأعلى"
        >
            <svg
                className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
            </svg>
        </button>
    );
}
