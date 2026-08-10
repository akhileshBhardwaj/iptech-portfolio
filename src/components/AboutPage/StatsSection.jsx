import React from "react";
import {
  Users,
  Briefcase,
  Smile,
  Star,
  Trophy,
} from "lucide-react";

const stats = [
  { icon: Users, value: "10+", label: "Years of Experience" },
  { icon: Briefcase, value: "500+", label: "Projects Completed" },
  { icon: Smile, value: "200+", label: "Happy Clients" },
  { icon: Star, value: "50+", label: "Team Members" },
  { icon: Trophy, value: "99%", label: "Client Satisfaction" },
];

export default function StatsSection() {
  return (
    <div className="bg-[#fdfaf5] px-5 sm:px-8 md:px-12 lg:px-[8vw] pb-10 sm:pb-14">
      <div className="max-w-6xl mx-auto bg-[#fdf1de] rounded-3xl px-6 sm:px-10 md:px-12 py-8 sm:py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-8 gap-x-4 text-center">
        
        {stats.map((stat, i) => {
          const Icon = stat.icon;

          return (
            <div
              key={i}
              className="flex flex-col items-center gap-2"
            >
              {/* Lucide Icon */}
              <div className="w-11 h-11 flex items-center justify-center rounded-full bg-white">
                <Icon
                  size={24}
                  strokeWidth={1.8}
                  className="text-[#f5a623]"
                />
              </div>

              {/* Value */}
              <span className="text-xl sm:text-2xl md:text-[28px] font-bold text-[#f5a623]">
                {stat.value}
              </span>

              {/* Label */}
              <span className="text-xs sm:text-sm text-[#6b6b6b] font-medium">
                {stat.label}
              </span>
            </div>
          );
        })}

      </div>
    </div>
  );
}