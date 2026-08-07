import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import FloatingShapes from "./FloatingShapes";
import HeroBackground from "./HeroBackground";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF8] pt-25 lg:pt-10">
      <HeroBackground/>

      <div className="mx-auto max-w-7xl">
        <div className="flex min-h-[85vh] flex-col items-center justify-between gap-8 lg:flex-row ">
          <HeroLeft />
          <HeroRight />
        </div>
      </div>
    </section>
  );
};

export default Hero;
