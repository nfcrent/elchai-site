import { getSiteData } from "@/lib/utils";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("TERMS")
    return ({
        title: `Elchai | ${t("title")}`,
        description: "Review the Terms of Use for Elchai Group's website, metaverse platforms, applications, and services. Understand user obligations, liability, intellectual property, and more.",
        keywords: "Elchai Terms of Use, User Obligations, Intellectual Property, Limitation of Liability, Governing Law, Metaverse Services, Blockchain Services",
        openGraph: {
            title: "Elchai | Terms of Use",
            description: "Review the Terms of Use for Elchai Group's website, metaverse platforms, applications, and services. Understand user obligations, liability, intellectual property, and more.",
            url: `${getSiteData().siteUrl}/terms`,
            type: "website",
            images: [
                {
                    url: getSiteData().defaultOg,
                    width: 1200,
                    height: 630,
                    alt: "Elchai Terms of Use",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Elchai | Terms of Use",
            description: "Review the Terms of Use for Elchai Group's website, metaverse platforms, applications, and services. Understand user obligations, liability, intellectual property, and more.",
            images: getSiteData().defaultOg,
        },
    })
}

export default async function TermsPage() {
    const t = await getTranslations("TERMS")
    const list = Object.values(t.raw("list")).map((v: any) => {
        const items = Object.values(v.items).map(i => i)
        return ({ ...v, items })
    })
    return (
        <>
            <div className="pt-36 pb-16">
                <div className="main-container">
                    <h1 className="text-5xl text-center font-bold bg-linear-to-r from-eblue to-epurple text-transparent uppercase bg-clip-text">{t("title")}</h1>
                    <div className="pt-16 space-y-8">
                        <p className="text-center">{t("description")}</p>
                        {list.map((l, i) => (
                            <div className="border border-white/20 p-6 rounded-2xl content">
                                <h2>{i + 1}. {l.title}</h2>
                                <h6>{l.h1}</h6>
                                <ul>
                                    {l.items.map((i: string) => (
                                        <li>{i}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
