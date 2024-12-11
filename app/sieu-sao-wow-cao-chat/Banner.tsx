'use client'

import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

function Banner() {

  return (
    <section className="m-auto mt-[-1px] w-full mb-8">
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        pagination
        modules={[Navigation, Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="relative">
            <Image src="/banner.jpg" alt="banner-dang-ky-dung-thu" width={1920} height={400} className="w-full max-h-[620px]" />
            <div className="absolute top-[10%] left-[20%] text-[50%] md:text-[calc(1vw+1rem)] uppercase">
              <h1 className="bg-text bg-clip-text text-transparent font-bold md:mb-4">Cuộc thi dance challenge</h1>
              <p className="text-banner">Siêu sao wow cao chất</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image src="/banner.jpg" alt="banner-dang-ky-dung-thu" width={1920} height={400} className="w-full max-h-[620px]" />
            <div className="absolute top-[10%] left-[20%] text-[50%] md:text-[calc(1vw+1rem)] uppercase">
              <h1 className="bg-text bg-clip-text text-transparent font-bold md:mb-4">Cuộc thi dance challenge</h1>
              <p className="text-banner">Siêu sao wow cao chất</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Banner