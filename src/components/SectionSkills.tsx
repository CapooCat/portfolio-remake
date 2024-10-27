import React, { useState } from "react";
import { IconWand } from "@tabler/icons-react";
import CardTitle from "./CardTitle";
import SkillList from "./SkillList";
import useFramerEffect from "@/hooks/useFramerEffect";
import { motion } from "framer-motion";

const SectionSkills = () => {
  const [showSkillList, setShowSkillList] = useState(false);
  const variant = useFramerEffect({ effect: "slideUp" });

  return (
    <motion.div
      variants={variant}
      className="flex flex-col w-full lg:h-full h-[450px] 2xl:max-h-[40%] overflow-hidden gap-4 py-4 bg-gray-800/50 border rounded-2xl"
      onAnimationComplete={() => setShowSkillList(true)}
    >
      <CardTitle text="Skills" icon={<IconWand size={20} className="text-primary" />} />
      {showSkillList && <SkillList />}
    </motion.div>
  );
};

export default SectionSkills;
