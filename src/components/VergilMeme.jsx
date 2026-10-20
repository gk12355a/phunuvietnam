import React from 'react';

// Sticker Vergil meme chibi cầm hoa hồng dâng tặng cực kỳ hài hước và ngầu
export const VergilGivingFlowerSticker = ({ className = "w-36 h-36" }) => (
  <svg viewBox="0 0 240 280" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      {/* Hiệu ứng viền sticker trắng bóc tem anime */}
      <filter id="sticker-shadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#1a0f08" floodOpacity="0.4" />
      </filter>
    </defs>

    <g filter="url(#sticker-shadow)">
      {/* VIỀN STICKER TRẮNG BỌC NGOÀI */}
      {/* Áo khoác xanh lam đặc trưng của Vergil (Blue Trenchcoat) */}
      <path 
        d="M60 140 C 60 115, 180 115, 180 140 L 195 240 C 195 245, 180 250, 160 250 L 80 250 C 60 250, 45 245, 45 240 Z" 
        fill="#1C2E4C" 
        stroke="#FFFFFF" 
        strokeWidth="6" 
      />
      
      {/* Họa tiết hoa văn màu vàng gold trên áo Vergil */}
      <path d="M120 140 L 120 250" stroke="#D4AF37" strokeWidth="2.5" />
      <path d="M85 150 C 95 180, 105 180, 115 150" stroke="#D4AF37" strokeWidth="2" fill="none" />
      <path d="M155 150 C 145 180, 135 180, 125 150" stroke="#D4AF37" strokeWidth="2" fill="none" />

      {/* Cổ áo dựng cao ngầu lòi (High collar) */}
      <path d="M90 145 L 80 105 L 105 125 Z" fill="#15243B" stroke="#FFFFFF" strokeWidth="3" />
      <path d="M150 145 L 160 105 L 135 125 Z" fill="#15243B" stroke="#FFFFFF" strokeWidth="3" />
      {/* Khăn / Áo giáp trong màu đen */}
      <path d="M98 122 L 120 148 L 142 122 Z" fill="#111111" />

      {/* Khuôn mặt Vergil ngầu, nghiêm túc (Serious anime expression) */}
      <path d="M90 85 C 90 65, 150 65, 150 85 C 150 120, 120 135, 120 135 C 120 135, 90 120, 90 85 Z" fill="#FCE5D8" stroke="#FFFFFF" strokeWidth="4" />
      
      {/* Mắt xanh lạnh lùng + Vết đỏ nhẹ ửng hồng e thẹn (Tsundere meme) */}
      <ellipse cx="106" cy="92" rx="4.5" ry="3" fill="#2B7A9F" />
      <ellipse cx="134" cy="92" rx="4.5" ry="3" fill="#2B7A9F" />
      {/* Vệt đỏ blush 2 bên má */}
      <ellipse cx="102" cy="100" rx="4" ry="2" fill="#FF8A8A" opacity="0.6" />
      <ellipse cx="138" cy="100" rx="4" ry="2" fill="#FF8A8A" opacity="0.6" />
      {/* Chân mày nhíu lại nghiêm túc */}
      <path d="M100 86 L 112 89" stroke="#4A5568" strokeWidth="2" strokeLinecap="round" />
      <path d="M140 86 L 128 89" stroke="#4A5568" strokeWidth="2" strokeLinecap="round" />
      {/* Miệng mím lại kiêu ngạo */}
      <path d="M115 110 L 125 110" stroke="#7A5243" strokeWidth="1.8" strokeLinecap="round" />

      {/* Mái tóc trắng vuốt ngược thương hiệu (Slicked-back Silver Hair) */}
      <path 
        d="M80 80 C 75 40, 105 20, 120 18 C 135 20, 165 40, 160 80 C 165 72, 168 55, 155 40 C 145 28, 120 22, 105 32 C 90 42, 84 65, 80 80 Z" 
        fill="#E8ECF2" 
        stroke="#FFFFFF" 
        strokeWidth="5" 
      />
      <path d="M120 18 L 120 45" stroke="#CBD5E1" strokeWidth="2" />
      <path d="M102 26 L 110 52" stroke="#CBD5E1" strokeWidth="2" />
      <path d="M138 26 L 130 52" stroke="#CBD5E1" strokeWidth="2" />

      {/* Cánh tay cầm kiếm Yamato sau lưng */}
      <rect x="35" y="150" width="8" height="90" rx="3" fill="#3D3028" stroke="#FFFFFF" strokeWidth="3" transform="rotate(-25 35 150)" />
      <rect x="33" y="142" width="12" height="12" rx="2" fill="#D4AF37" stroke="#FFFFFF" strokeWidth="2" transform="rotate(-25 33 142)" />

      {/* CÁNH TAY TRƯỚC VƯƠN RA DÂNG HOA HỒNG (CẦM BÓ HOA TẶNG) */}
      <path d="M150 160 Q 185 170 190 150" stroke="#1C2E4C" strokeWidth="16" strokeLinecap="round" />
      {/* Găng tay đen */}
      <circle cx="190" cy="148" r="9" fill="#1E232A" stroke="#FFFFFF" strokeWidth="3" />
      
      {/* BÓ HOA HỒNG ĐỎ RỰC RỠ TẶNG NÀNG */}
      {/* Cành hoa */}
      <path d="M188 150 L 196 175" stroke="#2D6A4F" strokeWidth="4" strokeLinecap="round" />
      <path d="M182 158 L 176 172" stroke="#2D6A4F" strokeWidth="3" strokeLinecap="round" />
      <path d="M195 156 L 204 170" stroke="#2D6A4F" strokeWidth="3" strokeLinecap="round" />
      
      {/* Giấy gói hoa màu be vintage có nơ */}
      <path d="M180 155 L 205 155 L 198 185 L 186 185 Z" fill="#F4E3C1" stroke="#8C6D46" strokeWidth="1" />
      <path d="M192 168 L 184 172 M 192 168 L 200 172" stroke="#D9381E" strokeWidth="2" />

      {/* 3 ĐÓA HOA HỒNG ĐỎ NỞ TO */}
      {/* Hoa 1 (ở giữa) */}
      <circle cx="192" cy="138" r="13" fill="#D90429" stroke="#FFFFFF" strokeWidth="2" />
      <path d="M186 135 C 190 130, 196 130, 198 135 C 198 141, 187 143, 186 135 Z" fill="#EF233C" />
      {/* Hoa 2 (bên trái) */}
      <circle cx="178" cy="144" r="10" fill="#BA0020" stroke="#FFFFFF" strokeWidth="2" />
      <path d="M174 142 C 176 139, 182 139, 182 143 Z" fill="#D90429" />
      {/* Hoa 3 (bên phải) */}
      <circle cx="205" cy="142" r="10" fill="#EF233C" stroke="#FFFFFF" strokeWidth="2" />
      <path d="M201 141 C 203 138, 209 138, 209 142 Z" fill="#FF4D6D" />

      {/* Tia sáng động lực "MOTIVATED" lấp lánh */}
      <path d="M216 118 L 222 124 M 222 118 L 216 124" stroke="#FFD166" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M170 120 L 174 124 M 174 120 L 170 124" stroke="#FFD166" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);

// Chiếc ghế nhựa màu trắng huyền thoại (Monobloc Plastic Chair) với bó hoa đặt bên trên
export const VergilPlasticChairMeme = ({ className = "w-28 h-28" }) => (
  <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="drop-shadow(2px 4px 6px rgba(0,0,0,0.35))">
      {/* Ghế nhựa trắng huyền thoại */}
      {/* Lưng ghế */}
      <path d="M45 40 C 45 30, 115 30, 115 40 L 110 95 L 50 95 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
      {/* Các khe thông gió đặc trưng ghế nhựa */}
      <rect x="60" y="45" width="6" height="35" rx="3" fill="#64748B" opacity="0.3" />
      <rect x="77" y="42" width="6" height="40" rx="3" fill="#64748B" opacity="0.3" />
      <rect x="94" y="45" width="6" height="35" rx="3" fill="#64748B" opacity="0.3" />
      {/* Mặt ngồi */}
      <path d="M35 95 L 125 95 L 120 115 L 40 115 Z" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="2" />
      {/* 4 chân ghế */}
      <path d="M42 115 L 32 152 M 118 115 L 128 152 M 52 115 L 50 148 M 108 115 L 110 148" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />

      {/* BÓ HOA ĐẶT TRÊN GHẾ NHỰA */}
      <path d="M68 96 L 94 96 L 86 112 L 74 112 Z" fill="#E9D5A1" stroke="#B08968" strokeWidth="1" />
      <circle cx="75" cy="92" r="8" fill="#E63946" />
      <circle cx="87" cy="90" r="9" fill="#D90429" />
      <circle cx="81" cy="85" r="7" fill="#FF4D6D" />
      <path d="M85 88 L 98 80" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);
