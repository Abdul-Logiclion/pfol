"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MagnifierCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMove);
    return () => document.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      {/* Hide normal cursor */}
      <style jsx global>{`
        body {
          cursor: none;
        }
      `}</style>

      {/* Magnifying lens */}
      <motion.div
        animate={{ x: pos.x - 75, y: pos.y - 75 }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
        className="fixed w-[150px] h-[150px] rounded-full border-2 border-gray-300 overflow-hidden pointer-events-none z-[9999]"
      >
        <div
          style={{
            position: "absolute",
            top: -pos.y * 1.5 + 75,
            left: -pos.x * 1.5 + 75,
            transform: "scale(1.5)",
            transformOrigin: "top left",
            width: "100vw",
            height: "100vh",
          }}
        >
          {/* Render a live copy of the page */}
          <iframe
            src="/"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              pointerEvents: "none",
            }}
          />
        </div>
      </motion.div>
    </>
  );
}
