import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useFramerEffect from "./hooks/useFramerEffect";
import SectionAbout from "@/components/SectionAbout";
import SectionSummary from "@/components/SectionSummary";
import SectionReviews from "@/components/SectionReviews";
import SectionSkills from "@/components/SectionSkills";
import SectionProjects from "@/components/SectionProjects";
import SectionChooseMe from "@/components/SectionChooseMe";
import SectionTimeLine from "@/components/SectionTimeLine";
import TopMenu from "@/components/TopMenu";
import WrapperWelcome from "./components/WrapperWelcome";
import CursorLight from "./components/CursorLight";
import updateFaviconColor from "@/utils/updateFaviconColor";
import updateThemeColor from "./utils/updateThemeColor";
import useThemeColorStore from "./hooks/useThemeColorStore";
import debounce from "./utils/deboubce";
import BottomMenu from "@/components/BottomMenu";
import Modal from "./contexts/ModalContext";

function App() {
  const variant = useFramerEffect({ effect: "slideUp", options: { stagger: true } });
  const updateFavicon = debounce(updateFaviconColor, 100);
  const [themeColor] = useThemeColorStore();

  useEffect(() => {
    updateFavicon(themeColor);
    updateThemeColor(themeColor);
  }, []);

  return (
    <Modal>
      <WrapperWelcome>
        <CursorLight />
        <header className="sticky top-0 left-0 z-50 flex justify-center w-full">
          <TopMenu />
        </header>

        <motion.main
          className="!container flex flex-wrap gap-4 min-h-full max-w-[100svw] px-6"
          variants={variant}
          animate="animate"
          initial="hidden"
        >
          <div className="flex flex-col 2xl:w-[35%] min-h-full gap-4 lg:w-[50%] w-full">
            <SectionAbout />
            <SectionSummary />
            <SectionReviews />
          </div>

          <div className="flex flex-col 2xl:w-[35%] flex-1 min-h-full gap-4 lg:w-[50%] w-full">
            <SectionSkills />
            <SectionProjects />
          </div>

          <div className="flex gap-4 2xl:flex-col 2xl:w-[30%] 2xl:min-h-full 2xl:pb-0 lg:flex-row flex-col w-full">
            <SectionTimeLine />
            <SectionChooseMe />
          </div>
        </motion.main>

        <footer>
          <BottomMenu />
        </footer>
      </WrapperWelcome>
    </Modal>
  );
}

export default App;
