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

const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://wowtop.vn'),
  title: 'Wowtop',
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
    type: 'website'
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
        <ToastContainer />
      </body>
    </html>
  )
}
