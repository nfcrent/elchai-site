'use client'

import { CardStyleTwo } from "@/inc/Containers"
import Image from "next/image"

import { Swiper, SwiperSlide } from 'swiper/react';

const ProjectsData = [
    {
        name: 'Real Estate metaverse Solutions',
        image: '/images/real-estate-metaverse.webp',
        url: '/'
    },
    {
        name: 'Dubai\'s Virtual City Replicas',
        image: '/images/dubai-virtual-city.webp',
        url: '/'
    },
    {
        name: 'Virtual Car Club',
        image: '/images/virtual-car.webp',
        url: '/'
    },
    {
        name: '3D Avatar Development',
        image: '/images/3d-avatar.webp',
        url: '/'
    },
]

const SignatureProjects = () => {
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
                                <Image src={project.image} alt="" width={768} height={768} className="aspect-square object-cover object-center w-full h-full"  />
                            </CardStyleTwo>
                            <h2 className="text-center font-bold">{project.name}</h2>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    )
}

export default SignatureProjects