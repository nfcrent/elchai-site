import type { Metadata } from "next";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FaChevronCircleRight } from "react-icons/fa";
import { getSiteData } from "@/lib/utils";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("SUPPORT")
    return (
        {
            title: `Elchai Support | ${t("title")}`,
            description: "Get expert support for AI, Metaverse, Blockchain, and Web3 solutions. Access FAQs, documentation, and fast assistance from the Elchai technical team.",
            keywords: "AI and Blockchain Support, Metaverse Support, Web3 Support, Technical Assistance, Elchai Support, Crypto Wallet Setup, Metaverse Access",
            openGraph: {
                title: "Elchai Support | AI, Metaverse & Blockchain Technical Help",
                description: "Get expert support for AI, Metaverse, Blockchain, and Web3 solutions. Access FAQs, documentation, and fast assistance from the Elchai technical team.",
                url: `${getSiteData().siteUrl}/support`,
                type: "website",
                images: [
                    {
                        url: getSiteData().defaultOg,
                        width: 1200,
                        height: 630,
                        alt: "Elchai Support Services",
                    },
                ],
            },
            twitter: {
                card: "summary_large_image",
                title: "Elchai Support | AI, Metaverse & Blockchain Technical Help",
                description: "Get expert support for AI, Metaverse, Blockchain, and Web3 solutions. Access FAQs, documentation, and fast assistance from the Elchai technical team.",
                images: getSiteData().defaultOg,
            },
        }
    )

}

export default async function SupportPage() {

    const t = await getTranslations("SUPPORT")

    return (
        <>
            <div className="pt-36 pb-16">
                <div className="main-container">
                    <h1 className="text-5xl text-center font-bold bg-linear-to-r from-eblue to-epurple text-transparent uppercase bg-clip-text">{t("title")}</h1>
                    <div className="pt-16 space-y-8">
                        <p>{t("description")}:</p>
                        <div>
                            <p><strong>{t("contact.email")}</strong> <a href="mailto:support@elchaigroup.com" className="text-eblue">support@elchaigroup.com</a></p>
                            <p><strong>{t("contact.hotline")}:</strong> {getSiteData().contact.phone}
                            </p>
                        </div>

                        <div className="border border-white/20 p-6 rounded-2xl content">
                            <h2>{t("faq.title")}</h2>
                            <p>{t("faq.description")}</p>
                            <Accordion type="single" collapsible className="w-full">
                                {Object.entries(t.raw("faq.accordion") || {}).map(([k, v]: [k: string, v: any]) => (
                                    <AccordionItem key={k} value={k}>
                                        <AccordionTrigger>{k}. {v.question}</AccordionTrigger>
                                        <AccordionContent>{v.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        <div className="border border-white/20 p-6 rounded-2xl content">
                            <h2>{t("docs.title")}</h2>
                            <p>{t("docs.description")}</p>
                            <ul>
                                {t.raw("docs.items").map((l: string, i: number) => (
                                    <li key={i + l}>{l}</li>
                                ))}
                            </ul>
                            <a href="/" target="_blank" className="btn btn-main">{t("docs.cta")} <FaChevronCircleRight /></a>
                        </div>

                        <div className="border border-white/20 p-6 rounded-2xl content">
                            <h2>{t("response.title")}</h2>
                            <p>{t("response.description")}</p>
                            <ul>
                                {(t.raw("response.items") as Array<string>).map((l, i) => (
                                    <li key={l + i}>{l}</li>
                                ))}
                            </ul>
                            <p>{t("response.note")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}