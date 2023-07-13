import { Inter, Poppins, Pangolin } from "next/font/google";
export const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  display: "swap",
});

export const pacifico = Pangolin({
  subsets: ["latin", "vietnamese"],
  weight: ["400"],
  display: "swap",
});
