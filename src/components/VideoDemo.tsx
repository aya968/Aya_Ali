"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Expand, Play, X } from "lucide-react";

type VideoDemoProps = {
  title: string;
  src?: string;
  embedUrl?: string;
};

function VideoPlaceholder() {
  return (
    <div className="video-placeholder">
      <span className="video-placeholder-orbit" aria-hidden="true" />
      <span className="play-halo" aria-hidden="true">
        <Play size={22} fill="currentColor" />
      </span>
      <span className="video-coming-soon">Demo Video Coming Soon</span>
      <span className="video-placeholder-note">Project walkthrough</span>
    </div>
  );
}

function VideoDialog({
  title,
  src,
  embedUrl,
  onClose,
}: VideoDemoProps & { onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    return () => {
      if (dialog.open) dialog.close();
    };
  }, []);

  return (
    <dialog
      className="video-dialog"
      ref={dialogRef}
      aria-label={`${title} video demo`}
      onClose={onClose}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
    >
      <div className="video-dialog-content">
        <div className="video-dialog-header">
          <div>
            <span className="eyebrow">PROJECT DEMO</span>
            <h2>{title}</h2>
          </div>
          <button
            className="icon-button"
            type="button"
            aria-label="Close video"
            onClick={onClose}
          >
            <X size={19} />
          </button>
        </div>
        <div className="video-frame video-frame-modal">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={`${title} video demo`}
              loading="lazy"
              allow="fullscreen"
              allowFullScreen
            />
          ) : unavailable ? (
            <VideoPlaceholder />
          ) : (
            <video
              controls
              playsInline
              preload="metadata"
              onError={() => setUnavailable(true)}
            >
              {src && (
                <source
                  src={src}
                  type={src.endsWith(".webm") ? "video/webm" : "video/mp4"}
                />
              )}
              Your browser does not support HTML video.
            </video>
          )}
        </div>
      </div>
    </dialog>
  );
}

export default function VideoDemo({ title, src, embedUrl }: VideoDemoProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [ready, setReady] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || shouldLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "160px" },
    );
    observer.observe(frame);
    return () => observer.disconnect();
  }, [shouldLoad]);

  const playVideo = () => {
    setShouldLoad(true);
    const video = videoRef.current;
    if (video) {
      void video.play().catch(() => setPlaying(false));
    }
  };

  return (
    <>
      <motion.div
        className="video-frame"
        ref={frameRef}
        whileHover={reduceMotion ? undefined : { scale: 1.012 }}
        transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
      >
        {embedUrl ? (
          <iframe
            className="video-embed"
            src={embedUrl}
            title={`${title} video demo`}
            loading="lazy"
            allow="fullscreen"
            allowFullScreen
          />
        ) : shouldLoad && !unavailable && src ? (
          <video
            ref={videoRef}
            className={ready ? "video-player is-ready" : "video-player"}
            controls={ready}
            playsInline
            preload="metadata"
            onCanPlay={() => setReady(true)}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
            onError={() => setUnavailable(true)}
          >
            <source
              src={src}
              type={src.endsWith(".webm") ? "video/webm" : "video/mp4"}
            />
            Your browser does not support HTML video.
          </video>
        ) : null}
        {!embedUrl && (!ready || unavailable) && <VideoPlaceholder />}
        {!embedUrl && ready && !playing && (
          <button
            className="video-play-button"
            type="button"
            onClick={playVideo}
            aria-label={`Play ${title} demo`}
          >
            <Play size={19} fill="currentColor" aria-hidden="true" />
          </button>
        )}
        <button
          className="video-expand-button"
          type="button"
          onClick={() => setModalOpen(true)}
          aria-label={`Open ${title} demo in a larger player`}
        >
          <Expand size={15} aria-hidden="true" />
          <span>Watch demo</span>
        </button>
      </motion.div>
      {modalOpen && (
        <VideoDialog
          title={title}
          src={src}
          embedUrl={embedUrl}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
