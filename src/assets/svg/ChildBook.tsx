import React from 'react';

interface ChildBookProps {
  className?: string;
  color1?: string;
  color2?: string;
}

const ChildBook: React.FC<ChildBookProps> = ({
  className = '',
  color1 = '#4CAF50',
  color2 = '#8BC34A',
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
      <path d="M15 15H65V65H15V15Z" fill={color1} />
      <path d="M15 15H40V65H15V15Z" fill={color2} />
      <path d="M40 15V65" stroke="#333333" strokeWidth="2" />
      <path
        d="M25 30H30"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M25 40H30"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M25 50H30"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M50 30H55"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M50 40H55"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M50 50H55"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M15 15H65V65H15V15Z" stroke="#333333" strokeWidth="2" />
    </svg>
  );
};

export default ChildBook;
