import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  autoPlay?: boolean;
  loop?: boolean;
  orientation?: "portrait" | "landscape" | "auto";
}

const VideosV1 = ({
  src,
  poster,
  title = "Video",
  autoPlay = false,
  loop = false,
  orientation = "auto",
}: VideoPlayerProps) => {
  // Refs
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  // States

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [videoOrientation, setVideoOrientation] = useState<
    "portrait" | "landscape"
  >(orientation !== "auto" ? orientation : "landscape");
  const [buffered, setBuffered] = useState<TimeRanges | null>(null);

  // Control visibility timer
  const controlsTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize video player
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set initial volume
    video.volume = volume;

    // Auto-detect orientation if set to auto
    if (orientation === "auto") {
      video.addEventListener("loadedmetadata", detectOrientation);
    }

    // Event listeners
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("durationchange", handleDurationChange);
    video.addEventListener("ended", handleVideoEnded);
    video.addEventListener("progress", handleProgress);

    // Cleanup
    return () => {
      if (controlsTimerRef.current) {
        clearTimeout(controlsTimerRef.current);
      }
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("durationchange", handleDurationChange);
      video.removeEventListener("ended", handleVideoEnded);
      video.removeEventListener("progress", handleProgress);
      video.removeEventListener("loadedmetadata", detectOrientation);
    };
  }, [orientation, volume]);

  // Detect video orientation
  const detectOrientation = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.videoWidth > video.videoHeight) {
      setVideoOrientation("landscape");
    } else {
      setVideoOrientation("portrait");
    }
  };

  // Handle time updates
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    setCurrentTime(video.currentTime);
  };

  // Handle duration changes
  const handleDurationChange = () => {
    const video = videoRef.current;
    if (!video) return;

    setDuration(video.duration);
  };

  // Handle video ending
  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  // Handle buffering progress
  const handleProgress = () => {
    const video = videoRef.current;
    if (!video) return;

    setBuffered(video.buffered);
  };

  // Format time (seconds -> MM:SS)
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Toggle play/pause
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }

    resetControlsTimer();
  };

  // Seek video to specific time
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = progressBarRef.current;
    const video = videoRef.current;
    if (!progressBar || !video) return;

    const rect = progressBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * video.duration;

    resetControlsTimer();
  };

  // Handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    video.volume = newVolume;

    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }

    resetControlsTimer();
  };

  // Toggle mute
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      video.volume = volume > 0 ? volume : 0.5;
      setIsMuted(false);
      if (volume === 0) setVolume(0.5);
    } else {
      video.volume = 0;
      setIsMuted(true);
    }

    resetControlsTimer();
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    const container = videoContainerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container
        .requestFullscreen()
        .then(() => {
          setIsFullscreen(true);
        })
        .catch((err) => {
          console.error(
            `Error attempting to enable fullscreen: ${err.message}`
          );
        });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }

    resetControlsTimer();
  };

  // Show/hide controls based on user activity
  const handleMouseMove = () => {
    setShowControls(true);
    resetControlsTimer();
  };

  // Reset the controls visibility timer
  const resetControlsTimer = () => {
    if (controlsTimerRef.current) {
      clearTimeout(controlsTimerRef.current);
    }

    controlsTimerRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  // Render buffered segments
  const renderBufferedSegments = () => {
    if (!buffered || !duration) return null;

    const segments = [];
    for (let i = 0; i < buffered.length; i++) {
      const start = (buffered.start(i) / duration) * 100;
      const end = (buffered.end(i) / duration) * 100;
      segments.push(
        <div
          key={i}
          className="absolute h-full bg-white/30"
          style={{
            left: `${start}%`,
            width: `${end - start}%`,
          }}
        />
      );
    }

    return segments;
  };

  return (
    <div
      ref={videoContainerRef}
      // Add these attributes to your video container div
      onTouchStart={() => setShowControls(true)}
      onTouchEnd={() => resetControlsTimer()}
      className={`custom-video-player ${
        videoOrientation === "portrait" ? "video-portrait" : "video-landscape"
      }`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop={loop}
        autoPlay={autoPlay}
        playsInline
        onClick={togglePlay}
        className="video-element"
        // Update the video element with these attributes
        muted={autoPlay} // Mobile browsers require muted for autoplay
        preload="metadata" // Load metadata first
      />

      {/* Video Controls */}
      <motion.div
        className="video-controls-container"
        initial={{ opacity: 1 }}
        animate={{ opacity: showControls ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Video Title Bar */}
        <div className="video-title-bar">
          <span className="video-title">{title}</span>
        </div>

        {/* Progress Bar */}
        <div
          ref={progressBarRef}
          className="progress-container"
          onClick={handleSeek}
        >
          <div className="progress-bg">
            {renderBufferedSegments()}
            <div
              className="progress-fill"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>
          <div
            className="progress-handle"
            style={{ left: `${(currentTime / duration) * 100}%` }}
          />
        </div>

        {/* Control Buttons */}
        <div className="controls-row">
          {/* Play/Pause Button */}
          <button
            className="control-button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 4H6V20H10V4Z" fill="currentColor" />
                <path d="M18 4H14V20H18V4Z" fill="currentColor" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 4L20 12L6 20V4Z" fill="currentColor" />
              </svg>
            )}
          </button>

          {/* Time Display */}
          <div className="time-display">
            <span>{formatTime(currentTime)}</span>
            <span> / </span>
            <span>{formatTime(duration)}</span>
          </div>

          {/* Volume Controls */}
          <div className="volume-controls">
            <button
              className="control-button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted || volume === 0 ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 5L6 9H2V15H6L11 19V5Z" fill="currentColor" />
                  <path d="M23 9L17 15" stroke="currentColor" strokeWidth="2" />
                  <path d="M17 9L23 15" stroke="currentColor" strokeWidth="2" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 5L6 9H2V15H6L11 19V5Z" fill="currentColor" />
                  <path
                    d="M15.54 8.46C17.5 10.42 17.5 13.58 15.54 15.54"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M19.07 4.93C22.97 8.83 22.97 15.17 19.07 19.07"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="volume-slider"
              aria-label="Volume"
            />
          </div>

          {/* Fullscreen Button */}
          <button
            className="control-button"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          >
            {isFullscreen ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 3V8H3" stroke="currentColor" strokeWidth="2" />
                <path d="M21 8H16V3" stroke="currentColor" strokeWidth="2" />
                <path d="M3 16H8V21" stroke="currentColor" strokeWidth="2" />
                <path d="M16 21V16H21" stroke="currentColor" strokeWidth="2" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 8H8V3" stroke="currentColor" strokeWidth="2" />
                <path d="M16 3V8H21" stroke="currentColor" strokeWidth="2" />
                <path d="M8 21V16H3" stroke="currentColor" strokeWidth="2" />
                <path d="M21 16H16V21" stroke="currentColor" strokeWidth="2" />
              </svg>
            )}
          </button>
        </div>
      </motion.div>

      {/* Play/Pause Overlay for Mobile */}
      {!isPlaying && (
        <div className="play-overlay" onClick={togglePlay}>
          <div className="play-button-large">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 4L20 12L6 20V4Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideosV1;
