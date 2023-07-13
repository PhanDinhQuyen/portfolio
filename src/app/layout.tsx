"use client";
import type { Metadata } from "next";

import Providers from "@/components/providers";
import Header from "@/components/header";
import "./global.css";

import { poppins } from "../libs/fonts";

import Loader from "@/components/dogLoader";
import dynamic from "next/dynamic";

const LazyVoxelDog = dynamic(() => import("../components/dog"), {
  ssr: false,
  loading: () => <Loader />,
});
import Main from "@/components/main";
export const metadata: Metadata = {
  title: "LouisPhan HomePage",
  description: `LouisPhan's website`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Providers>
          <Header />
          <Main as='main' p={true}>
            <LazyVoxelDog />
            {children}
          </Main>
        </Providers>
      </body>
    </html>
  );
}
