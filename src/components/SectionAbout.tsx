import React from "react";
import useFramerEffect from "@/hooks/useFramerEffect";
import { motion } from "framer-motion";
import BlinkingDot from "./BlinkingDot";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBuildings,
  IconDownload,
  IconMapPin,
  IconSchool,
  IconWorld,
} from "@tabler/icons-react";
import Tag from "./Tag";
import Link from "./Link";
import avatar from "@/assets/avatar.jpg";
import dataRead from "@/assets/constant/dataRead";
import AnimateText from "./AnimateText";
import { about } from "@/mocks/about";

const SectionAbout = () => {
  const variant = useFramerEffect({ effect: "slideUp" });

  return (
    <motion.div
      variants={variant}
      className="flex flex-col w-full gap-4 p-4 border bg-gray-800/50 rounded-2xl"
      data-read={dataRead.about}
    >
      <div className="relative flex flex-col gap-4 xs:flex-row">
        <div className="flex-shrink-0 overflow-hidden bg-gray-900 size-36 rounded-2xl">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 px-4 py-1 bg-gray-900 rounded-2xl w-fit">
            <BlinkingDot />
            <span className="line-clamp-1">Available To Work</span>
          </div>
          <p className="text-2xl font-medium">{about.fullName}</p>
          <AnimateText text={about.introduce} />
        </div>
        <Link
          icon={<IconDownload size={18} />}
          className="absolute top-0 right-0 px-4 py-2 h-fit"
          href={about.resume}
          target="_blank"
          data-read={dataRead.resume}
        >
          Resume
        </Link>
      </div>
      <ul className="flex flex-wrap gap-2">
        <Tag text="Vietnam" icon={<IconMapPin size={14} />} />
        <Tag text="Ho Chi Minh City" icon={<IconBuildings size={14} />} />
        <Tag text="English and Vietnamese" icon={<IconWorld size={14} />} />
        <Tag text="Cao Thang Technical College" icon={<IconSchool size={14} />} />
      </ul>
      <div className="flex flex-wrap gap-2">
        <Link icon={<IconBrandFacebook size={18} />} href={about.facebook} target="_blank">
          Facebook
        </Link>
        <Link icon={<IconBrandLinkedin size={18} />} href={about.linkedin} target="_blank">
          LinkedIn
        </Link>
        <Link icon={<IconBrandGithub size={18} />} href={about.github} target="_blank">
          Github
        </Link>
        <Link icon={<IconBrandLeetcode size={18} />} href={about.leetCode} target="_blank">
          Leetcode
        </Link>
      </div>
    </motion.div>
  );
};

export default SectionAbout;
