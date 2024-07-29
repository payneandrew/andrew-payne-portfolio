import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "./components/footer";
import NavBar from "./components/nav-bar";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Andrew Payne | Frontend Software Engineer",
  description: "Andrew Payne's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className={poppins.className}>
        <GoogleTagManager gtmId="G-1QHVWLNL22" />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
