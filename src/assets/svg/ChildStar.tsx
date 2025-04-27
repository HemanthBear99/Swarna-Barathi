import React from 'react';

interface ChildStarProps {
  className?: string;
  color?: string;
}

const ChildStar: React.FC<ChildStarProps> = ({
  className = '',
  color = '#FFD700',
}) => {
  return (
    <svg
      className={className}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 5L35.8779 20.7639H52.7063L39.4142 30.4721L45.2921 46.2361L30 36.5279L14.7079 46.2361L20.5858 30.4721L7.29366 20.7639H24.1221L30 5Z"
        fill={color}
        stroke="#E6B800"
        strokeWidth="2"
      />
      <circle cx="30" cy="25" r="3" fill="white" />
    </svg>
  );
};

export default ChildStar;
