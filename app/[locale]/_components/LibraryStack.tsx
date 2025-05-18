"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import { TechStackLogos } from "@/components/tech-stack";


const LibraryStack = () => {
  const logos = Object.entries(TechStackLogos).flatMap(
    ([category, logos]) =>
      logos.map(logo => ({
        ...logo,
        category
      }))
  );
  const middle = Math.ceil(logos.length / 2);
  const logos1 = logos.slice(0, middle);
  const logos2 = logos.slice(middle);

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
          {logos1.map((icon, index) => (
            <SwiperSlide>
              <div
                key={index}
                className="aspect-[4/1.5] p-2 flex items-center justify-center bg-white/5 rounded-2xl"
              >
                <Image
                  src={icon.src}
                  alt=""
                  width={120}
                  height={120}
                  className="aspect-[200/80]"
                />
              </div>
            </SwiperSlide>
          ))}
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
          {logos2.map((icon, index) => (
            <SwiperSlide>
              <div
                key={index}
                className="aspect-[4/1.5] p-2 flex items-center justify-center bg-white/5 rounded-2xl"
              >
                <Image
                  src={icon.src}
                  alt=""
                  width={120}
                  height={120}
                  className="aspect-[200/80]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default LibraryStack;
