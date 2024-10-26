import React from "react";
import skills from "@/mocks/skills";
import useFramerEffect from "@/hooks/useFramerEffect";
import { motion } from "framer-motion";
import { Scrollbars } from "react-custom-scrollbars-2";

const SkillList = () => {
  const variants = useFramerEffect({ effect: "slideUp", options: { stagger: true } });
  const Icon = ({ icon }: { icon?: React.JSX.Element }) => {
    if (!icon) return <></>;
    else
      return (
        <div className="flex items-center justify-center p-2 bg-gray-800 size-11 rounded-2xl text-primary">{icon}</div>
      );
  };

  return (
    <Scrollbars
      renderThumbHorizontal={(props) => <div {...props} className="custom-scroll" />}
      renderThumbVertical={(props) => <div {...props} className="custom-scroll" />}
      autoHide
    >
      <motion.ul
        className="grid justify-center w-full grid-cols-1 gap-2 px-4 xs:grid-cols-2"
        variants={variants}
        animate="animate"
        initial="hidden"
      >
        {skills.map((item, index) => (
          <li className="overflow-hidden" key={index}>
            <motion.div variants={variants} className="flex w-full h-full gap-2 py-2 pl-2 pr-4 bg-gray-900 rounded-2xl">
              <Icon icon={item.icon} />
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-gray-400">{item.years} year of experiences</p>
              </div>
            </motion.div>
          </li>
        ))}
      </motion.ul>
    </Scrollbars>
  );
};

export default SkillList;
