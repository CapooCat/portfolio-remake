import React, { useState } from "react";
import CardTitle from "./CardTitle";
import { IconTimeline } from "@tabler/icons-react";
import { motion } from "framer-motion";
import useFramerEffect from "@/hooks/useFramerEffect";
import TimeLine from "./TimeLine";

const SectionTimeLine = () => {
  const [showTimeLine, setShowTimeLine] = useState(false);
  const variant = useFramerEffect({ effect: "slideUp" });

  return (
    <motion.div
      className="flex flex-col 2xl:h-[60%] 2xl:w-full lg:w-[50%] h-[450px] gap-4 py-4 bg-gray-800/50 border rounded-2xl"
      variants={variant}
      onAnimationComplete={() => setShowTimeLine(true)}
    >
      <CardTitle text="Timeline" icon={<IconTimeline size={20} className="text-primary" />} />
      {showTimeLine && <TimeLine />}
    </motion.div>
  );
};

export default SectionTimeLine;
