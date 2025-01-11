import React from "react";
import {
  IconBox,
  IconBrandFramerMotion,
  IconBrandJavascript,
  IconBrandMantine,
  IconBrandReact,
  IconBrandSass,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVite,
  IconBuilding,
  IconGizmo,
  IconRotate2,
  IconRoute,
  IconSquareRotated,
  IconTestPipe,
} from "@tabler/icons-react";

import IconBrandJquery from "@/assets/jquery-brand.svg?react";

const skills = [
  {
    icon: <IconBrandJavascript size={24} />,
    name: "Javascript",
    date: "2021-05-01",
  },
  {
    icon: <IconBrandTypescript size={24} />,
    name: "TypeScript",
    date: "2022-05-01",
  },
  {
    icon: <IconBrandReact size={24} />,
    name: "React",
    date: "2022-05-01",
  },
  {
    icon: <IconGizmo size={24} />,
    name: "Recoil",
    date: "2023-05-01",
  },
  {
    icon: <IconBrandSass size={24} />,
    name: "SCSS",
    date: "2022-05-01",
  },
  {
    icon: <IconBrandReact size={24} />,
    name: "React Query",
    date: "2022-05-01",
  },
  {
    icon: <IconBuilding size={24} />,
    name: "React Hook Form",
    date: "2022-05-01",
  },
  {
    icon: <IconBrandFramerMotion size={24} />,
    name: "Framer Motion",
    date: "2023-05-01",
  },
  {
    icon: <IconTestPipe size={24} />,
    name: "Vitest",
    date: "2023-05-01",
  },
  {
    icon: <IconBrandVite size={24} />,
    name: "Vite",
    date: "2022-05-01",
  },
  {
    icon: <IconRotate2 size={24} />,
    name: "Agile (Scrum)",
    date: "2022-05-01",
  },
  {
    icon: <IconBrandJquery className="size-8 text-primary" />,
    name: "JQuery",
    date: "2021-05-01",
  },
  {
    icon: <IconSquareRotated className="size-8 text-primary" />,
    name: "Ant Design",
    date: "2022-05-01",
  },
  {
    icon: <IconRoute className="size-8 text-primary" />,
    name: "React Router",
    date: "2022-05-01",
  },
  {
    icon: <IconBox className="size-8 text-primary" />,
    name: "Prime React",
    date: "2022-05-01",
  },
  {
    icon: <IconBrandTailwind className="size-8 text-primary" />,
    name: "Tailwind",
    date: "2022-05-01",
  },
];

export default skills;
