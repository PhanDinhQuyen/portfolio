import { Inter, M_PLUS_Rounded_1c, Poppins, Pacifico } from "next/font/google";
export const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const mPlusRoundedOneC = M_PLUS_Rounded_1c({
  subsets: ["latin", "vietnamese"],
  weight: ["100", "300", "400", "500", "700"],
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  display: "swap",
});

export const pacifico = Pacifico({
  subsets: ["latin", "vietnamese"],
  weight: ["400"],
  display: "swap",
});
