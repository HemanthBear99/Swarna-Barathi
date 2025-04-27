import React from 'react';

interface ChildBalloonProps {
  className?: string;
  color?: string;
}

const ChildBalloon: React.FC<ChildBalloonProps> = ({
  className = '',
  color = '#FF6B6B',
}) => {
  return (
    <svg
      className={className}
      width="60"
      height="100"
      viewBox="0 0 60 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 50C41.0457 50 50 41.0457 50 30C50 18.9543 41.0457 10 30 10C18.9543 10 10 18.9543 10 30C10 41.0457 18.9543 50 30 50Z"
        fill={color}
      />
      <path
        d="M30 50L28 90"
        stroke="#555555"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M28 90L24 85M28 90L32 85"
        stroke="#555555"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 30C32.7614 30 35 27.7614 35 25C35 22.2386 32.7614 20 30 20"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ChildBalloon;
