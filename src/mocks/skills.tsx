import React from "react";
import {
  IconBrandFramerMotion,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandSass,
  IconBrandTypescript,
  IconBrandVite,
  IconBuilding,
  IconGizmo,
  IconRotate2,
  IconTestPipe,
} from "@tabler/icons-react";

import IconBrandJquery from "@/assets/jquery-brand.svg?react";

const skills = [
  {
    icon: <IconBrandJavascript size={24} />,
    name: "Javascript",
    years: 3,
  },
  {
    icon: <IconBrandTypescript size={24} />,
    name: "TypeScript",
    years: 2,
  },
  {
    icon: <IconBrandReact size={24} />,
    name: "React",
    years: 2,
  },
  {
    icon: <IconGizmo size={24} />,
    name: "Recoil",
    years: 1,
  },
  {
    icon: <IconBrandSass size={24} />,
    name: "SCSS",
    years: 2,
  },
  {
    icon: <IconBrandReact size={24} />,
    name: "React Query",
    years: 2,
  },
  {
    icon: <IconBuilding size={24} />,
    name: "React Hook Form",
    years: 2,
  },
  {
    icon: <IconBrandFramerMotion size={24} />,
    name: "Framer Motion",
    years: 1,
  },
  {
    icon: <IconTestPipe size={24} />,
    name: "Vitest",
    years: 1,
  },
  {
    icon: <IconBrandVite size={24} />,
    name: "Vite",
    years: 2,
  },
  {
    icon: <IconRotate2 size={24} />,
    name: "Agile (Scrum)",
    years: 2,
  },
  {
    icon: <IconBrandJquery className="size-8 text-primary" />,
    name: "JQuery",
    years: 3,
  },
];

export default skills;
