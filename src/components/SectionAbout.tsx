import React from "react";
import useFramerEffect from "@/hooks/useFramerEffect";
import { motion } from "framer-motion";
import BlinkingDot from "./BlinkingDot";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBuildings,
  IconDownload,
  IconMapPin,
  IconPhone,
  IconSchool,
  IconWorld,
} from "@tabler/icons-react";
import Tag from "./Tag";
import Link from "./Link";

const SectionAbout = () => {
  const variant = useFramerEffect({ effect: "slideUp" });
  const facebook = "https://www.facebook.com/Anticard99/";
  const linkedin = "https://www.linkedin.com/in/tran-dat-185284198/";
  const github = "https://github.com/CapooCat";
  const cv = "https://drive.google.com/file/d/1mprst1gjWI3NW-_nMP7eyiKzOjlr9tkV/view?usp=sharing";

  return (
    <motion.div key="1" variants={variant} className="flex flex-col w-full gap-4 p-4 border bg-gray-800/50 rounded-2xl">
      <div className="relative flex gap-4">
        <div className="flex-shrink-0 overflow-hidden bg-gray-900 size-36 rounded-2xl">
          <img src="src/assets/avatar.png" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 px-4 py-1 mt-12 bg-gray-900 xss:mt-0 rounded-2xl w-fit">
            <BlinkingDot />
            <span className="line-clamp-1">Available To Work</span>
          </div>
          <p className="text-2xl font-medium">Tran Thai Dat</p>
          <p>
            I'm a Frontend Developer with 3 years of experiences. I have strong ability to construct complex, responsive
            dashboards from Figma designs. Skilled in delivering high-performance websites on both desktop and mobile
            platforms.
          </p>
        </div>
        <Link
          icon={<IconDownload size={18} />}
          className="absolute top-0 right-0 px-4 py-2 h-fit"
          href={cv}
          target="_blank"
        >
          <span className="hidden xs:block">Resume</span>
        </Link>
      </div>
      <ul className="flex flex-wrap gap-2">
        <Tag text="Vietnam" icon={<IconMapPin size={14} />} />
        <Tag text="Ho Chi Minh" icon={<IconBuildings size={14} />} />
        <Tag text="English and Vietnamese" icon={<IconWorld size={14} />} />
        <Tag text="Cao Thang Technical College" icon={<IconSchool size={14} />} />
      </ul>
      <div className="flex flex-wrap gap-4">
        <Link icon={<IconBrandFacebook size={18} />} href={facebook} target="_blank">
          Facebook
        </Link>
        <Link icon={<IconBrandLinkedin size={18} />} href={linkedin} target="_blank">
          LinkedIn
        </Link>
        <Link icon={<IconBrandGithub size={18} />} href={github} target="_blank">
          Github
        </Link>
      </div>
    </motion.div>
  );
};

export default SectionAbout;
