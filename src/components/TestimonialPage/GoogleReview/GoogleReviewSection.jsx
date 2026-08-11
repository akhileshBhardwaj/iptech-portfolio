import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import GoogleReviewData from "./GoogleReviewData";
import GoogleReviewCard from "./GoogleReviewCard";
import GoogleReviewStatsBar from "./GoogleReviewStatsBar ";
import {
  GoogleIcon,
  StarIcon,
  ChevronLeft,
  ChevronRight,
  ArrowRightIcon,
  DoodleArrow,
  DoodleSpark,
} from "./GoogleReviewIcons";

const GoogleReviewSection = ({ testimonials = GoogleReviewData }) => {
  const swiperRef = useRef(null);

  return (
    <section className="relative overflow-hidden bg-transparent px-4 py-16 sm:py-20">
      {/* decorative doodles — hidden on small screens to avoid clutter */}
      <DoodleArrow className="pointer-events-none absolute left-[6%] top-24 hidden h-16 w-20 md:block" />
      <DoodleSpark className="pointer-events-none absolute right-[8%] top-32 hidden h-10 w-10 md:block" />

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FCEEDD] px-4 py-1.5 text-xs font-bold tracking-wide text-[#F5A623]">
          <GoogleIcon className="h-4 w-4" />
          GOOGLE REVIEWS
        </span>

        <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#14213D] sm:text-4xl">
          What Our Clients Say
          <br />
          About <span className="text-[#F5A623]">Our Work</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-[#5B6478]">
          Real feedback from real clients. We are proud to be highly rated by
          businesses we work with.
        </p>

        <div className="mt-5 flex flex-col items-center gap-2">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-6 w-6 text-[#F5A623]" />
            ))}
          </div>
          <p className="text-[#14213D]">
            <span className="font-bold text-[#F5A623]">4.9/5</span> average
            rating on Google
          </p>
        </div>
      </div>

      <div className="relative mx-auto mt-12 max-w-6xl">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous"
          className="absolute left-0 top-1/2 z-10 -translate-x-2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-[#FCEEDD] text-[#F5A623] shadow-lg transition hover:bg-white sm:-translate-x-5"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next"
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-2 grid h-11 w-11 place-items-center rounded-full bg-[#FCEEDD] text-[#F5A623] shadow-lg transition hover:bg-white sm:translate-x-5"
        >
          <ChevronRight />
        </button>

        <Swiper
          modules={[Autoplay]}
          onSwiper={(s) => (swiperRef.current = s)}
          loop
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="h-auto py-1">
              <GoogleReviewCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <GoogleReviewStatsBar />

      <div className="mt-8 flex justify-center">
        <a
          href="#"
          className="group inline-flex items-center gap-2 font-bold text-[#14213D]"
        >
          <GoogleIcon className="h-5 w-5" />
          <span className="border-b-2 border-dashed border-[#F5A623] pb-0.5">
            See all reviews on Google
          </span>
          <ArrowRightIcon className="h-4 w-4 text-[#F5A623] transition group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};

export default GoogleReviewSection;