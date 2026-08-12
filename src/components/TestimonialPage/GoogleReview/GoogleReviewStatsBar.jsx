import React from "react";
import { UsersIcon, StarIcon, ChatIcon } from "./GoogleReviewIcons";

const STATS = [
  { icon: UsersIcon, value: "150+", label: "Happy Clients" },
  { icon: StarIcon, value: "4.9/5", label: "Average Rating" },
  { icon: ChatIcon, value: "300+", label: "Google Reviews" },
];

const GoogleReviewStatsBar = () => {
  return (
    <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center gap-6 rounded-2xl bg-[#FCEEDD] px-8 py-6 sm:flex-row sm:gap-14">
      {STATS.map(({ icon: Icon, value, label }) => (
        <div key={label} className="flex items-center gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#F5A623] text-white">
            <Icon className="h-5 w-5 text-white" filled />
          </div>
          <div>
            <p className="text-xl font-extrabold text-[#14213D]">{value}</p>
            <p className="text-sm text-[#5B6478]">{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GoogleReviewStatsBar;
