import type { Metadata } from "next";
import HeroHeader from "../../../inc/HeroHeader";
import Link from "next/link";
import { getSiteData } from "@/lib/utils";
import { getTranslations } from "next-intl/server";
import { Guide, GuideItem, GuidesFooterCard } from "@/components/guides";

export const metadata: Metadata = {
  title: "Elchai Guides | Expert Insights on AI, Metaverse & Blockchain",
  description:
    "Discover expert guides on AI, Metaverse, Blockchain, Web3, NFTs, and digital innovation. Empower your digital journey with Elchai’s advanced AI tutorials.",
  keywords:
    "AI and Metaverse Guides, Blockchain Tutorials, Web3 Insights, NFT Guides, Crypto Wallet Setup, Real Estate Tokenization, 3D Space Development",
  openGraph: {
    title: "Elchai Guides | Expert Insights on AI, Metaverse & Blockchain",
    description:
      "Discover expert guides on AI, Metaverse, Blockchain, Web3, NFTs, and digital innovation. Empower your digital journey with Elchai’s advanced AI tutorials.",
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
    description:
      "Discover expert guides on AI, Metaverse, Blockchain, Web3, NFTs, and digital innovation. Empower your digital journey with Elchai’s advanced AI tutorials.",
    images: getSiteData().defaultOg,
  },
};

export default async function ElchaiGuides() {
  const t = await getTranslations("GUIDES");
  const items = Object.entries(t.raw("items") ?? {}).map(
    ([k, v]: [k: string, v: any]) => ({
      ...v,
      slug: k,
      url: `/elchai-guides/${k}`,
    }),
  ) as Guide[];

  return (
    <>
      <HeroHeader
        image="/images/elchai-guides-hero.png"
        video="/videos/main-hero-video.mp4"
        className="max-w-[820px]"
        title={<div dangerouslySetInnerHTML={{ __html: t.raw("title") }}></div>}
      />

      <div className="py-8 lg:py-16">
        <div className="main-container">
          <p className="text-center max-w-[782px] font-bold uppercase mx-auto">
            {t("description")}
          </p>
        </div>
      </div>
      <div className="py-8 lg:py-16">
        <div className="main-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {items.map((guide, i) => (
              <GuideItem
                key={guide.title + i}
                title={guide.title}
                description={guide.description}
                image={guide.image}
                url={guide.url}
                slug={guide.slug}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="py-8 lg:py-16">
        <GuidesFooterCard
          title={t.raw("footerCard.title")}
          link={t("footerCard.link")}
          description={t("footerCard.description")}
        />
      </div>
    </>
  );
}
