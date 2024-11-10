import React from "react";
import TotalDisplay from "./TotalDisplay";
import { IconBrandGithub, IconBriefcase2, IconCode } from "@tabler/icons-react";
import useFramerEffect from "@/hooks/useFramerEffect";
import { motion } from "framer-motion";
import dataRead from "@/assets/constant/dataRead";

const SectionSummary = () => {
  const variant = useFramerEffect({ effect: "slideUp" });

  return (
    <motion.div variants={variant} className="flex flex-col gap-4 xs:flex-row">
      <TotalDisplay
        number={5}
        title="Github Projects"
        icon={<IconBrandGithub size={14} />}
        dataRead={dataRead.githubProjects}
      />
      <TotalDisplay
        number={3}
        title="Years expertise"
        icon={<IconCode size={14} />}
        dataRead={dataRead.yearsExpertise}
      />
    </motion.div>
  );
};

export default SectionSummary;
