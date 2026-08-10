import React from "react";
import herosectionImg from '../../assets/images/AboutImages/About-herosection.png'


export default function HeroSection() {
  return (
    <div className="bg-[#fdfaf5] px-5 sm:px-8 md:px-12 lg:px-[8vw] py-10 sm:py-14 md:py-16 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Left column */}
        <div className="text-center md:text-left">
          <p className="text-[#f5a623] font-semibold text-xs sm:text-[13px] tracking-[1.5px] mb-3">
            ABOUT US
          </p>
          <h1 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] font-bold leading-tight text-[#1a1a1a] mb-5">
            Turning Vision
            <br className="hidden sm:block" />
            {" "}Into <span className="text-[#f5a623]">Digital</span>
            <br className="hidden sm:block" />
            {" "}<span className="text-[#f5a623]">Impact</span>
          </h1>
          <p className="text-[#6b6b6b] text-sm sm:text-base leading-[1.7] max-w-105 mx-auto md:mx-0 mb-7 sm:mb-8">
            We believe in the power of creativity, data, and technology to
            build meaningful connections between brands and their audience.
          </p>

          <div className="flex flex-col items-center md:items-start gap-3">
            <button
              aria-label="Watch our story"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#f5a623] text-white text-base sm:text-lg flex items-center justify-center shadow-[0_8px_20px_rgba(245,166,35,0.35)] transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#f5a623] focus:ring-offset-2"
            >
              ▶
            </button>
            <div>
              <span className="block font-semibold text-[#1a1a1a] text-sm sm:text-[15px]">
                Watch Our Story
              </span>
              <span className="block text-xs sm:text-[13px] text-[#9a9a9a]">
                See how we transform ideas into results
              </span>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="relative flex justify-center items-center min-h-95 sm:min-h-115 md:min-h-125 mt-10 md:mt-0">
          {/* background blob */}
          <div className="absolute top-[4%] right-[6%] sm:top-[2%] sm:right-[2%] md:top-0 md:right-[4%] w-27.5 h-27.5 sm:w-37.5 sm:h-37.5 md:w-45 md:h-45 bg-[#f5a623] rounded-full z-0" />

          {/* main image */}
          <div className="relative w-60 h-75 sm:w-[320px] sm:h-95 md:w-95 md:h-110 rounded-[28px] overflow-hidden z-10 shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
            <img
              src={herosectionImg}
              alt="Team workspace with laptop"
              className="w-full h-full  object-top block"
            />
          </div>

          {/* dotted flow path - svg overlay */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-20 hidden sm:block"
            viewBox="0 0 400 460"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 40 60 C 10 90, 5 130, 45 150 C 90 172, 30 190, 55 215"
              stroke="#f5a623"
              strokeWidth="2"
              strokeDasharray="5 6"
              strokeLinecap="round"
            />
          </svg>

          {/* floating tag: Creative Ideas */}
          <div className="absolute top-0 left-0 sm:-left-2 md:-left-4 bg-white rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-[0_10px_24px_rgba(0,0,0,0.08)] flex items-center gap-2 z-30 w-37.5 sm:w-42.5">
            <div className="bg-[#fdf1de] rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm">
              💡
            </div>
            <p className="text-[11px] sm:text-xs font-semibold text-[#1a1a1a] m-0">
              Creative Ideas
            </p>
          </div>

          {/* floating tag: Smart Strategy */}
          <div className="absolute top-[42%] left-0 sm:-left-6 md:-left-10 bg-white rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-[0_10px_24px_rgba(0,0,0,0.08)] flex items-center gap-2 z-30 w-37.5 sm:w-42.5">
            <div className="bg-[#fdf1de] rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm">
              📊
            </div>
            <p className="text-[11px] sm:text-xs font-semibold text-[#1a1a1a] m-0">
              Smart Strategy
            </p>
          </div>

          {/* floating tag: Real Results */}
          <div className="absolute bottom-2 right-0 sm:-right-2 md:-right-4 bg-white rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-[0_10px_24px_rgba(0,0,0,0.08)] flex items-center gap-2 z-30 w-35 sm:w-40">
            <div className="bg-[#fdf1de] rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm">
              📈
            </div>
            <p className="text-[11px] sm:text-xs font-semibold text-[#1a1a1a] m-0">
              Real Results
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}