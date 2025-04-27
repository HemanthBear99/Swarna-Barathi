import { ChildCloud, ChildStar } from '@/assets/svg';
import React from 'react';

interface ChildBannerProps {
  title: string;
  color?: string;
  className?: string;
  children?: React.ReactNode;
}

const ChildBanner: React.FC<ChildBannerProps> = ({
  title,
  color = 'bg-pink-100',
  className = '',
  children,
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl py-4 px-6 ${color} ${className}`}
    >
      {/* Decorative elements */}
      <div className="absolute -top-6 -left-6 opacity-70">
        <ChildCloud className="w-24 h-14 text-white" />
      </div>
      <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 opacity-70">
        <ChildStar className="w-12 h-12 animate-bounce-slow" />
      </div>

      <div className="relative z-10">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-2">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
};

export default ChildBanner;
