import React from "react";
import { motion } from "framer-motion";
import useFramerEffect from "@/hooks/useFramerEffect";
const TimeLine = () => {
  const variant = useFramerEffect({ effect: "slideUp", options: { stagger: true } });

  const ItemTemplate = (item) => {
    return (
      <li className="flex gap-2 mt-6">
        <div className="-translate-x-[calc(50%-0.5px)] translate-y-[calc(50%+0.5px)] border rounded-full size-4 border-primary bg-gray-800 flex-shrink-0" />
        <div className="px-4 py-2 border rounded-xl">
          <p className="text-xl font-bold">2017</p>
          <p>Started studying at Cao thang Technical College</p>
        </div>
      </li>
    );
  };

  return (
    <div className="relative flex flex-col w-full h-full pl-6 pr-6">
      <div className="w-[2px] bg-gray-700 h-full absolute z-0 rounded-xl" />
      <motion.ul className="z-10" variants={variant} animate="animate" initial="hidden">
        <li className="flex gap-2 mt-6">
          <div className="-translate-x-[calc(50%-1px)] translate-y-[calc(50%+1px)] border rounded-full size-3.5 border-primary bg-gray-800 flex-shrink-0" />
          <div className="px-4 py-2 bg-gray-900 rounded-xl">
            <p className="text-xl font-bold">2017</p>
            <p>Started studying at Cao thang Technical College</p>
          </div>
        </li>
        <li className="flex gap-2 mt-6">
          <div className="-translate-x-[calc(50%-0.5px)] translate-y-[calc(50%+0.5px)] border rounded-full size-3.5 border-primary bg-gray-800 flex-shrink-0" />
          <div className="px-4 py-2 bg-gray-900 rounded-xl">
            <p className="text-xl font-bold">2021</p>
            <p>Graduated and started my first career as a Frontend Developer at FPT Information System</p>
          </div>
        </li>
        <li className="flex gap-2 mt-6">
          <div className="-translate-x-[calc(50%-0.5px)] translate-y-[calc(50%+0.5px)] border rounded-full size-3.5 border-primary bg-gray-800 flex-shrink-0" />
          <div className="px-4 py-2 bg-gray-900 rounded-xl">
            <p className="text-xl font-bold">2024</p>
            <p>Started a new role as a middle-level Frontend Developer at ByteTech </p>
          </div>
        </li>
      </motion.ul>
    </div>
  );
};

export default TimeLine;
