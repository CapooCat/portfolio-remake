export const getCssVariable = (
  variableName: string,
  element: HTMLElement | null = document.documentElement
): string => {
  return getComputedStyle(element!).getPropertyValue(variableName).trim();
};
