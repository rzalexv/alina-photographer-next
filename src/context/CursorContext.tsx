import { createContext, useEffect, useState } from "react";

interface ContextProps {
  cursorVariants: any;
  cursorBackground: string;
  mouseEnterHandler: () => void;
  mouseLeaveHandler: () => void;
}

export const CursorContext = createContext({} as ContextProps);

const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const [cursorBackground, setcursorBackground] = useState("default");

  const mobileViewportIsActive = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    if (!mobileViewportIsActive) {
      const move = (e: MouseEvent) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener("mousemove", move);

      return () => {
        window.removeEventListener("mousemove", move);
      };
    } else {
      setcursorBackground("none");
    }
  }, [mobileViewportIsActive]);

  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: "#0e1112",
    },
    text: {
      width: "150px",
      height: "150px",
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
    none: {
      width: 0,
      height: 0,
      backgroundColor: "rgba(255,255,255,1)",
    },
  };

  const mouseEnterHandler = () => {
    setcursorBackground("text");
  };

  const mouseLeaveHandler = () => {
    setcursorBackground("default");
  };

  return <CursorContext.Provider value={{ cursorVariants, cursorBackground, mouseEnterHandler, mouseLeaveHandler }}>{children}</CursorContext.Provider>;
};

export default CursorProvider;
