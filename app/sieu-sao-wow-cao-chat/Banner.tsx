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
            <Image src="/DANCE-mobile.png" alt="bner-dang-ky-dung-thu" width={1920} height={400} className="w-full md:hidden" />
            <Image src="/bner.png" alt="bner-dang-ky-dung-thu" width={1920} height={400} className="w-full max-h-[620px] max-md:hidden" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image src="/bn-mobile@2x-100.png" alt="bner-dang-ky-dung-thu" width={1920} height={400} className="w-full md:hidden" />
            <Image src="/bner.png" alt="bner-dang-ky-dung-thu" width={1920} height={400} className="w-full max-h-[620px] max-md:hidden" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Banner