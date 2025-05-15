import { CardStyleOne, } from "@/inc/Containers";
import Image from "next/image";
import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";
import SignatureProjects from "./_components/SignatureProjects";
import LibraryStack from "./_components/LibraryStack";
import AnimatedHeroText from "./_components/AnimatedHeroText";
import Solutions from "./_components/Solutions";
import { SubsidiariesSection } from "./_components/Subsidiaries";
import HeroHeader from "@/inc/HeroHeader";

export default function Home() {



	return (
		<>
			<HeroHeader video="/videos/main-hero-video.mp4" mheight="min-h-[90vh]" className="max-w-[666px]" title={<AnimatedHeroText />} />

			<div className="border-b border-foreground/50 max-w-screen-lg mx-auto"></div>

			<div className="py-16 lg:py-0 -mt-90 lg:-mt-30 pb-10 relative z-40 lg:mb-8">
				<div className="main-container">
					<div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
						<div className="flex lg:items-center lg:justify-center">
							<Link href={'/'} className="flex items-center gap-3">
								<div className="w-12 lg:w-20">
									<Image src={'/images/ai.svg'} alt="Artificial Intelligence" width={200} height={200} className="aspect-square object-contain object-center w-full h-full" />
								</div>
								<span className="font-bold uppercase text-center lg:text-left">Artificial Intelligence</span>
							</Link>
						</div>
						<div className="flex lg:items-center lg:justify-center">
							<Link href={'/'} className="flex items-center gap-3">
								<div className="w-12 lg:w-20">
									<Image src={'/images/metaverse-home.svg'} alt="Metaverse" width={200} height={200} className="aspect-square object-contain object-center w-full h-full" />
								</div>
								<span className="font-bold uppercase text-center lg:text-left">Metaverse</span>
							</Link>
						</div>
						<div className="flex lg:items-center lg:justify-center">
							<Link href={'/'} className="flex items-center gap-3">
								<div className="w-12 lg:w-20">
									<Image src={'/images/blockchain.svg'} alt="Blockchain" width={200} height={200} className="aspect-square object-contain object-center w-full h-full" />
								</div>
								<span className="font-bold uppercase">Blockchain</span>
							</Link>
						</div>
						<div className="flex items-center lg:justify-center">
							<Link href={'/'} className="flex items-center gap-3">
								<div className="w-12 lg:w-20">
									<Image src={'/images/web3.svg'} alt="Web3" width={200} height={200} className="aspect-square object-contain object-center w-full h-full" />
								</div>
								<span className="font-bold uppercase">Web3</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<SubsidiariesSection />
			<div className="py-8 lg:py-16">
				<div className="main-container">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<div className="flex flex-col justify-center order-2 lg:order-1">
							<h2 className="main-title mb-4 !ml-0">Who <span>we are?</span></h2>
							<p className="text-base mb-6">Elchai is a visionary team of developers, Al engineers, and blockchain experts building next-gen digital experiences. With a core focus on Al, metaverse, Web3, and loT, we blend immersive technologies with real-world solutions. Our mission: empower businesses through innovation, decentralization, and intelligent transformation.</p>
							<ul className="main-lists table mx-auto space-y-1.5">
								<li>Pioneers in AI, Blockchain & Immersive technologies</li>
								<li>10+ years of successful global projects</li>
								<li>10+ years of successful global projects</li>
							</ul>
						</div>
						<div className="flex justify-center order-1 lg:order-2">
							<Image src={'/images/metaverse-home.png'} alt="" width={768} height={768} />
						</div>
					</div>
				</div>
			</div>

			<div className="py-8 lg:py-16">
				<div className="main-container">
					<h2 className="main-title mb-4 lg:mb-12 text-center max-w-[792px]">Comprehensive Solutions Tailored <span>For The Digital Future</span></h2>
					<Solutions />
				</div>
			</div>

			<div className="py-8 lg:py-16">
				<div className="main-container">
					<h2 className="main-title mb-4 text-center max-w-[648px]">Shaping The Future With AI & <span>Intelligent Technologies</span></h2>
					<p className="text-center max-w-[818px] mx-auto">At Elchai, Al is not just a tool-it's at the heart of our innovation. From intelligent automation to advanced analytics, our Al-powered solutions drive smarter decisions and futuristic digital experiences across industries</p>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
						<div className="flex items-center justify-center">
							<Image src={'/images/home-ai.png'} alt="" width={720} height={720} />
						</div>
						<div className="flex flex-col justify-center">
							<h3 className="text-center font-bold text-eblue text-xl mb-6">AI-Powered Solutions We Offer</h3>
							<ul className="main-lists alternate-li">
								<li>Predictive Analytics & Data Intelligence</li>
								<li>Generative Al 6 Content Automation</li>
								<li>Smart Chatbots & Virtual Assistants</li>
								<li>Al-driven Cybersecurity Solutions</li>
								<li>Al for Blockchain & Web3 Applications</li>
							</ul>
						</div>
					</div>

					<div className="pt-16">
						<h3 className="text-center font-bold text-eblue text-xl mb-6">Why AI Matters for Businesses?</h3>
						<p className="text-center max-w-[815px] mx-auto mb-6">Al enables smarter, facter, and more scalable outcomes At Elchai, we help organizations harness Al for competitive advantage-enhancing engagement, streamlining operations, and unlocking innovation</p>
						<div className="text-center">
							<Link href={'/services/ai-development-services'} className="btn btn-main">Discover Our AI Capabilities <FaChevronCircleRight /></Link>
						</div>
					</div>
				</div>
			</div>

			<div className="py-8 lg:py-16">
				<div className="main-container">
					<h2 className="main-title mb-12 text-center">Why Businesses <span>Choose Elchai</span></h2>
					<div className="grid grid-cols-2 grid-with-borders">
						<div>
							<span>10+ Years of Blackchain & Al-driven development.</span>
						</div>
						<div>
							<span>Custom-built digital strategies for real-world success</span>
						</div>
						<div>
							<span>Deep expertise in Al, Metaverse & Web3 enwironments</span>
						</div>
						<div>
							<span>Experts in decentralized platforms and smart tech ecosystemns</span>
						</div>
						<div>
							<span>Trusted by Fortune 500s and startups alike</span>
						</div>
						<div>
							<span>Market-smart, innovation-first approach</span>
						</div>
					</div>
				</div>
			</div>

			<div className="py-8 lg:py-16">
				<div className="main-container">
					<h2 className="main-title mb-12 text-center max-w-[548px]">Discover Our Signature <span>Metaverse Projects</span></h2>
					<div className="grid grid-cols-1 gap-6">
						<SignatureProjects />
					</div>
				</div>
			</div>

			<div className="py-8 lg:py-16">
				<div className="main-container">
					<h2 className="main-title mb-4 text-center max-w-[770px]">Partnering with Rob Rockefeller <span>SC to Build the Digital Future</span></h2>
					<p className="text-center max-w-[818px] mx-auto">Elchai has joined forces with global sionary Rab Rockefeller SC to co develop world-shaping digital ecosystems powered by Al, blockchain, and sustainability tech.</p>
					<div className="grid lg:grid-cols-2 gap-4 mt-12">
						<div className="flex justify-center items-center">
							<Image src={'/images/rob-rockeffeller.png'} alt="" width={520} height={520} />
						</div>
						<div className="flex flex-col justify-center">
							<h3 className="text-center font-bold text-eblue text-xl mb-6">AI-Powered Solutions We Offer</h3>
							<ul className="main-lists alternate-li ">
								<li>AI Robotics</li>
								<li>Blockchain Based Carbon Credit Systems</li>
								<li>Cyber Security & Advanced Tech Research</li>
								<li>Metaverse Development & Digital transformation</li>
							</ul>
						</div>
					</div>

					<div className="pt-16">
						<h3 className="text-center font-bold text-eblue text-xl mb-6">A Global Collaboration</h3>
						<p className="text-center max-w-[815px] mx-auto mb-6">With operations across Dubal, Milan, Shenzhen, and New Delhi, this partnership amplifies our global mission to lead with Al-first innovation.</p>
						{/* <div className="text-center">
							<Link href={'/'} className="btn btn-main">Learn More About Our Partnership <FaChevronCircleRight /></Link>
						</div> */}
					</div>
				</div>
			</div>

			<div className="py-8 lg:py-16">
				<div className="main-container">
					<h2 className="main-title mb-12 text-center">Our Cutting-<span>Edge Tech Stack</span></h2>
				</div>

				<LibraryStack />
			</div>



			<div className="py-8 lg:py-16">
				<div className="main-container">
					<CardStyleOne>
						<div className="pt-7 pb-10">
							<h2 className="main-title no-decoration mb-2 text-center">Join The Revolution <span>In Digital Innovation</span></h2>
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
	);
}
