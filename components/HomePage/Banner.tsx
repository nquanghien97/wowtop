'use client'

import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Link from 'next/link';

function Banner() {

  return (
    <section className="m-auto mt-[-1px] w-full">
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          {/* desktop */}
          <Image src="/bn-mobile@2x-100.png" alt="bn-mobile@2x-100" width={1920} height={400} className="w-full h-full lg:hidden" />
          {/* mobile */}
          <div className="relative max-lg:hidden">
            <div className="px-[10%] m-auto absolute top-1/2 -translate-y-1/2">
              <div className=" flex justify-between items-center">
                <div className="w-1/2">
                  <p className="bg-text-blue uppercase font-bold text-xs md:text-5xl lg:mb-4 py-2 lg:!leading-[64px]">
                    Giúp tăng chiều cao từ cấp độ nguyên bào
                  </p>
                  <Link href="/" className="header-bg px-6 py-2 text-xs md:text-2xl rounded-full uppercase text-white">
                    Tìm hiểu thêm
                  </Link>
                </div>
              </div>
            </div>
            <Image src="/bg-banner.png" alt="bg-banner" width={1920} height={1080} className="w-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/DANCE-mobile.png" alt="DANCE-mobile" width={1920} height={400} className="w-full h-full lg:hidden" />
          <Image src="/bner.png" alt="bner" width={1920} height={400} className="w-full h-full max-lg:hidden" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Banner