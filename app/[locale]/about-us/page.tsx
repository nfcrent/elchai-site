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
			
			<div className="main-container"><div className="border-b border-foreground/20 max-w-screen-lg mx-auto"></div></div>
			<div className="py-8 lg:py-16">
				<div className="main-container">
					<div className="grid lg:grid-cols-2 gap-12">
						<div>
							<Image src={'/images/flavio-elia.webp'} alt="" width={768} height={768} className="rounded-2xl" />
						</div>
						<div className="flex flex-col justify-center">
							<h2 className="main-title mb-4 max-w-[855px]">{t("message.h2")} <span>{t("message.h2_span")}</span></h2>
							<p className="mb-6">{t("message.quote")}</p>

							<ul className="space-y-2">
								<li><span className="text-epurple text-lg">{t("message.name")}</span></li>
								<li><span className="text-epurple text-lg">{t("message.title")}</span></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="py-8 lg:py-16">
				<div className="main-container">
					<h2 className="main-title mb-4 text-center">{t("charting.h2")} <span>{t("charting.h2_span")}</span></h2>
					<p className="text-center">{t("charting.p1")}</p>
				</div>
				<div className="relative">
					<div className="bg-linear-to-b from-black to-transparent absolute top-0 bottom-1/2 left-0 right-0"></div>
					<Image src={'/images/charting-new-digital-territories.webp'} alt="" width={1920} height={1920} className="aspect-video object-cover object-top w-full h-full" />
				</div>
			</div>
			<div className="py-8 lg:py-16">
				<div className="main-container">
					<h2 className="main-title mb-4 text-center">{t("whyChoose.h2")} <span>{t("whyChoose.h2_span")}</span></h2>
					<div className="grid lg:grid-cols-3 gap-6">
						<div className="flex flex-col justify-between space-y-8 lg:space-y-0">
							<div className="text-center lg:text-right relative lg:pr-20 lg:-mr-12">
								<div className="mx-auto lg:mx-0 mb-4 lg:mb-0 w-18 h-18 p-2.5 lg:absolute top-1/2 lg:-translate-y-1/2 right-0 bg-[url('/images/title-decoration.svg')] bg-no-repeat bg-contain bg-center">
									<Image src={'/images/stay-ahead.svg'} alt="" width={64} height={64} className="w-full h-full" />
								</div>
								<div>
									<h3 className="text-eblue uppercase font-bold text-lg mb-2">{t("whyChoose.items.stayAhead.title")}</h3>
									<p>{t("whyChoose.items.stayAhead.desc")}</p>
								</div>
							</div>
							<div className="text-center lg:text-right relative lg:pr-20">
								<div className="mx-auto lg:mx-0 mb-4 lg:mb-0 w-18 h-18 p-2.5 lg:absolute top-1/2 lg:-translate-y-1/2 right-0 bg-[url('/images/title-decoration.svg')] bg-no-repeat bg-contain bg-center">
									<Image src={'/images/decentralization.svg'} alt="" width={64} height={64} className="w-full h-full" />
								</div>
								<div>
									<h3 className="text-eblue uppercase font-bold text-lg mb-2">{t("whyChoose.items.decentralization.title")}</h3>
									<p>{t("whyChoose.items.decentralization.desc")}</p>
								</div>
							</div>
							<div className="text-center lg:text-right relative lg:pr-20 lg:-mr-12">
								<div className="mx-auto lg:mx-0 mb-4 lg:mb-0 w-18 h-18 p-2.5 lg:absolute top-1/2 lg:-translate-y-1/2 right-0 bg-[url('/images/title-decoration.svg')] bg-no-repeat bg-contain bg-center">
									<Image src={'/images/getting-viral.svg'} alt="" width={64} height={64} className="w-full h-full" />
								</div>
								<div>
									<h3 className="text-eblue uppercase font-bold text-lg mb-2">{t("whyChoose.items.gettingViral.title")}</h3>
									<p>{t("whyChoose.items.gettingViral.desc")}</p>
								</div>
							</div>
						</div>
						<div className="hidden lg:flex">
							<Image src={'/images/global-leaders.webp'} alt="" width={768} height={768} />
						</div>
						<div className="flex flex-col justify-between space-y-8 lg:space-y-0">
							<div className="text-center lg:text-left relative lg:pl-20 lg:-ml-12">
								<div className="mx-auto lg:mx-0 mb-4 lg:mb-0 w-18 h-18 p-2.5 lg:absolute top-1/2 lg:-translate-y-1/2 left-0 bg-[url('/images/title-decoration.svg')] bg-no-repeat bg-contain bg-center">
									<Image src={'/images/reputation.svg'} alt="" width={64} height={64} className="w-full h-full" />
								</div>
								<div>
									<h3 className="text-eblue uppercase font-bold text-lg mb-2">{t("whyChoose.items.reputation.title")}</h3>
									<p>{t("whyChoose.items.reputation.desc")}</p>
								</div>
							</div>
							<div className="text-center lg:text-left relative lg:pl-20">
								<div className="mx-auto lg:mx-0 mb-4 lg:mb-0 w-18 h-18 p-2.5 lg:absolute top-1/2 lg:-translate-y-1/2 left-0 bg-[url('/images/title-decoration.svg')] bg-no-repeat bg-contain bg-center">
									<Image src={'/images/product-delivery.svg'} alt="" width={64} height={64} className="w-full h-full" />
								</div>
								<div>
									<h3 className="text-eblue uppercase font-bold text-lg mb-2">{t("whyChoose.items.productDelivery.title")}</h3>
									<p>{t("whyChoose.items.productDelivery.desc")}</p>
								</div>
							</div>
							<div className="text-center lg:text-left relative lg:pl-20 lg:-ml-12">
								<div className="mx-auto lg:mx-0 mb-4 lg:mb-0 w-18 h-18 p-2.5 lg:absolute top-1/2 lg:-translate-y-1/2 left-0 bg-[url('/images/title-decoration.svg')] bg-no-repeat bg-contain bg-center">
									<Image src={'/images/advanced-development.svg'} alt="" width={64} height={64} className="w-full h-full" />
								</div>
								<div>
									<h3 className="text-eblue uppercase font-bold text-lg mb-2">{t("whyChoose.items.advancedDevelopment.title")}</h3>
									<p>{t("whyChoose.items.advancedDevelopment.desc")}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="py-8 lg:py-16">
				<div className="main-container">
					<h2 className="main-title mb-10 text-center">{t("journey.h2")} <span>{t("journey.h2_span")}</span></h2>
					<div className="grid lg:grid-cols-4 gap-10 lg:gap-6 relative">
						<div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 bg-linear-to-r from-eblue to-epurple h-1 hidden lg:block"></div>
						<div className="relative space-y-4 lg:space-y-0">
							<div className="lg:h-1/2 text-center lg:pb-10 flex justify-end flex-col gap-6">
								<span className="uppercase font-bold text-xl">{t("journey.items.visionaryIdea.title")}</span>
								<div className="hidden lg:block h-10 w-[1px] mx-auto bg-linear-to-r from-eblue to-epurple "></div>
							</div>
							<div className="lg:absolute top-1/2 left-1/2 lg:-translate-1/2 w-20 h-20 p-2.5 bg-linear-to-r from-eblue to-epurple rounded-full mx-auto">
								<Image src={'/images/visionary-idea.svg'} alt="" width={768} height={768} className="w-full h-full" />
							</div>
							<div className="lg:h-1/2 text-center lg:pt-14">{t("journey.items.visionaryIdea.desc")}</div>
						</div>
						<div className="relative flex flex-col-reverse lg:block space-y-4 lg:space-y-0">
							<div className="lg:h-1/2 text-center lg:pb-14">{t("journey.items.coreValues.desc")}</div>
							<div className="lg:absolute top-1/2 left-1/2 lg:-translate-1/2 w-20 h-20 p-2.5 bg-linear-to-r from-eblue to-epurple rounded-full mx-auto">
								<Image src={'/images/core-values.svg'} alt="" width={768} height={768} className="w-full h-full" />
							</div>
							<div className="lg:h-1/2 text-center lg:pt-10 flex justify-start flex-col gap-6">
								<div className="h-10 w-[1px] mx-auto bg-linear-to-r from-eblue to-epurple hidden lg:block"></div>
								<span className="uppercase font-bold text-xl mb-4 lg:mb-0">{t("journey.items.coreValues.title")}</span>
							</div>
						</div>
						<div className="relative space-y-4 lg:space-y-0">
							<div className="lg:h-1/2 text-center lg:pb-14 flex justify-end flex-col gap-6">
								<span className="uppercase font-bold text-xl">{t("journey.items.metaverseEcosystem.title")}</span>
								<div className="h-10 w-[1px] mx-auto bg-linear-to-r from-eblue to-epurple -mb-5 hidden lg:block"></div>
							</div>
							<div className="lg:absolute top-1/2 left-1/2 lg:-translate-1/2 w-20 h-20 p-2.5 bg-linear-to-r from-eblue to-epurple rounded-full mx-auto">
								<Image src={'/images/metaverse-ecosystem.svg'} alt="" width={768} height={768} className="w-full h-full" />
							</div>
							<div className="lg:h-1/2 text-center lg:pt-14">{t("journey.items.metaverseEcosystem.desc")}</div>
						</div>
						<div className="relative flex flex-col-reverse lg:block space-y-4 lg:space-y-0">
							<div className="lg:h-1/2 text-center lg:pb-14">{t("journey.items.digitalImpact.desc")}</div>
							<div className="lg:absolute top-1/2 left-1/2 lg:-translate-1/2 w-20 h-20 p-2.5 bg-linear-to-r from-eblue to-epurple rounded-full mx-auto">
								<Image src={'/images/digital-impact.svg'} alt="" width={768} height={768} className="w-full h-full" />
							</div>
							<div className="lg:h-1/2 text-center lg:pt-10 flex justify-start flex-col gap-6 ">
								<div className="h-10 w-[1px] mx-auto bg-linear-to-r from-eblue to-epurple hidden lg:block"></div>
								<span className="uppercase font-bold text-xl mb-4 lg:mb-0">{t("journey.items.digitalImpact.title")}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="py-8 lg:py-16">
				<div className="main-container">
					<div className="grid lg:grid-cols-2 gap-12">
						<div className="flex justify-center">
							<Image src={'/images/decades-of-innovation.webp'} alt="" width={768} height={768} />
						</div>
						<div className="flex flex-col justify-center">
							<h2 className="main-title mb-4 !ml-0">{t("expertise.h2")} <span>{t("expertise.h2_span")}</span></h2>
							<p className="text-base mb-6">{t("expertise.desc")}</p>
							<ul className="main-lists table space-y-1.5">
								{(t.raw("expertise.bullets") as string[]).map(l => <li key={l}>{l}</li>)}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="py-8 lg:py-16">
				<div className="main-container">
					<h2 className="main-title mb-12 text-center max-w-[640px]">{t("team.h2")} <span>{t("team.h2_span")}</span></h2>

					<Team />
				</div>
			</div>
			<div className="py-8 lg:py-16">
				<div className="main-container">
					<h2 className="main-title mb-12 text-center">{t("partners.h2")} <span>{t("partners.h2")}</span></h2>
					<div className="grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-6">
						<div>
							<div className="flex items-center justify-center aspect-video p-4 bg-white/5 rounded-2xl max-w-[250px] lg:max-w-none mx-auto">
								<Image src={'/images/aws-white.svg'} alt="" width={200} height={200} className="aspect-video object-center object-contain w-full h-full" />
							</div>
						</div>
						<div>
							<div className="flex items-center justify-center aspect-video p-4 bg-white/5 rounded-2xl max-w-[250px] lg:max-w-none mx-auto">
								<Image src={'/images/azure-white.svg'} alt="" width={200} height={200} className="aspect-video object-center object-contain w-full h-full" />
							</div>
						</div>
						<div>
							<div className="flex items-center justify-center aspect-video p-4 bg-white/5 rounded-2xl max-w-[250px] lg:max-w-none mx-auto">
								<Image src={'/images/google-white.svg'} alt="" width={200} height={200} className="aspect-video object-center object-contain w-full h-full" />
							</div>
						</div>
						<div>
							<div className="flex items-center justify-center aspect-video p-4 bg-white/5 rounded-2xl max-w-[250px] lg:max-w-none mx-auto">
								<Image src={'/images/docker-white.svg'} alt="" width={200} height={200} className="aspect-video object-center object-contain w-full h-full" />
							</div>
						</div>
						<div>
							<div className="flex items-center justify-center p-4 bg-white/5 rounded-2xl aspect-video max-w-[250px] lg:max-w-none mx-auto">
								<Image src={'/images/kubernetes-white.svg'} alt="" width={200} height={200} className="aspect-video object-center object-contain w-full" />
							</div>
						</div>
					</div>
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