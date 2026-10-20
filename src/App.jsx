import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, ThumbsUp, Sun, Heart, Volume2, VolumeX } from 'lucide-react';
import { LeoZodiacConstellation, RoseBotanicalFlora } from './components/LeoArt';
import { FloatingPetalsBackground } from './components/FloatingPetals';

export default function App() {
  const herName = "Yến Phug";
  const hisName = "dtkien";
  const [vergilQuoteIndex, setVergilQuoteIndex] = useState(0);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const audioRef = useRef(null);

  // Ảnh từ thư mục pic
  const mainPhoto = "/pic1.jpg";
  const subPhoto = "/pic2.jpg";
  const thirdPhoto = "/pic3.jpg";

  // Bật/tắt nhạc
  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlayingMusic) {
      audioRef.current.pause();
      setIsPlayingMusic(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlayingMusic(true);
      }).catch(err => console.log("Audio play error:", err));
    }
  };

  // Tự động phát nhạc ngay khi load trang
  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlayingMusic(true);
        }).catch(() => {
          const resumeAudio = () => {
            if (audioRef.current) {
              audioRef.current.play().then(() => {
                setIsPlayingMusic(true);
              }).catch(() => {});
            }
            window.removeEventListener('click', resumeAudio);
            window.removeEventListener('keydown', resumeAudio);
            window.removeEventListener('touchstart', resumeAudio);
          };
          window.addEventListener('click', resumeAudio);
          window.addEventListener('keydown', resumeAudio);
          window.addEventListener('touchstart', resumeAudio);
        });
      }
    };

    playAudio();
  }, []);

  const VERGIL_QUOTES = [
    `"10 điểm không có nhưng! Chúc Yến Phug 20.10 đỉnh nóc kịch trần! ✨"`,
    `"Vergil approved! Cung Sư Tử rực rỡ và đáng yêu nhất 👍"`,
    `"Where is your motivation? Here! Chúc em luôn tự tin, rạng rỡ và yêu đời!"`,
    `"Tuyệt vời lắm! Now I'm fully motivated to make you happy!"`,
    `"Ngầu đét! Chúc Yến Phug mãi xinh đẹp, bình yên và ngập tràn hạnh phúc!"`
  ];

  // Bắn pháo hoa rực rỡ từ 2 phía
  const triggerBigCelebration = () => {
    setVergilQuoteIndex(prev => (prev + 1) % VERGIL_QUOTES.length);
    
    // Bắn từ bên trái
    confetti({
      particleCount: 45,
      angle: 60,
      spread: 65,
      origin: { x: 0.1, y: 0.7 },
      colors: ['#F43F5E', '#FDA4AF', '#F59E0B', '#FBBF24', '#FFFFFF']
    });

    // Bắn từ bên phải
    confetti({
      particleCount: 45,
      angle: 120,
      spread: 65,
      origin: { x: 0.9, y: 0.7 },
      colors: ['#F43F5E', '#FDA4AF', '#F59E0B', '#FBBF24', '#FFFFFF']
    });
  };

  // Tự động bắn pháo hoa nhẹ lúc vừa mở trang web
  useEffect(() => {
    const timer = setTimeout(() => {
      confetti({
        particleCount: 40,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#F43F5E', '#FBBF24', '#FDA4AF']
      });
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen md:h-screen w-screen rose-leo-bg text-[#3b121f] relative flex flex-col justify-start md:justify-center items-center p-2.5 sm:p-4 overflow-x-hidden md:overflow-hidden select-none py-4 md:py-2">
      {/* HIỆU ỨNG CÁNH HOA, TRÁI TIM & SAO BAY THEO CHUỘT DÀY ĐẶC */}
      <FloatingPetalsBackground />

      {/* Ánh hào quang ấm áp của Mặt Trời Cung Sư Tử */}
      <div className="absolute inset-0 sunlight-leo pointer-events-none" />

      {/* AUDIO PLAYER NHẠC NỀN SEE YOU AGAIN */}
      <audio 
        ref={audioRef} 
        src="/see-you-again.mp3" 
        autoPlay
        loop 
        preload="auto"
      />

      {/* THANH TOP HEADER */}
      <div className="relative z-30 w-full max-w-4xl flex flex-wrap items-center justify-between gap-2 px-2 mb-2 sm:mb-3">
        <div 
          onClick={triggerBigCelebration}
          className="flex items-center gap-1.5 sm:gap-2 bg-[#2d0f18]/85 text-rose-200 text-[10px] sm:text-xs px-3 py-1.5 rounded-full border border-rose-500/40 backdrop-blur-md shadow-sm transition-all hover:scale-105 cursor-pointer"
        >
          <Sun className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
          <span className="font-mono font-medium">20.10 for {herName} ♌</span>
        </div>

        {/* Nút điều khiển nhạc nền See You Again */}
        <button
          onClick={toggleMusic}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] sm:text-xs border transition-all duration-300 shadow-md backdrop-blur-md cursor-pointer ${
            isPlayingMusic 
              ? 'bg-rose-950/80 text-rose-200 border-rose-400/60 shadow-[0_0_12px_rgba(244,63,94,0.5)] animate-pulse' 
              : 'bg-black/60 text-stone-300 border-stone-600/40 hover:text-white'
          }`}
          title={isPlayingMusic ? "Tạm dừng nhạc" : "Bật bài hát See You Again"}
        >
          {isPlayingMusic ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-rose-400 animate-bounce flex-shrink-0" />
              <span className="font-medium tracking-wide">♫ See You Again</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" />
              <span className="font-medium">Bật Nhạc ♫</span>
            </>
          )}
        </button>
      </div>

      {/* THIỆP TRANH NGHỆ THUẬT: RESPONSIVE TOÀN DIỆN MOBILE & DESKTOP */}
      <div className="relative z-10 w-full max-w-4xl paper-texture-rose leo-card-shadow rounded-2xl p-4 sm:p-6 md:p-8 border border-[#fecdd3]/80 flex flex-col justify-between md:max-h-[calc(100vh-4.5rem)] transition-all duration-500 hover:shadow-[0_30px_60px_-10px_rgba(244,63,94,0.35)] mt-2 md:mt-0">
        
        {/* STICKER VERGIL MEME THUMBS UP */}
        <div 
          onClick={triggerBigCelebration}
          className="absolute -top-3 sm:-top-5 right-2 sm:right-6 z-30 cursor-pointer group transition-all duration-300 hover:scale-110 active:scale-95"
          title="Bấm vào để nhận nút like từ Vergil!"
        >
          <div className="relative bg-white p-1 pb-1.5 rounded-lg border-2 border-rose-400 rotate-3 group-hover:rotate-0 transition-transform duration-300 w-20 sm:w-26 md:w-32 animate-vergil-aura">
            <div className="relative rounded overflow-hidden aspect-[4/3] bg-slate-900 border border-rose-200">
              <img 
                src="/vergil-thumb.png" 
                alt="Vergil Thumbs Up Meme"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0.5 right-0.5 bg-rose-600 text-white text-[8px] sm:text-[10px] rounded-full w-3.5 h-3.5 sm:w-4 sm:h-4 flex items-center justify-center shadow-lg border border-white animate-bounce">
                🌹
              </div>
            </div>
            <p className="text-[8px] sm:text-[9px] font-mono text-center mt-0.5 text-rose-950 font-bold tracking-tight flex items-center justify-center gap-0.5">
              <span>APPROVED</span>
              <span className="text-amber-500 animate-pulse">👍</span>
            </p>
          </div>
        </div>

        {/* Họa tiết Cung Sư Tử ♌ & Hoa hồng nghệ thuật ở góc thiệp */}
        <div className="absolute top-2 left-2 pointer-events-none opacity-40 animate-pulse" style={{ animationDuration: '3.5s' }}>
          <LeoZodiacConstellation className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
        </div>
        <div className="absolute bottom-1 right-2 pointer-events-none opacity-40 hidden sm:block">
          <RoseBotanicalFlora className="w-16 h-16 sm:w-20 sm:h-20 -rotate-12" />
        </div>

        {/* BỐ CỤC NỘI DUNG CHÍNH (GRID RESPONSIVE 1 CỘT MOBILE / 12 CỘT DESKTOP) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 md:gap-8 items-center relative z-10 my-auto">
          
          {/* CỘT TRÁI: ẢNH NÀNG THƠ + POLAROID LỒNG ĐÈ */}
          <div className="md:col-span-5 flex flex-col items-center justify-center relative mt-3 sm:mt-0">
            <div className="absolute -left-4 top-2 bottom-2 w-3 bg-[#fb7185]/25 rounded-r -z-1 hidden md:block" />

            {/* Bức ảnh chân dung chính */}
            <div className="relative w-40 sm:w-48 md:w-60 h-52 sm:h-60 md:h-72 rounded-md overflow-hidden shadow-xl border-[3px] border-white bg-rose-50/50 group/main cursor-pointer">
              <img 
                src={mainPhoto} 
                alt="Portrait"
                className="w-full h-full object-cover transition-transform duration-700 group-hover/main:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 via-transparent to-transparent opacity-0 group-hover/main:opacity-100 transition-opacity duration-300 flex items-end p-2.5">
                <span className="text-white text-xs font-handwriting">Nàng thơ của anh 💖</span>
              </div>
            </div>

            {/* Cụm ảnh Polaroid ghép lồng 2 góc */}
            <div className="relative -mt-14 sm:-mt-16 md:-mt-20 flex items-center justify-center w-full z-20 pointer-events-none">
              {/* Polaroid 1 (pic2) */}
              <div className="pointer-events-auto -mr-2 sm:-mr-3 md:-mr-4 w-22 sm:w-26 md:w-32 bg-white p-1 pb-2 sm:pb-2.5 rounded shadow-xl border border-rose-200/90 -rotate-6 hover:rotate-0 hover:scale-115 hover:z-30 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className="overflow-hidden rounded aspect-[4/5] bg-rose-50 flex items-center justify-center">
                  <img 
                    src={subPhoto} 
                    alt="Moment 1" 
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <p className="text-[8px] sm:text-[9px] font-handwriting text-center mt-1 text-rose-900 font-semibold tracking-wide truncate px-1">
                  Nụ cười của em ✨
                </p>
              </div>

              {/* Polaroid 2 (pic3) */}
              <div className="pointer-events-auto -ml-2 sm:-ml-3 md:-ml-4 w-22 sm:w-26 md:w-32 bg-white p-1 pb-2 sm:pb-2.5 rounded shadow-xl border border-rose-200/90 rotate-6 hover:rotate-0 hover:scale-115 hover:z-30 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className="overflow-hidden rounded aspect-[4/5] bg-rose-50 flex items-center justify-center">
                  <img 
                    src={thirdPhoto} 
                    alt="Moment 2" 
                    className="w-full h-full object-cover object-[center_65%] transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <p className="text-[8px] sm:text-[9px] font-handwriting text-center mt-1 text-rose-900 font-semibold tracking-wide truncate px-1">
                  Nàng thơ Yến Phug 💖
                </p>
              </div>
            </div>

            {/* Tem bảo tàng vintage tone vàng hồng */}
            <div className="flex items-center gap-1.5 mt-2 z-10">
              <div 
                onClick={triggerBigCelebration}
                className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#e11d48] text-white flex items-center justify-center text-[8px] sm:text-[9px] font-bold shadow animate-pulse cursor-pointer hover:scale-125 transition-transform"
              >
                ♥
              </div>
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#d97706] text-white flex items-center justify-center text-[8px] sm:text-[9px] font-bold shadow">
                20
              </div>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-rose-900/80 font-semibold ml-1 font-mono">
                Exhibition • 20.10
              </span>
            </div>
          </div>

          {/* CỘT PHẢI: TYPOGRAPHY, LỜI CHÚC & DTKIEN'S MESSAGE */}
          <div className="md:col-span-7 flex flex-col justify-center text-left space-y-2 sm:space-y-3 pr-0 sm:pr-2 md:pr-4 mt-2 sm:mt-0">
            
            {/* Tag sự kiện */}
            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 rounded-full bg-rose-100/90 text-rose-900 text-[10px] sm:text-xs font-semibold tracking-wider uppercase border border-rose-200 w-fit shadow-xs">
              <Sparkles className="w-3 h-3 text-rose-600 animate-spin" style={{ animationDuration: '6s' }} />
              Chúc Mừng Ngày 20.10
            </div>

            {/* Quote chủ đạo */}
            <h2 className="text-xl sm:text-2xl md:text-4xl font-serif-art font-normal text-[#2b0f19] leading-tight">
              With you,<br />
              you bring warmth<br />
              <span className="italic font-normal text-[#e11d48] hover:text-amber-600 transition-colors duration-300">to my art.</span>
            </h2>

            {/* Lời đề từ */}
            <div className="pt-0.5">
              <p className="text-sm sm:text-base md:text-lg font-cormorant font-semibold text-[#3a1421] flex items-center gap-1.5 flex-wrap">
                To <span className="font-handwriting text-lg sm:text-xl md:text-2xl text-[#be123c] font-bold underline decoration-amber-400 hover:text-rose-500 transition-colors">{herName}</span> 
                <span className="italic">— A private exhibition of our moments</span>
              </p>
              <p className="text-xs sm:text-sm text-stone-600 font-serif-art mt-0.5 italic leading-relaxed">
                "Chúc em một ngày 20.10 thật nhiều niềm vui, luôn tự tin, rạng rỡ và ngập tràn hạnh phúc."
              </p>
            </div>

            {/* Khung thoại dtkien's Message tương tác sinh động */}
            <div 
              onClick={triggerBigCelebration}
              className="bg-[#240e17]/95 border border-rose-400/50 p-2 sm:p-2.5 rounded-xl text-xs text-rose-100 shadow-md cursor-pointer hover:bg-[#2f1320] hover:border-rose-300 hover:shadow-[0_0_15px_rgba(244,63,94,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 group"
            >
              <div className="flex items-center justify-between mb-0.5 text-[9px] sm:text-[10px] text-rose-300 font-mono">
                <span className="flex items-center gap-1 sm:gap-1.5">
                  <ThumbsUp className="w-3 h-3 text-amber-400 group-hover:scale-125 transition-transform" />
                  <span className="font-bold text-white">dtkien's Message for {herName}:</span>
                </span>
                <span className="text-[8px] sm:text-[9px] text-amber-300/90 group-hover:underline flex items-center gap-1">
                  <span>Bấm đổi lời chúc</span>
                  <span className="text-xs animate-bounce">🌹</span>
                </span>
              </div>
              <p className="font-serif-art italic text-xs sm:text-sm text-amber-200 font-medium leading-snug">
                {VERGIL_QUOTES[vergilQuoteIndex]}
              </p>
            </div>

            {/* Thẻ bảng thông tin chất liệu */}
            <div className="border border-rose-200 bg-[#fff5f6]/95 p-2 sm:p-2.5 rounded-lg text-[10px] sm:text-[11px] text-rose-950 space-y-0.5 sm:space-y-1 shadow-sm max-w-sm transition-all hover:border-amber-400">
              <div className="flex justify-between border-b border-rose-100 pb-1">
                <span className="font-semibold text-rose-400 uppercase tracking-wider text-[8px] sm:text-[9px]">Chất liệu:</span>
                <span className="font-medium text-rose-900">Tình yêu & Sự chân thành</span>
              </div>
              <div className="flex justify-between pt-0.5">
                <span className="font-semibold text-rose-400 uppercase tracking-wider text-[8px] sm:text-[9px]">Người thực hiện:</span>
                <span className="font-handwriting text-xs sm:text-sm md:text-base font-bold text-[#be123c]">{hisName}</span>
              </div>
            </div>

          </div>

        </div>

        {/* Chân thiệp */}
        <div className="pt-2 mt-3 sm:mt-2 border-t border-rose-200/80 text-[9px] sm:text-[10px] text-rose-800/80 font-serif-art italic flex items-center justify-between">
          <span className="flex items-center gap-1">
            <span>"Stay radiant & happy everyday."</span>
            <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-rose-500 fill-rose-500 inline animate-ping" />
          </span>
          <span className="font-mono">20.10.2026</span>
        </div>
      </div>
    </div>
  );
}
