import React from "react";
import TestimonialHero from "../components/TestimonialPage/testimonialHero/TestimonialHero";
import TestimonialSlider from "../components/TestimonialPage/testimonialSlider/TestimonialSlider";
import ClientChooseUs from "../components/TestimonialPage/clientChooseUs/ClientChooseUs";
import TestimonialLastBg from "../components/TestimonialPage/testimonialLastBg/TestimonialLastBg";
import OurTeam from "../components/TestimonialPage/team/OurTeam";
import GoogleReviewSection from "../components/TestimonialPage/GoogleReview/GoogleReviewSection";

const Testimonial = () => {
  return (
    <div className="pt-20 bg-[#FDF8F1] ">
      {/* Hero section */}
      <section>
        <TestimonialHero />
      </section>

      <section>
        <TestimonialSlider />
      </section>

      <section>
        <ClientChooseUs />
      </section>

      <section>
        <OurTeam />
      </section>

      <section>
        <GoogleReviewSection />
      </section>

      <section>
        <TestimonialLastBg />
      </section>
    </div>
  );
};

export default Testimonial;
