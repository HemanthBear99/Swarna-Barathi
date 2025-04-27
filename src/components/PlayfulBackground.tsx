import React from 'react';

const PlayfulBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Floating Stars */}
      <div className="absolute top-20 left-10 animate-float">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700"/>
        </svg>
      </div>
      <div className="absolute top-40 right-20 animate-float-delayed">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700"/>
        </svg>
      </div>

      {/* Floating Clouds */}
      <div className="absolute top-32 left-1/4 animate-float-slow">
        <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M45 15C45 23.2843 38.2843 30 30 30C21.7157 30 15 23.2843 15 15C15 6.71573 21.7157 0 30 0C38.2843 0 45 6.71573 45 15Z" fill="#E3F2FD"/>
        </svg>
      </div>

      {/* Floating Books */}
      <div className="absolute bottom-40 right-1/3 animate-float">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 4H32C33.1046 4 34 4.89543 34 6V34C34 35.1046 33.1046 36 32 36H8C6.89543 36 6 35.1046 6 34V6C6 4.89543 6.89543 4 8 4Z" fill="#90CAF9"/>
          <path d="M12 8H28V32H12V8Z" fill="#E3F2FD"/>
          <path d="M14 12H26M14 16H26M14 20H26" stroke="#2196F3" strokeWidth="2"/>
        </svg>
      </div>

      {/* Floating Pencils */}
      <div className="absolute bottom-20 left-1/4 animate-float-delayed">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4L26 10L10 26L4 26L4 20L20 4Z" fill="#FF9800"/>
          <path d="M20 4L26 10" stroke="#F57C00" strokeWidth="2"/>
        </svg>
      </div>

      {/* Floating Hearts */}
      <div className="absolute top-1/4 right-10 animate-float-slow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="#FF4081"/>
        </svg>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#90CAF9" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default PlayfulBackground; 