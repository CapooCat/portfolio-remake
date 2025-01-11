import React from "react";
import Button from "./Button";
import { IconArrowUpRight } from "@tabler/icons-react";
import Modal from "@/contexts/ModalContext";
import ModalCertificates from "./modal/ModalCertificates";

interface ITotalDisplay {
  number: number;
  title: string;
  icon?: React.JSX.Element;
  dataRead?: string;
}
const TotalCertificates = ({ number, title, icon, dataRead }: ITotalDisplay) => {
  const Icon = ({ icon }: { icon?: React.JSX.Element }) => {
    if (!icon) return <></>;
    else return <div className="text-primary">{icon}</div>;
  };

  return (
    <div
      className="relative flex flex-col justify-between flex-1 p-2 text-center border bg-gray-800/50 h-fit rounded-2xl"
      data-read={dataRead}
    >
      <Modal.Wrapper
        className="absolute top-1 right-1"
        layoutId="certificates"
        content={<ModalCertificates />}
        title="Certificates"
      >
        <Button
          icon={<IconArrowUpRight className="size-6 text-primary" />}
          className="p-1 bg-transparent aspect-square"
        />
      </Modal.Wrapper>

      <div className="flex flex-col gap-2">
        <p className="flex items-center justify-center text-transparent text-7xl via-gray-700 via-70% bg-gradient-to-b from-white to-transparent bg-clip-text to-95% font-medium">
          {number}
          <span className="text-4xl text-primary">+</span>
        </p>
        <div className="flex items-center justify-center gap-2 py-1 rounded-2xl">
          <Icon icon={icon} />
          {title}
        </div>
      </div>
    </div>
  );
};

export default TotalCertificates;
