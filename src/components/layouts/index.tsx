"use client";

import BackToTop from "../backToTop";
import Loader from "../dogLoader";

import Header from "./header";
import Footer from "./footer";
import Main from "../main";

import dynamic from "next/dynamic";

const LazyVoxelDog = dynamic(() => import("@/components/dog"), {
  ssr: false,
  loading: () => <Loader />,
});

const DynamicChakra = dynamic(() => import("@/components/providers"), {
  ssr: false,
});

export default function LayoutCSR({ children }: { children: React.ReactNode }) {
  return (
    <DynamicChakra>
      <Header />
      <Main as='main' p={true}>
        <LazyVoxelDog />
        {children}
      </Main>
      <Footer />
      <BackToTop />
    </DynamicChakra>
  );
}
