// SlideCard.jsx
import React, { useRef, useState } from "react";

const SlideCard = ({ video, onPlay, onPauseOrEnd }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handlePlayClick = () => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    setIsLoading(true);
    setHasError(false);

    const playPromise = videoEl.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
          onPlay();
        })
        .catch((error) => {
          console.error("Video play error:", error);
          setIsLoading(false);
          setHasError(true);
          setIsPlaying(false);
        });
    }
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
    onPauseOrEnd();
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    onPauseOrEnd();
  };

  const handleVideoError = (e) => {
    console.error("Video load error:", e);
    setHasError(true);
    setIsLoading(false);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
  };

  return (
    <div className="card">
      <video
        ref={videoRef}
        poster={video.thumbnail}
        className="card-video"
        onPause={handleVideoPause}
        onEnded={handleVideoEnded}
        onError={handleVideoError}
        onCanPlay={handleCanPlay}
        controls={isPlaying}
        playsInline
        preload="metadata"
      >
        <source src={video.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!isPlaying && <div className="card-overlay"></div>}

      {!isPlaying && <div className="duration">{video.duration}</div>}

      {!isPlaying && !hasError && (
        <div className="play-overlay" onClick={handlePlayClick}>
          <div className="play-btn">
            {isLoading ? (
              <div className="spinner"></div>
            ) : (
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7z" fill="#111" />
              </svg>
            )}
          </div>
        </div>
      )}

      {hasError && (
        <div className="error-overlay">
          <p>⚠️ Video load nahi ho saka</p>
          <button onClick={handlePlayClick}>Try Again</button>
        </div>
      )}

      {!isPlaying && (
        <div className="label">
          <span className="category">{video.category}</span>
          <div className="title">{video.title}</div>
          <div className="arrow-btn">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="#111"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlideCard;