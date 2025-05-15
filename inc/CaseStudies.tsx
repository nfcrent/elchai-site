import { CardStyleTwo } from "@/inc/Containers"
import Image from "next/image"
import Link from "next/link"
import { CaseStudiesData, CaseStudiesI } from "@/app/[locale]/case-studies/_components/CaseStudiesData"


export const CaseStudiesPreview = () => {

    CaseStudiesData.length = 4

    return (
        <>
            {CaseStudiesData && CaseStudiesData.length > 0 && CaseStudiesData.map((casestudy: CaseStudiesI, index: number) =>
                <Link href={`/case-studies/${casestudy.slug}`} key={index}>
                    <CardStyleTwo className="mb-3">
                        <Image src={casestudy.image} alt="" width={768} height={768} className="aspect-square object-cover object-center" />
                    </CardStyleTwo>
                    <h2 className="text-center font-bold">{casestudy.title}</h2>
                </Link>
            )}
        </>
    )
}