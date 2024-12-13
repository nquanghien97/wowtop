'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';

export default function Slide() {
  return (
    <div className="flex justify-center slide-review">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 50,
          depth: 0,
          modifier: 1,
          slideShadows: true,
        }}
        initialSlide={1}
        modules={[EffectCoverflow]}
      >
        <SwiperSlide className="!w-full md:!w-1/2">
          <Image src="/review_1.png" alt="review_1" width={512} height={512} className="w-full hover:scale-110 duration-300 rounded-xl" />
        </SwiperSlide>
        <SwiperSlide className="!w-full md:!w-1/2">
          <Image src="/review_2.jpg" alt="review_2" width={512} height={512} className="w-full hover:scale-110 duration-300 rounded-xl" />
        </SwiperSlide>
        <SwiperSlide className="!w-full md:!w-1/2">
          <Image src="/review_3.jpg" alt="review_3" width={512} height={512} className="w-full hover:scale-110 duration-300 rounded-xl" />
        </SwiperSlide>
        <SwiperSlide className="!w-full md:!w-1/2">
          <Image src="/review_1.png" alt="review_1" width={512} height={512} className="w-full hover:scale-110 duration-300 rounded-xl" />
        </SwiperSlide>
        <SwiperSlide className="!w-full md:!w-1/2">
          <Image src="/review_2.jpg" alt="review_2" width={512} height={512} className="w-full hover:scale-110 duration-300 rounded-xl" />
        </SwiperSlide>
        <SwiperSlide className="!w-full md:!w-1/2">
          <Image src="/review_3.jpg" alt="review_3" width={512} height={512} className="w-full hover:scale-110 duration-300 rounded-xl" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
