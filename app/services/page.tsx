import type { Metadata } from "next";
import HeroHeader from "@/inc/HeroHeader"
import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";
import Image from "next/image";
import { ServicesData, ServicesI } from "./_components/ServicesData";
import { CardStyleOne } from "@/inc/Containers";
import SignatureProjects from "../_components/SignatureProjects";
import { CaseStudiesPreview } from "@/inc/CaseStudies";

export const metadata: Metadata = {
    title: "Elchai Services | Innovative Digital Solutions for Businesses",
    description: "Explore Elchai’s comprehensive suite of innovative digital services designed to boost your business growth, streamline operations, and enhance engagement.",
};

const ServicePage = () => {
    return (
        <>
            <HeroHeader video="/videos/services-hero.mp4" className="max-w-[836px]" title={<><strong>Innovative Digital Solutions</strong> <span className="text-[#50a6d7]">Built</span> <span className="text-[#f5daed]">for</span> <span className="text-[#b9e6e9]">Tomorrow</span></>} />

            <div className="py-8 lg:py-16">
                <div className="main-container">
                    <p className="text-center max-w-[782px] font-bold uppercase mx-auto">Elchai empowers businesses through advanced AI-driven, Metaverse, Blockchain, Web3, and solutions. Explore our comprehensive suite of services tailored to elevate your digital presence, streamline operations, and foster innovation.</p>
					{/* <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
						<Link href={'/'} className="btn btn-main">Explore Services <FaChevronCircleRight /></Link>
						<Link href={'/'} className="btn btn-main">View Case Studies <FaChevronCircleRight /></Link>
                        <Link href={'/'} className="btn btn-main">Contact Our Experts <FaChevronCircleRight /></Link>
					</div> */}
                </div>
            </div>

            <div className="py-8 lg:py-16">
                <div className="main-container">
                    <h2 className="main-title mb-5">Our <span>Services</span></h2>
                    <p className="text-center max-w-[782px] mx-auto mb-5">Elchai offers comprehensive, advanced digital solutions that position your business at the forefront of innovation in AI-driven, Metaverse, Blockchain, Web3, and beyond.</p>
                    <p className="text-center max-w-[782px] font-bold uppercase mx-auto">Explore our extensive services below:</p>
                </div>
            </div>

            <div className="py-8 lg:py-16">
                <div className="main-container space-y-12 service-container">
                    {ServicesData && ServicesData.length > 0 && ServicesData.map((service: ServicesI, index) => 
                        <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 service-item">
                            <div className="flex items-center justify-center">
                                <Image src={service.media} alt={service.title} width={768} height={768} className="rounded-2xl aspect-[4/3] object-center object-cover w-full h-full" />
                            </div>
                            <div className="flex items-center">
                                <div className="space-y-6">
                                    <h3 className="font-bold text-eblue text-xl uppercase">{service.title}</h3>
                                    {service.description}
                                    <Link href={`/services/${service.slug}`} className="text-epurple font-bold uppercase">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="py-8 lg:py-16">
				<div className="main-container">
					<CardStyleOne>
						<div className="pt-7 pb-10">
							<h2 className="main-title no-decoration mb-2">Ready <span>to begin?</span></h2>
							<p className="max-w-[703px] text-center mx-auto mb-8">Contact our team today, and let’s bring your vision to life.</p>
							<div className="flex items-center justify-center gap-4">
								<Link href={'/'} className="btn btn-main">Contact Our Experts <FaChevronCircleRight /></Link>
							</div>	
						</div>
					</CardStyleOne>
				</div>
			</div>

        </>
    )
}

export default ServicePage