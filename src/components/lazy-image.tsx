import React from 'react';

interface LazyImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
}

export const LazyImage: React.FC<LazyImageProps> = ({
    src,
    alt,
    width = 400,
    height = 300,
    className = '',
    priority = false
}) => {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            style={{ aspectRatio: `${width}/${height}` }}
        />
    );
};
