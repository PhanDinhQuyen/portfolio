import "./global.css";

import { poppins } from "@/libs/fonts";
import { Metadata } from "next";

import LayoutSSR from "@/components/layouts";

export const metadata: Metadata = {
  title: "LouisPhan: Home Page",
  description: `LouisPhan's website`,
  keywords: "LouisPhan, website, portfolio",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <LayoutSSR>{children}</LayoutSSR>
      </body>
    </html>
  );
}
