import React from "react";
import { ColorPicker, IColor, useColor } from "react-color-palette";
import "react-color-palette/css";
import Popover from "./Popover";
import Button from "./Button";
import useThemeColor from "@/hooks/useThemeColorStore";
import updateFaviconColor from "@/utils/updateFaviconColor";
import updateThemeColor from "@/utils/updateThemeColor";
import debounce from "@/utils/deboubce";
import dataRead from "@/assets/constant/dataRead";

const ButtonColorPicker = () => {
  const [themeColor, storeThemeColor] = useThemeColor();
  const [color, setColor] = useColor(themeColor.hex);
  const updateFavicon = debounce(updateFaviconColor, 100);

  const handleColorChange = (color: IColor) => {
    setColor(color);
    storeThemeColor(color);
    updateFavicon(color);
    updateThemeColor(color);
  };

  return (
    <Popover content={<ColorPicker color={color} onChange={handleColorChange} hideAlpha />}>
      <Button className="flex gap-3 px-3 border bg-gray-800/50" dataRead={dataRead.colorTheme}>
        <div className="p-2 rounded-lg size-6 aspect-square" style={{ backgroundColor: color.hex }} />
        <span>Color theme</span>
      </Button>
    </Popover>
  );
};

export default ButtonColorPicker;
