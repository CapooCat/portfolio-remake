import React, { useState } from "react";
import cn from "@/utils/cn";

interface IItem<T> {
  item: T;
}

interface IInfiniteAutoScroll<T> {
  direction: "right" | "left";
  data: T[];
  template: React.ComponentType<IItem<T>>;
}

const InfiniteAutoScroll = <T,>({ direction = "right", data = [], template }: IInfiniteAutoScroll<T>) => {
  const Template = template;
  const [isHovered, setIsHovered] = useState(false);

  const cn_container = cn("w-full overflow-hidden", {
    "animation-paused": isHovered,
  });

  const cn_scroller = cn("flex", {
    "animate-scroll-reverse": direction === "right",
    "animate-scroll": direction === "left",
  });

  return (
    <div className={cn_container} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="relative flex">
        <div className={cn_scroller}>
          {data.map((item, index) => (
            <Template item={item} key={index} />
          ))}
        </div>
        <div className={cn_scroller} aria-hidden="true">
          {data.map((item, index) => (
            <Template item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteAutoScroll;
