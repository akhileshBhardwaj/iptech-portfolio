import React from "react";
import ServiceHero from "../components/servicePage/ServiceHero/ServiceHero";
import ServicesSection from "../components/servicePage/serviceSection/ServicesSection";
import WhyChooseSection from "../components/servicePage/WhyChooseus/WhyChooseSection";
import OurProcessSection from "../components/servicePage/processSection/OurProcessSection";
import CTASection from "../components/servicePage/CTAsection/CTASection";

const Services = () => {
  return (
    <div className="pt-20  bg-[#FDF8F1] ">
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

      {/* CTA */}
      <section>
        <CTASection/>
      </section>

    </div>
  );
};

export default Services;
