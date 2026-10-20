import React from 'react';

// Biểu tượng Chiêm tinh Cung Sư Tử (Leo Zodiac Glyph ♌) lồng ghép vương miện hoàng gia vàng kim
export const LeoZodiacConstellation = ({ className = "w-20 h-20" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-leo-glow">
      {/* Vòng hào quang mặt trời bảo hộ Sư Tử */}
      <circle cx="50" cy="50" r="44" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="50" cy="50" r="39" stroke="#FB7185" strokeWidth="0.8" opacity="0.5" />

      {/* Ký hiệu Cung Sư Tử ♌ nghệ thuật ánh vàng hồng */}
      <path
        d="M 32 60 C 26 60 22 55 22 48 C 22 41 28 36 35 36 C 44 36 48 45 48 55 C 48 68 56 75 66 75 C 74 75 80 69 80 62 C 80 55 74 50 67 50 C 62 50 58 53 58 57 C 58 61 62 64 66 64 C 70 64 72 61 72 58"
        stroke="#D97706"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 32 60 C 26 60 22 55 22 48 C 22 41 28 36 35 36 C 44 36 48 45 48 55 C 48 68 56 75 66 75 C 74 75 80 69 80 62 C 80 55 74 50 67 50 C 62 50 58 53 58 57 C 58 61 62 64 66 64 C 70 64 72 61 72 58"
        stroke="#FBBF24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Ngôi sao Regulus (Trái tim của Sư Tử - Alpha Leonis) */}
      <circle cx="35" cy="36" r="3" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="1" />
      <circle cx="66" cy="75" r="2.5" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="1" />
    </g>
  </svg>
);

// Vương miện Sư Tử vàng kim nhỏ xinh
export const LeoCrown = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 40 30" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M4 24 L 36 24 L 34 10 L 26 18 L 20 6 L 14 18 L 6 10 Z" 
      fill="#FBBF24" 
      stroke="#D97706" 
      strokeWidth="1.5" 
      strokeLinejoin="round" 
    />
    <circle cx="6" cy="9" r="1.8" fill="#F43F5E" />
    <circle cx="20" cy="5" r="2.2" fill="#F43F5E" />
    <circle cx="34" cy="9" r="1.8" fill="#F43F5E" />
  </svg>
);

// Cành hoa hồng màu nước kết hợp lá vàng ánh kim
export const RoseBotanicalFlora = ({ className = "w-24 h-24", style = {} }) => (
  <svg viewBox="0 0 200 200" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g style={{ transformOrigin: 'center' }}>
      {/* Cành mảnh vàng nhạt */}
      <path
        d="M30 170 C 60 140, 100 110, 170 30"
        stroke="#D4A373"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Các cánh hoa hồng pastel nhẹ nhàng */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <path
          key={`petal-${i}`}
          d="M100 100 C 85 60, 115 60, 100 40 C 85 60, 115 60, 100 100"
          fill={i % 2 === 0 ? "#FDE2E4" : "#FCD5CE"}
          stroke="#F43F5E"
          strokeWidth="0.8"
          transform={`rotate(${deg} 100 100)`}
          opacity="0.9"
        />
      ))}
      <circle cx="100" cy="100" r="15" fill="#FB7185" stroke="#E11D48" strokeWidth="1" />
      <circle cx="100" cy="100" r="8" fill="#BE123C" />
      {[...Array(8)].map((_, i) => {
        const rad = (i * 45 * Math.PI) / 180;
        return (
          <circle 
            key={`dot-${i}`} 
            cx={100 + 6 * Math.cos(rad)} 
            cy={100 + 6 * Math.sin(rad)} 
            r="1" 
            fill="#FFF1F2" 
          />
        );
      })}
    </g>
  </svg>
);
