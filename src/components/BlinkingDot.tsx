import React from "react";
const BlinkingDot = () => {
  return (
    <div className="relative flex size-fit">
      <span className="absolute inset-0 inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping "></span>
      <span className="relative inset-0 inline-flex bg-green-500 rounded-full size-3.5"></span>
    </div>
  );
};

export default BlinkingDot;
