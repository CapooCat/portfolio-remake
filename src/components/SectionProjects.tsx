import React, { useState } from "react";
import CardTitle from "./CardTitle";
import { IconTrophy } from "@tabler/icons-react";
import ProjectList from "./ProjectList";
import { motion } from "framer-motion";
import useFramerEffect from "@/hooks/useFramerEffect";

const SectionProjects = () => {
  const [showProjectsList, setShowProjectsList] = useState(false);
  const variant = useFramerEffect({ effect: "slideUp" });

  return (
    <motion.div
      variants={variant}
      className="flex flex-col lg:h-full h-[450px] 2xl:max-h-[60%] gap-4 py-4 bg-gray-800/50 border rounded-2xl overflow-hidden"
      onAnimationComplete={() => setShowProjectsList(true)}
    >
      <CardTitle text="Top Projects" icon={<IconTrophy size={20} className="text-primary" />} />
      {showProjectsList && <ProjectList />}
    </motion.div>
  );
};

export default SectionProjects;
