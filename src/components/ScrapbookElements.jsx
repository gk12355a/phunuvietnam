import React from 'react';

// DẢI CÁNH ĐỒNG HOA HƯỚNG DƯƠNG NGHỆ THUẬT SƠN DẦU (TÁCH TRỰC TIẾP TỪ BỨC TRANH CỦA BẠN)
export const RealisticSunflowerField = () => (
  <div className="relative w-full overflow-hidden select-none">
    {/* Hiệu ứng bóng đổ và ánh sáng hắt lên từ vườn hoa */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none z-10" />

    {/* Hình ảnh cánh đồng hoa hướng dương sơn dầu nở rộ chân thực, ngập tràn sắc vàng ấm */}
    <div 
      className="w-full h-32 sm:h-44 md:h-56 bg-bottom bg-cover relative"
      style={{
        backgroundImage: 'url(/sunflower-field-bottom.png)',
        filter: 'drop-shadow(0 -8px 25px rgba(0,0,0,0.5))',
        maskImage: 'linear-gradient(to top, black 85%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to top, black 85%, transparent 100%)',
      }}
    >
      {/* Vệt nắng vàng ấm áp lướt qua cánh đồng hoa */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-yellow-200/15 to-transparent mix-blend-overlay pointer-events-none" />
    </div>
  </div>
);

// BÔNG HOA HƯỚNG DƯƠNG SƠN DẦU NỞ RỘ TRANG TRÍ (ĐÍNH GÓC THIỆP)
export const RealisticSingleSunflower = ({ className = "w-24 h-24" }) => (
  <div className={`relative ${className} select-none`}>
    <img 
      src="/sunflower-single.png" 
      alt="Oil Painting Sunflower"
      className="w-full h-full object-contain rounded-full shadow-2xl transition-transform duration-500 hover:scale-110"
      style={{
        filter: 'drop-shadow(2px 5px 10px rgba(0,0,0,0.45))',
      }}
    />
  </div>
);

// Cành lá Bạch Đàn / Khuynh Diệp đầy đặn góc phải
export const LushEucalyptusBranch = () => (
  <svg viewBox="0 0 160 260" className="w-36 md:w-48 h-56 md:h-80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g style={{ filter: 'drop-shadow(3px 5px 8px rgba(0,0,0,0.35))' }}>
      <path d="M 140 250 Q 90 140 70 20" stroke="#556B2F" strokeWidth="3.5" strokeLinecap="round" />
      
      <ellipse cx="60" cy="210" rx="22" ry="16" fill="#6B8E23" stroke="#486318" strokeWidth="1" transform="rotate(-25 60 210)" />
      <ellipse cx="120" cy="195" rx="20" ry="15" fill="#8FBC8F" stroke="#486318" strokeWidth="1" transform="rotate(20 120 195)" />

      <ellipse cx="45" cy="165" rx="20" ry="14" fill="#8FBC8F" stroke="#486318" strokeWidth="1" transform="rotate(-30 45 165)" />
      <ellipse cx="108" cy="150" rx="22" ry="15" fill="#556B2F" stroke="#3A4A1C" strokeWidth="1" transform="rotate(15 108 150)" />

      <ellipse cx="38" cy="120" rx="19" ry="13" fill="#6B8E23" stroke="#486318" strokeWidth="1" transform="rotate(-20 38 120)" />
      <ellipse cx="96" cy="110" rx="18" ry="13" fill="#8FBC8F" stroke="#486318" strokeWidth="1" transform="rotate(25 96 110)" />

      <ellipse cx="38" cy="80" rx="16" ry="12" fill="#8FBC8F" stroke="#486318" strokeWidth="1" transform="rotate(-25 38 80)" />
      <ellipse cx="88" cy="72" rx="16" ry="12" fill="#556B2F" stroke="#3A4A1C" strokeWidth="1" transform="rotate(20 88 72)" />

      <ellipse cx="48" cy="45" rx="14" ry="10" fill="#6B8E23" stroke="#486318" strokeWidth="1" transform="rotate(-15 48 45)" />
      <ellipse cx="80" cy="40" rx="13" ry="10" fill="#8FBC8F" stroke="#486318" strokeWidth="1" transform="rotate(20 80 40)" />

      <ellipse cx="68" cy="18" rx="9" ry="14" fill="#8FBC8F" stroke="#486318" strokeWidth="1" transform="rotate(5 68 18)" />
    </g>
  </svg>
);

// Bó hoa khô màu vàng nâu góc trái dưới
export const LeftDryFlowers = () => (
  <svg viewBox="0 0 120 160" className="w-24 md:w-32 h-36 md:h-44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g style={{ filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.4))' }}>
      <path d="M 60 150 L 35 60" stroke="#9A7B56" strokeWidth="2" strokeLinecap="round" />
      <path d="M 60 150 L 55 50" stroke="#8C6D48" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M 60 150 L 78 70" stroke="#A88B68" strokeWidth="1.8" strokeLinecap="round" />
      
      <g transform="translate(35, 55)">
        <ellipse cx="0" cy="0" rx="16" ry="12" fill="#D4A373" stroke="#B08968" strokeWidth="1" />
        <ellipse cx="-6" cy="-4" rx="10" ry="15" fill="#E6BA95" opacity="0.8" />
        <ellipse cx="5" cy="2" rx="12" ry="9" fill="#C59B76" />
      </g>

      <g transform="translate(55, 45)">
        <circle cx="0" cy="0" r="10" fill="#E0B589" stroke="#9A7B56" strokeWidth="0.8" />
        <circle cx="0" cy="0" r="6" fill="#BD8C61" />
      </g>

      <g transform="translate(78, 65)">
        <ellipse cx="0" cy="0" rx="9" ry="13" fill="#D4A373" />
        <circle cx="0" cy="0" r="5" fill="#8C6239" />
      </g>

      <rect x="42" y="130" width="36" height="12" rx="1" fill="#E8CFA8" fillOpacity="0.8" transform="rotate(-15 42 130)" />
    </g>
  </svg>
);

// Chiếc nơ lụa màu hồng be pastel thắt tinh xảo
export const RibbonBow = ({ className = "w-14 h-10" }) => (
  <svg viewBox="0 0 80 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g style={{ filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.25))' }}>
      <path d="M40 20 C28 6, 8 10, 14 26 C18 34, 32 25, 40 20 Z" fill="#DDB8A6" stroke="#C49B88" strokeWidth="1" />
      <path d="M40 20 C52 6, 72 10, 66 26 C62 34, 48 25, 40 20 Z" fill="#DDB8A6" stroke="#C49B88" strokeWidth="1" />
      <path d="M38 22 Q 24 35 18 48 Q 26 44 38 30 Z" fill="#CCA391" />
      <path d="M42 22 Q 56 35 62 48 Q 54 44 42 30 Z" fill="#CCA391" />
      <ellipse cx="40" cy="20" rx="4.5" ry="5.5" fill="#BF927E" stroke="#9E7360" strokeWidth="1" />
    </g>
  </svg>
);

// Ghim kẹp giấy kim loại vàng đồng
export const PaperClip = ({ className = "w-5 h-9" }) => (
  <svg viewBox="0 0 24 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 12 L8 36 C8 42, 16 42, 16 36 L16 10 C16 4, 4 4, 4 10 L4 38 C4 46, 20 46, 20 38 L20 14"
      stroke="#C59B27"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.35))' }}
    />
  </svg>
);

// Ghim kẹp xoắn màu đỏ hồng đất kẹp thẻ vé
export const RedSpiralClip = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 36 36" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 4 C 10 4, 4 10, 4 18 C 4 26, 10 32, 18 32 C 26 32, 32 26, 32 18 C 32 12, 27 8, 20 8 C 14 8, 10 12, 10 18 C 10 23, 14 26, 18 26 C 22 26, 25 23, 25 19 C 25 16, 22 14, 19 14"
      stroke="#963D4E"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
      style={{ filter: 'drop-shadow(1px 2px 2px rgba(0,0,0,0.25))' }}
    />
  </svg>
);
