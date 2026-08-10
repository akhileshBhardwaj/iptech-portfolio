import React from "react";
import HeroSection from "../components/AboutPage/HeroSection";
import StatsSection from "../components/AboutPage/StatsSection";
import InformSection from "../components/AboutPage/InformSection";
import MileStone from "../components/AboutPage/MileStone";
import impactSection from "../components/AboutPage/ImpactSection";

const About = () => {
  return (
    <div className="pt-20">
      {/* hero section */}
      <section>
        <HeroSection />
      </section>

      {/* Stats Section */}
      <section>
        <StatsSection />
      </section>

      {/* INform section */}
      <section>
        <InformSection />
      </section>
      {/* Mile stone section */}
        <section>
          <MileStone/>
        </section>
      {/* impact section */}
      <section>
        <InformSection/>
      </section>
    </div>
  );
};

export default About;
