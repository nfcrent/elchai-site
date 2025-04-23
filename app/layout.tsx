import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/inc/Header";
import Footer from "@/inc/Footer";
import 'swiper/css';
import { getSiteData } from "@/lib/utils";
import GradientBackground from "@/inc/GradientBackground";

const montserrat = Montserrat({
  subsets: ["latin"]
})

export const metadata = {
  title: "Elchai | Innovating AI, Metaverse, Blockchain & Web3 Solutions",
  description: "Elchai delivers intelligent AI, metaverse, blockchain, and Web3 solutions—empowering businesses with immersive, scalable, future-ready technologies.",
  keywords: "AI and Metaverse Development, Blockchain, Web3, AI Integration, Metaverse Solutions, AR/VR/MR, IoT, Smart Contracts",
  openGraph: {
    title: "Elchai | Innovating AI, Metaverse, Blockchain & Web3 Solutions",
    description: "Elchai delivers intelligent AI, metaverse, blockchain, and Web3 solutions—empowering businesses with immersive, scalable, future-ready technologies.",
    url: getSiteData().siteUrl,
    type: "website",
    images: [
      {
        url: getSiteData().defaultOg,
        width: 1200,
        height: 630,
        alt: "Elchai AI and Metaverse Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elchai | Innovating AI, Metaverse, Blockchain & Web3 Solutions",
    description: "Elchai delivers intelligent AI, metaverse, blockchain, and Web3 solutions—empowering businesses with immersive, scalable, future-ready technologies.",
    image: getSiteData().defaultOg,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        <GradientBackground/>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
