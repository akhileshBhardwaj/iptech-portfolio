import React from "react";

const WhyChooseCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex h-57.5 w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-amber-100/60 bg-amber-100 px-4 py-5 text-center">
      {/* Icon */}
      <div className="mb-2.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-50">
        <Icon className="h-5 w-5 text-slate-900" strokeWidth={1.75} />
      </div>

      {/* Title */}
      <h3 className="text-sm font-bold text-slate-900">{title}</h3>

      {/* Divider */}
      <span className="mt-2 mb-2 h-0.5 w-5 rounded-full bg-amber-400" />

      {/* Description */}
      <p className="line-clamp-3 text-xs leading-relaxed text-slate-500">{description}</p>
    </div>
  );
};

export default WhyChooseCard;