import React, { Fragment, useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimate, usePresence } from "framer-motion";
import wait from "@/utils/wait";
import RobotAssistant from "./RobotAssistant";
import useLocalStorage from "@/hooks/useLocalStorage";

const WrapperWelcome = ({ children }: { children: React.ReactNode }) => {
  const [isAlreadyGreet, setIsAlreadyGreet] = useLocalStorage(false, "greet");
  const [textScope, textAnimate] = useAnimate();
  const [robotScope, robotAnimate] = useAnimate();
  const [showApp, setShowApp] = useState(isAlreadyGreet);
  const [text, setText] = useState("");

  async function robotAnimation() {
    await robotAnimate(robotScope.current, { scale: 1 });
    await wait(2500);
    await robotAnimate(robotScope.current, { scale: 0 });
  }

  async function textAnimation() {
    setText("Welcome to my portfolio!");
    await wait(1000);
    await textAnimate(textScope.current, { y: 0 });
    await wait(1500);
    await textAnimate(textScope.current, { y: "-110%" });

    setTimeout(() => {
      setIsAlreadyGreet(true);
      setShowApp(true);
    }, 100);
  }

  useEffect(() => {
    if (!isAlreadyGreet) {
      robotAnimation();
      textAnimation();
    }
  }, []);

  return (
    <AnimatePresence>
      <Fragment key="welcome">
        {!showApp && (
          <div className="fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center w-full h-full gap-8">
            <motion.div ref={robotScope} initial={{ scale: 0 }} className="flex flex-col items-center gap-4 w-fit">
              <div className="p-2 bg-black border-2 rounded-xl">Hello friend!!!</div>
              <RobotAssistant size={40} />
            </motion.div>

            <div className="overflow-hidden">
              <motion.div ref={textScope} initial={{ y: "100%" }} className="text-3xl leading-loose">
                {text}
              </motion.div>
            </div>
          </div>
        )}
      </Fragment>

      <Fragment key="main">{showApp && children}</Fragment>
    </AnimatePresence>
  );
};

export default WrapperWelcome;
