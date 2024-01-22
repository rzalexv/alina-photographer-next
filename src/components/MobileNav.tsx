import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

export const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="text-primary xl:hidden">
      {openMenu && <div className="absolute top-0 left-0 w-full h-screen bg-primary/40" onClick={() => setOpenMenu(!openMenu)}></div>}

      <div className="text-3xl cursor-pointer" onClick={() => setOpenMenu(!openMenu)}>
        <CgMenuRight />
      </div>

      <motion.div variants={menuVariants} initial="hidden" animate={openMenu ? "show" : ""} className="absolute top-0 right-0 z-20 w-full h-screen max-w-xs bg-white shadow-2xl">
        <div className="absolute z-30 text-4xl cursor-pointer left-4 top-14 text-primary">
          <IoMdClose onClick={() => setOpenMenu(!openMenu)} />
        </div>
        <ul className="flex flex-col items-center justify-center h-full text-3xl font-bold gap-y-8 text-primary font-primary">
          <li className="">
            <Link href="/" onClick={() => setOpenMenu(!openMenu)}>
              Home
            </Link>
          </li>
          <li className="">
            <Link href="/about" onClick={() => setOpenMenu(!openMenu)}>
              About
            </Link>
          </li>
          <li className="">
            <Link href="/portfolio" onClick={() => setOpenMenu(!openMenu)}>
              Portfolio
            </Link>
          </li>
          <li className="">
            <Link href="/contact" onClick={() => setOpenMenu(!openMenu)}>
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};
