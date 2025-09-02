'use client'

import { CardStyleTwo } from "@/inc/Containers"
import { useTranslations } from "next-intl";
import Image from "next/image"

import { Swiper, SwiperSlide } from 'swiper/react';


const SignatureProjects = () => {
    const t = useTranslations("HOME.section7")
    const ProjectsData = [
        {
            name: t("aussivo"),
            image: '/images/aussivo.webp',
            url: '/'
        },
        {
            name: t("bxnk"),
            image: '/images/bxnk.webp',
            url: '/'
        },
        {
            name: t("horys"),
            image: '/images/horys.webp',
            url: '/'
        },
        {
            name: t("koinbay"),
            image: '/images/koinbay.webp',
            url: '/'
        },
        {
            name: t("layerk"),
            image: '/images/layerk.webp',
            url: '/'
        },
        {
            name: t("oyfio"),
            image: '/images/oyfio.webp',
            url: '/'
        },
        {
            name: t("rampstarter"),
            image: '/images/rampstarter.webp',
            url: '/'
        },
        {
            name: t("zenitworld"),
            image: '/images/zenitworld.webp',
            url: '/'
        },
    ]

    return (
        <>
            {/* <Swiper
                spaceBetween={10}
                slidesPerView={1.2}
                breakpoints={{
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                className="w-full"
            >

                {ProjectsData && ProjectsData.length > 0 && ProjectsData.map((project, index) =>
                    <SwiperSlide key={index}>
                        <CardStyleTwo className="mb-3">
                            <Image src={project.image} alt="" width={768} height={768} className="aspect-square object-cover object-center w-full h-full" />
                        </CardStyleTwo>
                        <h2 className="text-center font-bold">{project.name}</h2>
                    </SwiperSlide>
                )}
            </Swiper> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
                {ProjectsData && ProjectsData.length > 0 && ProjectsData.map((project, index) => 
                    <div key={index}>
                        <CardStyleTwo className="mb-3">
                            <Image src={project.image} alt="" width={768} height={768} className="aspect-square object-cover object-center w-full h-full" />
                        </CardStyleTwo>
                        <h2 className="text-center font-bold">{project.name}</h2>
                    </div>
                )}
            </div>
        </>
    )
}

export default SignatureProjects