import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="bg-[#FFFDF8] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[40px] bg-linear-to-r from-yellow-400 to-yellow-300 p-14 text-center shadow-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Ready To Grow Your Business?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg">
            Let's build an amazing digital presence together.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 rounded-xl bg-black px-8 py-4 text-white transition hover:scale-105">
            Start Project
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
