import React from "react";
import CardTitle from "./CardTitle";
import { IconTrophy } from "@tabler/icons-react";
import ProjectList from "./ProjectList";
import { motion } from "framer-motion";
import useFramerEffect from "@/hooks/useFramerEffect";

const SectionProjects = () => {
  const variant = useFramerEffect({ effect: "slideUp" });

  return (
    <motion.div
      variants={variant}
      className="flex flex-col w-full max-h-[50%] gap-4 py-4 bg-gray-800 border h-full rounded-2xl"
    >
      <CardTitle text="Top Projects" icon={<IconTrophy size={20} className="text-primary" />} />
      <ProjectList />
    </motion.div>
  );
};

export default SectionProjects;
