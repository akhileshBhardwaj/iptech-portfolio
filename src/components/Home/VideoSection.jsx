import { useRef, useState } from "react";
import VideoCard from "./VideoCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";

import BackgroundGlow from "../Contact/BackgroundGlow";

const videos = [
  {
    id: 1,
    title: "Social Media Marketing",
    category: "Marketing",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    title: "Website Development",
    category: "Development",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
  {
    id: 3,
    title: "Graphic Design",
    category: "Design",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 4,
    title: "Video Editing",
    category: "Editing",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
  {
    id: 5,
    title: "Meta Ads",
    category: "Advertising",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const VideoSection = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#FFFDF8] py-24">
      {/* Background Glow */}
      <BackgroundGlow />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#00000015 1px, transparent 1px), linear-gradient(90deg, #00000015 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
            Our Works
          </span>

          <h2 className="mt-5 text-2xl lg:text-3xl lg:font-bold font-black text-gray-900">
            Featured <span className="text-yellow-500">Videos</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-500">
            Explore our latest creative work, branding campaigns, website
            development projects and digital marketing success stories.
          </p>
        </div>

        {/* Swiper */}
        <div
          onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
          onMouseLeave={() => swiperRef.current?.autoplay?.start()}
        >
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            modules={[Autoplay]}
            spaceBetween={30}
            loop={true}
            speed={1200}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {videos.map((item) => (
              <SwiperSlide key={item.id}>
                <VideoCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

       {/* Custom Nav + Dots */}
        <div className="mt-10 flex justify-center ">
          <div className="flex items-center gap-4 rounded-full border border-yellow-200 bg-white px-5 py-3 shadow-md">
            {/* Prev Button */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-gray-300
                text-gray-700
                transition
                duration-300
                hover:border-yellow-400
                hover:bg-yellow-50
                hover:text-yellow-600
              "
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {videos.map((_, index) => (
                <span
                  key={index}
                  className={`
                    h-2
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      activeIndex === index
                        ? "w-6 bg-yellow-400"
                        : "w-2 bg-gray-300"
                    }
                  `}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-gray-300
                text-gray-700
                transition
                duration-300
                hover:border-yellow-400
                hover:bg-yellow-50
                hover:text-yellow-600
              "
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
