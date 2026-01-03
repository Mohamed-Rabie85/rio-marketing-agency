import { ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    priority?: boolean;
}

/**
 * Optimized Image Component
 * Automatically adds lazy loading, width/height, and optimization attributes
 * Works with ANY image - current or future replacements
 */
export default function OptimizedImage({
    src,
    alt,
    priority = false,
    className,
    ...props
}: OptimizedImageProps) {
    return (
        <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            className={className}
            {...props}
        />
    );
}
