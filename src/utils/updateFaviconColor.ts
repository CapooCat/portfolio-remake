import { IColor } from "react-color-palette";

export default function updateFaviconColor(color: IColor): void {
  const svg = `
    <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
            <g id="D">
                <rect fill='${color.hex}' height="512" rx="150" width="512" />
                <path
                    d="m391 256.54a151.08 151.08 0 0 1 -1.59 21.85 149.22 149.22 0 0 1 -129.31 126.17l-.71.09h-138.39v-190h63.1v126.86h71a86.23 86.23 0 0 0 70.93-67.26 87.2 87.2 0 0 0 1.83-17.71 86.23 86.23 0 0 0 -68.84-84.29 88 88 0 0 0 -13.13-1.61h-124.89v-63.29l132.31.48a149.07 149.07 0 0 1 137.69 148.71z"
                    fill="#fff" />
            </g>
        </g>
    </g>
</svg>
  `;

  // Convert the SVG to a data URL
  const svgBlob = new Blob([svg], { type: "image/svg+xml" });
  const url = URL.createObjectURL(svgBlob);

  // Create or update the favicon link element
  let favicon = document.querySelector<HTMLLinkElement>("link[rel='icon']") || document.createElement("link");
  if (!favicon) {
    favicon = document.createElement("link");
    favicon.rel = "icon";
    document.head.appendChild(favicon);
  }
  favicon.href = url;

  // Clean up the URL object after setting the favicon
  setTimeout(() => URL.revokeObjectURL(url), 100);
}
