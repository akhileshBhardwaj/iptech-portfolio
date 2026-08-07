import { useEffect, useRef } from "react";

import ContactHero from "../components/Contact/ContactHero";
import ContactInfoCard from "../components/Contact/ContactInfoCard";
import ContactForm from "../components/Contact/ContactForm";
import ContactMap from "../components/Contact/ContactMap";
import FAQ from "../components/Contact/FAQ";
import CTA from "../components/Contact/CTA";
import BackgroundGlow from "../components/Contact/BackgroundGlow";
import FloatingParticles from "../components/Contact/FloatingParticles";

const ContactUs = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!glowRef.current) return;

      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="relative overflow-hidden bg-[#FFFDF8]">
      {/* Floating Particles */}
      <FloatingParticles />

      {/* Background Glow */}
      <BackgroundGlow />

      {/* Mouse Glow */}
      <div
        ref={glowRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-0
          h-80
          w-80
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-yellow-300/20
          blur-[120px]
          transition-all
          duration-150
        "
      />

      {/* Hero */}
      <div className="relative z-10">
        <ContactHero />
      </div>

      {/* Contact Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <ContactInfoCard />

          <ContactForm />
        </div>
      </section>

      {/* Google Map */}
      <div className="relative z-10">
        <ContactMap />
      </div>

      {/* FAQ */}
      <div className="relative z-10">
        <FAQ />
      </div>

      {/* CTA */}
      <div className="relative z-10">
        <CTA />
      </div>
    </main>
  );
};

export default ContactUs;
