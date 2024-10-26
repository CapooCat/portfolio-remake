export const setCssVariable = (
  variableName: string,
  value: string,
  element: HTMLElement | null = document.documentElement
): void => {
  element!.style.setProperty(variableName, value);
};
