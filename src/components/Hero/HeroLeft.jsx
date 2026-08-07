import { ArrowRight, Play } from "lucide-react";

const HeroLeft = () => {
  return (
    <div className="w-full max-w-2xl px-4 sm:px-0">
      <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
        Creative Digital Agency
      </span>

      <h1 className=" mt-8 text-[30px] leading-tight font-bold tracking-tight text-gray-900 sm:text-[38px] lg:text-5xl ">
        Digital Experiences
        <br />
        That
        <span className="text-yellow-400"> Drive Results.</span>
      </h1>

      <p className="mt-8 text-lg font-light md:font-normal leading-8 text-gray-500">
        We create premium websites, branding, social media marketing and
        performance campaigns that help businesses grow faster.
      </p>

      <div className="mt-10 flex flex-wrap gap-5">
        <button className="flex items-center gap-3 rounded-xl bg-yellow-400 px-7 py-4 font-semibold transition hover:scale-105">
          Get Started
          <ArrowRight size={18} />
        </button>

        <button className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-7 py-4 shadow-sm transition hover:border-yellow-400">
          <div className="rounded-full bg-yellow-400 p-2">
            <Play fill="white" size={15} className="text-white" />
          </div>
          Learn More
        </button>
      </div>

      <div className="mt-16 flex gap-12">
        <div>
          <h2 className="text-4xl font-bold">250+</h2>
          <p className="text-gray-500">Projects</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">98%</h2>
          <p className="text-gray-500">Client Satisfaction</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">8+</h2>
          <p className="text-gray-500">Years Experience</p>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
