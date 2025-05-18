import { CardStyleOne, } from "@/inc/Containers";
import Image from "next/image";
import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";
import SignatureProjects from "./_components/SignatureProjects";
import LibraryStack from "./_components/LibraryStack";
import { Hero } from "./_components/AnimatedHeroText";
import Solutions from "./_components/Solutions";
import { SubsidiariesSection } from "./_components/Subsidiaries";
import HeroHeader from "@/inc/HeroHeader";
import { getTranslations } from "next-intl/server";

export default async function Home() {
	const t = await getTranslations("HOME")

	return (
		<>
			{/**Section 1*/}
			<Hero/>
			{/**Section 2*/}
			<SubsidiariesSection />
			{/**Section 3*/}
			<div className="py-8 lg:py-16">
				<div className="main-container">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<div className="flex flex-col justify-center order-2 lg:order-1">
							<h2 className="main-title mb-4 !ml-0" dangerouslySetInnerHTML={{ __html: t.raw("section3.title") }} />
							<p className="text-base mb-6">{t("section3.description")}</p>
							<ul className="main-lists table mx-auto space-y-1.5">
								{(t.raw("section3.list") as string[]).map((l) => <li key={l}>{l}</li>)}
							</ul>
						</div>
						<div className="flex justify-center order-1 lg:order-2">
							<Image src={'/images/metaverse-home.png'} alt="" width={768} height={768} />
						</div>
					</div>
				</div>
			</div >
			{/* Section4 */}
			<div className="py-8 lg:py-16">
				<div className="main-container">
					<h2 className="main-title mb-4 lg:mb-12 text-center max-w-[792px]" dangerouslySetInnerHTML={{ __html: t.raw("section4.title") }}
					/>
					<Solutions />
				</div>
			</div>

			{/* Section5 */}
			<div className="py-8 lg:py-16">
				<div className="main-container">
					<h2 className="main-title mb-4 text-center max-w-[648px]" dangerouslySetInnerHTML={{ __html: t.raw("section5.title") }} />
					<p className="text-center max-w-[818px] mx-auto">{t("section5.description")}</p>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
						<div className="flex items-center justify-center">
							<Image src={'/images/home-ai.png'} alt="" width={720} height={720} />
						</div>
						<div className="flex flex-col justify-center">
							<h3 className="text-center font-bold text-eblue text-xl mb-6" dangerouslySetInnerHTML={{ __html: t.raw("section5.solutionsTitle") }} />
							<ul className="main-lists alternate-li">
								{(t.raw("section5.solutionsList") as string[]).map(l => <li key={l}>{l}</li>)}
							</ul>
						</div>
					</div>

					<div className="pt-16">
						<h3 className="text-center font-bold text-eblue text-xl mb-6">{t("section5.whyAITitle")}</h3>
						<p className="text-center max-w-[815px] mx-auto mb-6">{t("section5.whyAIDescription")}</p>
						<div className="text-center">
							<Link href={'/services/ai-development-services'} className="btn btn-main">{t("section5.aiCTA")} <FaChevronCircleRight /></Link>
						</div>
					</div>
				</div>
			</div>
			{/* Section6 */}
			<div className="py-8 lg:py-16">
				<div className="main-container">
					<h2 className="main-title mb-12 text-center" dangerouslySetInnerHTML={{ __html: t.raw("section6.title") }} />
					<div className="grid grid-cols-2 grid-with-borders">
						{(t.raw("section6.list") as string[]).map(l => (
							<div key={l}>
								<span>{l}</span>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Section7 */}
			<div className="py-8 lg:py-16">
				<div className="main-container">
					<h2 className="main-title mb-12 text-center max-w-[548px]"
						dangerouslySetInnerHTML={{ __html: t.raw("section7.title") }}
					/>
					<div className="grid grid-cols-1 gap-6">
						<SignatureProjects />
					</div>
				</div>
			</div>

			{/* Section8 */}
			<div className="py-8 lg:py-16">
				<div className="main-container">
					<h2 className="main-title mb-4 text-center max-w-[572px]"
						dangerouslySetInnerHTML={{ __html: t.raw("section8.title") }}
					/>
					<p className="text-center max-w-[818px] mx-auto">{t("section8.description")}</p>
					<div className="grid lg:grid-cols-2 gap-4 mt-12">
						<div className="flex justify-center items-center">
							<Image src={'/images/rob-rockeffeller.png'} alt="" width={520} height={520} />
						</div>
						<div className="flex flex-col justify-center">
							<h3 className="text-center font-bold text-eblue text-xl mb-6">{t("section8.solutionsTitle")}</h3>
							<ul className="main-lists alternate-li ">
								{(t.raw("section8.solutionsList") as string[]).map(l => <li key={l}>{l}</li>)}
							</ul>
						</div>
					</div>

					<div className="pt-16">
						<h3 className="text-center font-bold text-eblue text-xl mb-6">{t("section8.collabTitle")}</h3>
						<p className="text-center max-w-[815px] mx-auto mb-6">{t("section8.collabDescription")}</p>
					</div>
				</div>
			</div>

			{/* Section9 */}
			<div className="py-8 lg:py-16">
				<div className="main-container">
					<h2 className="main-title mb-12 text-center"
						dangerouslySetInnerHTML={{ __html: t.raw("section9.title") }}
					/>
				</div>

				<LibraryStack />
			</div>


			{/* Section10 */}
			<div className="py-8 lg:py-16">
				<div className="main-container">
					<CardStyleOne>
						<div className="pt-7 pb-10">
							<h2 className="main-title no-decoration mb-2 text-center"
								dangerouslySetInnerHTML={{ __html: t.raw("section10.title") }}

							/>
							<p className="max-w-[703px] text-center mx-auto mb-8">{t("section10.description")}</p>
							<div className="flex flex-col lg:flex-row items-center justify-center gap-4">
								<Link href={'/services'} className="btn btn-main">{t("section10.cta.explore")} <FaChevronCircleRight /></Link>
								<Link href={'/contact-us'} className="btn btn-main">{t("section10.cta.contact")} <FaChevronCircleRight /></Link>
							</div>
						</div>
					</CardStyleOne>
				</div>
			</div>
		</>
	);
}
