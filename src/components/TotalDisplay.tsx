import React from "react";

interface ITotalDisplay {
  number: number;
  title: string;
  icon?: React.JSX.Element;
  dataRead?: string;
}
const TotalDisplay = ({ number, title, icon, dataRead }: ITotalDisplay) => {
  const Icon = ({ icon }: { icon?: React.JSX.Element }) => {
    if (!icon) return <></>;
    else return <div className="text-primary">{icon}</div>;
  };

  return (
    <div
      className="flex flex-col justify-between flex-1 gap-2 p-2 text-center border bg-gray-800/50 h-fit rounded-2xl"
      data-read={dataRead}
    >
      <p className="flex items-center justify-center text-transparent text-7xl via-gray-700 via-70% bg-gradient-to-b from-white to-transparent bg-clip-text to-95% font-medium">
        {number}
        <span className="text-4xl text-primary">+</span>
      </p>
      <div className="flex items-center justify-center gap-2 py-1 rounded-2xl">
        <Icon icon={icon} />
        {title}
      </div>
    </div>
  );
};

export default TotalDisplay;
