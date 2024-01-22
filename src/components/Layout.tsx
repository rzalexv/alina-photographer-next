import { FC, useContext } from "react";
import { Footer, Header } from ".";
import { Mulish, Playfair_Display } from "next/font/google";
import { CursorContext } from "@/context/CursorContext";
import { motion } from "framer-motion";

export const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--mulish-font",
});

export const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"], variable: "--playfair-font" });

interface Props {
  children: JSX.Element;
}

export const Layout: FC<Props> = ({ children }) => {
  const { cursorVariants, cursorBackground } = useContext(CursorContext);

  return (
    <>
      <div className={`${mulish.variable} ${playfair.variable}`}>
        <Header />
        <main className="pt-24 lg:pt-36">{children}</main>
        <Footer />
      </div>

      <motion.div className="fixed top-0 left-0 z-50 hidden w-8 h-8 rounded-full pointer-events-none md:block bg-primary" variants={cursorVariants} animate={cursorBackground}></motion.div>
    </>
  );
};
