import Image from "next/image"
import HeroHeader from "../../../inc/HeroHeader"
import { CardStyleOne } from "@/inc/Containers"
import Link from "next/link"
import { FaChevronCircleRight } from "react-icons/fa";
import { Metadata } from "next";
import { getSiteData } from "@/lib/utils";
import Team from "./_components/Team";
import VideoBackgroundSection from "./_components/video-background";

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

const AboutUsPage = () => {
	return (
		<>

			<HeroHeader imgHeight={1000} imgWidth={1000} containerClass="lg:min-h-[65vh] min-h-[10vh]" imgClass="absolute  object-center   z-10" image="/images/about.png" className="max-w-[707px]" title={<><strong>Empowering Innovation</strong> <span className="text-[#50a6d7]">Shaping</span> <span className="text-[#f5daed]">The</span> <span className="text-[#b9e6e9]">Future</span></>} />

			<div className="border-b border-foreground/50 max-w-screen-lg mx-auto"></div>
			<div className="py-16">
				<div className="main-container">
					<p className="text-center max-w-[855px] font-bold uppercase mx-auto mb-16">At elchai, we are more than just technology experts we are visionaries dedicated to pioneering groundbreaking solutions in metaverse, blockchain, and web3. Driven by passion, experience, and a commitment to excellence, our mission is to redefine digital experiences and unlock limitless possibilities for businesses worldwide.</p>

					<h2 className="main-title mb-4 max-w-[855px] text-center">Empowering Innovation In Metaverse <span>Blockchain, and Web3</span></h2>

					<p className="max-w-[855px] text-center mx-auto">Elchai is a passionate and visionary team of developers dedicated to creating exceptional digital experiences through cutting-edge technologies. Specializing in Metaverse, Blockchain, and Web3, we build innovative and extraordinary solutions utilizing advanced capabilities such as loT, Al, ML, AR, VR, and MR. Our goal is to redefine the digital landscape, enabling businesses globally to unlock their full potential.</p>

				</div>
			</div>
			<div className="main-container"><div className="border-b border-foreground/20 max-w-screen-lg mx-auto"></div></div>
			<div className="py-8 lg:py-16">
				<div className="main-container">
					<div className="grid lg:grid-cols-2 gap-12">
						<div>
							<Image src={'/images/flavio-elia.png'} alt="" width={768} height={768} className="rounded-2xl" />
						</div>
						<div className="flex flex-col justify-center">
							<h2 className="main-title mb-4 max-w-[855px]">Message from our <span>Chairman & Founder</span></h2>
							<p className="mb-6">"At Elchai, innovation drives us. Our vision is not just to build digital worlds, but to reshape how businesses engage and thrive in the age of decentralization. Our dedicated team works tirelessly to pioneer solutions that inspire, empower, and set new standards across industries. Join us as we continue to turn visionary ideas into groundbreaking realities"</p>

							<ul className="space-y-2">
								<li className={"capitalize"}>Flavio Elia</li>
								<li>Chairman & Founder, Elchai Group</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<VideoBackgroundSection />

			<div className="py-8 lg:py-16">
				<div className="main-container">
					<h2 className="main-title mb-4 text-center">Why Global Leaders <span>Choose Elchai</span></h2>
					<div className="grid lg:grid-cols-3 gap-6">
						<div className="flex flex-col justify-between space-y-8 lg:space-y-0">
							<div className="text-center lg:text-right relative lg:pr-20 lg:-mr-12">
								<div className="mx-auto lg:mx-0 mb-4 lg:mb-0 w-18 h-18 p-2.5 lg:absolute top-1/2 lg:-translate-y-1/2 right-0 bg-[url('/images/title-decoration.svg')] bg-no-repeat bg-contain bg-center">
									<Image src={'/images/stay-ahead.svg'} alt="" width={64} height={64} className="w-full h-full" />
								</div>
								<div>
									<h3 className="text-eblue uppercase font-bold text-lg mb-2">Stay Ahead:</h3>
									<p>Strategic execution ensuring our clients consistently outperform competitors</p>
								</div>
							</div>
							<div className="text-center lg:text-right relative lg:pr-20">
								<div className="mx-auto lg:mx-0 mb-4 lg:mb-0 w-18 h-18 p-2.5 lg:absolute top-1/2 lg:-translate-y-1/2 right-0 bg-[url('/images/title-decoration.svg')] bg-no-repeat bg-contain bg-center">
									<Image src={'/images/decentralization.svg'} alt="" width={64} height={64} className="w-full h-full" />
								</div>
								<div>
									<h3 className="text-eblue uppercase font-bold text-lg mb-2">Decentralization: </h3>
									<p>Proven capability in integrating decentralized apps (dApps) for enhanced transparency, automation, and efficiency</p>
								</div>
							</div>
							<div className="text-center lg:text-right relative lg:pr-20 lg:-mr-12">
								<div className="mx-auto lg:mx-0 mb-4 lg:mb-0 w-18 h-18 p-2.5 lg:absolute top-1/2 lg:-translate-y-1/2 right-0 bg-[url('/images/title-decoration.svg')] bg-no-repeat bg-contain bg-center">
									<Image src={'/images/getting-viral.svg'} alt="" width={64} height={64} className="w-full h-full" />
								</div>
								<div>
									<h3 className="text-eblue uppercase font-bold text-lg mb-2">Getting Viral: </h3>
									<p>Innovative marketing strategies tailored to enhance the visibility of Web3 products</p>
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
									<h3 className="text-eblue uppercase font-bold text-lg mb-2">Reputation: </h3>
									<p>Over 10 years delivering exceptional blockchain and metaverse solutions</p>
								</div>
							</div>
							<div className="text-center lg:text-left relative lg:pl-20">
								<div className="mx-auto lg:mx-0 mb-4 lg:mb-0 w-18 h-18 p-2.5 lg:absolute top-1/2 lg:-translate-y-1/2 left-0 bg-[url('/images/title-decoration.svg')] bg-no-repeat bg-contain bg-center">
									<Image src={'/images/product-delivery.svg'} alt="" width={64} height={64} className="w-full h-full" />
								</div>
								<div>
									<h3 className="text-eblue uppercase font-bold text-lg mb-2">Product Delivery: </h3>
									<p>Specialized expertise in crafting global-standard blockchain solutions</p>
								</div>
							</div>
							<div className="text-center lg:text-left relative lg:pl-20 lg:-ml-12">
								<div className="mx-auto lg:mx-0 mb-4 lg:mb-0 w-18 h-18 p-2.5 lg:absolute top-1/2 lg:-translate-y-1/2 left-0 bg-[url('/images/title-decoration.svg')] bg-no-repeat bg-contain bg-center">
									<Image src={'/images/advanced-development.svg'} alt="" width={64} height={64} className="w-full h-full" />
								</div>
								<div>
									<h3 className="text-eblue uppercase font-bold text-lg mb-2">Advanced Development: </h3>
									<p>Expertise ranging from enterprise solutions to complex metaverse development</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="py-8 lg:py-16">
				<div className="main-container">
					<h2 className="main-title mb-10 text-center">From Vision to Reality <span>Our Fantastic Journey</span></h2>
					<div className="grid lg:grid-cols-4 gap-10 lg:gap-6 relative">
						<div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 bg-linear-to-r from-eblue to-epurple h-1 hidden lg:block"></div>
						<div className="relative space-y-4 lg:space-y-0">
							<div className="lg:h-1/2 text-center lg:pb-10 flex justify-end flex-col gap-6">
								<span className="uppercase font-bold text-xl">Visionary Idea</span>
								<div className="hidden lg:block h-10 w-[1px] mx-auto bg-linear-to-r from-eblue to-epurple "></div>
							</div>
							<div className="lg:absolute top-1/2 left-1/2 lg:-translate-1/2 w-20 h-20 p-2.5 bg-linear-to-r from-eblue to-epurple rounded-full mx-auto">
								<Image src={'/images/visionary-idea.svg'} alt="" width={768} height={768} className="w-full h-full" />
							</div>
							<div className="lg:h-1/2 text-center lg:pt-14">Began with an ambition to redefine digital interactions through revolutionary metaverse and Web3 solutions</div>
						</div>
						<div className="relative flex flex-col-reverse lg:block space-y-4 lg:space-y-0">
							<div className="lg:h-1/2 text-center lg:pb-14">Prioritized personalization, ownership, and composability for engaging digital experiences. </div>
							<div className="lg:absolute top-1/2 left-1/2 lg:-translate-1/2 w-20 h-20 p-2.5 bg-linear-to-r from-eblue to-epurple rounded-full mx-auto">
								<Image src={'/images/core-values.svg'} alt="" width={768} height={768} className="w-full h-full" />
							</div>
							<div className="lg:h-1/2 text-center lg:pt-10 flex justify-start flex-col gap-6">
								<div className="h-10 w-[1px] mx-auto bg-linear-to-r from-eblue to-epurple hidden lg:block"></div>
								<span className="uppercase font-bold text-xl mb-4 lg:mb-0">Core Values</span>
							</div>
						</div>
						<div className="relative space-y-4 lg:space-y-0">
							<div className="lg:h-1/2 text-center lg:pb-14 flex justify-end flex-col gap-6">
								<span className="uppercase font-bold text-xl">Metaverse Ecosystem</span>
								<div className="h-10 w-[1px] mx-auto bg-linear-to-r from-eblue to-epurple -mb-5 hidden lg:block"></div>
							</div>
							<div className="lg:absolute top-1/2 left-1/2 lg:-translate-1/2 w-20 h-20 p-2.5 bg-linear-to-r from-eblue to-epurple rounded-full mx-auto">
								<Image src={'/images/metaverse-ecosystem.svg'} alt="" width={768} height={768} className="w-full h-full" />
							</div>
							<div className="lg:h-1/2 text-center lg:pt-14">Successfully developed a comprehensive, scalable metaverse ecosystem integrated with blockchain and advanced technologies</div>
						</div>
						<div className="relative flex flex-col-reverse lg:block space-y-4 lg:space-y-0">
							<div className="lg:h-1/2 text-center lg:pb-14">Grew into a recognized expert company, significantly influencing the global digital landscape.</div>
							<div className="lg:absolute top-1/2 left-1/2 lg:-translate-1/2 w-20 h-20 p-2.5 bg-linear-to-r from-eblue to-epurple rounded-full mx-auto">
								<Image src={'/images/digital-impact.svg'} alt="" width={768} height={768} className="w-full h-full" />
							</div>
							<div className="lg:h-1/2 text-center lg:pt-10 flex justify-start flex-col gap-6 ">
								<div className="h-10 w-[1px] mx-auto bg-linear-to-r from-eblue to-epurple hidden lg:block"></div>
								<span className="uppercase font-bold text-xl mb-4 lg:mb-0">Digital Impact</span>
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
							<h2 className="main-title mb-4 !ml-0">Decades of Innovation <span>& Expertise</span></h2>
							<p className="text-base mb-6">Elchai's dedicated developers possess decades of combined experience in delivering cutting-edge blockchain, metaverse, and Web3 solutions. Our expert teams manage projects seamlessly-from initial concept through full deployment-offering tailor-made solutions trusted by startups and Fortune 500 corporations alike</p>
							<ul className="main-lists table space-y-1.5">
								<li>Proven track record in next-gen technological solutions</li>
								<li>End-to-end management of innovative projects. </li>
								<li>Tailored digital transformation solutions across industries</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="py-8 lg:py-16">
				<div className="main-container">
					<h2 className="main-title mb-12 text-center">Decades of Innovation <span>& Expertise</span></h2>

					<Team />
				</div>
			</div>

			<div className="py-8 lg:py-16">
				<div className="main-container">
					<h2 className="main-title mb-12 text-center">Our Esteemed <span>Partners</span></h2>
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

			<div className="py-8 lg:py-16">
				<div className="main-container">
					<CardStyleOne>
						<div className="pt-7 pb-10">
							<h2 className="main-title no-decoration mb-2">Join The Revolution <span>In Digital Innovation</span></h2>
							<p className="max-w-[703px] text-center mx-auto mb-8">Partner with Elchai to build intelligent, immersive digital platforms across metaverse, Al, blockchain, and Web3. Your vision, powered by innovation</p>
							<div className="flex flex-col lg:flex-row items-center justify-center gap-4">
								<Link href={'/services'} className="btn btn-main">Explore Our Services <FaChevronCircleRight /></Link>
								<Link href={'/contact-us'} className="btn btn-main">Contact Us <FaChevronCircleRight /></Link>
							</div>
						</div>
					</CardStyleOne>
				</div>
			</div>
		</>
	)
}

export default AboutUsPage