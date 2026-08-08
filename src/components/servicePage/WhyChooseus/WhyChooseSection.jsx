import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { whyChooseData } from "./whyChooseData";
import WhyChooseCard from "./WhyChooseCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WhyChooseSection = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <section className="relative w-full bg-transparent px-6 py-16 md:py-24">
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
        {/* ---------- LEFT CONTENT (30%) ---------- */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold tracking-wide text-amber-500"
          >
            WHY CHOOSE US
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl"
          >
            We Combine
            <br />
            <span className="text-amber-400">Creativity</span>
            <br />
            With Strategy
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-md text-base leading-relaxed text-slate-500"
          >
            We don't just deliver services, we build partnerships. Our goal
            is your growth, and we achieve it through creativity, technology,
            and commitment.
          </motion.p>

          <motion.a
            href="#"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-7 py-3.5 text-sm font-bold text-slate-900 shadow-md transition-colors hover:bg-amber-500"
          >
            Let's Talk
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </motion.a>
        </div>

        {/* ---------- RIGHT SLIDER (70%) ---------- */}
        <div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            spaceBetween={20}
            slidesPerView={2}
            slidesPerGroup={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              1024: { slidesPerView: 3, slidesPerGroup: 1 },
            }}
            className="!overflow-hidden !pb-2"
          >
            {whyChooseData.map((item, index) => (
              <SwiperSlide key={item.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  className="h-full"
                >
                  <WhyChooseCard {...item} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ---------- PAGINATION + NAV CONTROLS ---------- */}
          <div className="mt-6 flex items-center justify-between">
            {/* Pagination dots */}
            <div className="flex items-center gap-2">
              {whyChooseData.map((_, index) => (
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
    </section>
  );
};

export default WhyChooseSection;