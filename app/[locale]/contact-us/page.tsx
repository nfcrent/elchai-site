import Link from "next/link"
import HeroHeader from "@/inc/HeroHeader";
import { CardStyleOne } from "@/inc/Containers"
import { FaChevronCircleRight } from "react-icons/fa";
import { IconStyleOne, IconTextStyleOne } from "@/inc/IconTexts";
import { MdAttachEmail, MdSupportAgent } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaEarthAsia, FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ContactForm from "./_components/ContactForm";
import { Metadata } from "next";
import { getSiteData } from "@/lib/utils";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
	title: "Contact Elchai | Let's Collaborate on Your Digital Vision",
	description: "Reach out to Elchai to collaborate, innovate, and bring your digital transformation ideas to life. Connect today and let's shape the future together.",
	keywords: "Contact Elchai Group, Metaverse Collaboration, Blockchain Solutions, Digital Transformation, AI Innovation, Web3 Partnership",
	openGraph: {
		title: "Contact Elchai | Let's Collaborate on Your Digital Vision",
		description: "Reach out to Elchai to collaborate, innovate, and bring your digital transformation ideas to life. Connect today and let's shape the future together.",
		url: `${getSiteData().siteUrl}/contact-us`,
		type: "website",
		images: [
			{
				url: getSiteData().defaultOg,
				width: 1200,
				height: 630,
				alt: "Contact Elchai",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Contact Elchai | Let's Collaborate on Your Digital Vision",
		description: "Reach out to Elchai to collaborate, innovate, and bring your digital transformation ideas to life. Connect today and let's shape the future together.",
		images: getSiteData().defaultOg,
	},
};

export default async function ContactUsPage() {
	const t = await getTranslations("CONTACT")
	return (
		<>
			<HeroHeader
				image="/images/contact-us-hero.png"
				video="/videos/main-hero-video.mp4"
				className="max-w-[362px]"
				title={
					<>
						<strong>{t("hero.titleBold")}</strong> {t("hero.titleRest")}
					</>
				}
			/>

			<div className="py-8 lg:py-16">
				<div className="main-container">
					<p className="text-center font-bold uppercase mx-auto mb-8 text-eblue">
						{t("intro.quote")}
					</p>
					<p className="text-center max-w-[932px] font-bold uppercase mx-auto">
						{t("intro.message")}
					</p>
				</div>
			</div>

			<div className="py-8 lg:py-16">
				<div className="main-container">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<div>
							<h2 className="main-title mb-4 !ml-0">
								{t("collaboration.heading")} <span>{t("collaboration.headingSpan")}</span>
							</h2>
							<p className="mb-6">{t("collaboration.text")}</p>
							<div className="space-y-6 mb-6">
								<IconTextStyleOne
									icon={<MdSupportAgent />}
									title={t("collaboration.support")}
									url={`mailto:${getSiteData().contact.email}`}
									contact={getSiteData().contact.email}
								/>
								<IconTextStyleOne
									icon={<IoCallSharp />}
									title={t("collaboration.call")}
									url={`tel:${getSiteData().contact.phone}`}
									contact={getSiteData().contact.phone}
								/>
								<IconTextStyleOne
									icon={<MdAttachEmail />}
									title={t("collaboration.email")}
									url={`mailto:${getSiteData().contact.email}`}
									contact={getSiteData().contact.email}
								/>
								<IconTextStyleOne
									icon={<FaEarthAsia />}
									title={t("collaboration.website")}
									url={getSiteData().siteUrl}
									contact={getSiteData().siteUrl.replace("https://", "www.")}
									openinnewtab={true}
									highlight={true}
								/>
							</div>
							<p className="mb-6">{t("collaboration.stayConnected")}</p>
							<ul className="flex items-center gap-2 mb-12">
								<li><IconStyleOne icon={<FaFacebookF />} url={getSiteData().socialMedia.facebook} /></li>
								<li><IconStyleOne icon={<FaInstagram />} url={getSiteData().socialMedia.instagram} /></li>
								<li><IconStyleOne icon={<FaLinkedinIn />} url={getSiteData().socialMedia.linkedin} /></li>
								<li><IconStyleOne icon={<FaYoutube />} url={getSiteData().socialMedia.youtube} /></li>
								<li><IconStyleOne icon={<FaXTwitter />} url={getSiteData().socialMedia.twitter} /></li>
							</ul>
						</div>
						<div>
							<div className="border border-white px-6 lg:px-12 py-10 lg:py-20 rounded-4xl bg-linear-to-r from-[#22363F] to-[#332E44]">
								<h3 className="uppercase text-center font-bold text-lg leading-[2.5rem] mb-6">
									{t("form.heading")}
								</h3>
								<ContactForm />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="py-8 lg:py-16">
				<div className="main-container">
					<CardStyleOne>
						<div className="pt-7 pb-10">
							<h2 className="main-title no-decoration mb-2">
								{t("cta.title")} <span>{t("cta.titleSpan")}</span>
							</h2>
							<p className="max-w-[703px] text-center mx-auto mb-8">
								{t("cta.text")}
							</p>
							<div className="flex items-center justify-center gap-4">
								<Link href={"/"} className="btn btn-main">
									{t("cta.button")} <FaChevronCircleRight />
								</Link>
							</div>
						</div>
					</CardStyleOne>
				</div>
			</div>
		</>

	)
}