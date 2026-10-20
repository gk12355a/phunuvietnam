import React, { useState, useEffect } from 'react';

// Thành phần hiệu ứng máy đánh chữ như lời thuyết minh phim
export function TypewriterText({ text, speed = 35, onComplete, className = "" }) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayed("");
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(prev => prev + text.charAt(index));
        setIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [index, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayed}
      {index < text.length && (
        <span className="inline-block w-1.5 h-4 ml-1 bg-amber-400 animate-pulse align-middle" />
      )}
    </span>
  );
}

// Bụi sao lấp lánh như rạp phim
export function CinematicDust() {
  const dustParticles = [
    { top: '15%', left: '10%', delay: '0s', size: '3px' },
    { top: '25%', left: '80%', delay: '1.2s', size: '2px' },
    { top: '60%', left: '15%', delay: '2.5s', size: '4px' },
    { top: '75%', left: '70%', delay: '0.8s', size: '3px' },
    { top: '40%', left: '90%', delay: '3.1s', size: '2px' },
    { top: '85%', left: '35%', delay: '1.7s', size: '3px' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {dustParticles.map((d, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-amber-200/60 animate-pulse"
          style={{
            top: d.top,
            left: d.left,
            width: d.size,
            height: d.size,
            animationDuration: '3s',
            animationDelay: d.delay,
            boxShadow: '0 0 8px rgba(251, 191, 36, 0.8)'
          }}
        />
      ))}
    </div>
  );
}
