import Image from "next/image"
import HeroHeader from "../../../inc/HeroHeader"
import { CardStyleOne } from "@/inc/Containers"
import Link from "next/link"
import { FaChevronCircleRight } from "react-icons/fa";
import { Metadata } from "next";
import { getSiteData } from "@/lib/utils";
import Team from "./_components/Team";
import VideoBackgroundSection from "./_components/video-background";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
	title: "Elchai | Pioneering AI, Metaverse, Blockchain & Web3 Solutions",
	description: "Elchai specializes in AI-driven Metaverse, Blockchain, and Web3 solutions—empowering global businesses through innovation and advanced digital experiences.",
	keywords: "AI and Metaverse Solutions, Blockchain Development, Web3 Innovation, Digital Transformation, Decentralized Apps, Real Estate Tokenization",
	openGraph: {
		title: "Elchai | Pioneering AI, Metaverse, Blockchain & Web3 Solutions",
		description: "Elchai specializes in AI-driven Metaverse, Blockchain, and Web3 solutions—empowering global businesses through innovation and advanced digital experiences.",
		url: `${getSiteData().siteUrl}/about-us`,
		type: "website",
		images: [
			{
				url: getSiteData().defaultOg,
				width: 1200,
				height: 630,
				alt: "Elchai About Us",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Elchai | Pioneering AI, Metaverse, Blockchain & Web3 Solutions",
		description: "Elchai specializes in AI-driven Metaverse, Blockchain, and Web3 solutions—empowering global businesses through innovation and advanced digital experiences.",
		images: getSiteData().defaultOg,
	},
};

export default async function AboutUsPage() {
	const t = await getTranslations("ABOUT")
	return (
		<>
			<HeroHeader
				imgHeight={1000}
				imgWidth={1000}
				containerClass="lg:min-h-[65vh] min-h-[10vh]"
				imgClass="absolute object-center z-10"
				image="/images/about.png"
				className="max-w-[707px]"
				title={
					<>
						<strong>{t("hero.t1")}</strong>{" "}
						<span className="text-[#50a6d7]">{t("hero.t2")}</span>{" "}
						<span className="text-[#f5daed]">{t("hero.t3")}</span>{" "}
						<span className="text-[#b9e6e9]">{t("hero.t4")}</span>
					</>
				}
			/>

			<div className="border-b border-foreground/50 max-w-screen-lg mx-auto"></div>
			<div className="py-16">
				<div className="main-container">
					<p className="text-center max-w-[855px] font-bold uppercase mx-auto mb-16">
						{t("intro.p1")}
					</p>

					<h2 className="main-title mb-4 max-w-[855px] text-center">
						{t("intro.h2")} <span>{t("intro.h2_span")}</span>
					</h2>

					<p className="max-w-[855px] text-center mx-auto">
						{t("intro.p2")}
					</p>
				</div>
			</div>

			{/* ... già incluso nel tuo codice ... */}

			<div className="py-8 lg:py-16">
				<div className="main-container">
					<CardStyleOne>
						<div className="pt-7 pb-10">
							<h2 className="main-title no-decoration mb-2">
								{t("cta.h2")} <span>{t("cta.h2_span")}</span>
							</h2>
							<p className="max-w-[703px] text-center mx-auto mb-8">
								{t("cta.desc")}
							</p>
							<div className="flex flex-col lg:flex-row items-center justify-center gap-4">
								<Link href={"/services"} className="btn btn-main">
									{t("cta.services")} <FaChevronCircleRight />
								</Link>
								<Link href={"/contact-us"} className="btn btn-main">
									{t("cta.contact")} <FaChevronCircleRight />
								</Link>
							</div>
						</div>
					</CardStyleOne>
				</div>
			</div>
		</>

	)
}