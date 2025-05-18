import { CaseStudiesI, getCaseStudiesData } from "../_components/CaseStudiesData";
import Image from "next/image";
import { CardStyleOne } from "@/inc/Containers";
import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";
import { Metadata } from "next";
import HeroHeader from "@/inc/HeroHeader";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";


// export async function generateMetadata({
//     params,
// }: {
//     params: Promise<{ slug: string }>
// }) {
//     const {slug} = await params
//     const casestudyitem = await CaseStudiesData.find((casestudy) => casestudy.slug === slug);

//     if (!casestudyitem) {
//         return {
//             title: "Guide Not Found",
//             description: "The guide you are looking for does not exist.",
//         };
//     }

//     return {
//         title: `${casestudyitem.title} | Elchai Guides`,
//         description: casestudyitem.description,
//     };
// }

const CaseStudiesInnerPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>
}) => {
    const t = await getTranslations("CASESTUDIES")
    const CaseStudiesData = getCaseStudiesData(t)
    const { slug } = await params
    const casestudyitem = CaseStudiesData.find((casestudy) => casestudy.slug === slug);

    return (
        <>

            <HeroHeader image={casestudyitem?.image} className="max-w-[836px]" title={<><strong>{casestudyitem?.title}</strong> <span className="text-[#50a6d7]">{t("details.hero.t1")}</span> <span className="text-[#f5daed]">{t("details.hero.t2")}</span></>} />

            <div className="py-8 lg:py-16">
                <div className="main-container">
                    <div>{casestudyitem?.content}</div>

                    <div>
                        <h3 className="text-eblue uppercase font-bold text-2xl text-center mb-8">{t("details.stack")}</h3>
                        <div className="flex justify-center flex-wrap gap-4 mb-16 ">
                            {casestudyitem?.technologyStack && casestudyitem?.technologyStack.length > 0 && casestudyitem?.technologyStack.map((stack, index) =>
                                <div key={index} className="flex items-center justify-center aspect-video rounded-3xl p-4 bg-white/5 w-[calc(50%-16px)] lg:w-[calc(20%-16px)]">
                                    {stack.media ? (
                                        <Image src={stack.media} alt="" width={200} height={200} className="aspect-video object-center object-contain w-full h-full" />
                                    ) : (
                                        <h2 className="uppercase font-bold">{stack.name}</h2>
                                    )}

                                </div>
                            )}
                        </div>
                        <div className="text-center">
                            <Link href={casestudyitem?.actioninner?.url || ''} className="btn btn-main">{casestudyitem?.actioninner?.name || ''}</Link>
                        </div>

                    </div>
                </div>
            </div>

            <div className="py-8 lg:py-16">
                <div className="main-container">
                    <CardStyleOne>
                        <div className="pt-7 pb-10">
                            <h2 className="main-title no-decoration mb-2 text-center" dangerouslySetInnerHTML={{ __html: t.raw("details.card.title") }} />
                            <p className="max-w-[703px] text-center mx-auto mb-8">{t("details.card.description")}</p>
                            <div className="flex items-center justify-center gap-4">
                                <Link href={'/contact-us'} className="btn btn-main">{t("details.card.cta")} <FaChevronCircleRight /></Link>
                            </div>
                        </div>
                    </CardStyleOne>
                </div>
            </div>

        </>
    )
}

export default CaseStudiesInnerPage;