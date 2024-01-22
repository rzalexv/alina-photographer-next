import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CursorContext } from "@/context/CursorContext";
import { Contact } from "@/components";
import { transition1 } from "@/utils";
import WomanHome from "@/public/img/home/woman.png";

export default function Home() {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <>
      <motion.section className="overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transition1}>
        <div className="container relative px-4 mx-auto md:px-8">
          <div className="flex flex-col justify-center">
            <motion.div className="z-20 flex flex-col items-center justify-center w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto lg:absolute lg:items-start" initial={{ opacity: 0, y: "-50%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "-50%" }} transition={transition1} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
              <h1 className="heading-primary">
                Photographer <br /> & Film Maker
              </h1>
              <p className="mb-4 text-2xl lg:text-4xl font-primary lg:mb-12">Los Angeles, USA</p>
              <Link href="/contact" className="btn btn-dark">
                Hire me
              </Link>
            </motion.div>

            <div className="lg:flex lg:justify-end">
              <motion.div className="relative overflow-hidden lg:-right-40 h-fit" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={transition1}>
                <Image src={WomanHome} alt="" className="w-full sm:w-[60%] mx-auto lg:mx-0 lg:w-full" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      <Contact />
    </>
  );
}
