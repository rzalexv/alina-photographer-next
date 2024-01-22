import { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ImFacebook, ImInstagram, ImPinterest, ImTwitter, ImYoutube } from "react-icons/im";
import { MobileNav } from ".";
import { CursorContext } from "@/context/CursorContext";
import Logo from "@/public/img/header/logo.svg";

export const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const [isScroll, setIsScroll] = useState(false);

  const header = useRef<HTMLElement>(null);

  const handleScroll = () => {
    const windowPosition = window.scrollY > 0;
    windowPosition ? setIsScroll(true) : setIsScroll(false);
    if (header.current) {
      header.current.classList.toggle("nav-scrolled", windowPosition);
    }
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScroll]);

  return (
    <header className="fixed z-50 w-full h-24 px-8 transition-all lg:h-36" ref={header}>
      <div className="container flex items-center h-full">
        <div className="flex flex-col justify-between w-full lg:flex-row lg:items-center">
          <Link href="/" className="max-w-[200px]" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <Image src={Logo} alt="" />
          </Link>
          <nav className="hidden font-semibold xl:flex gap-x-12">
            <Link href="/" className="text-[#696c6d] hover:text-primary transition-colors" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
              Home
            </Link>
            <Link href="/about" className="text-[#696c6d] hover:text-primary transition-colors" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
              About
            </Link>
            <Link href="/portfolio" className="text-[#696c6d] hover:text-primary transition-colors" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
              Portfolio
            </Link>
            <Link href="/contact" className="text-[#696c6d] hover:text-primary transition-colors" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
              Contact
            </Link>
          </nav>
        </div>

        <div className="hidden ml-24 xl:flex">
          <ul className="flex gap-x-4">
            <li className="">
              <Link href="#" target="_blank" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                <ImFacebook />
              </Link>
            </li>
            <li className="">
              <Link href="#" target="_blank" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                <ImTwitter />
              </Link>
            </li>
            <li className="">
              <Link href="#" target="_blank" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                <ImPinterest />
              </Link>
            </li>
            <li className="">
              <Link href="#" target="_blank" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                <ImInstagram />
              </Link>
            </li>
            <li className="">
              <Link href="#" target="_blank" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                <ImYoutube />
              </Link>
            </li>
          </ul>
        </div>

        <MobileNav />
      </div>
    </header>
  );
};
