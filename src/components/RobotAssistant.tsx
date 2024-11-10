import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import debounce from "@/utils/deboubce";
import cn from "@/utils/cn";
import useFramerEffect from "@/hooks/useFramerEffect";
import AnimateText from "./AnimateText";

const RobotAssistant = ({ size = 30 }: { size?: number }) => {
  const variants = useFramerEffect({ effect: "zoomIn" });
  const [silent, setSilent] = useState(false);
  const [readData, setReadData] = useState<string | null>(null);
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const robotPosition = useRef<HTMLDivElement>(null);

  const cn_eye = cn("bg-primary rounded-xl transition-all", {
    "!scale-0": silent,
  });

  const cn_dialog = cn(
    "absolute sm:top-0 sm:right-[100%] sm:mt-0 sm:mr-2 px-4 py-1",
    "top-[100%] right-0 mr-0 mt-2",
    "rounded-xl border border-gray-800/95 bg-gray-900/95",
    "max-w-[70vw] sm:max-w-[300px] w-[max-content]"
  );

  const eyeRadius = size / 2;
  const RobotRadius = size / 5;
  const maxEyeMovement = eyeRadius - RobotRadius;

  const handleMouseMove = (event: MouseEvent) => {
    const rect = robotPosition.current?.getBoundingClientRect() ?? { x: 0, y: 0 };
    const eyeCenterX = rect.x + eyeRadius;
    const eyeCenterY = rect.y + eyeRadius;
    const dx = event.clientX - eyeCenterX;
    const dy = event.clientY - eyeCenterY;
    const angle = Math.atan2(dy, dx);

    // Constrain the pupil to max movement distance
    const x = Math.cos(angle) * Math.min(maxEyeMovement, Math.hypot(dx, dy));
    const y = Math.sin(angle) * Math.min(maxEyeMovement, Math.hypot(dx, dy));
    handleMouseHover(event);
    setEyePosition({ x, y });
  };

  const handleMouseHover = debounce((event: MouseEvent) => {
    let element: HTMLElement = event.target as HTMLElement;
    const dataToRead = element.closest("[data-read]")?.getAttribute("data-read");
    if (dataToRead) setReadData(dataToRead);
    else setReadData(null);
  }, 200);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {readData && !silent && (
          <motion.div className={cn_dialog} variants={variants} initial="hidden" animate="animate" exit="remove">
            <AnimateText text={readData} />
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="relative flex justify-center overflow-hidden border-2 border-gray-700 cursor-pointer rounded-xl h-fit w-fit"
        onClick={() => setSilent(!silent)}
      >
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
            <div className={cn_eye} style={{ width: size / 9, height: size / 3 }} />
            <div className={cn_eye} style={{ width: size / 9, height: size / 3 }} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RobotAssistant;
