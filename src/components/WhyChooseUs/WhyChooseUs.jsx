import BackgroundGlow from "../Contact/BackgroundGlow";

import WhyChooseLeft from "./WhyChooseLeft";
import MarketingDashboard from "./MarketingDashboard";
import StatsStrip from "./StatsStrip";

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF8] py-28">
      <BackgroundGlow />

      {/* Grid Pattern */}

      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#00000018 1px, transparent 1px),linear-gradient(90deg,#00000018 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-yellow-600">
            WHY CHOOSE US
          </span>

          <h2 className="mt-7 md:text-3xl md:font-bold lg:text-5xl  font-semibold lg:font-bold leading-tight text-gray-900">
            Why Choose
            <span className="text-yellow-500"> Our Agency?</span>
          </h2>

          <p className="mx-auto font-normal mt-6 max-w-2xl lg:text-lg leading-8 text-gray-500">
            We combine strategy, creativity and performance marketing to help
            brands scale faster than ever before.
          </p>
        </div>

        {/* Main */}

        <div className="grid items-center gap-16 xl:grid-cols-2">
          <WhyChooseLeft />

          <MarketingDashboard />
        </div>

        {/* Bottom */}

        <div className="mt-24">
          <StatsStrip />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
