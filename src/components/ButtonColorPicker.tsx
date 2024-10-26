import React from "react";
import { ColorPicker, IColor, useColor } from "react-color-palette";
import "react-color-palette/css";
import Popover from "./Popover";
import Button from "./Button";
import { getCssVariable } from "@/utils/getCssVariable";
import { setCssVariable } from "../utils/setCssVariable";
import updateFavicon from "@/utils/updateFavicon";

const ButtonColorPicker = () => {
  const [color, setColor] = useColor(getCssVariable("--primary-color-hex"));

  const handleColorChange = (color: IColor) => {
    setColor(color);
    setCssVariable("--primary-color-hex", color.hex);
    setCssVariable("--primary-color-tailwind", `${color.rgb.r} ${color.rgb.g} ${color.rgb.b}`);
    setCssVariable("--primary-color-rgb", `${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}`);
    updateFavicon();
  };

  return (
    <Popover content={<ColorPicker color={color} onChange={handleColorChange} hideAlpha />}>
      <Button className="flex gap-3 px-3 border bg-gray-800/50">
        <div className="p-2 rounded-lg size-6 aspect-square" style={{ backgroundColor: color.hex }} />
        <span>Color theme</span>
      </Button>
    </Popover>
  );
};

export default ButtonColorPicker;
