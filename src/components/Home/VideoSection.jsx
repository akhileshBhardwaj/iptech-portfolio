import VideoCard from "./VideoCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

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
        <Swiper
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
    </section>
  );
};

export default VideoSection;
