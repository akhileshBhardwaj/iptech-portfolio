import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiPlay, FiPause } from "react-icons/fi";

const CATEGORY_ACCENT = {
  Lifestyle: { name: "purple", hex: "#7B5CFF", soft: "#F1EEFF" },
  Fashion: { name: "purple", hex: "#7B5CFF", soft: "#F1EEFF" },
  Fitness: { name: "green", hex: "#2BC48A", soft: "#E9FBF3" },
  Beauty: { name: "orange", hex: "#FF7A45", soft: "#FFF1EA" },
  Tech: { name: "blue", hex: "#2E8BFF", soft: "#EAF3FF" },
  Food: { name: "orange", hex: "#FF7A45", soft: "#FFF1EA" },
};
const DEFAULT_ACCENT = { name: "blue", hex: "#2E8BFF", soft: "#EAF3FF" };

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

function MemesCard({ video, isActive, onActivate }) {
  const videoRef = useRef(null);
  const [revealed, setRevealed] = useState(false); // lazy-mount <video> once in view
  const [spot, setSpot] = useState({ x: 50, y: 50, visible: false });

  const accent = CATEGORY_ACCENT[video.category] || DEFAULT_ACCENT;

  // Playback is driven ONLY by isActive (click-controlled via parent's
  // activeId). No hover-based play/pause here.
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (isActive) {
      const playPromise = el.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          /* autoplay can be rejected by the browser — fail silently */
        });
      }
    } else {
      el.pause();
      el.currentTime = 0;
    }
  }, [isActive]);

  // Hover/mouse-move is used ONLY for the visual spotlight effect now —
  // it no longer touches playback state.
  const handleMouseLeave = useCallback(() => {
    setSpot((s) => ({ ...s, visible: false }));
  }, []);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpot({ x, y, visible: true });
  }, []);

  // Click-only playback toggle. Play → tell parent this card is active.
  // Pause → tell parent nothing is active; the effect above resets
  // currentTime to 0, and since isActive becomes false we swap back
  // to rendering the poster image (not the video's last frame).
  const togglePlay = useCallback(
    (e) => {
      e.stopPropagation();
      if (isActive) {
        onActivate(null);
      } else {
        setRevealed(true);
        onActivate(video.id);
      }
    },
    [isActive, onActivate, video.id],
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        togglePlay(e);
      }
    },
    [togglePlay],
  );

  const playing = isActive;

  return (
    <motion.article
      variants={cardVariants}
      className="group relative flex h-full"
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onViewportEnter={() => setRevealed(true)}
      viewport={{ once: true, margin: "200px" }}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {/* Animated gradient border shell — spins only on hover/focus.
          Tailwind arbitrary-property utilities drive the play state,
          so no per-instance <style> tag is needed. */}
      <div
        data-ugc-border
        className="relative flex w-full flex-col rounded-[1.75rem] p-[1.5px] [animation-play-state:paused] group-hover:[animation-play-state:running] group-focus-within:[animation-play-state:running]"
        style={{
          background: `conic-gradient(from var(--border-angle, 0deg), ${accent.hex}, transparent 30%, transparent 70%, ${accent.hex})`,
          animation: "ugc-border-spin 3.5s linear infinite",
        }}
      >
        <div
          className="relative flex h-full flex-col overflow-hidden rounded-[1.7rem] bg-white shadow-[0_1px_2px_rgba(18,19,26,0.04)] transition-shadow duration-500 group-hover:shadow-[0_24px_48px_-16px_rgba(18,19,26,0.18)]"
          tabIndex={0}
          role="group"
          aria-label={`${video.title} — ${video.brand}`}
          onKeyDown={handleKeyDown}
        >
          {/* ---------- Thumbnail / video area ---------- */}
          <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-[#EEF0F5]">
            {/* Video is only rendered/visible while actually playing.
                Pausing swaps back to the poster image instead of
                freezing on the video's last frame. */}
            {revealed && (
              <video
                ref={videoRef}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ${
                  playing ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
                src={video.src}
                poster={video.poster}
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
              />
            )}
            <img
              src={video.poster}
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.06] ${
                playing ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Mouse-tracking spotlight (visual-only, no playback tie-in) */}
            <div
              className="pointer-events-none absolute inset-0 transition-opacity duration-300"
              style={{
                opacity: spot.visible ? 1 : 0,
                background: `radial-gradient(180px circle at ${spot.x}% ${spot.y}%, rgba(255,255,255,0.28), transparent 60%)`,
              }}
            />

            {/* Base scrim for legibility, strengthens on hover */}
            <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/0 to-black/10 opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

            {/* Category badge — top left */}
            <span
              className="absolute left-4 top-4 rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.08em] shadow-sm backdrop-blur-md transition-shadow duration-300"
              style={{
                color: accent.hex,
                backgroundColor: "rgba(255,255,255,0.85)",
              }}
            >
              <span
                className="transition-[filter] duration-300 group-hover:filter-[drop-shadow(0_0_6px_var(--glow))]"
                style={{ "--glow": accent.hex }}
              >
                {video.category}
              </span>
            </span>

            {/* Duration badge — bottom right, slides in on hover */}
            <span className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-md bg-black/70 px-2.5 py-1 font-mono text-[0.7rem] tracking-tight text-white backdrop-blur-md transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
              {playing && (
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
                </span>
              )}
              {video.duration}
            </span>

            {/* Center play/pause control — the ONLY way to start/stop playback */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={
                playing ? `Pause ${video.title}` : `Play ${video.title}`
              }
              aria-pressed={playing}
              className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[#12131A] shadow-lg backdrop-blur-md transition-all duration-300 ease-out focus-visible:outline  focus-visible:outline-offset-2 group-hover:h-16 group-hover:w-16 group-hover:bg-white"
              style={{ outlineColor: accent.hex }}
            >
              <motion.span
                whileTap={{ scale: 0.85 }}
                className="flex items-center justify-center"
              >
                {playing ? (
                  <FiPause className="h-5 w-5" />
                ) : (
                  <FiPlay className="ml-0.5 h-5 w-5" />
                )}
              </motion.span>
            </button>
          </div>

          {/* ---------- Text area ---------- */}
          {/* flex-1 + flex-col so this block fills remaining card height
              and every card in a row lines up regardless of content length */}
          <div className="relative flex flex-1 flex-col px-5 pb-5 pt-4">
            <h3 className="line-clamp-2 min-h-[2.7em] font-display text-[1.05rem] font-semibold leading-snug text-[#12131A]">
              {video.title}
            </h3>
            <p className="mt-0.5 shrink-0 text-[0.8rem] font-medium text-[#9096A6]">
              {video.brand}
            </p>
            <p className="mt-2 line-clamp-2 min-h-[2.55em] text-[0.85rem] leading-relaxed text-[#6B7280]">
              {video.description}
            </p>

            {/* Signature element: animated "scrub line" — reads as a
                video timeline, sweeps a playhead while playing */}
            <div className="relative mt-4 h-0.75 w-full shrink-0 overflow-hidden rounded-full bg-[#EEF0F5]">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{ backgroundColor: accent.hex, width: "28%" }}
                animate={
                  playing
                    ? { x: ["0%", "260%"], opacity: 1 }
                    : { x: "0%", opacity: 0.5 }
                }
                transition={
                  playing
                    ? { duration: 1.8, repeat: Infinity, ease: "linear" }
                    : { duration: 0.3 }
                }
              />
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default memo(MemesCard);
