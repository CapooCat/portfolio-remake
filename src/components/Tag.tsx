import React from "react";

interface ITag {
  text: string;
  icon?: React.JSX.Element;
}
const Tag = ({ text, icon }: ITag) => {
  const Icon = ({ icon }: { icon?: React.JSX.Element }) => {
    if (!icon) return <></>;
    else return <div className="text-primary">{icon}</div>;
  };

  return (
    <li className="flex items-center gap-2 px-4 py-1 border border-gray-600 w-fit rounded-2xl">
      <Icon icon={icon} />
      {text}
    </li>
  );
};

export default Tag;
