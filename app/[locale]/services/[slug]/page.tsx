import { ServicesData, ServicesI } from "../_components/ServicesData"
import HeroHeader from "@/inc/HeroHeader"
import Image from "next/image"
import Link from "next/link"
import { CardStyleOne } from "@/inc/Containers"
import { FaChevronCircleRight } from "react-icons/fa";

export async function generateStaticParams() {
    return ServicesData.map((guide: ServicesI) => ({
        slug: guide.slug
    }))
}

const getServiceDataItem = async ({
    params,
}: {
    params: Promise<{ slug: string }>
}) => {
    const {slug} = await params
    const serviceitem = await ServicesData.find((service) => service.slug === slug);

    return serviceitem;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const serviceitem = await getServiceDataItem({ params });

    if (!serviceitem) {
        return {
            title: "Service Not Found",
            description: "The service you are looking for does not exist.",
        };
    }

    return {
        title: `${serviceitem.title}`,
        description: serviceitem.description,
    };
}

const ServiceInnerPage = async ({ params }: { params: Promise<{ slug: string }> }) => {

    const serviceitem = await getServiceDataItem({ params });

    return (
        <>
            <HeroHeader video={serviceitem?.video} className="max-w-[836px]" title={serviceitem?.herotext} />

            <div className="py-8 lg:py-16">
                <div className="main-container">
                    <p className="text-center max-w-[782px] font-bold uppercase mx-auto">{serviceitem?.introduction}</p>
                </div>
            </div>

            <div className="py-8 lg:py-16">
                <div className="main-container">
                    <div>
                        <div>{serviceitem?.content}</div>
                    </div>

                    <div>
                        <h3 className="text-eblue uppercase font-bold text-2xl text-center mb-8">Technology Stack</h3>
                        <div className="flex justify-center flex-wrap gap-4 mb-16 ">
                            {serviceitem?.technologyStack && serviceitem?.technologyStack.length > 0 && serviceitem?.technologyStack.map((stack, index) => 
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
                            <Link href={serviceitem?.action?.url || ''} className="btn btn-main">{serviceitem?.action?.name || ''}</Link>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="py-8 lg:py-16">
				<div className="main-container">
					<CardStyleOne>
						<div className="pt-7 pb-10">
							<h2 className="main-title no-decoration mb-2 text-center">Ready to accelerate your <span>digital transformation?</span></h2>
							<p className="max-w-[703px] text-center mx-auto mb-8">Contact Elchai’s experts today to discuss your project and unlock your business's potential.</p>
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

export default ServiceInnerPage