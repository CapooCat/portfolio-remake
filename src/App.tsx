import React from "react";

import InfiniteAutoScroll from "./components/InfiniteAutoScroll";
import reviews from "@/mocks/reviews";

import { IReviewBox } from "./interfaces/IReview";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase2,
  IconBuildings,
  IconCarambola,
  IconCode,
  IconDownload,
  IconMapPin,
  IconPhone,
  IconSchool,
  IconThumbUp,
  IconTimeline,
  IconTrophy,
  IconWand,
  IconWorld,
} from "@tabler/icons-react";

import ReviewBox from "@/components/ReviewBox";
import CardTitle from "@/components/CardTitle";
import SkillList from "@/components/SkillList";
import TotalDisplay from "@/components/TotalDisplay";
import ProjectList from "./components/ProjectList";
import StrongPoint from "./components/StrongPoint";
import { IChooseMe } from "./interfaces/IChooseMe";
import { chooseMe_1, chooseMe_2 } from "./mocks/chooseMe";
import { AnimatePresence, motion } from "framer-motion";
import useFramerEffect from "./hooks/useFramerEffect";
import SectionAbout from "@/components/SectionAbout";
import SectionSummary from "./components/SectionSummary";
import SectionReviews from "./components/SectionReviews";
import SectionSkills from "./components/SectionSkills";
import SectionProjects from "./components/SectionProjects";
import SectionChooseMe from "./components/SectionChooseMe";
import SectionTimeLine from "./components/SectionTimeLine";
import Button from "./components/Button";

function App() {
  const variant = useFramerEffect({ effect: "slideUp", options: { stagger: true } });

  return (
    <AnimatePresence>
      <motion.section className="container flex gap-4 h-[85svh]" variants={variant} animate="animate" initial="hidden">
        <div className="flex flex-col w-[550px] h-full gap-4">
          <SectionAbout />
          <SectionSummary />
          <SectionReviews />
        </div>

        <div className="flex flex-col items-stretch flex-1 h-full gap-4">
          <SectionSkills />
          <SectionProjects />
        </div>

        <div className="flex flex-col w-[500px] h-full gap-4">
          <SectionTimeLine />
          <SectionChooseMe />
        </div>
      </motion.section>
    </AnimatePresence>
  );
}

export default App;
