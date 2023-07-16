"use client";
import "./global.css";
import { poppins } from "@/libs/fonts";

import BackToTop from "@/components/backToTop";
import Loader from "@/components/dogLoader";

import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import Main from "@/components/main";

import dynamic from "next/dynamic";
// import Loading from "@/components/loading";

const LazyVoxelDog = dynamic(() => import("@/components/dog"), {
  ssr: false,
  loading: () => <Loader />,
});

const DynamicChakra = dynamic(() => import("@/components/providers"), {
  ssr: false,
  // loading: () => <Loading />,
});

const metadata = {
  title: "LouisPhan: HomePage",
  description: `LouisPhan's website`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <title>{metadata.title}</title>
      <meta name='description' content={metadata.description} />
      <body className={poppins.className}>
        <DynamicChakra>
          <Header />
          <Main as='main' p={true}>
            <LazyVoxelDog />
            {children}
            <BackToTop />
          </Main>
          <Footer />
        </DynamicChakra>
      </body>
    </html>
  );
}
