import "./global.css";

import { poppins } from "@/libs/fonts";
import { Metadata, Viewport } from "next";
import { ColorModeScript } from "@chakra-ui/react";
import { themeConfig } from "@/libs/theme-config";

import LayoutCSR from "@/components/layouts";

export const metadata: Metadata = {
  metadataBase: new URL("https://louisphan.dev"),
  title: {
    default: "LouisPhan | Developer & Linux System Engineer",
    template: "%s | LouisPhan",
  },
  description:
    "Portfolio of Phan Dinh Quyen (LouisPhan), a Developer and Linux System Engineer from Vietnam. Specializes in legacy CentOS/RHEL fleet automation, Python/Bash tooling, and full-stack web development with React, Node.js and Docker.",
  keywords: [
    "LouisPhan",
    "Phan Dinh Quyen",
    "Linux System Engineer",
    "CentOS",
    "Rocky Linux",
    "RHEL",
    "Python",
    "Bash",
    "DevOps",
    "Full-stack Developer",
    "React",
    "Node.js",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "LouisPhan", url: "https://github.com/PhanDinhQuyen" }],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "LouisPhan Portfolio",
    images: "/avatar.jpg",
    description: "Portfolio of Phan Dinh Quyen (LouisPhan), a Developer and Linux System Engineer from Vietnam.",
    title: "LouisPhan | Developer & Linux System Engineer",
  },
  twitter: {
    card: "summary_large_image",
    title: "LouisPhan | Developer & Linux System Engineer",
    description: "Portfolio of Phan Dinh Quyen (LouisPhan), a Developer and Linux System Engineer from Vietnam.",
    images: "/avatar.jpg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14b8a6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <ColorModeScript initialColorMode={themeConfig.initialColorMode} />
      </head>
      <body className={poppins.className}>
        <LayoutCSR>{children}</LayoutCSR>
      </body>
    </html>
  );
}
