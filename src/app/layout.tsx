import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import "./globals.css";
import ResponsiveNavbar from "./components/Home/Navbar/ResponsiveNavbar";
import Footer from "./components/Home/Footer/Footer";

const font = Montserrat({
  weight:['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Solaris",
  description: "Website para Global solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>
        <ResponsiveNavbar/>
        {children}
        <Footer/>
        {/* Footer */}
      </body>
    </html>
  );
}
