'use client'

import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

function Banner() {

  return (
    <section className="m-auto mt-[-1px] w-full">
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Image src="/bn-mobile@2x-100.jpg" alt="bn-mobile@2x-100" width={1920} height={400} className="w-full h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/bn-mobile@2x-100.jpg" alt="bn-mobile@2x-100" width={1920} height={400} className="w-full h-full" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Banner