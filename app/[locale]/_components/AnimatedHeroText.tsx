'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaChevronCircleRight } from "react-icons/fa"

export default function SimplifiedHeroText() {
    const [visible, setVisible] = useState(false)
    const description = "Elchai is a team of dedicated developers specializing in AI, metaverse, blockchain, and Web3 technologies—passionate about crafting extraordinary, intelligent digital solutions that redefine what's possible."

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true)
        }, 200)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className={`transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="mb-4">
                <strong>Building The Future of </strong>
                <span className="text-[#49BFFF]">AI </span>
                <span className="text-[#F8DAF0]">Metaverse </span>
                <span className="text-[#C5F5F8]">& Web3</span>
            </div>

            <div className="mt-4">
                <p className="text-base hidden sm:block text-[#d0baca] font-medium mb-3 capitalize">
                    {description}
                </p>
                <Link href="/contact-us" className="btn btn-main !text-base">
                    Contact Us <FaChevronCircleRight />
                </Link>
            </div>
        </div>
    )
}