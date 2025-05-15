import type { Metadata } from "next";
import HeroHeader from "@/inc/HeroHeader";
import { TechStackData } from "./_components/TechStackData";
import Image from "next/image";
import { CardStyleOne } from "@/inc/Containers";
import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Elchai Technology Stack | Powering Digital Innovation",
    description: "Discover how Elchai leverages cutting-edge technologies and advanced tools to deliver secure, scalable, and innovative digital solutions for businesses.",
};

const TechStackPage = () => {
    return (
        <>
            <HeroHeader video="/videos/main-hero-video.mp4" className="max-w-[836px]" title={<><strong>Leveraging Cutting-Edge</strong> <span className="text-[#50a6d7]">Technologies</span> <span className="text-[#f5daed]">to Build</span> <span className="text-[#b9e6e9]">Tomorrow</span></>} />

            <div className="py-16">
                <div className="main-container">
                    <p className="text-center max-w-[782px] font-bold uppercase mx-auto"> At Elchai, continuous innovation drives our success. We leverage a diverse array of modern programming languages, blockchain platforms, development frameworks, and cloud technologies to deliver unparalleled digital solutions, ensuring our clients always remain ahead in a fast-evolving technological landscape.</p>
                </div>
            </div>

            <div className="py-16">
                <div className="main-container space-y-24 tech-stack-container">
                    {TechStackData && TechStackData.length > 0 && TechStackData.map((item, index) => (
                        <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 tech-stack-item">
                            <div className="flex items-center ts-first">
                                <div className="space-y-6">
                                    <h3 className="font-bold text-eblue text-xl uppercase">{item.title}</h3>
                                    <p className="max-w-[782px] mx-auto mb-8">{item.description}</p>    
                                </div>
                            </div>
                            <div className="ts-second">
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                    {item.logos.map((logo, logoIndex) => (
                                        <div key={logoIndex} className="flex items-center justify-center aspect-video rounded-3xl p-4 bg-white/5">
                                            <Image src={logo.logo} alt={logo.name} width={200} height={200} className="aspect-video object-center object-contain w-full h-full" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="py-16">
                <div className="main-container">
                    <h2 className="main-title mb-5 text-center">Continuous Learning <span>& Innovation</span></h2>
                    <p className="text-center max-w-[782px] mx-auto mb-5">At Elchai, we prioritize continuous learning and skill enhancement. Our team actively participates in training, workshops, and certifications, ensuring we always leverage the most innovative technologies and stay ahead in rapidly changing industries.</p>
                </div>
            </div>

            <div className="py-16">
				<div className="main-container">
					<CardStyleOne>
						<div className="pt-7 pb-10">
							<h2 className="main-title no-decoration mb-2">Ready to Leverage <span>Our Expertise?</span></h2>
							<p className="max-w-[703px] text-center mx-auto mb-8">Explore how our advanced technology stack can empower your next digital project. Schedule a consultation with Elchai’s experts today.</p>
							<div className="flex items-center justify-center gap-4">
								<Link href={'/contact-us'} className="btn btn-main">Book Your Meeting Now <FaChevronCircleRight /></Link>
							</div>	
						</div>
					</CardStyleOne>
				</div>
			</div>
        </>
    )
}

export default TechStackPage