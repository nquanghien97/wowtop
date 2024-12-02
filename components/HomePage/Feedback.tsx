'use client';

import Image from 'next/image'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import StarIcon from '@/assets/icons/StarIcon';

const ListFeedbacks = [
  {
    id: 1,
    src: '/feedbacks/f1.jpg',
    path: 'https://www.tiktok.com/@giadinhmeommay/video/7385541212461174024',
    title: 'Gia đình mèo máy',
    content: 'Bé nhà mình trộm vía dạo này đi đâu cũng được mọi ng khen con cao lớn hơn, có da có thịt hơn, con ăn ngon ngủ ngon, ít khi ốm vặt mà mừng quá các mẹ ạ.'
  },
  {
    id: 2,
    src: '/feedbacks/f3.jpg',
    path: 'https://www.tiktok.com/@ngathuduong204/video/7385551513113906450?_r=1&_t=8nZxWoUVKZU',
    title: 'Chị Nga Thu Dương',
    content: 'Abbey nhà mình dùng sữa Wowtop được vài tháng thì thấy chiều cao tăng đáng kể luôn, ít bệnh vặt, ăn ngon, ngủ ngoan ..  nên phải chia sẻ cho các ba mẹ liềnnnn'
  },
  {
    id: 3,
    src: '/feedbacks/f4.jpg',
    path: '#',
    title: 'Chị Nguyễn Thị Phượng',
    content: 'Con gái chị đã cao thêm 4cm sau 6 tháng uống đều đặn mỗi ngày 2 ly Wowtop, ưng lắm'
  }
]
function Feedback() {
  return (
    <section>
      <div className="max-w-6xl m-auto px-4 mb-8">
        <div className="flex justify-center relative mb-8">
          <Image src="/bg4.png" alt="/bg4.png" width={758} height={125} />
          <div className="absolute top-1 md:top-3">
            <p className="text-center uppercase text-lg md:text-3xl text-white font-bold">Bé uống Kid&apos;s care plus</p>
          </div>
          <div className="absolute bottom-2 md:bottom-4">
            <p className="text-center uppercase text-xl md:text-3xl text-[#065691] font-bold">Con lớn vượt trội</p>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
          }}
        >
          {ListFeedbacks.map((feedback) => (
            <SwiperSlide key={feedback.id}>
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <Link href={feedback.path} target='_blank'>
                    <Image src={feedback.src} alt={feedback.title} width={360} height={400} className="rounded-2xl" />
                  </Link>
                </div>
                <div className="max-md:px-5">
                  <div className="flex text-justify mb-4 min-h-[100px]">
                    <p>{feedback.content}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-[#135689] font-bold text-center">{feedback.title}</p>
                  </div>
                  <div className="flex justify-center">
                    <StarIcon width={20} height={20} fill='#FFD37B' />
                    <StarIcon width={20} height={20} fill='#FFD37B' />
                    <StarIcon width={20} height={20} fill='#FFD37B' />
                    <StarIcon width={20} height={20} fill='#FFD37B' />
                    <StarIcon width={20} height={20} fill='#FFD37B' />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Feedback