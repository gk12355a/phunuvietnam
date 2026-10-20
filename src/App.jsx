import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  ThumbsUp, 
  Sun, 
  Heart, 
  Volume2, 
  VolumeX, 
  ChevronRight, 
  ChevronLeft,
  Smile, 
  RotateCcw,
  ArrowRight,
  Gift,
  Send
} from 'lucide-react';
import { LeoZodiacConstellation, RoseBotanicalFlora } from './components/LeoArt';
import { FloatingPetalsBackground } from './components/FloatingPetals';
import { TypewriterText, CinematicDust } from './components/CinematicStory';

export default function App() {
  const herName = "Yến Phug";
  const hisName = "dtkien";

  // Quản lý kịch bản từng bước (0: Bắt đầu, 1: Nụ cười & Dịu dàng, 2: Cung Sư Tử đáng yêu, 3: Động lực & Tự tin, 4: Trang thiệp chính thức)
  const [currentStep, setCurrentStep] = useState(0);
  const [vergilQuoteIndex, setVergilQuoteIndex] = useState(0);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [typewriterKey, setTypewriterKey] = useState(0);
  const audioRef = useRef(null);

  // 3 bức ảnh chính
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

  // Bắn pháo hoa rực rỡ
  const triggerCelebration = () => {
    setVergilQuoteIndex(prev => (prev + 1) % VERGIL_QUOTES.length);
    confetti({
      particleCount: 45,
      angle: 60,
      spread: 65,
      origin: { x: 0.1, y: 0.7 },
      colors: ['#F43F5E', '#FDA4AF', '#F59E0B', '#FBBF24', '#FFFFFF']
    });
    confetti({
      particleCount: 45,
      angle: 120,
      spread: 65,
      origin: { x: 0.9, y: 0.7 },
      colors: ['#F43F5E', '#FDA4AF', '#F59E0B', '#FBBF24', '#FFFFFF']
    });
  };

  // Chuyển sang bước tiếp theo
  const goToNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
      setTypewriterKey(prev => prev + 1);
      confetti({
        particleCount: 30,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F43F5E', '#FDA4AF', '#FBBF24']
      });
      if (audioRef.current && !isPlayingMusic) {
        audioRef.current.play().then(() => setIsPlayingMusic(true)).catch(() => {});
      }
    }
  };

  // Quay về bước trước
  const goToPrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      setTypewriterKey(prev => prev + 1);
    }
  };

  // Các bước tâm sự và gửi gắm chân thành, cute
  const journeySteps = [
    {
      step: 0,
      tag: "MÓN QUÀ 20.10 DÀNH TẶNG EM",
      title: "Gửi Yến Phug — Điều Tuyệt Vời Nhất Của Hôm Nay",
      subtitle: "20.10.2026 • From dtkien with love",
      description: "Nhân ngày 20.10, thay vì chỉ là một lời chúc vội vàng, anh gom lại vài điều bé nhỏ và dễ thương nhất để gửi riêng cho em...",
      cuteBadge: "💌 Hộp Thư Bất Ngờ",
      buttonText: "Mở Hộp Thư Bất Ngờ ✨"
    },
    {
      step: 1,
      tag: "BƯỚC 1 • NỤ CƯỜI CỦA EM",
      title: "Điều Khiến Một Ngày Bỗng Trở Nên Đẹp Hơn",
      subtitle: "Chapter 1: The Brightest Smile",
      description: "Có những ngày mệt nhoài, nhưng chỉ cần thấy em vui vẻ và cười rạng rỡ là mọi thứ bỗng nhẹ tênh. Cảm ơn em vì luôn mang lại nguồn năng lượng dịu dàng và ấm áp như thế.",
      cuteBadge: "🌸 10 Điểm Xinh Đẹp",
      photo: mainPhoto,
      photoCaption: "Nụ cười rực rỡ nhất 💖",
      note: "Chúc Yến Phug mỗi sớm thức dậy đều có thật nhiều lý do để mỉm cười!"
    },
    {
      step: 2,
      tag: "BƯỚC 2 • CUNG SƯ TỬ ĐẶC BIỆT",
      title: "Cô Gái Ấm Áp, Tự Tin & Đáng Yêu ♌",
      subtitle: "Chapter 2: Leo's Golden Heart",
      description: "Vừa độc lập, kiêu hãnh lại vừa ngọt ngào và có những lúc ngố tàu siêu cute. Đừng bao giờ đánh mất sự tự tin và nét rạng ngời vốn có của mình nhé!",
      cuteBadge: "✨ Cung Sư Tử ♌",
      photo: subPhoto,
      photoCaption: "Góc nghiêng siêu cuốn ✨",
      note: "Em luôn là phiên bản đặc biệt và lấp lánh nhất theo cách của riêng em."
    },
    {
      step: 3,
      tag: "BƯỚC 3 • TIẾP THÊM ĐỘNG LỰC",
      title: "Luôn Có Người Cổ Vũ Em Hết Lòng!",
      subtitle: "Chapter 3: Motivation 1000%",
      description: "Dù sau này có gặp chuyện gì đau đầu hay deadline dí sát nút, hãy nhớ luôn có dtkien và Vergil giơ tay like ủng hộ em hết mình!",
      cuteBadge: "👍 Vergil Approved",
      photo: thirdPhoto,
      photoCaption: "Yến Phug mãi đỉnh 🌹",
      note: "Thêm một chút tự tin, thêm một chút yêu đời, và mọi điều tốt đẹp sẽ đến!"
    }
  ];

  return (
    <div className="min-h-screen md:h-screen w-screen rose-leo-bg text-[#3b121f] relative flex flex-col justify-start md:justify-between items-center p-2.5 sm:p-4 overflow-x-hidden md:overflow-hidden select-none py-3 sm:py-4">
      {/* HIỆU ỨNG CÁNH HOA & TRÁI TIM & SAO BAY THEO CHUỘT DÀY ĐẶC */}
      <FloatingPetalsBackground />

      {/* HIỆU ỨNG BỤI SAO VÀNG KIM */}
      <CinematicDust />

      {/* Ánh hào quang ấm áp của Mặt Trời */}
      <div className="absolute inset-0 sunlight-leo pointer-events-none" />

      {/* AUDIO PLAYER NHẠC NỀN SEE YOU AGAIN */}
      <audio 
        ref={audioRef} 
        src="/see-you-again.mp3" 
        autoPlay
        loop 
        preload="auto"
      />

      {/* THANH TOP BAR: RESPONSIVE TOÀN DIỆN */}
      <header className="relative z-30 w-full max-w-4xl flex flex-wrap items-center justify-between gap-2 px-2 py-1 mb-1 sm:mb-2">
        {/* Nút hành trình */}
        <div 
          onClick={triggerCelebration}
          className="flex items-center gap-1.5 sm:gap-2 bg-[#2d0f18]/85 text-rose-200 text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-rose-500/40 backdrop-blur-md shadow-sm transition-all hover:scale-105 cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
          <span className="font-mono font-medium tracking-wide">
            {currentStep < 4 ? `HÀNH TRÌNH 20.10 • BƯỚC ${currentStep + 1}/5` : `TRANG THIỆP CHÍNH THỨC ♌`}
          </span>
        </div>

        {/* Cụm tiến trình kịch bản (Progress Dots) */}
        <div className="flex items-center gap-1 sm:gap-1.5 bg-[#2d0f18]/80 px-2 sm:px-2.5 py-1 rounded-full border border-rose-500/30 backdrop-blur-md">
          {[0, 1, 2, 3, 4].map((stepIdx) => (
            <button
              key={stepIdx}
              onClick={() => {
                setCurrentStep(stepIdx);
                setTypewriterKey(prev => prev + 1);
              }}
              title={`Chuyển đến bước ${stepIdx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentStep === stepIdx 
                  ? 'w-4 sm:w-6 h-2 bg-gradient-to-r from-amber-400 to-rose-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]' 
                  : 'w-2 h-2 bg-rose-200/30 hover:bg-rose-200/60'
              }`}
            />
          ))}
        </div>

        {/* Nút điều khiển nhạc nền See You Again */}
        <button
          onClick={toggleMusic}
          className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs border transition-all duration-300 shadow-md backdrop-blur-md cursor-pointer ${
            isPlayingMusic 
              ? 'bg-rose-950/80 text-rose-200 border-rose-400/60 shadow-[0_0_12px_rgba(244,63,94,0.5)] animate-pulse' 
              : 'bg-black/60 text-stone-300 border-stone-600/40 hover:text-white'
          }`}
          title={isPlayingMusic ? "Tạm dừng nhạc" : "Bật bài hát See You Again"}
        >
          {isPlayingMusic ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-rose-400 animate-bounce flex-shrink-0" />
              <span className="font-medium tracking-wide hidden xs:inline">♫ See You Again</span>
              <span className="font-medium tracking-wide xs:hidden">♫ Bật</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" />
              <span className="font-medium">Nhạc ♫</span>
            </>
          )}
        </button>
      </header>

      {/* ========================================================================= */}
      {/* VÙNG NỘI DUNG CHÍNH (THE STAGE) - HỖ TRỢ TỐT MỌI KÍCH CỠ MÀN HÌNH          */}
      {/* ========================================================================= */}

      <main className="relative z-20 w-full max-w-4xl flex-1 flex flex-col justify-center items-center my-auto py-1 sm:py-2">
        
        {/* ======================= BƯỚC 0: MỞ ĐẦU HỘP THƯ 20.10 ======================= */}
        {currentStep === 0 && (
          <div className="w-full max-w-2xl bg-[#fff8f9]/95 border-2 border-rose-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl relative overflow-hidden animate-cinema-in text-center flex flex-col items-center">
            
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-200/40 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-amber-200/40 rounded-full blur-2xl pointer-events-none" />

            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-rose-900 text-amber-300 text-[10px] sm:text-xs font-mono uppercase tracking-widest mb-2 sm:mb-3 shadow-md border border-amber-400/30">
              <Gift className="w-3.5 h-3.5 text-amber-300 animate-bounce" />
              <span>{journeySteps[0].tag}</span>
            </div>

            <h1 className="text-xl sm:text-3xl md:text-4xl font-serif-art font-bold text-[#2a0e18] tracking-tight leading-tight mb-2">
              Dành Tặng Riêng Cho <br />
              <span className="text-[#be123c] font-handwriting text-3xl sm:text-4xl md:text-5xl underline decoration-amber-400">
                {herName}
              </span>
            </h1>

            <p className="text-[11px] sm:text-sm text-stone-500 font-mono tracking-wide mb-3 sm:mb-4">
              {journeySteps[0].subtitle}
            </p>

            {/* Thiệp tương tác cute */}
            <div 
              onClick={goToNextStep}
              className="w-full max-w-md bg-gradient-to-r from-[#240e17] via-[#351221] to-[#240e17] text-rose-100 p-3.5 sm:p-5 rounded-2xl border border-rose-400/40 shadow-xl cursor-pointer hover:scale-102 hover:border-amber-400 hover:shadow-[0_0_25px_rgba(251,191,36,0.5)] transition-all duration-300 group relative overflow-hidden my-1 sm:my-2"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-amber-400" />
              
              <div className="flex items-center justify-between border-b border-rose-500/30 pb-1.5 sm:pb-2 mb-1.5 sm:mb-2 text-xs font-mono">
                <span className="text-amber-300 flex items-center gap-1 text-[11px] sm:text-xs">
                  <Send className="w-3.5 h-3.5 text-rose-400" /> SPECIAL GIFT #2010
                </span>
                <span className="bg-rose-600/80 text-white px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold">FOR HER</span>
              </div>

              <div className="text-left my-1.5 sm:my-2">
                <p className="text-[10px] sm:text-xs text-rose-300 font-mono">Người nhận:</p>
                <p className="text-sm sm:text-lg font-serif-art text-amber-200 font-semibold group-hover:text-white transition-colors">
                  "Nàng Thơ Yến Phug ✨"
                </p>
                <p className="text-[10px] sm:text-xs text-stone-300 mt-0.5 sm:mt-1 italic font-cormorant">
                  Người gửi: <span className="text-rose-300 font-bold font-handwriting text-xs sm:text-sm">{hisName}</span>
                </p>
              </div>

              <div className="flex items-center justify-between pt-1.5 sm:pt-2 border-t border-rose-500/20 text-[11px] sm:text-xs text-amber-300 font-semibold">
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  {journeySteps[0].buttonText} <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 animate-pulse" />
                </span>
                <span className="text-sm sm:text-base">💌</span>
              </div>
            </div>

            {/* Lời gửi gắm dẫn nhập bằng máy đánh chữ */}
            <div className="min-h-[44px] sm:min-h-[48px] flex items-center justify-center px-1 sm:px-2 mt-2 sm:mt-3">
              <p className="text-xs sm:text-sm text-[#4a1c2a] font-serif-art italic leading-relaxed">
                <TypewriterText 
                  key={typewriterKey} 
                  text={journeySteps[0].description} 
                  speed={28} 
                />
              </p>
            </div>

            {/* Sticker Vergil chúc mừng nhỏ nhắn */}
            <div className="flex items-center gap-2 mt-3 sm:mt-4 text-[10px] sm:text-[11px] text-stone-600 bg-rose-100/70 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-rose-300/60">
              <ThumbsUp className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
              <span>Bấm vào thiệp ở trên để khám phá từng bất ngờ nhé!</span>
            </div>
          </div>
        )}

        {/* ======================= BƯỚC 1, 2, 3: CÁC BƯỚC KÈM ẢNH & LỜI GỬI GẮM CUTE ======================= */}
        {currentStep >= 1 && currentStep <= 3 && (
          <div className="w-full max-w-3xl bg-[#fff8f9]/95 border-2 border-rose-200/90 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 md:p-8 shadow-2xl relative overflow-hidden animate-cinema-in flex flex-col justify-between">
            
            {/* Header của bước */}
            <div className="flex items-center justify-between border-b border-rose-200/80 pb-2 sm:pb-3 mb-2 sm:mb-3">
              <div className="flex items-center gap-2">
                <span className="px-2 sm:px-2.5 py-0.5 rounded-full bg-rose-950 text-amber-300 text-[9px] sm:text-xs font-mono font-bold tracking-wider">
                  {journeySteps[currentStep].tag}
                </span>
                <span className="text-xs sm:text-sm font-handwriting text-rose-800 font-bold hidden sm:inline">
                  {journeySteps[currentStep].cuteBadge}
                </span>
              </div>

              {/* Tem Cung Sư Tử nhỏ nhắn */}
              <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-rose-900 bg-amber-100/80 px-2 sm:px-2.5 py-0.5 rounded-full border border-amber-300">
                <Sun className="w-3 h-3 text-amber-500 animate-spin" style={{ animationDuration: '6s' }} />
                <span>Leo ♌</span>
              </div>
            </div>

            {/* Nội dung Bước: Grid 1 cột Mobile / 12 cột Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-6 items-center my-auto">
              
              {/* Khung ảnh Polaroid */}
              <div className="md:col-span-5 flex flex-col items-center justify-center">
                <div className="relative group cursor-pointer animate-cute-float">
                  <div className="w-40 xs:w-44 sm:w-56 md:w-60 bg-white p-1.5 sm:p-2 pb-4 sm:pb-6 rounded-xl shadow-xl border-2 border-rose-200 transform -rotate-1 sm:-rotate-2 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300">
                    <div className="w-full h-44 xs:h-48 sm:h-60 md:h-64 rounded-lg overflow-hidden bg-rose-50 relative">
                      <img 
                        src={journeySteps[currentStep].photo} 
                        alt="Moment"
                        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                          currentStep === 3 ? 'object-[center_65%]' : 'object-cover'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                        <span className="text-white text-xs font-handwriting">
                          {journeySteps[currentStep].photoCaption}
                        </span>
                      </div>
                    </div>
                    {/* Chú thích viết tay dưới ảnh Polaroid */}
                    <p className="text-center font-handwriting text-xs sm:text-base font-bold text-rose-900 mt-1.5 sm:mt-2 truncate px-1">
                      {journeySteps[currentStep].photoCaption}
                    </p>
                  </div>

                  {/* Nhãn dán sticker Vergil thumbs up mini ở góc ảnh */}
                  <div 
                    onClick={triggerCelebration}
                    className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-lg border border-rose-300 hover:scale-125 transition-transform"
                    title="Bấm để nhận pháo hoa!"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden bg-slate-900 border border-amber-300 flex items-center justify-center">
                      <img src="/vergil-thumb.png" alt="Vergil" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Lời gửi gắm & Tâm sự chân thành */}
              <div className="md:col-span-7 flex flex-col justify-center text-left space-y-2 sm:space-y-3">
                <div>
                  <h2 className="text-lg sm:text-2xl md:text-3xl font-serif-art font-bold text-[#2a0e18] leading-tight">
                    {journeySteps[currentStep].title}
                  </h2>
                  <p className="text-[11px] sm:text-sm font-mono text-stone-500 mt-0.5">
                    {journeySteps[currentStep].subtitle}
                  </p>
                </div>

                {/* Hộp thoại máy đánh chữ lời tự sự */}
                <div className="bg-[#fff0f3] border-l-4 border-[#be123c] p-2.5 sm:p-4 rounded-r-xl shadow-xs">
                  <p className="font-serif-art text-xs sm:text-sm md:text-base text-[#38111e] italic leading-relaxed min-h-[42px] sm:min-h-[50px]">
                    "
                    <TypewriterText 
                      key={typewriterKey} 
                      text={journeySteps[currentStep].description} 
                      speed={25} 
                    />
                    "
                  </p>
                </div>

                {/* Khung lời nhắn cute của dtkien */}
                <div className="bg-[#240e17] text-rose-100 p-2 sm:p-3 rounded-xl border border-rose-400/40 text-xs space-y-1 shadow-md">
                  <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-amber-300 font-mono">
                    <span className="flex items-center gap-1 font-bold">
                      <Smile className="w-3 h-3 text-rose-400" />
                      dtkien gửi em:
                    </span>
                    <span className="text-[8px] sm:text-[9px] bg-rose-900/60 px-1.5 py-0.5 rounded text-rose-200">
                      Step {currentStep} • Sweet Note
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-sm font-cormorant italic text-stone-200 leading-snug">
                    {journeySteps[currentStep].note}
                  </p>
                </div>

              </div>

            </div>

            {/* Thanh điều hướng ở cuối */}
            <div className="flex items-center justify-between pt-2.5 sm:pt-3 mt-2 sm:mt-3 border-t border-rose-200/80">
              <button
                onClick={goToPrevStep}
                className="px-2.5 sm:px-4 py-1.5 rounded-full text-xs font-mono font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-all cursor-pointer flex items-center gap-1"
              >
                <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Quay Lại
              </button>

              <button
                onClick={goToNextStep}
                className="px-3.5 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-lg hover:shadow-rose-500/50 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5 group"
              >
                <span>{currentStep === 3 ? "Xem Thiệp Chính Thức" : "Bước Tiếp Theo"}</span>
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        )}

        {/* ======================= BƯỚC 4: TRANG THIỆP NGHỆ THUẬT CHÍNH THỨC ======================= */}
        {currentStep === 4 && (
          <div className="w-full max-w-4xl paper-texture-rose leo-card-shadow rounded-2xl p-4 sm:p-6 md:p-8 border border-[#fecdd3]/80 flex flex-col justify-between md:max-h-[calc(100vh-4.5rem)] animate-cinema-in transition-all duration-500 hover:shadow-[0_30px_60px_-10px_rgba(244,63,94,0.35)] relative mt-2 md:mt-0">
            
            {/* Nút xem lại hành trình từ đầu */}
            <button
              onClick={() => {
                setCurrentStep(0);
                setTypewriterKey(prev => prev + 1);
              }}
              className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 z-30 flex items-center gap-1 text-[9px] sm:text-xs font-mono bg-rose-900/85 text-amber-300 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-amber-400/30 hover:scale-105 transition-all cursor-pointer shadow-md"
              title="Xem lại từng bước từ đầu"
            >
              <RotateCcw className="w-3 h-3 text-amber-400" />
              <span>Xem Lại Từ Đầu ✨</span>
            </button>

            {/* STICKER VERGIL MEME THUMBS UP */}
            <div 
              onClick={triggerCelebration}
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
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 items-center relative z-10 my-auto pt-5 sm:pt-2">
              
              {/* CỘT TRÁI: ẢNH NÀNG THƠ + POLAROID LỒNG ĐÈ */}
              <div className="md:col-span-5 flex flex-col items-center justify-center relative mt-3 sm:mt-0">
                <div className="absolute -left-4 top-2 bottom-2 w-3 bg-[#fb7185]/25 rounded-r -z-1 hidden md:block" />

                {/* Bức ảnh chân dung chính */}
                <div className="relative w-36 xs:w-40 sm:w-48 md:w-60 h-48 xs:h-52 sm:h-60 md:h-72 rounded-md overflow-hidden shadow-xl border-[3px] border-white bg-rose-50/50 group/main cursor-pointer">
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
                <div className="relative -mt-12 sm:-mt-16 md:-mt-20 flex items-center justify-center w-full z-20 pointer-events-none">
                  {/* Polaroid 1 (pic2) */}
                  <div className="pointer-events-auto -mr-2 sm:-mr-3 md:-mr-4 w-20 sm:w-26 md:w-32 bg-white p-1 pb-2 sm:pb-2.5 rounded shadow-xl border border-rose-200/90 -rotate-6 hover:rotate-0 hover:scale-115 hover:z-30 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                    <div className="overflow-hidden rounded aspect-[4/5] bg-rose-50 flex items-center justify-center">
                      <img 
                        src={subPhoto} 
                        alt="Moment 1" 
                        className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <p className="text-[7.5px] sm:text-[9px] font-handwriting text-center mt-0.5 sm:mt-1 text-rose-900 font-semibold tracking-wide truncate px-0.5">
                      Nụ cười của em ✨
                    </p>
                  </div>

                  {/* Polaroid 2 (pic3) */}
                  <div className="pointer-events-auto -ml-2 sm:-ml-3 md:-ml-4 w-20 sm:w-26 md:w-32 bg-white p-1 pb-2 sm:pb-2.5 rounded shadow-xl border border-rose-200/90 rotate-6 hover:rotate-0 hover:scale-115 hover:z-30 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                    <div className="overflow-hidden rounded aspect-[4/5] bg-rose-50 flex items-center justify-center">
                      <img 
                        src={thirdPhoto} 
                        alt="Moment 2" 
                        className="w-full h-full object-cover object-[center_65%] transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <p className="text-[7.5px] sm:text-[9px] font-handwriting text-center mt-0.5 sm:mt-1 text-rose-900 font-semibold tracking-wide truncate px-0.5">
                      Nàng thơ Yến Phug 💖
                    </p>
                  </div>
                </div>

                {/* Tem bảo tàng vintage tone vàng hồng */}
                <div className="flex items-center gap-1.5 mt-2 z-10">
                  <div 
                    onClick={triggerCelebration}
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
              <div className="md:col-span-7 flex flex-col justify-center text-left space-y-2 sm:space-y-3 pr-0 sm:pr-2 md:pr-4 mt-1 sm:mt-0">
                
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
                  onClick={triggerCelebration}
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
        )}

      </main>

      {/* FOOTER BẢN QUYỀN VÀ TRÁI TIM NHẸ NHÀNG */}
      <footer className="relative z-20 text-center py-1 text-[10px] font-mono text-rose-300/70">
        <span>Made with 💖 by {hisName} for {herName} • 20.10 Special Edition</span>
      </footer>
    </div>
  );
}
