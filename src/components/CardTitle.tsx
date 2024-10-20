import React from "react";
import cn from "@/utils/cn";

interface ICardTitle {
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

const CardTitle = ({ text, icon, className }: ICardTitle) => {
  const cn_element = cn("flex items-center justify-center gap-2 pb-2 text-2xl font-semibold tracking-wide border-b", {
    className: className,
  });

  return (
    <p className={cn_element}>
      {icon}
      {text}
    </p>
  );
};

export default CardTitle;
