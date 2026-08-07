import hero from "../../assets/images/hero/portfoli_hero.png";

const HeroRight = () => {
  return (
    <div className="relative flex items-center justify-center w-full lg:w-1/2">
      {/* Background Glow */}
      <div className="absolute -top-10 left-10 h-48 w-48 rounded-full bg-yellow-300/40 blur-[90px]" />

      <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-amber-200/40 blur-[100px]" />

      {/* Decorative Ring */}
      <div className="absolute h-72 w-72 rounded-full border border-yellow-200/60 sm:h-96 sm:w-96 lg:h-130 lg:w-130"></div>

      {/* Hero Image */}
      <img
        src={hero}
        alt="Digital Marketing"
        className="relative z-20 w-full max-w-md lg:max-w-lg"
      />
      
      {/* Card 1 */}
      <div className="absolute left-0 top-12 z-30 rounded-2xl bg-white/90 backdrop-blur-md px-5 py-4 shadow-2xl">
        <p className="text-sm text-gray-500">Project Growth</p>

        <h3 className="mt-1 text-2xl font-bold text-gray-900">+320%</h3>

        <span className="text-xs text-green-600">↑ Last 6 Months</span>
      </div>

      {/* Card 2 */}

      <div className="absolute right-2 bottom-10 z-30 rounded-2xl bg-white/90 backdrop-blur-md px-5 py-4 shadow-2xl">
        <p className="text-sm text-gray-500">Happy Clients</p>

        <h3 className="mt-1 text-2xl font-bold text-gray-900">500+</h3>

        <span className="text-xs text-yellow-600">⭐ 4.9 Rating</span>
      </div>

      {/* Floating Circle */}

      <div className="absolute right-20 top-6 h-5 w-5 animate-bounce rounded-full bg-yellow-400"></div>

      <div className="absolute left-16 bottom-16 h-4 w-4 animate-pulse rounded-full bg-orange-400"></div>
    </div>
  );
};

export default HeroRight;
