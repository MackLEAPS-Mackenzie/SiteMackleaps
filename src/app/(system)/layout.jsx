import { Montserrat } from "next/font/google";
import "./globals.css";
const montserrat = Montserrat({
  weight: ["500", "600", "700", "800", "400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Mackleaps",
  description: "Site Mackleaps",
};
export default function RootLayout({ children }) {
  return (
    <html>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
