import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/style/index.scss";
import "@/style/font.scss";
import App from "./App";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
