import { GuidesData, GuidesI } from "../_components/GuidesData"
import Image from "next/image";
import { CardStyleOne } from "@/inc/Containers";
import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";

export async function generateStaticParams() {
    return GuidesData.map((guide: GuidesI) => ({
        slug: guide.slug
    }))
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const {slug} = await params
    const guideitem = await GuidesData.find((guide) => guide.slug === slug);

    if (!guideitem) {
        return {
            title: "Guide Not Found",
            description: "The guide you are looking for does not exist.",
        };
    }

    return {
        title: `${guideitem.title} | Elchai Guides`,
        description: guideitem.description,
    };
}


const GuidePage = async({
    params,
}: {
    params: Promise<{ slug: string }>
}) => {

    const {slug} = await params
    const guideitem = await GuidesData.find((guide) => guide.slug === slug);

    return (
        <>
            <div className="pt-36 pb-8 lg:pb-16">
                <div className="max-w-3xl mx-auto space-y-12 px-4">
                    <Image src={guideitem?.image || ''} alt={guideitem?.title || ''} width={992} height={992} className="aspect-video object-center object-cover w-full rounded-4xl" />
                    <h1 className="text-3xl lg:text-5xl text-center font-bold bg-linear-to-r from-eblue to-epurple text-transparent bg-clip-text uppercase">{guideitem?.title || ''}</h1>
                    <div className="content">
                        {guideitem?.content || <></>}
                    </div>
                </div>
            </div>
            <div className="py-8 lg:py-16">
				<div className="main-container">
					<CardStyleOne>
						<div className="pt-7 pb-10">
							<h2 className="main-title no-decoration mb-2 text-center">Stay Ahead in the <span>Digital World</span></h2>
							<p className="max-w-[703px] text-center mx-auto mb-8">Subscribe to Elchai Guides for ongoing insights, expert tips, and latest trends directly to your inbox.</p>
							<div className="flex items-center justify-center gap-4">
								<Link href={'/contact-us'} className="btn btn-main">Subscribe Now <FaChevronCircleRight /></Link>
							</div>	
						</div>
					</CardStyleOne>
				</div>
			</div>
        </>
    )
}

export default GuidePage