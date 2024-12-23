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
            <Image src="/bner.png" alt="bner-dang-ky-dung-thu" width={2879} height={1308} className="w-full max-h-[800px] max-lg:hidden" />
            <Image src="/DANCE-mobile.png" alt="bner-dang-ky-dung-thu" width={1782} height={2619} className="w-full lg:hidden" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image src="/bner.png" alt="bner-dang-ky-dung-thu" width={2879} height={1308} className="w-full max-h-[800px] max-lg:hidden" />
            <Image src="/bn-mobile@2x-100.png" alt="bn-mobile@2x-100" width={1782} height={2619} className="w-full lg:hidden" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Banner