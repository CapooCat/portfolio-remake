import React from "react";
const BlinkingDot = () => {
  return (
    <div className="relative flex size-fit">
      <span className="absolute top-0 bottom-0 left-0 right-0 inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping "></span>
      <span className="relative top-0 bottom-0 right-0 left-0 inline-flex bg-green-500 rounded-full size-3.5"></span>
    </div>
  );
};

export default BlinkingDot;
