import React from "react";
import CardTitle from "./CardTitle";
import { IconTimeline } from "@tabler/icons-react";
import { motion } from "framer-motion";
import useFramerEffect from "@/hooks/useFramerEffect";
import TimeLine from "./TimeLine";

const SectionTimeLine = () => {
  const variant = useFramerEffect({ effect: "slideUp" });
  return (
    <motion.div className="flex flex-col w-full h-[60%] gap-4 py-4 bg-gray-800 border rounded-2xl" variants={variant}>
      <CardTitle text="Timeline" icon={<IconTimeline size={20} className="text-primary" />} />
      <TimeLine />
    </motion.div>
  );
};

export default SectionTimeLine;
