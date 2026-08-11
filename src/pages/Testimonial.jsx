import React from "react";
import TestimonialHero from "../components/TestimonialPage/testimonialHero/TestimonialHero";
import TestimonialSlider from "../components/TestimonialPage/testimonialSlider/TestimonialSlider";
import ClientChooseUs from "../components/TestimonialPage/clientChooseUs/ClientChooseUs";

const Testimonial = () => {
  return (
    <div className="pt-20">
      {/* Hero section */}
      <section>
        <TestimonialHero />
      </section>

      <section>
        <TestimonialSlider />
      </section>

      <section>
        <ClientChooseUs/>
      </section>
    </div>
  );
};

export default Testimonial;
