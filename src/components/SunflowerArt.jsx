import React from 'react';

// Cành lá và hoa nhỏ nghệ thuật thanh lịch, trung tính phong cách tranh vẽ màu nước/chì
export const BotanicalFlora = ({ className = "w-24 h-24", style = {} }) => (
  <svg viewBox="0 0 200 200" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-petal" style={{ transformOrigin: 'center' }}>
      {/* Nhánh lá thanh mảnh */}
      <path
        d="M30 170 C 60 140, 100 110, 170 30"
        stroke="#8C7A6B"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Các cánh hoa vintage màu kem pastel */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <path
          key={`petal-${i}`}
          d="M100 100 C 85 60, 115 60, 100 40 C 85 60, 115 60, 100 100"
          fill={i % 2 === 0 ? "#F0E4D4" : "#EAD8C0"}
          stroke="#BAA38E"
          strokeWidth="0.8"
          transform={`rotate(${deg} 100 100)`}
          opacity="0.95"
        />
      ))}
      <circle cx="100" cy="100" r="16" fill="#C29B7F" stroke="#9A7458" strokeWidth="1" />
      <circle cx="100" cy="100" r="10" fill="#8B6349" />
      {[...Array(12)].map((_, i) => {
        const rad = (i * 30 * Math.PI) / 180;
        return (
          <circle 
            key={`dot-${i}`} 
            cx={100 + 7 * Math.cos(rad)} 
            cy={100 + 7 * Math.sin(rad)} 
            r="1.2" 
            fill="#F6E7D8" 
          />
        );
      })}
    </g>
  </svg>
);

export const OliveBranch = ({ className = "w-36 h-20" }) => (
  <svg viewBox="0 0 160 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 70 C 50 65, 90 40, 150 15"
      stroke="#7B8856"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M45 55 C 38 43, 46 28, 60 33 C 65 46, 53 55, 45 55 Z"
      fill="#A3B18A"
      stroke="#588157"
      strokeWidth="0.8"
    />
    <path
      d="M85 38 C 78 24, 94 14, 104 23 C 108 34, 95 38, 85 38 Z"
      fill="#B5C99A"
      stroke="#588157"
      strokeWidth="0.8"
    />
    <path
      d="M125 24 C 120 9, 138 4, 145 14 C 146 24, 132 26, 125 24 Z"
      fill="#A3B18A"
      stroke="#588157"
      strokeWidth="0.8"
    />
  </svg>
);
