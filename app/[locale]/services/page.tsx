import type { Metadata } from "next";
import HeroHeader from "@/inc/HeroHeader";
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { getServiceData, ServiceFooterCard } from "@/components/services";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("SERVICES");
  return {
    title: `Elchai Services | ${t("title")}`,
    description:
      "Explore Elchai’s comprehensive suite of innovative digital services designed to boost your business growth, streamline operations, and enhance engagement.",
  };
}

export default async function ServicePage() {
  const t = await getTranslations("SERVICES");
  const services = getServiceData(t);
  return (
    <>
      <HeroHeader
        video="/videos/services-hero.mp4"
        className="max-w-[836px]"
        title={
          <>
            <strong>{t("t1")}</strong>{" "}
            <span className="text-[#50a6d7]">{t("t2")}</span>{" "}
            <span className="text-[#f5daed]">{t("t3")}</span>
          </>
        }
      />

      <div className="py-8 lg:py-16">
        <div className="main-container">
          <p className="text-center max-w-[782px] font-bold uppercase mx-auto">
            {t("description")}
          </p>
        </div>
      </div>

      <div className="py-8 lg:py-16">
        <div className="main-container">
          <h2
            className="main-title mb-5"
            dangerouslySetInnerHTML={{ __html: t.raw("intro.title") }}
          />
          <p className="text-center max-w-[782px] mx-auto mb-5">
            {t("intro.description")}
          </p>
          <p className="text-center max-w-[782px] font-bold uppercase mx-auto">
            {t("intro.cta")}
          </p>
        </div>
      </div>

      <div className="py-8 lg:py-16">
        <div className="main-container space-y-12 service-container">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 service-item"
            >
              <div className="flex items-center justify-center">
                <Image
                  src={service.media.image}
                  alt={service.title}
                  width={768}
                  height={768}
                  className="rounded-2xl aspect-[4/3] object-center object-cover w-full h-full"
                />
              </div>
              <div className="flex items-center">
                <div className="space-y-6">
                  <h3 className="font-bold text-eblue text-xl uppercase">
                    {service.title}
                  </h3>
                  {service.description}
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-epurple font-bold uppercase"
                  >
                    {service.link.name}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-8 lg:py-16">
        <div className="main-container">
          <ServiceFooterCard t={t} />
        </div>
      </div>
    </>
  );
}
