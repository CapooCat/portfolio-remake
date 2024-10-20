import React, { Component } from "react";
import skills from "@/mocks/skills";

const SkillList = () => {
  const Icon = ({ icon }: { icon?: React.JSX.Element }) => {
    if (!icon) return <></>;
    else
      return (
        <div className="flex items-center justify-center p-2 bg-gray-900 size-11 rounded-2xl text-primary">{icon}</div>
      );
  };

  return (
    <ul className="flex flex-wrap justify-center gap-2 px-4 overflow-auto">
      {skills.map((item, index) => (
        <li className="flex gap-2 py-2 pl-2 pr-4 border border-gray-700/50 w-fit rounded-2xl" key={index}>
          <Icon icon={item.icon} />
          <div>
            <p className="font-bold">{item.name}</p>
            <p className="text-sm text-gray-400 ">{item.years} year of experiences</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SkillList;
