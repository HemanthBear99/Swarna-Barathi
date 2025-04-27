import { memo } from 'react';

interface PlaceholderImageProps {
  width?: number | string;
  height?: number | string;
  text?: string;
  className?: string;
  bgColor?: string;
  textColor?: string;
}

/**
 * A component that renders a placeholder for images that are not available
 */
const PlaceholderImage = memo(
  ({
    width = '100%',
    height = '300px',
    text = 'Image',
    className = '',
    bgColor = '#f0f9ff', // school-50 color
    textColor = '#0369a1', // school-700 color
  }: PlaceholderImageProps) => {
    return (
      <div
        className={`flex items-center justify-center ${className}`}
        style={{
          width,
          height,
          backgroundColor: bgColor,
          color: textColor,
          borderRadius: '0.5rem',
        }}
      >
        <div className="text-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto mb-2"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <p className="font-medium">{text}</p>
        </div>
      </div>
    );
  }
);

PlaceholderImage.displayName = 'PlaceholderImage';

export default PlaceholderImage;
