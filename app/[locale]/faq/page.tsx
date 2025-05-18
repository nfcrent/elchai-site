import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getSiteData } from "@/lib/utils";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Elchai | Frequently Asked Questions (FAQ)",
  description:
    "Find answers to common questions about Elchai's AI, Metaverse, Blockchain, and Web3 services. Learn how to get started, pricing, security, and more.",
  keywords:
    "Elchai FAQ, AI Services, Metaverse Access, Blockchain Security, AR VR MR, Pricing and Timelines, Web3 Solutions",
  openGraph: {
    title: "Elchai | Frequently Asked Questions (FAQ)",
    description:
      "Find answers to common questions about Elchai's AI, Metaverse, Blockchain, and Web3 services. Learn how to get started, pricing, security, and more.",
    url: `${getSiteData().siteUrl}/faq`,
    type: "website",
    images: [
      {
        url: getSiteData().defaultOg,
        width: 1200,
        height: 630,
        alt: "Elchai FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elchai | Frequently Asked Questions (FAQ)",
    description:
      "Find answers to common questions about Elchai's AI, Metaverse, Blockchain, and Web3 services. Learn how to get started, pricing, security, and more.",
    images: getSiteData().defaultOg,
  },
};

export default async function FaqPage() {
  const t = await getTranslations("FAQ");
  return (
    <>
      {" "}
      <div className="pt-36 pb-16">
        <div className="main-container">
          <h1 className="text-5xl text-center font-bold bg-linear-to-r from-eblue to-epurple text-transparent uppercase bg-clip-text">
            {t("title")}
          </h1>
          <p className="text-center p-3">{t("description")}</p>
          <div className="pt-16 space-y-8">
            <div className="border border-white/20 p-6 rounded-2xl content">
              <Accordion type="single" collapsible className="w-full">
                {(t.raw("items") as { question: string; answer: string }[]).map((faq, i) => (
                  <AccordionItem value={i + faq.question} key={i + 1}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div>
                <h3 className="mb-2">{t("footerTitle")}</h3>
                <p>{t("footerDescription")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
