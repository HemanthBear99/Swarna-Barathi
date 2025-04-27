import React from 'react';

interface ChildPencilProps {
  className?: string;
  color1?: string;
  color2?: string;
}

const ChildPencil: React.FC<ChildPencilProps> = ({
  className = '',
  color1 = '#FFC107',
  color2 = '#FF5722',
}) => {
  return (
    <svg
      className={className}
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 65L60 20L70 30L25 75L10 70L15 65Z" fill={color1} />
      <path d="M15 65L10 70L25 75L20 70L15 65Z" fill={color2} />
      <path d="M60 20L70 30L65 35L55 25L60 20Z" fill="#4A4A4A" />
      <path
        d="M15 65L10 70M15 65L60 20M15 65L20 70M60 20L70 30M60 20L55 25M70 30L65 35M10 70L25 75M25 75L20 70"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChildPencil;
