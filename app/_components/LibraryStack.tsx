'use client'

import Link from "next/link"
import Image from "next/image"

import { TechStackData } from "../tech-stack/_components/TechStackData"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay'

const LibraryData = [
    {
        name: 'Tensorflow',
        image: '/images/tensorflow-white.png',
        url: '/'
    },
    {
        name: 'PyTorch',
        image: '/images/pytorch.png',
        url: '/'
    },
    {
        name: 'OpenAI',
        image: '/images/openai.png',
        url: '/'
    }
]

interface TechIconsI {
    name: string,
    logo: string
}

const LibraryStack = () => {

    const [iconsTop, setIconsTop] = useState<TechIconsI[]>([])
    const [iconsBottom, setIconsBottom] = useState<TechIconsI[]>([])

    useEffect(() => {
        if (TechStackData && TechStackData.length > 0) {
            const logos:TechIconsI[] = [];

            TechStackData.forEach((stack) => {
                logos.push(...stack.logos)
            })

            const mid = Math.ceil(logos.length / 2);

            setIconsTop(logos.slice(0, mid));
            setIconsBottom(logos.slice(mid));
        }
    }, [])

    return (
        <>
            <div className="mb-2.5">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1.8}
                    centeredSlides={true}
                    dir="ltr"
                    loop={true}
                    noSwiping={true}
                    noSwipingClass="swiper-slide"
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2.5,
                        },
                        1024: {
                            slidesPerView: 3.8,
                        },
                        1280: {
                            slidesPerView: 4.8,
                        },
                    }}
                    speed={8000}
                    modules={[Autoplay]}
                    className="tech-stack w-full"
                >   
                    {iconsTop && iconsTop.length > 0 && iconsTop.map((icon, index) =>
                        <SwiperSlide>
                            <div key={index} className="aspect-[4/1.5] p-2 flex items-center justify-center bg-white/5 rounded-2xl">
                                <Image src={icon.logo} alt="" width={200} height={200} className="aspect-[200/80]" />
                            </div>
                        </SwiperSlide>
                        
                    )}
                </Swiper>
            </div>
            <div>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1.8}
                    centeredSlides={true}
                    loop={true}
                    noSwiping={true}
                    noSwipingClass="swiper-slide"
                    dir="rtl"
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2.5,
                        },
                        1024: {
                            slidesPerView: 3.8,
                        },
                        1280: {
                            slidesPerView: 4.8,
                        },
                    }}
                    speed={8000}
                    modules={[Autoplay]}
                    className="tech-stack w-full"
                >   
                    {iconsBottom && iconsBottom.length > 0 && iconsBottom.map((icon, index) =>
                        <SwiperSlide>
                            <div key={index} className="aspect-[4/1.5] p-2 flex items-center justify-center bg-white/5 rounded-2xl">
                                <Image src={icon.logo} alt="" width={200} height={200} className="aspect-[200/80]" />
                            </div>
                        </SwiperSlide>
                        
                    )}
                </Swiper>
            </div>
        </>
    )
}

export default LibraryStack