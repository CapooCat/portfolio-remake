import React, { useEffect, useRef, useState } from "react";
import projects, { TProject } from "@/mocks/projects";
import Scrollbars from "react-custom-scrollbars-2";
import { IconBrandGithub, IconCup, IconExternalLink, IconProgress } from "@tabler/icons-react";
import Link from "./Link";
import useFramerEffect from "@/hooks/useFramerEffect";
import { AnimatePresence, motion } from "framer-motion";
import Tag from "./Tag";
import cn from "@/utils/cn";

interface IProjectType {
  type?: "client" | "personal" | string;
}

interface IProjectRole {
  role?: "FE" | "BE" | string;
}

const ProjectList = () => {
  const variants = useFramerEffect({ effect: "slideUp", options: { stagger: true } });

  const Type = ({ type }: IProjectType) => {
    let result: string;
    switch (type) {
      case "client":
        result = "Company project";
        break;
      case "personal":
        result = "Personal project";
        break;
      default:
        return <></>;
    }

    return <Tag className="py-1 text-sm bg-green-600 border-none" text={result} />;
  };

  const ProjectTemplate = ({ item }: { item: TProject }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [showDescription, setShowDescription] = useState(false);
    const variants = useFramerEffect({ effect: "slideUp", options: { stagger: true } });
    const cn_image = cn("object-cover aspect-video custom-card-img brightness-75 transition-all", {
      "blur-sm": showDescription,
    });

    const descMotion = {
      animate: { opacity: 1, height: "auto" },
      initial: { opacity: 0, height: 0 },
      exit: { opacity: 0, height: 0 },
    };

    useEffect(() => {
      if (ref.current) {
        ref.current.addEventListener("mouseenter", () => setShowDescription(true));
        ref.current.addEventListener("mouseleave", () => setShowDescription(false));
      }
    }, []);

    return (
      <motion.li className="relative z-10 rounded-xl custom-card" variants={variants}>
        <div className="overflow-hidden border rounded-xl">
          <img src={item.image} className={cn_image} />
        </div>

        <div className="absolute flex gap-2 top-2 right-2">
          {item.git && (
            <Link className="flex items-center justify-center p-0 size-10 opacity-90" href={item.git} target="_blank">
              <IconBrandGithub size={18} className="text-primary" />
            </Link>
          )}

          {item.website && (
            <Link
              className="flex items-center justify-center p-0 size-10 opacity-90"
              href={item.website}
              target="_blank"
            >
              <IconExternalLink size={18} className="text-primary" />
            </Link>
          )}
        </div>

        <div
          className="absolute bottom-0 left-0 w-full p-4 bg-gray-900/90 rounded-b-xl max-h-[90%] overflow-auto hidden-scrollbar"
          ref={ref}
        >
          <div className="flex flex-wrap items-center gap-2 pb-2">
            <span className="font-bold">{item.name}</span>
            <Type type={item.type} />
          </div>
          <AnimatePresence>
            {showDescription && (
              <motion.div animate={descMotion.animate} initial={descMotion.initial} exit={descMotion.exit}>
                <p className="pb-2">{item.description}</p>
                <div className="flex flex-wrap gap-1">
                  {item.techStack?.map((item, index) => (
                    <Tag text={item} key={index} className="py-1 text-sm" />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.li>
    );
  };

  return (
    <Scrollbars
      renderThumbHorizontal={(props) => <div {...props} className="custom-scroll" />}
      renderThumbVertical={(props) => <div {...props} className="custom-scroll" />}
      autoHide
    >
      <motion.ul className="flex flex-col h-full gap-4 px-4" variants={variants} animate="animate" initial="hidden">
        {projects.map((item, index) => (
          <ProjectTemplate item={item} key={index} />
        ))}
      </motion.ul>
    </Scrollbars>
  );
};

export default ProjectList;
