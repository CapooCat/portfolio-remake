import React from "react";
import { IconWand } from "@tabler/icons-react";
import CardTitle from "./CardTitle";
import SkillList from "./SkillList";
import useFramerEffect from "@/hooks/useFramerEffect";
import { motion } from "framer-motion";

const SectionSkills = () => {
  const variant = useFramerEffect({ effect: "slideUp" });

  return (
    <motion.div
      variants={variant}
      className="flex flex-col w-full h-full max-h-[50%] overflow-auto gap-4 py-4 bg-gray-800 border rounded-2xl"
    >
      <CardTitle text="Skills" icon={<IconWand size={20} className="text-primary" />} />
      <SkillList />
    </motion.div>
  );
};

export default SectionSkills;
