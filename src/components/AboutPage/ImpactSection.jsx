import React from "react";
import { ArrowRight, Target } from "lucide-react";
import impactimage1  from '../../assets/images/AboutImages/about-icon-1.png'
import impactimage2  from '../../assets/images/AboutImages/about-icon-2.png'
import impactimage3  from '../../assets/images/AboutImages/about-icon-3.png'



export default function ImpactSection() {
  return (
    <section className="w-full bg-[#fdfaf4] px-6 py-12">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#fff8ec] px-6 py-10 shadow-sm sm:px-10">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-evenly md:gap-16">
          {/* left: compact image collage */}
          <div className="relative mx-auto h-47.5 w-full max-w-65 shrink-0 md:mx-0">
            {/* back image */}
            <div className="absolute right-0 top-2 h-28 w-36 -rotate-3 overflow-hidden rounded-xl bg-slate-200 shadow-lg">
              <img
                src={impactimage2}
                alt="Workspace"
                className="h-full w-full object-cover"
              />
            </div>

            {/* front/top image */}
            <div className="absolute left-0 top-0 h-24 w-32 rotate-2 overflow-hidden rounded-xl bg-slate-200 shadow-xl">
              <img
                src={impactimage1}
                alt="Laptop working"
                className="h-full w-full object-cover"
              />
            </div>

            {/* bottom-left circular target image */}
            <div className="absolute bottom-0 left-6 h-24 w-24 -rotate-6 overflow-hidden rounded-xl bg-slate-200 shadow-xl">
              <img
                src={impactimage3}
                alt="Target"
                className="h-full w-full object-cover"
              />
            </div>

            {/* floating badge card */}
            <div className="absolute bottom-0 right-0 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-xl">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-500">
                <Target size={14} strokeWidth={2} />
              </div>
              <span className="text-[11px] font-semibold leading-tight text-slate-800">
                Impact
                <br />
                That Speaks
              </span>
            </div>
          </div>

          {/* right: content */}
          <div className="items-start gap-1 md:flex-row md:items-center md:justify-between md:gap-8">
            <div>
              <span className="block font-serif text-4xl leading-none text-amber-400">
                &ldquo;
              </span>
              <h2 className="mt-1 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
                We Don&apos;t Just Create
                <br />
                We <span className="text-amber-500">Create Impact</span>
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500">
                Our work helps brands grow, engage, and lead in their
                industries. Your success is the best measure of our
                performance.
              </p>
            </div>

            <button className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-500 md:mt-0">
              Let&apos;s Create Impact
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}