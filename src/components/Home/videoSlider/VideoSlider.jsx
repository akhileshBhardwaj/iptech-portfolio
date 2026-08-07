// VideoSlider.jsx
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SlideCard from "./SlideCard";
import "./VideoSlider.css";
import ViewMoreButton from "./ViewMoreButton";

const videoData = [ 
  {
    id: 1,
    category: "Corporate Video",
    title: "Telling Your Story",
    duration: "01:20",
    video: "/vid_1.mp4",
    thumbnail:
      "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg",
  },
  {
    id: 2,
    category: "Product Video",
    title: "Showcasing Innovation",
    duration: "01:25",
    video: "/vid_1.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1489599162946-cd53e2c3a0b5?w=600",
  },
  {
    id: 3,
    category: "Brand Film",
    title: "Elevating Brands, Creating Impact",
    duration: "01:25",
    video: "/vid_1.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600",
  },
  {
    id: 4,
    category: "Promo Video",
    title: "Promoting What Matters",
    duration: "00:45",
    video: "/vid_1.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600",
  },
  {
    id: 5,
    category: "Testimonial",
    title: "Real People, Real Stories",
    duration: "00:45",
    video: "/vid_1.mp4",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg",
  },
];

const CLONES = 2; // extra clones each side for seamless loop
const AUTOPLAY_DELAY = 2500;

const VideoSlider = () => {
  const total = videoData.length;

  // extended slide list = [tail-clones][real data][head-clones]
  const slides = [
    ...videoData.slice(-CLONES),
    ...videoData,
    ...videoData.slice(0, CLONES),
  ];

  const [current, setCurrent] = useState(CLONES); // start at first real slide
  const [withAnim, setWithAnim] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [step, setStep] = useState(282); // 👈 ab ye fixed nahi, real card width se measure hoga

  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const autoplayRef = useRef(null);
  const isHoveringRef = useRef(false);
  const isVideoPlayingRef = useRef(false); // 👈 tracks if any card's video is playing

  // 👇 viewport width + actual rendered card width (with its padding/gap) dono measure karo
  useEffect(() => {
    const measure = () => {
      if (viewportRef.current) {
        setViewportWidth(viewportRef.current.offsetWidth);
      }
      if (trackRef.current) {
        const firstCard = trackRef.current.querySelector(".card-wrap");
        if (firstCard) {
          // offsetWidth me left+right padding already included hai
          setStep(firstCard.offsetWidth);
        }
      }
    };

    measure();
    // fonts/images load hone ke baad width thodi change ho sakti hai, isliye ek chhota delay pe dubara measure
    const t = setTimeout(measure, 150);

    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, []);

  const goTo = useCallback((index, animate = true) => {
    setWithAnim(animate);
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    setWithAnim(true);
    setCurrent((c) => c + 1);
  }, []);

  const prev = useCallback(() => {
    setWithAnim(true);
    setCurrent((c) => c - 1);
  }, []);

  // seamless jump when we've scrolled into the cloned zone
  const handleTransitionEnd = () => {
    if (current >= total + CLONES) {
      setWithAnim(false);
      setCurrent(current - total);
    } else if (current < CLONES) {
      setWithAnim(false);
      setCurrent(current + total);
    }
  };

  // autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      if (!isHoveringRef.current && !isVideoPlayingRef.current) next();
    }, AUTOPLAY_DELAY);
    return () => clearInterval(autoplayRef.current);
  }, [next]);

  const resetAutoplay = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (!isHoveringRef.current && !isVideoPlayingRef.current) next();
    }, AUTOPLAY_DELAY);
  };

  const handleNextClick = () => {
    next();
    resetAutoplay();
  };

  const handlePrevClick = () => {
    prev();
    resetAutoplay();
  };

  const handleDotClick = (realIndex) => {
    goTo(CLONES + realIndex);
    resetAutoplay();
  };

  // video ke play hote hi slider autoplay ruk jaye
  const handleVideoPlay = () => {
    isVideoPlayingRef.current = true;
    clearInterval(autoplayRef.current);
  };

  // video pause/end hote hi slider autoplay dobara chalu ho jaye
  const handleVideoPauseOrEnd = () => {
    isVideoPlayingRef.current = false;
    resetAutoplay();
  };

  // 👇 ab STEP hardcoded nahi, measured 'step' state se calculate hota hai
  const offset = viewportWidth / 2 - step / 2 - current * step;
  const realActiveIndex = (((current - CLONES) % total) + total) % total;

  const navigate = useNavigate();

  return (
    <div className="video-slider-section">
      <div className="bg-wave" aria-hidden="true"></div>

      <div className="slider-header">
        <span className="eyebrow">Video Showcase</span>
        <div className="header-row">
          <h1>
            Our Work, Your <em>Success</em>
          </h1>
          <p>
            Explore our creative video projects that drive engagement, build
            brands, and deliver outstanding results.
          </p>
        </div>
      </div>

      <div
        className="viewport"
        ref={viewportRef}
        onMouseEnter={() => (isHoveringRef.current = true)}
        onMouseLeave={() => (isHoveringRef.current = false)}
      >
        <div
          ref={trackRef}
          className={`track${withAnim ? " animate" : ""}`}
          style={{ transform: `translateX(${offset}px)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((video, i) => (
            <div
              key={`${video.id}-${i}`}
              className={`card-wrap${i === current ? " active" : ""}`}
            >
              <SlideCard
                video={video}
                onPlay={handleVideoPlay}
                onPauseOrEnd={handleVideoPauseOrEnd}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="controls">
        <div className="nav-btn" onClick={handlePrevClick}>
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M19 12H5M12 19l-7-7 7-7"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="dots">
          {videoData.map((v, i) => (
            <div
              key={v.id}
              className={`dot${i === realActiveIndex ? " active" : ""}`}
              onClick={() => handleDotClick(i)}
            ></div>
          ))}
        </div>
        <div className="nav-btn" onClick={handleNextClick}>
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14M12 5l7 7-7 7"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="view-more-wrap">
        <ViewMoreButton />
      </div>
    </div>
  );
};

export default VideoSlider;
