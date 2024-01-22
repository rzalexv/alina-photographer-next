import Image from "next/image";
import WomanContact from "@/public/img/contact/woman.png";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/context/CursorContext";
import { transition1 } from "@/utils";

export const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section className="pt-16 bg-accent lg:mt-52 xl:mt-72" initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "100%" }} transition={transition1}>
      <div className="container px-4 md:px-8 lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
        <motion.div className="mb-8 font-secondary lg:grid lg:content-center" initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "100%" }} transition={transition1} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
          <div className="grid gap-4 mb-8 md:gap-8">
            <h2 className="text-3xl font-bold font-primary md:text-4xl decorator">Contact Me</h2>
            <p className="text-sm text-neutral-500 md:text-base">I would love to get suggestions from you</p>
          </div>

          <form className="grid gap-8">
            <div className="grid gap-8 md:grid-cols-2">
              <input type="text" className="w-full h-16 pl-3 bg-transparent border-b outline-none border-b-primary font-secondary placeholder:text-neutral-500" placeholder="Your name" />
              <input type="email" className="w-full h-16 pl-3 bg-transparent border-b outline-none border-b-primary font-secondary placeholder:text-neutral-500" placeholder="Your email" />
            </div>
            <textarea placeholder="Your message" className="w-full pl-3 bg-transparent border-b outline-none resize-none border-b-primary font-secondary placeholder:text-neutral-500" rows={5} />

            <div className="">
              <button className="btn btn-dark">Send it</button>
            </div>
          </form>
        </motion.div>

        <motion.div className="" initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }} transition={{ transition: transition1, duration: 1.5 }}>
          <figure className="lg:-mt-56 xl:-mt-72">
            <Image src={WomanContact} alt="" className="w-full sm:mx-auto sm:max-w-md lg:max-w-lg 2xl:max-w-max" />
          </figure>
        </motion.div>
      </div>
    </motion.section>
  );
};
