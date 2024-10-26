import React from "react";
import CardTitle from "./CardTitle";
import { IconThumbUp } from "@tabler/icons-react";
import InfiniteAutoScroll from "./InfiniteAutoScroll";
import { IChooseMe } from "@/interfaces/IChooseMe";
import { chooseMe_1, chooseMe_2 } from "@/mocks/chooseMe";
import StrongPoint from "./StrongPoint";
import { motion } from "framer-motion";
import useFramerEffect from "@/hooks/useFramerEffect";
import Link from "./Link";

const SectionChooseMe = () => {
  const variant = useFramerEffect({ effect: "slideUp" });
  const recipientId = "tran-dat-185284198";
  const messageURL = `https://www.linkedin.com/messaging/thread/new/?recipient=${recipientId}`;

  return (
    <>
      <motion.div
        className="flex flex-col 2xl:h-[40%] lg:h-[450px] 2xl:w-full lg:w-[50%] gap-4 py-4 bg-gray-800/50 border rounded-2xl"
        variants={variant}
      >
        <CardTitle text="Why To Choose Me ?" icon={<IconThumbUp size={20} className="text-primary" />} />
        <InfiniteAutoScroll
          direction="right"
          data={chooseMe_1}
          template={({ item }: { item: IChooseMe }) => <StrongPoint {...item} />}
        />
        <InfiniteAutoScroll
          direction="left"
          data={chooseMe_2}
          template={({ item }: { item: IChooseMe }) => <StrongPoint {...item} />}
        />
        <div className="flex flex-col items-center gap-2 px-4 mt-auto">
          <p className="text-gray-400">Want to know more about me?</p>
          <Link
            className="justify-center w-full py-3 text-xl font-medium text-center bg-primary hover:bg-primary/80"
            target="_blank"
            href={messageURL}
          >
            Let have a chat
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default SectionChooseMe;
