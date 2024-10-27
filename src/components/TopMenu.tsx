import React from "react";
import ButtonColorPicker from "./ButtonColorPicker";
import { motion } from "framer-motion";
import useFramerEffect from "@/hooks/useFramerEffect";
import RobotAssistant from "./RobotAssistant";
import Logo from "@/assets/logo.svg?react";

const TopMenu = () => {
  const variants = useFramerEffect({ effect: "fadeIn" });

  return (
    <motion.div
      className="flex justify-between items-center !container px-6 py-4 max-w-[100svw]"
      variants={variants}
      animate="animate"
      initial="hidden"
    >
      <div className="flex items-center gap-2 size-fit">
        <Logo className="size-9 text-primary" />
        <ButtonColorPicker />
      </div>
      <RobotAssistant />
    </motion.div>
  );
};

export default TopMenu;
