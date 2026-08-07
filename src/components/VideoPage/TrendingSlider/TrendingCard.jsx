import React from "react";
import { motion } from "framer-motion";

export default function TrendingCard({
  data,
  isPlaying,
  onPlay,
  onEnded,
  onPause,
}) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-black/5 cursor-pointer"
    >
      <div className="relative aspect-video bg-neutral-900">
        {isPlaying ? (
          <video
            className="w-full h-full object-cover block"
            src={data.video}
            autoPlay
            controls
            playsInline
            onEnded={onEnded}
            onPause={onPause}
          />
        ) : (
          <button
            onClick={onPlay}
            aria-label={`Play ${data.title}`}
            className="group relative w-full h-full block"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src={data.thumbnail}
              alt={data.title}
            />
            <span className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4 translate-x-px">
                <path d="M8 5v14l11-7z" fill="#111827" />
              </svg>
            </span>
            <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[11px] font-semibold px-1.5 py-0.5 rounded">
              {data.duration}
            </span>
          </button>
        )}
      </div>

      <div className="px-3 pt-3 pb-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[13px] sm:text-sm font-bold text-gray-900 leading-snug line-clamp-2">
            {data.title}
          </h3>
          <button
            aria-label="More options"
            className="shrink-0 text-gray-400 hover:text-gray-600 mt-0.5"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <circle cx="12" cy="5" r="1.6" />
              <circle cx="12" cy="12" r="1.6" />
              <circle cx="12" cy="19" r="1.6" />
            </svg>
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-1">{data.channelName}</p>

        <div className="flex items-center gap-2 mt-2.5">
          <div className="flex-1 h-1 rounded-full bg-gray-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-linear-to-r from-amber-400 to-orange-500"
              style={{ width: `${data.progress}%` }}
            />
          </div>
          <span className="text-[11px] font-medium text-gray-500 shrink-0">
            {data.progress}%
          </span>
        </div>
      </div>
    </motion.div>
  );
}
