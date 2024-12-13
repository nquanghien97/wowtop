import type { Metadata } from 'next'
import './globals.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/components/Header'
import Footer from '@/components/Footer';
import { Montserrat } from 'next/font/google';
import Script from 'next/script';
import { ToastContainer } from 'react-toastify';
import { cookies } from 'next/headers'
import { getCurrentUser } from '@/services/user';

const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://wowtopmilk.com.vn'),
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
    url: 'https://wowtopmilk.com.vn/',
    siteName: 'Wowtop',
    type: 'website',
    images: [
      {
        url: 'https://wowtopmilk.com.vn/artboard-13.png',
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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies()
  const token = cookieStore.get('token')
  const res = await getCurrentUser(token?.value || '')

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Ads Conversion Tracking */}
        <Script
          id="google-ads-script"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16773984613"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16773984613');
          `}
        </Script>

        {/* Google Analytics 4 */}
        <Script
          id="google-analytics-script"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-CGBMSFBQYF"
        />
        <Script id="google-analytics-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CGBMSFBQYF');
          `}
        </Script>
      </head>
      <body className={montserrat.className}>
        <Header currentUser={res.data} token={token?.value} />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  )
}
