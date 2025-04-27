import React from 'react';

interface ChildCloudProps {
  className?: string;
  color?: string;
}

const ChildCloud: React.FC<ChildCloudProps> = ({
  className = '',
  color = '#FFFFFF',
}) => {
  return (
    <svg
      className={className}
      width="120"
      height="70"
      viewBox="0 0 120 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M95 45C95 56.0457 86.0457 65 75 65H35C23.9543 65 15 56.0457 15 45C15 33.9543 23.9543 25 35 25C35.9666 25 36.9183 25.0761 37.8502 25.2235C41.3712 15.5652 50.6426 9 61.25 9C74.0319 9 84.5017 18.0139 86.0322 30.0238C91.1999 31.5499 95 36.0254 95 41.25C95 42.5079 94.8134 43.7218 94.4641 44.8623C94.8222 44.9527 95.1891 45 95.5625 45H95Z"
        fill={color}
        stroke="#CCCCCC"
        strokeWidth="2"
      />
    </svg>
  );
};

export default ChildCloud;
