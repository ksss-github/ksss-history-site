"use client";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import Header from "../components/Header.jsx";
import Carousel from "../components/Carousel.jsx";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <Carousel />

        <main>{children}</main>
      </body>
    </html>
  );
}
