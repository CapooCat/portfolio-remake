import React from "react";
import ButtonColorPicker from "./ButtonColorPicker";
import { motion } from "framer-motion";
import useFramerEffect from "@/hooks/useFramerEffect";

const TopMenu = () => {
  const variants = useFramerEffect({ effect: "fadeIn" });

  return (
    <motion.div className="!container px-6 py-4 max-w-[100svw]" variants={variants} animate="animate" initial="hidden">
      <ButtonColorPicker />
    </motion.div>
  );
};

export default TopMenu;
