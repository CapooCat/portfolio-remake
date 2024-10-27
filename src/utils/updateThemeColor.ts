import { setCssVariable } from "./setCssVariable";
import { IColor } from "react-color-palette";

export default function updateThemeColor(color?: IColor): void {
  if (!color) return;
  setCssVariable("--primary-color-hex", color.hex);
  setCssVariable("--primary-color-tailwind", `${color.rgb.r} ${color.rgb.g} ${color.rgb.b}`);
  setCssVariable("--primary-color-rgb", `${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}`);
}
