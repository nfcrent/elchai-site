import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/inc/Header";
import Footer from "@/inc/Footer";
import 'swiper/css';
import { getSiteData } from "@/lib/utils";
import GradientBackground from "@/inc/GradientBackground";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

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

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {

  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
const dir=locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang="en" dir={dir}>
      <body
        className={`${montserrat.className} antialiased`}
      >
        <NextIntlClientProvider>
          <GradientBackground />
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
