import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import testimonialsData from "./testimonialsData";

/**
 * TestimonialSlider
 * Standalone dark testimonial-carousel panel. Center slide is enlarged /
 * white, side slides are dimmed — built with Swiper (loop + centeredSlides +
 * autoplay) and animated in with Framer Motion. Autoplay pauses on hover and
 * resumes when the pointer leaves; any manual arrow/dot click also pauses
 * briefly (disableOnInteraction: false keeps it auto-resuming after).
 *
 * Requires: `npm install swiper framer-motion lucide-react`
 * No required props — safe default export.
 */
export default function TestimonialSlider() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const easeOut = [0.16, 1, 0.3, 1];

  const goPrev = () => swiperRef.current?.slidePrev();
  const goNext = () => swiperRef.current?.slideNext();
  const goTo = (i) => swiperRef.current?.slideToLoop(i);

  return (
    <section className="w-full bg-[#FBF3E7] px-3 py-12 sm:px-6 sm:py-16 md:px-8 md:py-24">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@1,600;1,700&display=swap');
        .ts-panel .swiper-slide { height: auto; display: flex; align-items: stretch; }
        .ts-panel .swiper-wrapper { align-items: stretch; padding: 8px 0 28px; }
      `}</style>

      <div className="ts-panel relative mx-auto max-w-6xl overflow-hidden rounded-[1.5rem] bg-[#0E1330] px-4 py-10 shadow-2xl sm:rounded-[2rem] sm:px-8 sm:py-14 md:px-10 md:py-16">
        {/* ambient background glow */}
        <div
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #F7B733, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #F7B733, transparent 70%)" }}
        />

        {/* heading */}
        <div className="relative z-10 mb-8 text-center sm:mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="mb-3 flex items-center justify-center gap-2 sm:mb-4 sm:gap-3"
          >
            <span className="h-px w-6 bg-amber-400/60 sm:w-8" />
            <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-amber-400 sm:text-xs sm:tracking-[0.2em]">
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              Client Voices
            </span>
            <span className="h-px w-6 bg-amber-400/60 sm:w-8" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
            className="font-[Inter,sans-serif] text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl"
          >
            Words that{" "}
            <span
              className="text-amber-400"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
            >
              inspire us
            </span>
          </motion.h2>
        </div>

        {/* slider row with side arrows (arrows hidden on mobile — swipe/dots handle nav there) */}
        <div className="relative z-10 flex items-stretch gap-2 sm:gap-4 md:gap-5">
          <NavButton direction="left" onClick={goPrev} className="hidden sm:flex" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: easeOut }}
            className="min-w-0 flex-1"
          >
            <Swiper
              modules={[Autoplay]}
              onSwiper={(s) => (swiperRef.current = s)}
              onSlideChange={(s) => setActiveIndex(s.realIndex)}
              loop
              centeredSlides
              grabCursor
              spaceBetween={16}
              slidesPerView={1}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                480: { slidesPerView: 1.08, spaceBetween: 16 },
                640: { slidesPerView: 1.3, spaceBetween: 20 },
                1024: { slidesPerView: 1.7, spaceBetween: 28 },
              }}
            >
              {testimonialsData.map((t, i) => (
                <SwiperSlide key={t.id}>
                  <TestimonialCard
                    testimonial={t}
                    isActive={i === activeIndex}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          <NavButton direction="right" onClick={goNext} className="hidden sm:flex" />
        </div>

        {/* custom pagination dots */}
        <div className="relative z-10 mt-6 flex items-center justify-center gap-2 sm:mt-8">
          {testimonialsData.map((t, i) => {
            const active = i === activeIndex;
            return (
              <button
                key={t.id}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className="relative h-2.5 rounded-full bg-white/20 transition-colors"
                style={{ width: active ? 24 : 10 }}
              >
                {active && (
                  <motion.span
                    layoutId="activeDot"
                    className="absolute inset-0 rounded-full bg-amber-400"
                    transition={{ duration: 0.35, ease: easeOut }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function NavButton({ direction, onClick, className = "" }) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  return (
    <motion.button
      onClick={onClick}
      aria-label={direction === "left" ? "Previous testimonial" : "Next testimonial"}
      whileHover={{ scale: 1.08, backgroundColor: "#F7B733" }}
      whileTap={{ scale: 0.94 }}
      className={[
        "my-auto h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors sm:h-12 sm:w-12",
        className,
      ].join(" ")}
    >
      <Icon className="h-5 w-5" />
    </motion.button>
  );
}