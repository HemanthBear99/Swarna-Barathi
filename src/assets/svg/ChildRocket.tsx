import React from 'react';

interface ChildRocketProps {
  className?: string;
  color1?: string;
  color2?: string;
}

const ChildRocket: React.FC<ChildRocketProps> = ({
  className = '',
  color1 = '#9C27B0',
  color2 = '#E91E63',
}) => {
  return (
    <svg
      className={className}
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 10C50 10 30 30 30 60V80L50 70L70 80V60C70 30 50 10 50 10Z"
        fill={color1}
      />
      <circle cx="50" cy="40" r="10" fill={color2} />
      <path
        d="M30 60L20 70"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M70 60L80 70"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M30 70L25 80"
        stroke="#FF9800"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M70 70L75 80"
        stroke="#FF9800"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M50 70L50 85"
        stroke="#FF9800"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ChildRocket;
