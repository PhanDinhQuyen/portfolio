"use client";
import BackToTop from "@/components/backToTop";
import Footer from "@/components/footer";
import Main from "@/components/main";
import { AnimatePresence } from "framer-motion";

// if (typeof window !== "undefined") {
//   window.history.scrollRestoration = "manual";
// }

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Main as={"article"} p={false}>
      <AnimatePresence mode='wait' initial={true}>
        {children}
      </AnimatePresence>
      <BackToTop />
      <Footer />
    </Main>
  );
}
