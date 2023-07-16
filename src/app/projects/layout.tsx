import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LouisPhan: Projects Page",
  description: `LouisPhan's website`,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
