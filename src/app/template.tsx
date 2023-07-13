"use client";
import Footer from "@/components/footer";
import Main from "@/components/main";
import { AnimatePresence } from "framer-motion";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Main as={undefined} p={false}>
      <AnimatePresence
        mode='wait'
        initial={true}
        onExitComplete={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        {children}
      </AnimatePresence>
      <Footer />
    </Main>
  );
}
