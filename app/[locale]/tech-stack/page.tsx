import HeroHeader from "@/inc/HeroHeader";
import { CardStyleOne } from "@/inc/Containers";
import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";
import { getTranslations } from "next-intl/server";
import { TechStackCard, TechStackLogos } from "@/components/tech-stack";


export async function generateMetadata() {
    const t = await getTranslations("TECHSTACK")

    return ({
        title: `Elchai Technology Stack | ${t("title")} ${t("h2")}`,
        description: t("description") || "Discover how Elchai leverages cutting-edge technologies and advanced tools to deliver secure, scalable, and innovative digital solutions for businesses.",
    })
}


export default async function TechStackPage() {
    const t = await getTranslations("TECHSTACK")
    const data = Object.entries(t.raw("items") || {}).map(([k, v]: [k: string, v: any]) => ({
        ...v,
        logos: TechStackLogos[k] || []
    }))

    return (
        <>
            <HeroHeader video="/videos/main-hero-video.mp4" className="max-w-[836px]" title={<><strong>{t("title")}</strong> <span className="text-[#50a6d7]">{t("h2")}</span></>} />

            <div className="py-16">
                <div className="main-container">
                    <p className="text-center max-w-[782px] font-bold uppercase mx-auto">{t("description")}</p>
                </div>
            </div>

            <div className="py-16">
                <div className="main-container space-y-24 tech-stack-container">
                    {data.map((item, index) => (
                        <TechStackCard key={item.title + index} stack={item} />
                    ))}
                </div>
            </div>

            <div className="py-16">
                <div className="main-container">
                    <h2 className="main-title mb-5 text-center" dangerouslySetInnerHTML={{ __html: t.raw("footer.title") }} />
                    <p className="text-center max-w-[782px] mx-auto mb-5">{t("footer.description")}</p>
                </div>
            </div>

            <div className="py-16">
                <div className="main-container">
                    <CardStyleOne>
                        <div className="pt-7 pb-10">
                            <h2 className="main-title no-decoration mb-2" dangerouslySetInnerHTML={{ __html: t.raw("footer.footerCard.title") }} />
                            <p className="max-w-[703px] text-center mx-auto mb-8">{t("footer.footerCard.description")}</p>
                            <div className="flex items-center justify-center gap-4">
                                <Link href={'/contact-us'} className="btn btn-main">{t("footer.footerCard.link")}<FaChevronCircleRight /></Link>
                            </div>
                        </div>
                    </CardStyleOne>
                </div>
            </div>
        </>
    )
}