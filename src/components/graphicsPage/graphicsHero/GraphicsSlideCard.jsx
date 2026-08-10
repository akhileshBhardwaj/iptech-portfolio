import React from "react";

export default function GraphicsSlideCard({ data }) {
  return (
    <div className="relative w-full h-full">
      <img
        src={data.thumbnail}
        alt={data.title}
        className="w-full h-full object-cover"
      />
    </div>
  );
}