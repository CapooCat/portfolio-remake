import React, { createContext, useContext, useState, ReactNode, useRef, useEffect } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import Button from "@/components/Button";
import { IconX } from "@tabler/icons-react";

interface IModal {
  title: string;
  content: React.ReactNode;
  layoutId: string;
}

interface IModalContext {
  openModal: (props: IModal) => void;
  closeModal: () => void;
}

// Create the context with a default value
const MyContext = createContext<IModalContext | undefined>(undefined);

export const useModal = () => {
  const context = useContext(MyContext);
  if (!context) throw new Error("useModal must be used within a ModalProvider");
  return context;
};

const Modal = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [modalProps, setModalProps] = useState<IModal>();

  const background_variants: Variants = {
    open: { opacity: 1 },
    close: { opacity: 0 },
    initial: { opacity: 0 },
  };

  const openModal = (props: IModal) => {
    setVisible(true);
    setModalProps(props);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && ref.current == (event.target as Node)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOnOpen = (status: string) => {
    if (status === "open") document.body.style.overflow = "hidden";
  };

  const handleOnClose = () => {
    document.body.style.overflow = "auto";
  };

  return (
    <MyContext.Provider value={{ openModal, closeModal }}>
      <AnimatePresence onExitComplete={handleOnClose}>
        {visible && (
          <div className="fixed z-[9999] left-0 top-0 overflow-auto w-full h-full">
            <motion.div
              ref={ref}
              className="flex flex-col items-center justify-center w-full h-full py-4 min-h-fit bg-black/50 backdrop-blur-sm"
              variants={background_variants}
              initial="initial"
              animate="open"
              exit="close"
              transition={{ duration: 0.2 }}
              onAnimationStart={handleOnOpen}
            >
              {modalProps?.title && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.3, delay: 0.4, type: "spring" }}
                  className="flex flex-col items-center pb-4 text-2xl font-bold"
                >
                  {modalProps?.title}
                  <div className="w-20 h-0.5 mt-2 bg-primary rounded-xl" />
                </motion.div>
              )}
              <motion.div
                className="relative px-4 pt-12 pb-4 bg-gray-900 border rounded-xl max-w-[calc(100%-2rem)] h-fit"
                layoutId={modalProps?.layoutId}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, type: "spring" }}
              >
                <div className="absolute inset-0 size-full bg-primary/5" />
                <Button
                  icon={<IconX className="size-5" />}
                  className="absolute p-1 right-1 top-1 aspect-square"
                  onClick={closeModal}
                />

                {modalProps?.content}
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {children}
    </MyContext.Provider>
  );
};

const Wrapper = ({
  title,
  content,
  children,
  layoutId,
  className,
}: IModal & { children: React.ReactNode; className?: string }) => {
  const { openModal } = useModal();

  return (
    <div className={className} onClick={() => openModal({ content, layoutId, title })}>
      {children}
      <motion.div layoutId={layoutId} className="absolute -z-10" />
    </div>
  );
};

Modal.Wrapper = Wrapper;

export default Modal;
