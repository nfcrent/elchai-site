'use client'
import HeroHeader from "@/inc/HeroHeader"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaChevronCircleRight } from "react-icons/fa"

export function Hero() {
    const t = useTranslations("HOME.hero")
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true)
        }, 200)

        return () => clearTimeout(timer)
    }, [])

    return (<>
        <HeroHeader video="/videos/main-hero-video.mp4" mheight="min-h-[90vh]" className="max-w-[666px]" title={
            <div className={`transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="mb-4 space-x-0.5">
                    <strong>{t("t1")} </strong>
                    <span className="text-[#49BFFF]">{t("t2")} </span>
                    <span className="text-[#F8DAF0]">{t("t3")}</span>
                    <span className="text-[#C5F5F8]">{t("t4")}</span>
                </div>

                <div className="mt-4">
                    <p className="text-base hidden sm:block text-[#d0baca] font-medium mb-3 capitalize">
                        {t("description")}
                    </p>
                    <Link href="/contact-us" className="btn btn-main !text-base">
                        {t("cta")}<FaChevronCircleRight />
                    </Link>
                </div>
            </div>
        } />
        <div className="border-b border-foreground/50 max-w-screen-lg mx-auto"></div>
        <div className="py-16 lg:py-0 -mt-90 lg:-mt-30 pb-10 relative z-40 lg:mb-8">
            <div className="main-container">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                    <div className="flex lg:items-center lg:justify-center">
                        <Link href={'/'} className="flex items-center gap-3">
                            <div className="w-12 lg:w-20">
                                <Image src={'/images/ai.svg'} alt="Artificial Intelligence" width={200} height={200} className="aspect-square object-contain object-center w-full h-full" />
                            </div>
                            <span className="font-bold uppercase text-center lg:text-left">{t("ai")}</span>
                        </Link>
                    </div>
                    <div className="flex lg:items-center lg:justify-center">
                        <Link href={'/'} className="flex items-center gap-3">
                            <div className="w-12 lg:w-20">
                                <Image src={'/images/metaverse-home.svg'} alt="Metaverse" width={200} height={200} className="aspect-square object-contain object-center w-full h-full" />
                            </div>
                            <span className="font-bold uppercase text-center lg:text-left">{t("metaverse")}</span>
                        </Link>
                    </div>
                    <div className="flex lg:items-center lg:justify-center">
                        <Link href={'/'} className="flex items-center gap-3">
                            <div className="w-12 lg:w-20">
                                <Image src={'/images/blockchain.svg'} alt="Blockchain" width={200} height={200} className="aspect-square object-contain object-center w-full h-full" />
                            </div>
                            <span className="font-bold uppercase">{t("blockchain")}</span>
                        </Link>
                    </div>
                    <div className="flex items-center lg:justify-center">
                        <Link href={'/'} className="flex items-center gap-3">
                            <div className="w-12 lg:w-20">
                                <Image src={'/images/web3.svg'} alt="Web3" width={200} height={200} className="aspect-square object-contain object-center w-full h-full" />
                            </div>
                            <span className="font-bold uppercase">{t("web3")}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}