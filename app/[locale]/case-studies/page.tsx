import HeroHeader from "@/inc/HeroHeader";
import { CaseStudiesData, CaseStudiesI } from "./_components/CaseStudiesData";
import Link from "next/link";
import Image from "next/image";
import { FaChevronCircleRight } from "react-icons/fa";

const CaseStudiesPage = () => {
    return (
        <>
            <HeroHeader video="/videos/main-hero-video.mp4" className="max-w-[836px]" title={<><strong>Success Stories</strong> <span className="text-[#50a6d7]">Powered</span> <span className="text-[#f5daed]">by</span> <span className="text-[#b9e6e9]">Innovation</span></>} />

            <div className="py-8 lg:py-16">
                <div className="main-container">
                    <p className="text-center max-w-[782px] font-bold uppercase mx-auto"> Explore how Elchai’s innovative blockchain, Metaverse, and advanced technology solutions have empowered businesses globally. Each case study demonstrates our ability to drive tangible results, optimize business processes, and create outstanding digital experiences.</p>
                </div>
            </div>

            <div className="py-8 lg:py-16">
                <div className="main-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {CaseStudiesData && CaseStudiesData.length > 0 && CaseStudiesData.map((casestudy: CaseStudiesI, index) => 
                            <div key={index} className="space-y-5 ">
                                <Image src={casestudy.image} alt={casestudy.title} width={768} height={768} className="aspect-[4/3] rounded-2xl object-cover object-center w-full" />
                                <h2 className="font-bold text-xl uppercase text-eblue">{casestudy.title}</h2>
                                <h3 className="font-bold">{casestudy.subtitle}</h3>
                                <p>{casestudy.description}</p>
                                <Link href={casestudy.action.url} className="btn btn-main">{casestudy.action.name} <FaChevronCircleRight /></Link>
                            </div>
                        )}    
                    </div>
                </div>
            </div>

            <div className="py-8 lg:py-16"></div>
        </>
    )
}

export default CaseStudiesPage;