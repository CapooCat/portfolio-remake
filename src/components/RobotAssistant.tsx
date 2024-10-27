import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const RobotAssistant = ({ size = 30 }: { size?: number }) => {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const robotPosition = useRef<HTMLDivElement>(null);

  const eyeRadius = size / 2;
  const RobotRadius = size / 5;
  const maxEyeMovement = eyeRadius - RobotRadius;

  const handleMouseMove = (event) => {
    const rect = robotPosition.current?.getBoundingClientRect() ?? { x: 0, y: 0 };
    const eyeCenterX = rect.x + eyeRadius;
    const eyeCenterY = rect.y + eyeRadius;
    const dx = event.clientX - eyeCenterX;
    const dy = event.clientY - eyeCenterY;
    const angle = Math.atan2(dy, dx);

    // Constrain the pupil to max movement distance
    const x = Math.cos(angle) * Math.min(maxEyeMovement, Math.hypot(dx, dy));
    const y = Math.sin(angle) * Math.min(maxEyeMovement, Math.hypot(dx, dy));
    setEyePosition({ x, y });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative flex justify-center border-2 border-gray-700 rounded-xl h-fit w-fit">
      <div className="absolute w-[50%] bg-gray-700 top-0 rounded-b-xl" style={{ height: size / 9 }} />
      <div
        style={{ height: size, width: size }}
        className="flex items-center justify-center bg-black rounded-lg"
        ref={robotPosition}
      >
        <motion.div
          className="flex items-center justify-center gap-3 opacity-70 h-fit"
          animate={{
            x: eyePosition.x / 2,
            y: eyePosition.y / 2,
          }}
          transition={{
            type: "tween",
          }}
        >
          <div className="bg-primary rounded-xl" style={{ width: size / 9, height: size / 3 }} />
          <div className="bg-primary rounded-xl" style={{ width: size / 9, height: size / 3 }} />
        </motion.div>
      </div>
    </div>
  );
};

export default RobotAssistant;
