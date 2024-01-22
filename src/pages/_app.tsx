import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { Layout } from "@/components";
import CursorProvider from "@/context/CursorContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <CursorProvider>
        <AnimatePresence initial={true} mode="wait">
          <Layout key={router.asPath}>
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </CursorProvider>
    </>
  );
}
