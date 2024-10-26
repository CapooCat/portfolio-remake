import React from "react";
import TotalDisplay from "./TotalDisplay";
import { IconBrandGithub, IconBriefcase2, IconCode } from "@tabler/icons-react";
import useFramerEffect from "@/hooks/useFramerEffect";
import { motion } from "framer-motion";
const SectionSummary = () => {
  const variant = useFramerEffect({ effect: "slideUp" });

  return (
    <motion.div variants={variant} className="flex flex-col gap-4 xs:flex-row">
      <TotalDisplay number={5} title="Happy Clients" icon={<IconBriefcase2 size={14} />} />
      <TotalDisplay number={5} title="Git Projects" icon={<IconBrandGithub size={14} />} />
      <TotalDisplay number={3} title="Year expertise" icon={<IconCode size={14} />} />
    </motion.div>
  );
};

export default SectionSummary;
