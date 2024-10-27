import { IColor, useColor } from "react-color-palette";
import useLocalStorage from "./useLocalStorage";
import { getCssVariable } from "@/utils/getCssVariable";

const useThemeColorStore = (): [IColor, (input: IColor) => void] => {
  const [color] = useColor(getCssVariable("--primary-color-hex"));
  const [themeColor, storeThemeColor] = useLocalStorage<IColor>(color, "theme");
  return [themeColor, storeThemeColor];
};

export default useThemeColorStore;
