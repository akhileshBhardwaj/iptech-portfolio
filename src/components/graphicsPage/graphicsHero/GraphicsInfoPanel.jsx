import React from "react";
import { ArrowRight } from "lucide-react";

export default function GraphicsInfoPanel({ data }) {
  return (
    <div className="w-full lg:w-[38%] bg-white px-5 py-6 sm:px-7 sm:py-8 flex flex-col justify-center gap-3 sm:gap-4">
      <h2 className="text-xl sm:text-2xl lg:text-[26px] leading-snug font-extrabold text-gray-900">
        {data.title}
      </h2>

      <p className="text-sm text-gray-500 leading-relaxed">
        {data.description}
      </p>

      <div className="flex flex-wrap gap-3 mt-2">
        <a
          href="#"
          className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-sm px-5 py-2.5 rounded-xl transition-colors active:scale-95"
        >
          View More
          <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
        </a>
      </div>
    </div>
  );
}