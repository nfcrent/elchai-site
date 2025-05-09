'use client'
import { CTABlockData } from "@/types/page"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaChevronCircleRight } from "react-icons/fa"

export default function SimplifiedHeroText({ description, h1, h2, links }: { description: string, h1: string, h2: string, links: CTABlockData['links'] }) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true)
        }, 200)

        return () => clearTimeout(timer)
    }, [])
    const colors = ["#49BFFF", "#F8DAF0", "#C5F5F8"]
    return (
        <div className={`transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="mb-4">
                <strong>{h1}</strong>
                {h2.split(",").map((h, i) => (
                    <span key={h + i} style={{
                        color: colors[i] || colors[0]
                    }}>{h}</span>
                ))}
            </div>

            <div className="mt-4">
                <p className="text-base hidden sm:block text-[#d0baca] font-medium mb-3 capitalize">
                    {description}
                </p>
                {links.map(l => (
                    <Link key={l.url} target={l.isExternal ? "_blank" : undefined} href={l.url} className="btn btn-main !text-base">
                        {l.text} <FaChevronCircleRight />
                    </Link>
                ))}
            </div>
        </div>
    )
}