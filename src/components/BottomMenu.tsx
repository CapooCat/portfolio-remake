import React from "react";
import { motion } from "framer-motion";
import useFramerEffect from "@/hooks/useFramerEffect";

const BottomMenu = () => {
  const variants = useFramerEffect({ effect: "fadeIn" });
  return (
    <motion.div
      className="!container w-full flex px-6 py-4 gap-1 justify-between flex-col items-center md:flex-row text-center"
      variants={variants}
      animate="animate"
      initial="hidden"
    >
      <div className="leading-8">
        This website is originally made by <span className="font-bold text-primary">Tran Thai Dat</span>
      </div>
      <div className="leading-8">Simplicity is the soul of efficiency - "Austin Freeman"</div>
    </motion.div>
  );
};

export default BottomMenu;
