import "./global.css";

import { poppins } from "@/libs/fonts";
import { Metadata } from "next";

import LayoutCSR from "@/components/layouts";

export const metadata: Metadata = {
  title: "LouisPhan: Home Page",
  description: `LouisPhan's website`,
  keywords: "LouisPhan, website, portfolio",
  viewport: "width=device-width, initial-scale=1",
  authors: [{ name: "LouisPhan", url: "https://github.com/PhanDinhQuyen" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <LayoutCSR>{children}</LayoutCSR>
      </body>
    </html>
  );
}
