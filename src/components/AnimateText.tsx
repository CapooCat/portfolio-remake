import React from "react";
import { motion } from "framer-motion";

const AnimateText = ({ text }: { text: string }) => {
  const letters = Array.from(text);

  return (
    <motion.div key={text}>
      {letters.map((letter: string, index: number) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: index * 0.005,
            duration: 0.1,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimateText;
