import React from "react";
import { motion } from "framer-motion";
import CardTitle from "./CardTitle";
import { IconCarambola } from "@tabler/icons-react";
import InfiniteAutoScroll from "./InfiniteAutoScroll";
import reviews from "@/mocks/reviews";
import { IReviewBox } from "@/interfaces/IReview";
import ReviewBox from "./ReviewBox";
import useFramerEffect from "@/hooks/useFramerEffect";
import dataRead from "@/assets/constant/dataRead";

const SectionReviews = () => {
  const variant = useFramerEffect({ effect: "slideUp" });

  return (
    <motion.div
      variants={variant}
      className="flex flex-col w-full h-full gap-4 py-4 border bg-gray-800/50 rounded-2xl"
      data-read={dataRead.reviews}
    >
      <CardTitle text="Reviews" icon={<IconCarambola size={20} className="text-primary" />} />
      <div className="px-4">
        <div className="px-4 py-1 bg-gray-900 w-fit rounded-2xl">Number of Reviews: {reviews.length}</div>
      </div>
      <InfiniteAutoScroll
        direction="right"
        data={reviews}
        template={({ item }: { item: IReviewBox }) => <ReviewBox {...item} />}
      />
    </motion.div>
  );
};

export default SectionReviews;
