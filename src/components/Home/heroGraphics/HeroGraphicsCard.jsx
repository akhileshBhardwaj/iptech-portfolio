import React from "react";

const HeroGraphicsCard = ({ video, title, description }) => {
  return (
    <div className="group flex h-57.5 w-full flex-col overflow-hidden rounded-2xl border border-amber-100/60 bg-amber-100 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-200/60">
      {/* Auto-playing video */}
      <div className="relative h-32 w-full shrink-0 overflow-hidden bg-slate-900/5">
        <video
          src={video}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Text content */}
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-3">
        <h3 className="text-sm font-bold text-slate-900">{title}</h3>
        <span className="mt-2 mb-2 h-0.5 w-5 rounded-full bg-amber-400" />
        <p className="line-clamp-2 text-xs leading-relaxed text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeroGraphicsCard;
