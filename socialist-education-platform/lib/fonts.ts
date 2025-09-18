import { Merriweather } from "next/font/google";

export const merriweather = Merriweather({
  subsets: ["latin", "vietnamese"],    // you can add "vietnamese" too
  weight: ["400", "700"], // pick the weights you need
  variable: "--font-bevietnam",
});