"use client";

import { useScroll, useSpring, useMotionValueEvent, motion, MotionValue } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";

interface ScrollyVideoProps {
  src: string;
  children?: (progress: MotionValue<number>) => ReactNode;
}

export default function ScrollyVideo({ src, children }: ScrollyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);

  // Scroll progress for the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the scroll value
  const springScroll = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 400,
  });

  // Update video time based on scroll
useMotionValueEvent(springScroll, "change", (v) => {
  if (!videoRef.current || !videoRef.current.duration) return;
  if (rafRef.current) return;

  rafRef.current = requestAnimationFrame(() => {
    const video = videoRef.current!;

    // Clamp scroll value between 0 and 1
    const t = Math.min(Math.max(v, 0), 1) * video.duration;

    // Only seek if change is meaningful (prevents jitter)
    if (Math.abs(video.currentTime - t) > 0.03) {
      video.currentTime = t;
    }

    rafRef.current = null;
  });
});


  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
       <video
  ref={videoRef}
  src={src}
  muted
  playsInline
  preload="auto"
  className="h-full w-full object-cover"
  onLoadedMetadata={() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }}
/>
        {/* Render children (Overlay) passing the springScroll value */}
        {children && children(springScroll)}
      </div>
    </div>
  );
}
