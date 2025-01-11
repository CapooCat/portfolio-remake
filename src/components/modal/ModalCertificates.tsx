import { IconExternalLink } from "@tabler/icons-react";
import React from "react";
import Link from "../Link";
import { certificates } from "@/mocks/certificates";
import useFramerEffect from "@/hooks/useFramerEffect";
import { motion } from "framer-motion";
import dayjs from "dayjs";

const ModalCertificates = () => {
  const variants = useFramerEffect({ effect: "slideUp", options: { stagger: true } });

  return (
    <div className="w-full max-w-[850px]">
      <motion.ul
        variants={variants}
        animate="animate"
        initial="hidden"
        className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2"
      >
        {certificates.map((item, index) => (
          <motion.li
            variants={variants}
            className="z-10 flex w-full gap-4 p-4 py-3 border rounded-xl bg-black/25"
            key={index}
          >
            {item.icon}
            <div className="flex flex-col flex-1">
              <span className="text-base font-bold leading-6">{item.title}</span>
              <span className="text-base">{item.brand}</span>
              <span className="text-sm text-gray-500">Issued: {dayjs(item.date).format("DD MMM YYYY")}</span>
              <span className="text-sm text-gray-500 line-clamp-1">Id: {item.id}</span>
              <Link icon={<IconExternalLink size={18} />} target="_blank" className="mt-2 w-fit" href={item.link}>
                Show Certificate
              </Link>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default ModalCertificates;
