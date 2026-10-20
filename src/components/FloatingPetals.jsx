import React from 'react';

// Tạo mảng 22 cánh hoa & trái tim mini rơi lãng mạn
const PETALS = Array.from({ length: 22 }).map((_, i) => ({
  id: i,
  left: `${(i * 4.6 + Math.random() * 2) % 98}%`,
  delay: `${(i * 0.45).toFixed(1)}s`,
  duration: `${(6.5 + (i % 5) * 1.5).toFixed(1)}s`,
  size: 14 + (i % 4) * 5,
  icon: i % 4 === 0 ? '🌻' : i % 4 === 1 ? '✨' : i % 4 === 2 ? '🌻' : '💛',
  opacity: 0.75 + (i % 3) * 0.1,
}));

// Mảng hạt bụi nắng vàng kim Bokeh mềm mại tan vào nền
const SUN_BOKEHS = [
  { id: 1, top: '10%', left: '6%', size: 90, opacity: 0.22, delay: '0s' },
  { id: 2, top: '22%', left: '14%', size: 120, opacity: 0.18, delay: '1s' },
  { id: 3, top: '35%', left: '8%', size: 75, opacity: 0.2, delay: '2.5s' },
  { id: 4, top: '12%', left: '26%', size: 100, opacity: 0.15, delay: '1.5s' },
  { id: 5, top: '55%', left: '12%', size: 110, opacity: 0.18, delay: '3s' },
  { id: 6, top: '75%', left: '20%', size: 130, opacity: 0.16, delay: '2s' },
  { id: 7, top: '70%', left: '80%', size: 110, opacity: 0.15, delay: '3.5s' },
];

export const FloatingPetalsBackground = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
    
    {/* Vệt nắng tỏa tròn đều mềm mại bao phủ 100% màn hình, không tạo vết cắt hay đường phân cách */}
    <div className="sunlight-beam-flare animate-sunlight" />

    {/* Các đốm tròn ánh sáng Bokeh mờ siêu mịn (Ultra Soft Bokeh Blur) */}
    {SUN_BOKEHS.map((b) => (
      <div
        key={`bokeh-${b.id}`}
        className="absolute rounded-full bg-amber-100 blur-[24px] animate-pulse pointer-events-none"
        style={{
          top: b.top,
          left: b.left,
          width: `${b.size}px`,
          height: `${b.size}px`,
          opacity: b.opacity,
          animationDelay: b.delay,
          animationDuration: '6s',
        }}
      />
    ))}

    {/* Cánh hoa & Trái tim mini bay lơ lửng */}
    {PETALS.map((p) => (
      <div
        key={`petal-${p.id}`}
        className="absolute animate-falling-petal drop-shadow-sm select-none pointer-events-none"
        style={{
          left: p.left,
          top: '-40px',
          animationDelay: p.delay,
          animationDuration: p.duration,
          fontSize: `${p.size}px`,
          opacity: p.opacity,
        }}
      >
        {p.icon}
      </div>
    ))}

    {/* Đốm sáng đom đóm vàng kim lơ lửng */}
    {[...Array(12)].map((_, i) => (
      <div
        key={`firefly-${i}`}
        className="absolute animate-firefly select-none pointer-events-none"
        style={{
          top: `${12 + (i * 7) % 80}%`,
          left: `${4 + (i * 8.5) % 92}%`,
          animationDelay: `${(i * 0.45).toFixed(1)}s`,
          animationDuration: `${(4.5 + (i % 3) * 1.5).toFixed(1)}s`,
        }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-amber-300 blur-[1px] shadow-[0_0_12px_#f59e0b]" />
      </div>
    ))}
  </div>
);
