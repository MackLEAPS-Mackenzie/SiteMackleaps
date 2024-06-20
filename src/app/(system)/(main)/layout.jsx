import { Outfit } from "next/font/google";
import "./globals.css";
import { HeaderSystem } from "@/components/headerSystem/HeaderSystem";

const outfit = Outfit({
  weight: ["500", "600", "700", "800", "400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Mackleaps",
  description: "Site Mackleaps",
};
export default async function RootLayout({ children }) {
  return (
    <html>
      <body className={outfit.className}>
        <HeaderSystem />
        {children}
      </body>
    </html>
  );
}
