import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import TEAM_MEMBERS from "./TEAM_MEMBERS";
import TeamCard from "./TeamCard";
import { ChevronLeft, ChevronRight } from "./Icons";

const OurTeam = ({ team = TEAM_MEMBERS }) => {
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);

  return (
    <section className=" bg-transparent px-4 pt-5 ">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full bg-[#FCEEDD] px-4 py-1.5 text-xs font-bold tracking-wide text-[#F5A623]">
          OUR TEAM
        </span>
        <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#14213D] sm:text-4xl">
          The Experts Behind
          <br />
          Your <span className="text-[#F5A623]">Digital Growth</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[#5B6478]">
          A passionate team of digital marketers, strategists, and creatives
          committed to delivering real results.
        </p>
      </div>

      <div className="relative mx-auto mt-12 max-w-6xl">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous"
          className="absolute left-0 top-1/2 z-10 -translate-x-2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white text-[#F5A623] shadow-lg transition hover:bg-[#FCEEDD] sm:-translate-x-5"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next"
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-2 grid h-11 w-11 place-items-center rounded-full bg-white text-[#F5A623] shadow-lg transition hover:bg-[#FCEEDD] sm:translate-x-5"
        >
          <ChevronRight />
        </button>

        <Swiper
          modules={[Autoplay]}
          onSwiper={(s) => (swiperRef.current = s)}
          onSlideChange={(s) => setActive(s.realIndex)}
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
          {team.map((member) => (
            <SwiperSlide key={member.id}>
              <TeamCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-9 flex items-center justify-center gap-2">
        {team.map((_, i) => (
          <button
            key={i}
            onClick={() => swiperRef.current?.slideToLoop(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-[#F5A623]" : "w-2 bg-[#F3DFC1]"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
