import { IChooseMe } from "@/interfaces/IChooseMe";
import React from "react";
const StrongPoint = ({ icon, text }: IChooseMe) => {
  const Icon = ({ icon }: { icon?: React.JSX.Element }) => {
    if (!icon) return <></>;
    else return <div className="p-2 bg-gray-900 rounded-2xl text-primary">{icon}</div>;
  };

  return (
    <li className="flex items-center mx-2 px-2 gap-1 bg-gray-900 border rounded-2xl w-[200px]">
      <Icon icon={icon} />
      <div>
        <p className="font-bold">{text}</p>
      </div>
    </li>
  );
};

export default StrongPoint;
