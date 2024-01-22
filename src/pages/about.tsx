import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CursorContext } from "@/context/CursorContext";
import { Contact } from "@/components";
import { transition1 } from "@/utils";
import WomanAbout from "@/public/img/about/woman.png";
import Head from "next/head";

const AboutPage = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <>
      <Head>
        <title>Alina Photographer | About</title>
      </Head>
      <motion.section className="section" initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "100%" }} transition={transition1}>
        <div className="container relative px-4 mx-auto md:px-8">
          <div className="flex flex-col items-center justify-center h-full text-center lg:flex-row gap-x-24 lg:text-left lg:pt-16" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <div className="flex-1 order-2 overflow-hidden w-full sm:w-[60%] lg:w-full lg:order-none">
              <Image src={WomanAbout} alt="" />
            </div>

            <motion.div className="z-10 flex flex-col items-center justify-center flex-1 gap-8 pt-36 pb-14 lg:pt-0 lg:w-auto lg:items-start" initial={{ opacity: 0, y: "-80%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "-80%" }} transition={transition1}>
              <h1 className="heading-primary">About me</h1>
              <div className="grid gap-4 mb-8">
                <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                <p className="">Nec eget condimentum etiam leo. Morbi at eget fusce feugiat volutpat et volutpat malesuada. Suspendisse nisi, quam neque in leo sollicitudin. Quam neque in leo consectetur.</p>
              </div>

              <div className="">
                <Link href="/portfolio" className="btn btn-dark">
                  View my work
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <Contact />
    </>
  );
};

export default AboutPage;
