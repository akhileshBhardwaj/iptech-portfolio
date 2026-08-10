import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "./swiper-custom.css";

import { graphicsPageData } from "./graphicsPageData";
import GraphicsSlideCard from "./GraphicsSlideCard";
import GraphicsInfoPanel from "./GraphicsInfoPanel";

const AUTOPLAY_DELAY = 4000;

export default function GraphicsHeroPage() {
  const swiperInstance = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const total = graphicsPageData.length;
  const prevIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;
  const activeData = graphicsPageData[activeIndex];

  return (
    <div className="w-full max-w-350 mx-auto px-3 sm:px-5 py-4 sm:py-6 flex items-center gap-2 sm:gap-3 lg:gap-4">
      {/* Left decorative peek + arrow — desktop only */}
      <div className="hidden lg:block relative flex-none w-20 xl:w-22.5 h-95 rounded-[20px] overflow-hidden">
        <img
          className="w-full h-full object-cover brightness-[0.55]"
          src={graphicsPageData[prevIndex].thumbnail}
          alt=""
        />
        <button
          onClick={() => swiperInstance.current?.slidePrev()}
          aria-label="Previous slide"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-gray-900 text-xl flex items-center justify-center shadow-md hover:scale-105 transition-transform"
        >
          ‹
        </button>
      </div>

      {/* Center card: swiper + info panel */}
      <div className="flex-1 flex flex-col lg:flex-row bg-[#12141a] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl min-h-55 sm:min-h-85 lg:min-h-95">
        <div className="relative w-full lg:w-[62%]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: AUTOPLAY_DELAY,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              bulletClass: "hero-bullet",
              bulletActiveClass: "hero-bullet-active",
            }}
            onSwiper={(swiper) => (swiperInstance.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full h-full"
          >
            {graphicsPageData.map((v) => (
              <SwiperSlide key={v.id}>
                <GraphicsSlideCard data={v} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10"></div>
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-black/65 text-white text-[11px] sm:text-xs font-semibold px-2 py-1 rounded-md z-10">
            {activeIndex + 1} / {total}
          </div>

          {/* Mobile/tablet nav arrows overlaid on video */}
          <button
            onClick={() => swiperInstance.current?.slidePrev()}
            aria-label="Previous slide"
            className="lg:hidden absolute top-1/2 left-2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center z-10"
          >
            ‹
          </button>
          <button
            onClick={() => swiperInstance.current?.slideNext()}
            aria-label="Next slide"
            className="lg:hidden absolute top-1/2 right-2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center z-10"
          >
            ›
          </button>
        </div>

        <GraphicsInfoPanel data={activeData} />
      </div>

      {/* Right decorative peek + arrow — desktop only */}
      <div className="hidden lg:block relative flex-none w-20 xl:w-22.5 h-95 rounded-[20px] overflow-hidden">
        <img
          className="w-full h-full object-cover brightness-[0.55]"
          src={graphicsPageData[nextIndex].thumbnail}
          alt=""
        />
        <button
          onClick={() => swiperInstance.current?.slideNext()}
          aria-label="Next slide"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-gray-900 text-xl flex items-center justify-center shadow-md hover:scale-105 transition-transform"
        >
          ›
        </button>
      </div>
    </div>
  );
}
