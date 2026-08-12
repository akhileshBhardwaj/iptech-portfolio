import React from "react";
import Hero from "../components/Hero/Hero";
import BrandSection from "../components/BrandSection/BrandSection";
import VideoSection from "../components/Home/VideoSection";
import BackgroundGlow from "../components/Contact/BackgroundGlow";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import VideoSlider from "../components/Home/videoSlider/VideoSlider";
import HomeLastBg from "../components/Home/HomeLastBg";
import HeroGraphics from "../components/Home/heroGraphics/HeroGraphics";
import SocialMediaResults from "../components/Home/Results/SocialMediaResult/SocialMediaResults";

const Home = () => {
  return (
    <main className="relative overflow-hidden bg-[#FFFDF8] min-h-screen">
      {/* Background Glow */}
      <BackgroundGlow />

      {/* Hero */}
      <section className="relative z-10">
        <Hero />
      </section>

      {/* Brand Section */}
      <section className="relative z-10">
        <BrandSection />
      </section>

      {/* Video Section */}
      <section className="relative z-10">
        <VideoSection />
      </section>
      <section>
        <WhyChooseUs />
      </section>
      {/* Video section */}
      <section>
        <VideoSlider />
      </section>

      {/* Graphics section */}
      <section>
        <HeroGraphics />
      </section>

      <section>
        <SocialMediaResults />
      </section>

      {/* Last bg */}
      <section>
        <HomeLastBg />
      </section>
    </main>
  );
};

export default Home;
