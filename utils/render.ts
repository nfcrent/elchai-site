import { Page, Section } from "@/types/page";

export function useRender(sections: Record<string, any>) {

    function r(key: string): any {
        const parts = key.split(".")
        if (parts.length === 0) {
            throw new Error("No key provided")
        }
        let cur: any = sections
        for (const part of parts) {
            if (cur == null || !(part in cur)) {
                cur = key
                break;
            } else {
                cur = cur[part]
            }
        }

        return cur
    }

    return r
}

export function formatSections(sections: Section[]) {

    const formatted = sections.reduce<Record<string, any>>((acc, s) => {
        acc[s.slug] = s.blocks
        return acc
    }, {})
    return formatted
}

export function formatSEO(seo: Page['seo']) {
    return ({
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        openGraph: seo.ogImage ? {
            title: seo.title,
            description: seo.description,
            images: seo.ogImage,
        } : undefined,
    })
}