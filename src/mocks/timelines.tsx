import { IconBriefcase, IconSchool } from "@tabler/icons-react";
import React from "react";

export type TItem = {
  icon?: React.ReactNode;
  title?: string;
  location?: string;
  date?: string;
  description?: string;
};

const timelines: TItem[] = [
  {
    icon: <IconSchool />,
    title: "Cao thang College",
    location: "District 1, Ho Chi Minh City",
    date: "04/2017 - 04/2021",
    description: "Studying at Cao Thang College major in computer science",
  },
  {
    icon: <IconBriefcase />,
    title: "FPT Information System",
    location: "District 7, Ho Chi Minh City",
    date: "05/2021 - 08/2024",
    description: "Frontend Developer at FPT Information System",
  },
  {
    icon: <IconBriefcase />,
    title: "PangoCDP",
    location: "District 3, Ho Chi Minh City",
    date: "08/2024 - Present",
    description: "Mid-level Frontend Developer at PangoCDP",
  },
];

export default timelines;
