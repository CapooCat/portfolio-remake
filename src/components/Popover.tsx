import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import cn from "@/utils/cn";

interface PopoverProps {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Popover: React.FC<PopoverProps> = ({ content, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cn_popover = cn("absolute w-80 mt-4", { [className ?? ""]: className });
  const ref = useRef<HTMLDivElement>(null);

  const togglePopover = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-fit" ref={ref}>
      <div onClick={togglePopover}>{children}</div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={cn_popover}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Popover;
