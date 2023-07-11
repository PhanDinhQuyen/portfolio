import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/providers";
import Header from "@/components/header";
const inter = Inter({ subsets: ["latin", "vietnamese"] });

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
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
