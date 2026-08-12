import React from "react";
import { GoogleIcon, StarIcon, QuoteIcon } from "./GoogleReviewIcons";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="relative h-full rounded-2xl bg-white p-6 shadow-md shadow-black/5">
      <QuoteIcon className="absolute right-5 top-5 h-9 w-9" />

      <div className="flex items-center gap-3">
        <img
          src={testimonial.photo}
          alt={testimonial.name}
          className="h-12 w-12 rounded-full object-cover"
          draggable={false}
        />
        <div>
          <h3 className="font-bold text-[#14213D]">{testimonial.name}</h3>
          <p className="text-sm text-[#8A93A6]">{testimonial.role}</p>
          <div className="mt-1 flex gap-0.5">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <StarIcon key={i} className="h-3.5 w-3.5 text-[#F5A623]" />
            ))}
          </div>
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-[#4B5468]">
        {testimonial.text}
      </p>

      <GoogleIcon className="mt-5 h-5 w-5" />
    </div>
  );
};

export default TestimonialCard;
