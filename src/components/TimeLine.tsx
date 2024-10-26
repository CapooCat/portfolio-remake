import React from "react";
import { motion } from "framer-motion";
import useFramerEffect from "@/hooks/useFramerEffect";
import { IconBriefcase, IconSchool } from "@tabler/icons-react";
import Scrollbars from "react-custom-scrollbars-2";

type TItem = {
  icon?: React.ReactNode;
  title?: string;
  location?: string;
  date?: string;
  description?: string;
};

const TimeLine = () => {
  const variant = useFramerEffect({ effect: "slideUp", options: { stagger: true } });

  const items: TItem[] = [
    {
      icon: <IconSchool />,
      title: "Cao thang College",
      location: "District 1, Ho Chi Minh City",
      date: "04/2017 - 04/2021",
      description: "Studying at Cao Thang College mature in computer science",
    },
    {
      icon: <IconBriefcase />,
      title: "FPT Information System",
      location: "District 7, Ho Chi Minh City",
      date: "05/2021 - 08/2024",
      description: "Frontend Developer at FPT Information System",
    },
    {
      icon: <IconBriefcase />,
      title: "ByteTech",
      location: "District 3, Ho Chi Minh City",
      date: "08/2024 - Present",
      description: "Middle-level Frontend Developer at ByteTech",
    },
  ];

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
          <p className="text-sm">{item.location}</p>
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
          {items.map((item, index) => (
            <ItemTemplate {...item} key={index} />
          ))}
        </motion.ul>
      </div>
    </Scrollbars>
  );
};

export default TimeLine;
