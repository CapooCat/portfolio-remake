import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimate, usePresence } from "framer-motion";
import wait from "@/utils/wait";
const WrapperWelcome = ({ children }: { children: React.ReactNode }) => {
  const [scope, animate] = useAnimate();
  const [showApp, setShowApp] = useState(false);
  const [text, setText] = useState("");

  async function myAnimation() {
    // setText("I see that you're here for the first time");
    // await animate(scope.current, { y: 0 });
    // await wait(2000);
    // await animate(scope.current, { y: "100%" });
    setText("Welcome to my portfolio!");
    await animate(scope.current, { y: 0 });
    await wait(1500);
    await animate(scope.current, { y: "-110%" });

    setTimeout(() => setShowApp(true), 100);
  }

  useEffect(() => {
    myAnimation();
  }, []);

  return (
    <AnimatePresence>
      {!showApp && (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-full">
          <div className="overflow-hidden">
            <motion.div ref={scope} initial={{ y: "100%" }} className="text-3xl">
              {text}
            </motion.div>
          </div>
        </div>
      )}

      {showApp && children}
    </AnimatePresence>
  );
};

export default WrapperWelcome;
