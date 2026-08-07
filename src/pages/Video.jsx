import React from "react";
import VideoHero from "../components/VideoPage/VideoHero/VideoHero";
import TrendingSlider from "../components/VideoPage/TrendingSlider/TrendingSlider";
import UGCSection from "../components/VideoPage/UgcSection/UGCSection";
import CreativeIdeas from "../components/VideoPage/creativeIdeas/CreativeIdeas";
import Memes from "../components/VideoPage/memes/Memes";
import Shoot from "../components/VideoPage/shoot/Shoot";
import ScriptedVideo from "../components/VideoPage/scriptedVideo/ScriptedVideo";

const Video = () => {
  return (
    <div className="min-h-screen w-full bg-[#FBF7F0] pt-20">
      {/* Hero section */}
      <section className="px-4 sm:px-6">
        <VideoHero />
      </section>

      {/* Trending slider section */}
      <section className="px-4 sm:px-6 mt-10 sm:mt-14 pb-14">
        <TrendingSlider />
      </section>

      {/* Ugc section */}
      <section>
        <UGCSection />
      </section>

      {/* Scripted video */}
      <section>
        <ScriptedVideo />
      </section>

      {/* Creative Ideas/ Editing section */}
      <section>
        <CreativeIdeas />
      </section>

      {/* meme Section */}
      <section>
        <Memes />
      </section>

      {/* Shoot section */}

      <section>
        <Shoot />
      </section>
    </div>
  );
};

export default Video;
