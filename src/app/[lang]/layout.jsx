import { Outfit } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Divider } from "@/components/divider/Divider";
import { getDictionary } from "@/dictionary";

const outfit = Outfit({
  weight: ["500", "600", "700", "800", "400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Mackleaps",
  description: "Site Mackleaps",
};
export default async function RootLayout({ children, params }) {
  const lang = await getDictionary(params.lang);

  return (
    <html lang="pt-br">
      <body className={outfit.className}>
        <Header items={lang.nav} />
        <Divider />
        {children}
        <footer>
          <Footer items={lang.nav} headers={lang.footer} />
        </footer>
      </body>
    </html>
  );
}
