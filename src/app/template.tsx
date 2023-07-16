"use client";
import BackToTop from "@/components/backToTop";
import Main from "@/components/main";
import { AnimatePresence } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Main as={"article"} p={false}>
      <AnimatePresence mode='wait' initial={true}>
        {children}
      </AnimatePresence>
      <BackToTop />
    </Main>
  );
}
