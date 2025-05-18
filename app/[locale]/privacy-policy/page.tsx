import { getSiteData } from "@/lib/utils";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
    title: "Elchai | Privacy Policy",
    description: "Learn how Elchai collects, uses, and protects your personal information. Understand your rights and our commitment to safeguarding your data.",
    keywords: "Elchai Privacy Policy, Data Protection, Personal Information, User Rights, Cookies, Data Security, Blockchain Privacy",
    openGraph: {
        title: "Elchai | Privacy Policy",
        description: "Learn how Elchai collects, uses, and protects your personal information. Understand your rights and our commitment to safeguarding your data.",
        url: `${getSiteData().siteUrl}/privacy`,
        type: "website",
        images: [
            {
                url: getSiteData().defaultOg,
                width: 1200,
                height: 630,
                alt: "Elchai Privacy Policy",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Elchai | Privacy Policy",
        description: "Learn how Elchai collects, uses, and protects your personal information. Understand your rights and our commitment to safeguarding your data.",
        images: getSiteData().defaultOg,
    },
};

export default async function PrivacyPolicyPage() {
    const t = await getTranslations("PRIVACYPOLICY")
    return (
        <div className="pt-36 pb-16">
            <div className="main-container">
                <h1 className="text-5xl text-center font-bold bg-linear-to-r from-eblue to-epurple text-transparent uppercase bg-clip-text">
                    {t("title")}
                </h1>
                <div className="pt-16 space-y-8">
                    <p className="italic">{t("lastUpdated")}</p>
                    <p>{t("intro")}</p>

                    {/* Section 1 */}
                    <SectionBox title={t("sections.infoCollected.title")}>
                        <p>{t("sections.infoCollected.description")}</p>
                        <h3>{t("sections.infoCollected.personal.title")}</h3>
                        <ul>{t.raw("sections.infoCollected.personal.items").map((item: string, i: number) => <li key={i}>{item}</li>)}</ul>
                        <h3>{t("sections.infoCollected.usage.title")}</h3>
                        <ul>{t.raw("sections.infoCollected.usage.items").map((item: string, i: number) => <li key={i}>{item}</li>)}</ul>
                        <h3>{t("sections.infoCollected.voluntary.title")}</h3>
                        <ul>{t.raw("sections.infoCollected.voluntary.items").map((item: string, i: number) => <li key={i}>{item}</li>)}</ul>
                    </SectionBox>

                    {/* Section 2 */}
                    <SectionBox title={t("sections.usage.title")}>
                        <p>{t("sections.usage.description")}</p>
                        <ul>{t.raw("sections.usage.items").map((item: string, i: number) => <li key={i}>{item}</li>)}</ul>
                    </SectionBox>

                    {/* Section 3 */}
                    <SectionBox title={t("sections.cookies.title")}>
                        <p>{t("sections.cookies.description")}</p>
                        <h3>{t("sections.cookies.typesTitle")}</h3>
                        <ul>{t.raw("sections.cookies.items").map((item: string, i: number) => <li key={i}>{item}</li>)}</ul>
                        <p>{t("sections.cookies.note")}</p>
                    </SectionBox>

                    {/* Section 4 */}
                    <SectionBox title={t("sections.rights.title")}>
                        <p>{t("sections.rights.description")}</p>
                        <ul>{t.raw("sections.rights.items").map((item: string, i: number) => <li key={i}>{item}</li>)}</ul>
                        <p>{t("sections.rights.note")}</p>
                    </SectionBox>

                    {/* Section 5 */}
                    <SectionBox title={t("sections.retention.title")}>
                        <p>{t("sections.retention.description")}</p>
                    </SectionBox>

                    {/* Section 6 */}
                    <SectionBox title={t("sections.security.title")}>
                        <p>{t("sections.security.description")}</p>
                    </SectionBox>

                    {/* Section 7 */}
                    <SectionBox title={t("sections.thirdParty.title")}>
                        <p>{t("sections.thirdParty.description")}</p>
                    </SectionBox>

                    {/* Section 8 */}
                    <SectionBox title={t("sections.changes.title")}>
                        <p>{t("sections.changes.description")}</p>
                    </SectionBox>

                    {/* Section 9 */}
                    <SectionBox title={t("sections.contact.title")}>
                        <p>{t("sections.contact.description")}</p>
                        <p>
                            <strong>Email:</strong>{" "}
                            <a href={`mailto:${t("sections.contact.email")}`}>{t("sections.contact.email")}</a>
                        </p>
                        <p>
                            <strong>Address:</strong>{" "}
                            <a href="#">{t("sections.contact.address")}</a>
                        </p>
                    </SectionBox>
                </div>
            </div>
        </div>
    );
};

const SectionBox = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="border border-white/20 p-6 rounded-2xl content">
        <h2>{title}</h2>
        {children}
    </div>
);
