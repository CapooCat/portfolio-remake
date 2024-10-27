import cn from "@/utils/cn";
import React from "react";

interface ITag {
  text: string;
  icon?: React.JSX.Element;
  className?: string;
}
const Tag = ({ text, icon, className }: ITag) => {
  const cn_tag = cn("flex items-center gap-2 px-4 py-1 border border-gray-600 w-fit rounded-2xl", {
    [className ?? ""]: className,
  });

  const Icon = ({ icon }: { icon?: React.JSX.Element }) => {
    if (!icon) return <></>;
    else return <div className="text-primary">{icon}</div>;
  };

  return (
    <div className={cn_tag}>
      <Icon icon={icon} />
      {text}
    </div>
  );
};

export default Tag;
