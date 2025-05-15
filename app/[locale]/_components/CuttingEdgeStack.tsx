'use client'

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css/autoplay'

const TechStackData = [
    {
        name: 'AI & ML',
        url: ''
    },
    {
        name: 'Blockchain',
        url: ''
    },
    {
        name: 'Frameworks',
        url: ''
    },
    {
        name: 'Immersive tools',
        url: ''
    },
    {
        name: 'IOT Platforms',
        url: ''
    },
    {
        name: 'Cloud DevOps',
        url: ''
    },
    {
        name: 'Software Programming',
        url: ''
    },
    {
        name: 'Data Analysis',
        url: '/'
    },
]

const CuttingEdgeStack = () => {
    return (
        <>
            <Swiper
                spaceBetween={10}
                slidesPerView={1.5}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    1024: {
                      slidesPerView: 4.8,
                    },
                }}
                speed={8000}
                modules={[Autoplay]}
                className="tech-stack"
            >
                {TechStackData && TechStackData.length > 0 && TechStackData.map((tech, index) => 
                    <SwiperSlide>
                        {!tech.url || tech.url === '' ? (
                            <>
                                <div className="tech-item">{tech.name}</div>
                            </>
                        ) : (
                            <>
                                <Link href={tech.url} className="tech-item">{tech.name}</Link>
                            </>
                        )}
                    </SwiperSlide>
                )}    
            </Swiper>
        </>
    )
}

export default CuttingEdgeStack