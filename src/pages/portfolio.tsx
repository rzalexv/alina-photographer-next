import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CursorContext } from "@/context/CursorContext";
import { Contact } from "@/components";
import { transition1 } from "@/utils";
import Folio1 from "@/public/img/portfolio/1.png";
import Folio2 from "@/public/img/portfolio/2.png";
import Folio3 from "@/public/img/portfolio/3.png";
import Folio4 from "@/public/img/portfolio/4.png";
import Head from "next/head";

const PortfolioPage = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <>
      <Head>
        <title>Alina Photographer | Portfolio</title>
      </Head>
      <motion.section className="section" initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "100%" }} transition={transition1}>
        <div className="container relative mx-auto">
          <div className="flex flex-col items-center justify-start h-full gap-8 pt-24 pb-8 text-center lg:flex-row gap-x-24 lg:text-left lg:pt-36 md:justify-center">
            <motion.div className="flex flex-col lg:items-start" initial={{ opacity: 0, y: "-80%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "-80%" }} transition={transition1} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
              <h1 className="heading-primary">Portfolio</h1>
              <div className="grid max-w-sm gap-4 mx-auto mb-8">
                <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                <p className="">Nec eget condimentum etiam leo. Morbi at eget fusce feugiat volutpat et volutpat malesuada. Suspendisse nisi, quam neque in leo sollicitudin. Quam neque in leo consectetur.</p>
              </div>
              <div className="">
                <Link href="/contact" className="btn btn-dark">
                  Hire me
                </Link>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 lg:gap-2" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
              <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                <Image src={Folio1} alt="" className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" />
              </div>
              <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                <Image src={Folio2} alt="" className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" />
              </div>
              <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                <Image src={Folio3} alt="" className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" />
              </div>
              <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                <Image src={Folio4} alt="" className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <Contact />
    </>
  );
};

export default PortfolioPage;
