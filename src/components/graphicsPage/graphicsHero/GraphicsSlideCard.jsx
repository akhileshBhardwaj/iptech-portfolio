import React from "react";

export default function GraphicsSlideCard({ data }) {
  return (
    <div className="relative w-full aspect-16/10 overflow-hidden rounded-2xl">
      <img
        src={data.thumbnail}
        alt={data.title}
        className="w-full h-full object-contain"
      />
    </div>
  );
}