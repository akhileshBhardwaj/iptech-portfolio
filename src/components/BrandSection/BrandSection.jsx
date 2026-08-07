import BrandRow from "./BrandRow";
import { firstRow, secondRow } from "./brands";

const BrandSection = () => {
  return (
    <section className="overflow-hidden bg-[#FFFDF8] py-24">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
          Trusted Brands
        </span>

        <h2 className="mt-6 text-4xl font-black text-gray-900">
          Brands <span className="text-yellow-500">We Worked With</span>
        </h2>

        <p className="mt-5 text-lg text-gray-500">
          Helping startups and businesses grow through creative digital
          solutions.
        </p>
      </div>

      <div className="space-y-8">
        {/* Right → Left */}

        <BrandRow brands={firstRow} />

        {/* Left → Right */}

        <BrandRow brands={secondRow} reverse />
      </div>
    </section>
  );
};

export default BrandSection;
