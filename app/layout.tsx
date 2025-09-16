import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/component/global/Navbar";
import Footer from "@/component/global/Footer";

// Switzer
export const switzer = localFont({
  src: [
    {
      path: "fonts/Switzer-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/Switzer-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
     {
      path: "fonts/Switzer-SemiBold.woff2",
      weight: "700",
      style: "normal",
    },
     {
      path: "fonts/Switzer-SemiBold.woff2",
      weight: "800",
      style: "normal",
    },
     {
      path: "fonts/Switzer-SemiBold.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-switzer",
});

// Involve
export const involve = localFont({
  src: [
    {
      path: "fonts/Involve-SemiBold.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/Involve-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-involve",
});

// URW Gothic
export const urwGothic = localFont({
  src: "fonts/URWGothicL-Demi.woff2",
  weight: "600",
  style: "normal",
  variable: "--font-urw",
});

// Spaciaz (icon font)
export const spaciaz = localFont({
  src: "fonts/spaciaz-icon-1.1.0.woff2",
  variable: "--font-spaciaz",
});

export const metadata: Metadata = {
  title: "Yogesh Digambar Takwale",
  description: "Luxury stays with comfort and excellence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${switzer.variable} ${involve.variable} ${urwGothic.variable} ${spaciaz.variable} `}
    >
      <body  className=" antialiased  " >
        <Navbar />
        <div className="z-1 -mt-50">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
