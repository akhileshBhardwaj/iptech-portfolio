import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

import { videoData } from "../../VideoPage/videoData";
import TrendingCard from "./TrendingCard";

const AUTOPLAY_DELAY = 4000;

export default function TrendingSlider() {
  const swiperInstance = useRef(null);
  const [playingId, setPlayingId] = useState(null);

  const handlePlay = (id) => {
    setPlayingId(id);
    if (swiperInstance.current) {
      swiperInstance.current.autoplay.stop();
    }
  };

  const handlePauseOrEnd = () => {
    setPlayingId(null);
    if (swiperInstance.current) {
      swiperInstance.current.autoplay.start();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-transparent px-4 sm:px-6 py-3 sm:py-4"
    >
      <div className="max-w-350 mx-auto">
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <h2 className="flex items-center gap-2   md:text-xl font-extrabold text-gray-900">
            Trending <span className="text-orange-500">Now</span>
          </h2>

          <div className="flex items-center gap-3">
            <button
              onClick={() => swiperInstance.current?.slidePrev()}
              aria-label="Previous"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 p-0 text-2xl leading-none text-gray-950 transition-colors hover:bg-gray-200"
            >
              <span className="flex h-full w-full items-center justify-center pb-0.5">
                ‹
              </span>
            </button>
            <button
              onClick={() => swiperInstance.current?.slideNext()}
              aria-label="Next"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 p-0 text-2xl leading-none text-gray-950 transition-colors hover:bg-gray-200"
            >
              <span className="flex h-full w-full items-center justify-center pb-0.5">
                ›
              </span>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: AUTOPLAY_DELAY,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => (swiperInstance.current = swiper)}
          spaceBetween={16}
          slidesPerView={1.3}
          breakpoints={{
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 4 },
          }}
        >
          {videoData.slice(3, 9).map((v) => (
            <SwiperSlide key={v.id}>
              <TrendingCard
                data={v}
                isPlaying={playingId === v.id}
                onPlay={() => handlePlay(v.id)}
                onEnded={handlePauseOrEnd}
                onPause={handlePauseOrEnd}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-10">
          <a
            href="#"
            className="  border rounded text-md font-semibold border-orange-500 px-4 py-2  text-orange-400 hover:bg-orange-400 hover:text-white  hover:border-0"
          >
            View All
          </a>
        </div>
      </div>
    </motion.div>
  );
}
