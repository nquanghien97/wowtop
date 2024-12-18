import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/components/Header'
import Footer from '@/components/Footer';
import { Montserrat } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import Link from 'next/link';
import PhoneIcon from '@/assets/icons/PhoneIcon';
import Image from 'next/image';

const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://wowtop.vn'),
  title: 'WowTop - Nhập Khẩu Nguyên Lon Từ New Zealand',
  description: 'WOWTOP là thực phẩm dinh dưỡng công thức dành cho trẻ em từ 1 tuổi trở lên',
  keywords: 'Wowtop',
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    locale: 'vi_VN',
    title: 'Wowtop',
    url: 'https://wowtop.vn/',
    siteName: 'Wowtop',
    type: 'website',
    images: [
      {
        url: 'https://wowtopm.vn/Artboard 13.webp',
        width: 380,
        height: 210,
        alt: 'Wowtop thumbnail',
      },
    ],
  },
  icons: {
    icon: [
      {
        rel: 'icon',
        url: '/favicon.ico'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
        <div className="fixed bottom-4 right-4 z-[100]">
        <Link href="tel:18001103" className="w-16 h-16 rounded-full bg-[white] flex justify-center items-center mb-4 shadow-custom">
          <PhoneIcon width={40} height={40} fill='#0054a5' />
        </Link>
        <Link href="https://zalo.me/0978488123" className="w-16 h-16 rounded-full bg-[white] flex justify-center items-center mb-4 shadow-custom" target='blank'>
          <Image src="/Icon_of_Zalo.png" alt="Icon_of_Zalo" width={40} height={40} />
        </Link>
        <Link href="https://www.facebook.com/wowtop.vn" className="w-16 h-16 rounded-full bg-[white] flex justify-center items-center shadow-custom" target='blank'>
          <Image src="/Facebook_Messenger_logo.png" alt="Facebook_Messenger_logo" width={40} height={40} />
        </Link>
      </div>
        <ToastContainer />
      </body>
    </html>
  )
}
