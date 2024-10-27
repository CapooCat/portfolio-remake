import React from "react";
import { motion } from "framer-motion";
import useFramerEffect from "@/hooks/useFramerEffect";
import Scrollbars from "react-custom-scrollbars-2";
import timelines from "@/mocks/timelines";

type TItem = {
  icon?: React.ReactNode;
  title?: string;
  location?: string;
  date?: string;
  description?: string;
};

const TimeLine = () => {
  const variant = useFramerEffect({ effect: "slideUp", options: { stagger: true } });

  const ItemTemplate = (item: TItem) => {
    return (
      <motion.li className="flex gap-2 mt-6" variants={variant}>
        <div className="-translate-x-[calc(50%-1px)] translate-y-[calc(50%+1px)] border rounded-full size-3.5 border-primary bg-gray-800 flex-shrink-0" />
        <div className="px-4 py-2 bg-gray-900 rounded-xl">
          <div className="flex items-center gap-2 text-lg font-bold text-primary">
            {item.title}
            {item.icon && (
              <div className="flex items-center justify-center p-1 bg-gray-800 size-7 rounded-xl">{item.icon}</div>
            )}
          </div>
          <p className="pb-0.5 text-sm ">{item.location}</p>
          <p className="text-sm text-gray-400">{item.date}</p>
          <p>{item.description}</p>
        </div>
      </motion.li>
    );
  };

  return (
    <Scrollbars
      renderThumbHorizontal={(props) => <div {...props} className="custom-scroll" />}
      renderThumbVertical={(props) => <div {...props} className="custom-scroll" />}
      autoHide
    >
      <div className="relative flex flex-col w-full pl-6 pr-6 h-fit">
        <div className="w-[2px] bg-gray-700 h-full absolute z-0 rounded-xl animate-fadeIn" />
        <motion.ul className="z-10" variants={variant} animate="animate" initial="hidden">
          {timelines.map((item, index) => (
            <ItemTemplate {...item} key={index} />
          ))}
        </motion.ul>
      </div>
    </Scrollbars>
  );
};

export default TimeLine;
