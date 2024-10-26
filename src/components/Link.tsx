import React from "react";
import cn from "@/utils/cn";

interface ILinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export default function Link({ children, icon, iconPosition = "left", className = "", ...props }: ILinkProps) {
  const cn_button = cn(
    "transition-all flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-2xl cursor-pointer",
    "hover:bg-gray-700",
    {
      [className]: className,
    }
  );
  return (
    <a className={cn_button} {...props}>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </a>
  );
}
