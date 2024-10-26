import { IReviewBox } from "@/interfaces/IReview";
import { IconStar, IconUser } from "@tabler/icons-react";
import React from "react";

const ReviewBox = ({ name, role, description }: IReviewBox) => {
  return (
    <div className="flex flex-col rounded-2xl w-[400px] mx-2 bg-gray-900">
      <div className="flex gap-4 p-4 border-b">
        <div className="flex items-center justify-center bg-gray-800 size-12 rounded-2xl">
          <IconUser className="text-primary" />
        </div>
        <div>
          <p>{name}</p>
          <p className="text-gray-400">{role}</p>
        </div>
        <div className="flex items-center gap-2 ml-auto h-fit">
          5/5
          <IconStar size={14} className="text-primary" />
        </div>
      </div>
      <p className="p-4">{description}</p>
    </div>
  );
};

export default ReviewBox;
