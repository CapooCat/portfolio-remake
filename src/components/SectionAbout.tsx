import React from "react";
import useFramerEffect from "@/hooks/useFramerEffect";
import { motion } from "framer-motion";
import BlinkingDot from "./BlinkingDot";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBuildings,
  IconDownload,
  IconMapPin,
  IconPhone,
  IconSchool,
  IconWorld,
} from "@tabler/icons-react";
import Button from "./Button";
import Tag from "./Tag";
import IconBrandZalo from "@/assets/zalo.svg?react";

const SectionAbout = () => {
  const variant = useFramerEffect({ effect: "slideUp" });
  const facebook = "https://www.facebook.com/Anticard99/";
  const linkedin = "https://www.linkedin.com/in/tran-dat-185284198/";
  const zalo = "tel:0777711670";
  const phone = "tel:0777711670";

  const href = (link: string) => {
    window.location.href = `tel:${link}`;
  };

  return (
    <motion.div variants={variant} className="flex flex-col w-full gap-4 p-4 bg-gray-800 border rounded-2xl">
      <div className="relative flex gap-4">
        <div className="flex-shrink-0 overflow-hidden bg-gray-900 size-36 rounded-2xl">
          <img src="src/assets/avatar.png" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 px-4 py-1 bg-gray-900 rounded-2xl w-fit">
            <BlinkingDot />
            Available To Work
          </div>
          <p className="text-2xl font-medium">Tran Thai Dat</p>
          <p>
            I'm a Frontend Developer with 3 years of experiences. I have strong ability to construct complex, responsive
            dashboards from Figma designs. Skilled in delivering high-performance websites on both desktop and mobile
            platforms.
          </p>
        </div>
        <Button icon={<IconDownload size={18} />} className="absolute top-0 right-0 px-4 py-2 h-fit">
          Resume
        </Button>
      </div>
      <ul className="flex flex-wrap gap-2">
        <Tag text="Vietnam" icon={<IconMapPin size={14} />} />
        <Tag text="Ho Chi Minh" icon={<IconBuildings size={14} />} />
        <Tag text="English and Vietnamese" icon={<IconWorld size={14} />} />
        <Tag text="Cao Thang Technical College" icon={<IconSchool size={14} />} />
      </ul>
      <div className="flex gap-4">
        <Button icon={<IconBrandFacebook size={18} />} onClick={() => href(facebook)}>
          Facebook
        </Button>
        <Button icon={<IconBrandLinkedin size={18} />} onClick={() => href(linkedin)}>
          LinkedIn
        </Button>
        <Button icon={<IconBrandZalo className="fill-white size-5" />} onClick={() => href(zalo)}>
          Zalo
        </Button>
        <Button icon={<IconPhone size={18} />} onClick={() => href(phone)}>
          Phone
        </Button>
      </div>
    </motion.div>
  );
};

export default SectionAbout;
