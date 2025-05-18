'use client'

import { CardStyleTwo } from "@/inc/Containers"
import { useTranslations } from "next-intl";
import Image from "next/image"

import { Swiper, SwiperSlide } from 'swiper/react';


const SignatureProjects = () => {
    const t = useTranslations("HOME.section7")
    const ProjectsData = [
        {
            name: t("real"),
            image: '/images/real-estate-metaverse.webp',
            url: '/'
        },
        {
            name: t("dubai"),
            image: '/images/dubai-virtual-city.webp',
            url: '/'
        },
        {
            name: t("virtual"),
            image: '/images/virtual-car.webp',
            url: '/'
        },
        {
            name: t("3d"),
            image: '/images/3d-avatar.webp',
            url: '/'
        },
    ]

    return (
        <>
            <Swiper
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
            </Swiper>
        </>
    )
}

export default SignatureProjects