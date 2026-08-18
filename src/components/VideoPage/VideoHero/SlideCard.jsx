import React, { useState } from "react";

export default function SlideCard({
  data,
  isPlaying,
  onPlay,
  onEnded,
  onPause,
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-full h-full bg-neutral-900 overflow-hidden">
      {isPlaying ? (
        <video
          className="absolute inset-0 w-full h-full object-cover block"
          src={data.video}
          autoPlay
          controls
          playsInline
          onEnded={onEnded}
          onPause={onPause}
        />
      ) : (
        <>
          {!imgError ? (
            <img
              className="absolute inset-0 w-full h-full object-cover block"
              src={data.thumbnail}
              alt={data.title}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-800 text-neutral-400 text-sm">
              Thumbnail not available
            </div>
          )}

          <button
            onClick={onPlay}
            aria-label={`Play ${data.title}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 sm:w-5 sm:h-5 translate-x-px"
            >
              <path d="M8 5v14l11-7z" fill="#111827" />
            </svg>
          </button>

          <span className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-black/65 text-white text-[11px] sm:text-xs font-semibold px-2 py-1 rounded-md">
            {data.duration}
          </span>
        </>
      )}
    </div>
  );
}