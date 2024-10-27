import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorLight = () => {
  const size = 1000;
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 bottom-0 left-0 right-0 bg-transparent rounded-full opacity-80"
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(circle, rgba(var(--primary-color-rgb), 0.15), rgba(var(--primary-color-rgb), 0) 50%)",
        pointerEvents: "none",
      }}
      animate={{
        x: cursorPosition.x - (size - 5) / 2,
        y: cursorPosition.y - (size - 5) / 2,
      }}
      transition={{
        type: "tween",
      }}
    />
  );
};

export default CursorLight;
