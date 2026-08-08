import React from "react";
import { ArrowRight, TrendingUp, Star } from "lucide-react";
import image from '../../../assets/images/services/service_cta-img-Photoroom.png'

const CTASection = ({
  eyebrow = "LET'S WORK TOGETHER",
  heading = "Ready to Grow Your Business?",
  description = "Let's build something amazing together. Tell us about your project and we'll get back to you with the best solution.",
  buttonText = "Start Your Project",
  onButtonClick,
  stats = [
    {
      icon: TrendingUp,
      value: "500+",
      label: "Projects done",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Client rating",
    },
  ],
}) => {
  // Icon components ko variable me store karna zaroori hai
  const StatIconOne = stats[0]?.icon;
  const StatIconTwo = stats[1]?.icon;

  return (
    <section className=" max-w-[80%] w-full mx-auto my-15 px-10 relative overflow-hidden rounded-[28px] bg-[#FBBF24]">
      {/* Dotted Texture */}

      <div className="pointer-events-none absolute right-[26%] top-8 hidden grid-cols-6 gap-2.5 opacity-40 sm:grid">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-white" />
        ))}
      </div>

      {/* Main Content */}

      <div className="relative z-10 flex h-full flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
        {/* LEFT */}

        <div className="max-w-lg py-8 sm:py-16">
          {/* Eyebrow */}

          <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold tracking-wide text-white backdrop-blur-sm">
            {eyebrow}
          </span>

          {/* Heading */}

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl">
            {heading}
          </h2>

          {/* Description */}

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/85 md:text-[15px]">
            {description}
          </p>

          {/* Button */}

          <button
            onClick={onButtonClick}
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#101B33]
              px-7
              py-3.5
              text-sm
              font-bold
              text-white
              shadow-[0_14px_30px_-12px_rgba(16,27,51,0.6)]
              transition-transform
              hover:scale-[1.03]
              active:scale-[0.98]
            "
          >
            {buttonText}

            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </div>

        {/* RIGHT IMAGE */}

        <div className="relative mx-auto mt-4 h-56 w-56 shrink-0 sm:mx-0 sm:-mb-14 sm:-mt-14 sm:h-75 sm:w-75">
          <div className="h-full w-full overflow-hidden rounded-full border-[6px] border-white shadow-[0_25px_50px_-15px_rgba(16,27,51,0.4)] sm:border-8">
            <img
              src={image}
              alt="Person working on a laptop"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating Chip - Top */}

          {stats[0] && StatIconOne && (
            <div
              className="
                absolute
                -left-6
                top-2
                flex
                items-center
                gap-2
                rounded-2xl
                bg-white
                px-3.5
                py-2.5
                shadow-[0_15px_30px_-10px_rgba(16,27,51,0.3)]
                sm:-left-10
                sm:top-6
              "
            >
              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[#FEF3D6]
                "
              >
                <StatIconOne
                  className="h-4 w-4 text-[#F5A623]"
                  strokeWidth={2}
                />
              </span>

              <div className="leading-tight">
                <p className="text-sm font-extrabold text-[#101B33]">
                  {stats[0].value}
                </p>

                <p className="text-[10px] text-[#6B7280]">{stats[0].label}</p>
              </div>
            </div>
          )}

          {/* Floating Chip - Bottom */}

          {stats[1] && StatIconTwo && (
            <div
              className="
                absolute
                -right-4
                bottom-4
                flex
                items-center
                gap-2
                rounded-2xl
                bg-white
                px-3.5
                py-2.5
                shadow-[0_15px_30px_-10px_rgba(16,27,51,0.3)]
                sm:-right-8
                sm:bottom-10
              "
            >
              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[#FEF3D6]
                "
              >
                <StatIconTwo
                  className="h-4 w-4 text-[#F5A623]"
                  strokeWidth={2}
                />
              </span>

              <div className="leading-tight">
                <p className="text-sm font-extrabold text-[#101B33]">
                  {stats[1].value}
                </p>

                <p className="text-[10px] text-[#6B7280]">{stats[1].label}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
