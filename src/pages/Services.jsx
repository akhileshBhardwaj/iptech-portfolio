import React from "react";
import ServiceHero from "../components/servicePage/ServiceHero/ServiceHero";
import ServicesSection from "../components/servicePage/serviceSection/ServicesSection";
import WhyChooseSection from "../components/servicePage/WhyChooseus/WhyChooseSection";
import OurProcessSection from "../components/servicePage/processSection/OurProcessSection";

const Services = () => {
  return (
    <div className="pt-20">
      <ServiceHero />

      {/* Services section */}
      <section>
        <ServicesSection />
      </section>

      {/* Why choose us */}
      <section>
        <WhyChooseSection />
      </section>

      {/* process section */}
      <section>
        <OurProcessSection />
      </section>
    </div>
  );
};

export default Services;
