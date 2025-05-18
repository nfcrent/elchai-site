import type { Metadata } from "next";
import { getSiteData } from "@/lib/utils";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
    title: "Elchai Community Guidelines | AI, Metaverse & Blockchain Hub",
    description: "Join Elchai's AI-focused community—review our guidelines promoting respectful collaboration, diversity, innovation, and a safe digital environment.",
    keywords: "AI Community Guidelines, Metaverse Community, Blockchain Community, Elchai Community Rules, Respectful Collaboration, Digital Safety",
    openGraph: {
        title: "Elchai Community Guidelines | AI, Metaverse & Blockchain Hub",
        description: "Join Elchai's AI-focused community—review our guidelines promoting respectful collaboration, diversity, innovation, and a safe digital environment.",
        url: `${getSiteData().siteUrl}/community-rules`,
        type: "website",
        images: [
            {
                url: getSiteData().defaultOg,
                width: 1200,
                height: 630,
                alt: "Elchai Community Guidelines",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Elchai Community Guidelines | AI, Metaverse & Blockchain Hub",
        description: "Join Elchai's AI-focused community—review our guidelines promoting respectful collaboration, diversity, innovation, and a safe digital environment.",
        images: getSiteData().defaultOg,
    },
};

export default async function CommunityRules() {
    const t = await getTranslations("COMMUNITYRULES")
    return (
        <div className="pt-36 pb-16">
            <div className="main-container">
                <h1 className="text-5xl text-center font-bold bg-linear-to-r from-eblue to-epurple text-transparent uppercase bg-clip-text max-w-3xl mx-auto">
                    {t("title")}
                </h1>
                <div className="pt-16 space-y-8">
                    <p>{t("intro")}</p>

                    {/* Section: Positive Engagement */}
                    <div className="border border-white/20 p-6 rounded-2xl content">
                        <h2>{t("sections.positive.title")}</h2>
                        <p>{t("sections.positive.description")}</p>
                        <ul>
                            {t.raw("sections.positive.list").map((item: string, index: number) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Section: Prohibited Behavior */}
                    <div className="border border-white/20 p-6 rounded-2xl content">
                        <h2>{t("sections.prohibited.title")}</h2>
                        <p>{t("sections.prohibited.description")}</p>
                        <ul>
                            {t.raw("sections.prohibited.list").map((item: string, index: number) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p>{t("sections.prohibited.note")}</p>
                    </div>

                    {/* Section: Moderation Policies */}
                    <div className="border border-white/20 p-6 rounded-2xl content">
                        <h2>{t("sections.moderation.title")}</h2>
                        <p>{t("sections.moderation.description")}</p>
                        <ul>
                            {t.raw("sections.moderation.list").map((item: string, index: number) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Section: Reporting Issues */}
                    <div className="border border-white/20 p-6 rounded-2xl content">
                        <h2>{t("sections.reporting.title")}</h2>
                        <p>{t("sections.reporting.description")}</p>
                        <ul>
                            {t.raw("sections.reporting.list").map((item: string, index: number) => (
                                <li key={index}>
                                    {item}
                                    {index === 2 && (
                                        <>
                                            {" "}
                                            <a href="mailto:community@elchaigroup.com" className="underline">
                                                community@elchaigroup.com
                                            </a>
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <p>{t("sections.reporting.note")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
