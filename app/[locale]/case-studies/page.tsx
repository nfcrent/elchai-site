import HeroHeader from "@/inc/HeroHeader";
import { CaseStudiesData, CaseStudiesI } from "./_components/CaseStudiesData";
import Link from "next/link";
import Image from "next/image";
import { FaChevronCircleRight } from "react-icons/fa";
import { useTranslations } from "use-intl";
import { getTranslations } from "next-intl/server";

export default async function CaseStudiesPage() {
    const t = await getTranslations("CASESTUDIES")
    return (
        <>
            <HeroHeader video="/videos/main-hero-video.mp4" className="max-w-[836px]" title={<><strong>{t("hero.t1")}</strong> <span className="text-[#50a6d7]">{t("hero.t2")}</span> <span className="text-[#b9e6e9]">{t("hero.t3")}</span></>} />

            <div className="py-8 lg:py-16">
                <div className="main-container">
                    <p className="text-center max-w-[782px] font-bold uppercase mx-auto">{t("description")}</p>
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
