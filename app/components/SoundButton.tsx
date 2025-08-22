"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function SoundToggle() {
  const [isMuted, setIsMuted] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioFile = new Audio("/audio-site.mp3");
    audioFile.loop = true;
    audioFile.muted = false; // Sound ON immediately

    // Try autoplay immediately
    audioFile.play().catch(() => {
      console.warn("Autoplay blocked — will start on first interaction");
    });

    setAudio(audioFile);

    // Fallback: listen for the first interaction to start sound if blocked
    const startOnInteraction = () => {
      audioFile.play().catch(err => {
        console.error("Audio still could not start:", err);
      });
      document.removeEventListener("click", startOnInteraction);
      document.removeEventListener("keydown", startOnInteraction);
    };

    document.addEventListener("click", startOnInteraction);
    document.addEventListener("keydown", startOnInteraction);

    return () => {
      audioFile.pause();
      audioFile.currentTime = 0;
      document.removeEventListener("click", startOnInteraction);
      document.removeEventListener("keydown", startOnInteraction);
    };
  }, []);

  const handleToggleSound = () => {
    if (audio) {
      audio.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="
  fixed 
  bottom-36 -right-10   /* 📱 mobile default */
  md:bottom-[15vh] md:right-32  /* 💻 desktop/laptop */
  z-50
">
      <button
        onClick={handleToggleSound}
        className="flex items-center justify-center gap-2 transform -rotate-90"
      >
        <span className="text-lg">SOUND</span>
        <div className="w-[3ch] flex items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isMuted ? "off" : "on"}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-lg tracking-widest"
            >
              {isMuted ? "OFF" : "ON"}
            </motion.span>
          </AnimatePresence>
        </div>
      </button>
    </div>
  );
}
