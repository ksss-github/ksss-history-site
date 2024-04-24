"use client";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import Header from "../components/Header.jsx";
import Carousel from "../components/Carousel.jsx";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-between p-4 bg-[#e2f7ff]">
          <span className="font-bold">KSSS</span>
          <nav className="flex gap-4 font-semibold">
          <Link href="/"> HOME </Link>
          <Link href="/timeline"> TIMELINE </Link>
          <Link href="/"> YEAR BOOKS </Link>
          <Link href="/about-us"> About Us</Link>
          </nav>
        </header>
        <main>
        {children}
        </main>
        <Footer/>
        </body>
      <body className={montserrat.className}>
        <Header />
        <Carousel />

        <main>{children}</main>
      </body>
    </html>
  );
}
