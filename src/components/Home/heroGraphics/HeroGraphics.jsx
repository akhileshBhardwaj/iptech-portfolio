import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { heroGraphicsData } from "./heroGraphicsData";
import HeroGraphicsCard from "./HeroGraphicsCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

const HeroGraphics = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <div className="relative w-full bg-transparent px-6 py-16 md:py-24">
      {/* Decorative dotted pattern */}
      <div className="pointer-events-none absolute right-10 top-16 hidden grid-cols-6 gap-2 opacity-60 lg:grid">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-amber-300" />
        ))}
      </div>
      <div className="pointer-events-none absolute bottom-10 left-6 hidden grid-cols-6 gap-2 opacity-60 lg:grid">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-amber-300" />
        ))}
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[40%_60%]">
        {/* ---------- LEFT CONTENT (40%) ---------- */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold tracking-wide text-amber-500"
          >
            GRAPHICS
          </motion.span>

        <motion.h2
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.1 }}
  className="mt-6 text-2xl font-bold text-slate-900 md:text-4xl"
>
  Visuals That Make <br />
  <span className="text-amber-400"> Brands </span>
  Stand Out
</motion.h2>

<motion.p
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="mt-6 max-w-md text-base leading-relaxed text-slate-500"
>
  We create eye-catching graphics that turn ideas into powerful visuals.
  From social media designs and promotional creatives to brand visuals,
  every design is crafted to capture attention and strengthen your brand.
</motion.p>

          <motion.button
            onClick={() => navigate("/graphics")}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-7 py-3.5 text-sm font-bold text-slate-900 shadow-md transition-colors hover:bg-amber-500"
          >
            View All
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </motion.button>
        </div>

        {/* ---------- RIGHT SLIDER (60%) ---------- */}
        <div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            spaceBetween={20}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2, slidesPerGroup: 1 },
              1024: { slidesPerView: 3, slidesPerGroup: 1 },
            }}
            className="overflow-hidden! pb-2!"
          >
            {heroGraphicsData.map((item, index) => (
              <SwiperSlide key={item.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  className="h-full"
                >
                  <HeroGraphicsCard {...item} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ---------- PAGINATION + NAV CONTROLS ---------- */}
          <div className="mt-6 flex items-center justify-between">
            {/* Pagination dots */}
            <div className="flex items-center gap-2">
              {heroGraphicsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => swiperRef.current?.slideToLoop(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-6 bg-amber-400"
                      : "w-2.5 bg-slate-200"
                  }`}
                />
              ))}
            </div>

            {/* Nav arrows - both connected to the same swiper instance */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous slide"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-50 text-slate-900 transition-colors duration-300 hover:bg-amber-100"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={2.25} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next slide"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400 text-slate-900 transition-colors duration-300 hover:bg-amber-500"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroGraphics;
