import React, { ButtonHTMLAttributes } from "react";
import cn from "@/utils/cn";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export default function Button({ children, icon, iconPosition = "left", className = "", ...props }: IButtonProps) {
  const cn_button = cn(
    "transition-all flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-2xl",
    "hover:bg-gray-700",
    {
      [className]: className,
    }
  );
  return (
    <button className={cn_button} {...props}>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </button>
  );
}
