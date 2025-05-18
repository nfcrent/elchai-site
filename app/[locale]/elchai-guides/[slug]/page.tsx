import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Guide, GuidesContent, GuidesFooterCard } from "@/components/guides";

interface GuideDetailsProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = await getTranslations("GUIDES");
  const guideitem = t.raw(`items.${slug}`) as Guide;

  if (!guideitem) {
    return notFound();
  }

  return {
    title: `${guideitem.title} | Elchai Guides`,
    description: guideitem.description,
  };
}

export default async function GuideDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = await getTranslations("GUIDES");
  const guideitem = { ...(t.raw(`items.${slug}`) || {}), slug } as Guide;
  return (
    <>
      <div className="pt-36 pb-8 lg:pb-16">
        <div className="max-w-3xl mx-auto space-y-12 px-4">
          <Image
            src={guideitem?.image || ""}
            alt={guideitem?.title || ""}
            width={992}
            height={992}
            className="aspect-video object-center object-cover w-full rounded-4xl"
          />
          <h1 className="text-3xl lg:text-5xl text-center font-bold bg-linear-to-r from-eblue to-epurple text-transparent bg-clip-text uppercase">
            {guideitem?.title || ""}
          </h1>
          <GuidesContent content={guideitem.content as any} />
        </div>
      </div>
      <div className="py-8 lg:py-16">
        <GuidesFooterCard
          title={t.raw("footerCard.title")}
          link={t("footerCard.link")}
          description={t("footerCard.description")}
        />
      </div>
    </>
  );
}
