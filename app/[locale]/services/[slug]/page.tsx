import HeroHeader from "@/inc/HeroHeader";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { getServiceData, ServiceFooterCard } from "@/components/services";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params
  const t = await getTranslations("SERVICES")
  const services = getServiceData(t)
  const serviceItem = services.find(s => s.slug === slug)
  if (!serviceItem) {
    return notFound()
  }

  return {
    title: `Elchai | ${t("title")}`,
    description: t("description"),
  };
}

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params
  const t = await getTranslations("SERVICES")
  const services = getServiceData(t)
  const serviceItem = services.find(s => s.slug === slug)

  return (
    <>
      <HeroHeader
        video={serviceItem?.media.video}
        className="max-w-[836px]"
        title={serviceItem?.hero}
      />

      <div className="py-8 lg:py-16">
        <div className="main-container">
          <p className="text-center max-w-[782px] font-bold uppercase mx-auto">
            {serviceItem?.intro}
          </p>
        </div>
      </div>

      <div className="py-8 lg:py-16">
        <div className="main-container">
          <div>
            <div>{serviceItem?.content}</div>
          </div>

          <div>
            <h3 className="text-eblue uppercase font-bold text-2xl text-center mb-8">
              Technology Stack
            </h3>
            <div className="flex justify-center flex-wrap gap-4 mb-16 ">
              {serviceItem?.stack.map((stack, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center aspect-video rounded-3xl p-4 bg-white/5 w-[calc(50%-16px)] lg:w-[calc(20%-16px)]"
                >
                  {stack.media ? (
                    <Image
                      src={stack.media}
                      alt=""
                      width={200}
                      height={200}
                      className="aspect-video object-center object-contain w-full h-full"
                    />
                  ) : (
                    <h2 className="uppercase font-bold">{stack.name}</h2>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href={serviceItem?.link?.url || ""}
                className="btn btn-main"
              >
                {serviceItem?.link?.name || ""}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 lg:py-16">
        <div className="main-container">
          <ServiceFooterCard t={t} />
        </div>
      </div>
    </>
  );
};