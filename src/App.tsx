import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useFramerEffect from "./hooks/useFramerEffect";
import SectionAbout from "@/components/SectionAbout";
import SectionSummary from "@/components/SectionSummary";
import SectionReviews from "@/components/SectionReviews";
import SectionSkills from "@/components/SectionSkills";
import SectionProjects from "@/components/SectionProjects";
import SectionChooseMe from "@/components/SectionChooseMe";
import SectionTimeLine from "@/components/SectionTimeLine";
import WebsiteTechStack from "@/components/WebsiteTechStack";
import TopMenu from "@/components/TopMenu";
import WrapperWelcome from "./components/WrapperWelcome";
import CursorLight from "./components/CursorLight";
import updateFavicon from "@/utils/updateFavicon";

function App() {
  const variant = useFramerEffect({ effect: "slideUp", options: { stagger: true } });

  useEffect(() => {
    updateFavicon();
  }, []);

  return (
    <AnimatePresence>
      <WrapperWelcome>
        <CursorLight />
        <header className="sticky top-0 left-0 z-50 flex justify-center w-full">
          <TopMenu />
        </header>

        <motion.main
          key="main"
          className="!container flex flex-wrap gap-4 min-h-full max-w-[100svw] px-6"
          variants={variant}
          animate="animate"
          initial="hidden"
        >
          <div className="flex flex-col 2xl:w-[38%] min-h-full gap-4 lg:w-[50%] w-full">
            <SectionAbout />
            <SectionSummary />
            <SectionReviews />
          </div>

          <div className="flex flex-col 2xl:w-[32%] flex-1 min-h-full gap-4 lg:w-[50%] w-full">
            <SectionSkills />
            <SectionProjects />
          </div>

          <div className="flex gap-4 2xl:flex-col 2xl:w-[30%] 2xl:min-h-full 2xl:pb-0 lg:flex-row flex-col w-full pb-4">
            <SectionTimeLine />
            <SectionChooseMe />
          </div>
        </motion.main>

        <footer>
          <WebsiteTechStack />
        </footer>
      </WrapperWelcome>
    </AnimatePresence>
  );
}

export default App;
