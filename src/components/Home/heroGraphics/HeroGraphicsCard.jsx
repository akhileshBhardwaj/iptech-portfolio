import React from "react";

const HeroGraphicsCard = ({ image }) => {
  return (
    <div className="group h-57.5 w-full overflow-hidden rounded-2xl border border-amber-100/60 bg-amber-100 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-200/60">
      <img
        src={image}
        alt=""
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
  );
};

export default HeroGraphicsCard;
