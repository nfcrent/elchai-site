import type { Metadata } from "next";
import HeroHeader from "../../inc/HeroHeader";
import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";
import GuideItem from "./_components/GuideItem";
import { CardStyleOne } from "@/inc/Containers";
import { GuidesData, GuidesI } from "./_components/GuidesData";
import { getSiteData } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Elchai Guides | Expert Insights on AI, Metaverse & Blockchain",
  description: "Discover expert guides on AI, Metaverse, Blockchain, Web3, NFTs, and digital innovation. Empower your digital journey with Elchai’s advanced AI tutorials.",
  keywords: "AI and Metaverse Guides, Blockchain Tutorials, Web3 Insights, NFT Guides, Crypto Wallet Setup, Real Estate Tokenization, 3D Space Development",
  openGraph: {
    title: "Elchai Guides | Expert Insights on AI, Metaverse & Blockchain",
    description: "Discover expert guides on AI, Metaverse, Blockchain, Web3, NFTs, and digital innovation. Empower your digital journey with Elchai’s advanced AI tutorials.",
    url: "https://www.elchaigroup.com/elchai-guides",
    type: "website",
    images: [
      {
        url: getSiteData().defaultOg,
        width: 1200,
        height: 630,
        alt: "Elchai Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elchai Guides | Expert Insights on AI, Metaverse & Blockchain",
    description: "Discover expert guides on AI, Metaverse, Blockchain, Web3, NFTs, and digital innovation. Empower your digital journey with Elchai’s advanced AI tutorials.",
    images: getSiteData().defaultOg,
  },
};

const ElchaiGuides = () => {
  return (
    <>
      <HeroHeader image="/images/elchai-guides-hero.png" video="/videos/main-hero-video.mp4" className="max-w-[820px]" title={<><strong>Explore, Learn & Master</strong> the Future of Digital Innovation</>} />

      <div className="py-8 lg:py-16">
        <div className="main-container">
          <p className="text-center max-w-[782px] font-bold uppercase mx-auto">Elchai is a team of dedicated developers specializing in al, metaverse, blockchain, and web3 technologies-passionate about crafting extraordinary, intelligent digital solutions that redefine what's possible</p>
          {/* <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
            <Link href={'/'} className="btn btn-main">Explore Guides <FaChevronCircleRight /></Link>
            <Link href={'/'} className="btn btn-main">Subscribe for Updates <FaChevronCircleRight /></Link>
          </div> */}
        </div>
      </div>
      <div className="py-8 lg:py-16">
        <div className="main-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {GuidesData && GuidesData.length > 0 && GuidesData.map((guide: GuidesI, index) =>
              <GuideItem key={index} title={guide.title} description={guide.description} image={guide.image} action={guide.action.url} actionname={guide.action.name} />
            )}
          </div>
        </div>
      </div>
      <div className="py-8 lg:py-16">
        <div className="main-container">
          <CardStyleOne>
            <div className="pt-7 pb-10">
              <h2 className="main-title no-decoration mb-2">Stay Ahead in the <span>Digital World</span></h2>
              <p className="max-w-[703px] text-center mx-auto mb-8">Subscribe to Elchai Guides for ongoing insights, expert tips, and latest trends directly to your inbox.</p>
              <div className="flex items-center justify-center gap-4">
                <Link href={'/contact-us'} className="btn btn-main">Subscribe Now <FaChevronCircleRight /></Link>
              </div>
            </div>
          </CardStyleOne>
        </div>
      </div>
    </>
  )
}

export default ElchaiGuides