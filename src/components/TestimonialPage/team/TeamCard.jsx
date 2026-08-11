import React from "react";
import { RoleIcon } from "./Icons";

const TeamCard = ({ member }) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-[#14213D] shadow-xl shadow-black/10">
      {/* Photo ka bottom edge diagonally cut hai (dark bg peeche se dikhta hai).
          Sirf image clip hoti hai — text panel isse alag hai, isliye kabhi nahi katega. */}
      <div
        className="relative"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 84%, 0 100%)" }}
      >
        <img
          src={member.photo}
          alt={member.name}
          className="h-72 w-full object-cover"
        />
      </div>

      {/* Text panel — plain rectangle, no clip-path. Content hamesha fully visible rahega. */}
      <div className="relative px-5 pb-6 pt-8">
        <div className="absolute -top-6 left-5 grid h-12 w-12 place-items-center rounded-full bg-[#FCEEDD] shadow-md">
          <RoleIcon name={member.icon} className="h-5 w-5 text-[#F5A623]" />
        </div>
        <h3 className="text-lg font-bold text-white">{member.name}</h3>
        <p className="text-sm font-semibold text-[#F5A623]">{member.role}</p>
        <span className="mt-1 block text-sm font-bold italic text-[#F5A623]">
          /
        </span>
        <p className="mt-1 text-sm leading-relaxed text-[#B9C1D3]">
          {member.bio}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
