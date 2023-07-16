"use client";
import Main from "@/components/main";

import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import Loading from "./loading";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Main as={"article"} p={false}>
      <AnimatePresence mode='wait' initial={true}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </AnimatePresence>
    </Main>
  );
}
