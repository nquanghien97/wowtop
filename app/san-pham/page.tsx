import Feedback from "@/components/HomePage/Feedback"
import FormOrder from "@/components/HomePage/FormOrder"
import { Metadata } from "next"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import Question from "./Question"
import CongThuc from "@/components/CongThuc"
const Experience = dynamic(() => import('@/components/HomePage/Experience'), { ssr: false })

const data = [
  {
    id: 1,
    muc: 'Năng lượng',
    don_vi: 'kJ',
    moi_khau_phan: '663',
    tren_100g: '1902',
    tren_100kJ: '100',
    is_bold: false
  },
  {
    id: 2,
    muc: 'Protein',
    don_vi: 'g',
    moi_khau_phan: '4.9',
    tren_100g: '14.1',
    tren_100kJ: '0.7',
    is_bold: false
  },
  {
    id: 3,
    muc: 'Casein',
    don_vi: 'g',
    moi_khau_phan: '4.8',
    tren_100g: '14.0',
    tren_100kJ: '0.7',
    is_bold: false
  },
  {
    id: 4,
    muc: 'Chất béo',
    don_vi: 'g',
    moi_khau_phan: '6.0',
    tren_100g: '17.3',
    tren_100kJ: '0.9',
    is_bold: false
  },
  {
    id: 5,
    muc: 'Axit linoleic',
    don_vi: 'mg',
    moi_khau_phan: '882',
    tren_100g: '2551',
    tren_100kJ: '134',
    is_bold: false
  },
  {
    id: 6,
    muc: 'Axit α-linolenic',
    don_vi: 'mg',
    moi_khau_phan: '78.2',
    tren_100g: '224',
    tren_100kJ: '11.8',
    is_bold: false
  },
  {
    id: 7,
    muc: 'OPO',
    don_vi: 'mg',
    moi_khau_phan: '810',
    tren_100g: '2337',
    tren_100kJ: '122',
    is_bold: true
  },
  {
    id: 8,
    muc: 'Carbohydrat',
    don_vi: 'g',
    moi_khau_phan: '20.5',
    tren_100g: '58.0',
    tren_100kJ: '3.0',
    is_bold: false
  },
  {
    id: 9,
    muc: 'Đường tổng',
    don_vi: 'g',
    moi_khau_phan: '20.2',
    tren_100g: '58.0',
    tren_100kJ: '3.0',
    is_bold: false
  },
  {
    id: 10,
    muc: 'Chất xơ',
    don_vi: 'mg',
    moi_khau_phan: '337',
    tren_100g: '2400',
    tren_100kJ: '126',
    is_bold: false
  },
  {
    id: 11,
    muc: 'FOS',
    don_vi: 'mg',
    moi_khau_phan: '458',
    tren_100g: '3154',
    tren_100kJ: '169',
    is_bold: false
  },
  {
    id: 12,
    muc: 'GOS',
    don_vi: 'mg',
    moi_khau_phan: '379',
    tren_100g: '2400',
    tren_100kJ: '126',
    is_bold: false
  },
  {
    id: 13,
    muc: 'Vitamin A',
    don_vi: 'μg RE',
    moi_khau_phan: '144',
    tren_100g: '412',
    tren_100kJ: '21.7',
    is_bold: false
  },
  {
    id: 14,
    muc: 'Vitamin D3',
    don_vi: 'μg',
    moi_khau_phan: '2.0',
    tren_100g: '5.7',
    tren_100kJ: '0.30',
    is_bold: true
  },
  {
    id: 15,
    muc: 'Vitamin E',
    don_vi: 'mg α-TE',
    moi_khau_phan: '3.1',
    tren_100g: '9.0',
    tren_100kJ: '0.47',
    is_bold: false
  },
  {
    id: 16,
    muc: 'Vitamin K1',
    don_vi: 'μg',
    moi_khau_phan: '10.0',
    tren_100g: '28.7',
    tren_100kJ: '1.5',
    is_bold: true
  },
  {
    id: 17,
    muc: 'Vitamin B1',
    don_vi: 'μg',
    moi_khau_phan: '153',
    tren_100g: '438',
    tren_100kJ: '23',
    is_bold: false
  },
  {
    id: 18,
    muc: 'Vitamin B2',
    don_vi: 'μg',
    moi_khau_phan: '368',
    tren_100g: '1055',
    tren_100kJ: '55.5',
    is_bold: false
  },
  {
    id: 19,
    muc: 'Vitamin B6',
    don_vi: 'μg',
    moi_khau_phan: '106',
    tren_100g: '303',
    tren_100kJ: '15.9',
    is_bold: false
  },
  {
    id: 20,
    muc: 'Vitamin B12',
    don_vi: 'μg',
    moi_khau_phan: '1.0',
    tren_100g: '2.8',
    tren_100kJ: '0.15',
    is_bold: false
  },
  {
    id: 21,
    muc: 'Vitamin C',
    don_vi: 'mg',
    moi_khau_phan: '44.8',
    tren_100g: '129',
    tren_100kJ: '6.8',
    is_bold: false
  },
  {
    id: 22,
    muc: 'Nicotinamide',
    don_vi: 'μg',
    moi_khau_phan: '1237',
    tren_100g: '3551',
    tren_100kJ: '187',
    is_bold: false
  },
  {
    id: 23,
    muc: 'Axit pantothenic',
    don_vi: 'μg',
    moi_khau_phan: '905',
    tren_100g: '2598',
    tren_100kJ: '137',
    is_bold: false
  },
  {
    id: 24,
    muc: 'Axit folic',
    don_vi: 'μg',
    moi_khau_phan: '15.4',
    tren_100g: '44.2',
    tren_100kJ: '2.3',
    is_bold: false
  },
  {
    id: 25,
    muc: 'Biotin',
    don_vi: 'μg',
    moi_khau_phan: '8.7',
    tren_100g: '25.1',
    tren_100kJ: '1.3',
    is_bold: false
  },
  {
    id: 26,
    muc: 'Natri',
    don_vi: 'mg',
    moi_khau_phan: '55.2',
    tren_100g: '158',
    tren_100kJ: '8.3',
    is_bold: false
  },
  {
    id: 27,
    muc: 'Phốt pho',
    don_vi: 'mg',
    moi_khau_phan: '284',
    tren_100g: '814',
    tren_100kJ: '42.8',
    is_bold: false
  },
  {
    id: 28,
    muc: 'Kali',
    don_vi: 'mg',
    moi_khau_phan: '177',
    tren_100g: '508',
    tren_100kJ: '26.7',
    is_bold: false
  },
  {
    id: 29,
    muc: 'Magie',
    don_vi: 'mg',
    moi_khau_phan: '14.6',
    tren_100g: '41.9',
    tren_100kJ: '2.2',
    is_bold: false
  },
  {
    id: 30,
    muc: 'Calci',
    don_vi: 'mg',
    moi_khau_phan: '514',
    tren_100g: '1475',
    tren_100kJ: '77.5',
    is_bold: true
  },
  {
    id: 31,
    muc: 'Ca:P',
    don_vi: '',
    moi_khau_phan: '1.8:1',
    tren_100g: '1.8:1',
    tren_100kJ: '1.8:1',
    is_bold: true
  },
  {
    id: 32,
    muc: 'Sắt',
    don_vi: 'mg',
    moi_khau_phan: '1.8',
    tren_100g: '5.3',
    tren_100kJ: '0.28',
    is_bold: false
  },
  {
    id: 33,
    muc: 'Kẽm',
    don_vi: 'mg',
    moi_khau_phan: '1.0',
    tren_100g: '2.9',
    tren_100kJ: '0.15',
    is_bold: false
  },
  {
    id: 34,
    muc: 'Iốt',
    don_vi: 'μg',
    moi_khau_phan: '28.1',
    tren_100g: '80.7',
    tren_100kJ: '4.2',
    is_bold: false
  },
  {
    id: 35,
    muc: 'Selen',
    don_vi: 'μg',
    moi_khau_phan: '4.8',
    tren_100g: '13.7',
    tren_100kJ: '0.7',
    is_bold: false
  },
  {
    id: 36,
    muc: 'Đồng',
    don_vi: 'μg',
    moi_khau_phan: '77.1',
    tren_100g: '221',
    tren_100kJ: '11.6',
    is_bold: false
  },
  {
    id: 37,
    muc: 'Clorua',
    don_vi: 'mg',
    moi_khau_phan: '125',
    tren_100g: '359',
    tren_100kJ: '18.9',
    is_bold: false
  },
  {
    id: 38,
    muc: 'Mangan',
    don_vi: 'μg',
    moi_khau_phan: '21.9',
    tren_100g: '62.8',
    tren_100kJ: '3.3',
    is_bold: false
  },
  {
    id: 39,
    muc: 'Lactoferrin',
    don_vi: 'mg',
    moi_khau_phan: '36.4',
    tren_100g: '104',
    tren_100kJ: '5.5',
    is_bold: true
  },
  {
    id: 40,
    muc: 'Choline',
    don_vi: 'mg',
    moi_khau_phan: '37.0',
    tren_100g: '106',
    tren_100kJ: '5.6',
    is_bold: false
  },
  {
    id: 41,
    muc: 'DHA',
    don_vi: 'mg',
    moi_khau_phan: '28.1',
    tren_100g: '80.7',
    tren_100kJ: '4.2',
    is_bold: false
  },
  {
    id: 42,
    muc: 'ARA',
    don_vi: 'mg',
    moi_khau_phan: '28.1',
    tren_100g: '80.7',
    tren_100kJ: '4.2',
    is_bold: false
  },
  {
    id: 43,
    muc: 'Immunoglobulin G',
    don_vi: 'mg',
    moi_khau_phan: '7.5',
    tren_100g: '21.5',
    tren_100kJ: '1.1',
    is_bold: true
  },
];

export const metadata: Metadata = {
  metadataBase: new URL('https://wowtop.com.vn'),
  title: 'Oz Farm Wowtop 800g',
  description: 'Nếu được chăm sóc tốt, trẻ có thể cao lên đến 8-12cm mỗi năm. OZ FARM WOWTOP chứa hệ dưỡng chất giàu thành phần quý hiếm với hàm lượng cao như CBP ...',
  keywords: 'Oz Farm Wowtop',
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    locale: 'vi_VN',
    title: 'Wowtop',
    url: 'https://wowtop.com.vn/san-pham',
    siteName: 'Wowtop',
    type: 'website',
    images: [
      {
        url: 'https://wowtop.com.vn/artboard-13.png',
        width: 380,
        height: 210,
        alt: 'Wowtop thumbnail',
      },
    ],
  }
}

async function Product() {
  const res_ip = await fetch('https://api.ipify.org?format=json')
  const ip = await res_ip.json()

  return (
    <main className="bg-custom-yellow">
      <section className="bg-[url('/bgr-sua.webp')] bg-cover bg-center md:bg-[length:100%_100%] mb-8">
        <div className="max-w-6xl m-auto px-4">
          <div className="flex pb-[100px] flex-col md:flex-row">
            <div className="md:w-2/5 flex items-center">
              <Image src="/artboard-13.png" alt="banner-hop-sua" width={600} height={800} />
            </div>
            <div className="md:w-3/5">
              <div className="md:h-[565px] md:overflow-y-scroll md:px-8 py-8">
                <Image src="/logo-ngang.png" alt="logo2" width={500} height={132} />
                {/* <div className="mb-4">
                  <h2 className="text-[#002A9E] font-bold text-3xl">CAO TỪ CẤP NGUYÊN BÀO XƯƠNG</h2>
                </div> */}
                <p className="text-[#845618] text-xl mb-4">Sữa bột 700G</p>
                <p className="text-justify">WOWTOP là thực phẩm dinh dưỡng công thức dành cho trẻ em từ 1 tuổi trở lên. Sản phẩm chứa Calci, Đạm, Sữa non (CBP), Casein Phosphopeptide (CPP), DHA từ tảo. ARA, 1,3-Dioleoy1-2-Palmitoy Tri-glyceride (OPO), Lactoferrin, Immunoglobulin G (IgG), và hơn 30 loại vitamin, khoáng chất và dưỡng chất thiết yếu cho sự phát triển thể chất ở trẻ. Sử dụng WowTop không chỉ giúp trẻ tăng chiều cao lành mạnh mà còn kích thích sự phát triển ở cấp nguyên bào Xương từ sâu bên trong, giúp tăng khả năng hấp thụ canxi, cho xương dài hơn và chắc khỏe hơn. Cùng WowTop tăng cường chiều cao cho trẻ không chỉ ở lượng mà còn ở chất. Tiêu chuẩn và cam kết của sản phẩm</p>
                <Image src="/cn.png" alt="cn" width={496} height={66} />
                <ul className="mt-8 font-semibold">
                  <li className="text-[#D9A834] flex gap-2 items-center mb-2">
                    <Image src="/tich2.png" alt="tich" width={20} height={10} />
                    <p>NON - GMO VERIFIED: Chứng nhận nguồn sữa không biến đổi Gen</p>
                  </li>
                  <li className="text-[#D9A834] flex gap-2 items-center mb-2">
                    <Image src="/tich2.png" alt="tich" width={20} height={10} />
                    <p>ALL NATURAL: 100% nguyên liệu tự nhiên</p>
                  </li>
                  <li className="text-[#D9A834] flex gap-2 items-center mb-2">
                    <Image src="/tich2.png" alt="tich" width={20} height={10} />
                    <p>GRASS FED: Chứng nhận 100% Bò ăn cỏ tự nhiên</p>
                  </li>
                  <li className="text-[#D9A834] flex gap-2 items-center mb-2">
                    <Image src="/tich2.png" alt="tich" width={20} height={10} />
                    <p>NEW ZEALAND MADE: Nhập khẩu nguyên lon từ New Zealand</p>
                  </li>
                  <li className="text-[#D9A834] flex gap-2 items-center mb-2">
                    <Image src="/tich2.png" alt="tich" width={20} height={10} />
                    <p>HACCP from NZ MPI: Chứng nhận An toàn vệ sinh thực phẩm từ Bộ Kế hoạch & Đầu tư New Zealand</p>
                  </li>
                  <li className="text-[#D9A834] flex gap-2 items-center mb-2">
                    <Image src="/tich2.png" alt="tich" width={20} height={10} />
                    <p>GMP: Chứng nhận đạt tiêu chuẩn sản xuất Châu Âu</p>
                  </li>
                </ul>
              </div>
              <div className="w-[220px] h-[60px] mt-4 ml-8">
                <Link href="/" className="bg-blue rounded-md w-full h-full flex items-center justify-center">
                  <span className="text-white text-3xl font-bold uppercase">
                    Mua ngay
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-custom-yellow mb-8">
        <div className="max-w-6xl m-auto px-4 pb-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 w-full flex flex-col justify-center max-md:mb-4">
              <div className="flex justify-center mb-4">
                <Image src="/artboard_14.png" alt="artboard_14" width={240} height={160} />
              </div>
              <div className="flex justify-evenly items-center">
                <Image src="/artboard_16.png" alt="artboard_16" width={100} height={100} />
                <Image src="/bfdhb.png" alt="bfdhb" width={100} height={64} className="h-full" />
                <Image src="/artboard_15.png" alt="artboard_15" width={100} height={100} />
                <Image src="/artboard_13.png" alt="artboard_13" width={100} height={100} />
              </div>
            </div>
            <div className="md:w-1/2 w-full bg-[url('/artboard_12.png')] bg-[length:100%_100%] px-4 py-8">
              <div>
                <h2 className="font-semibold text-4xl uppercase text-center mb-4">NON - GMO VERIFIED</h2>
                <p className="text-lg font-semibold">Một trong số công ty hiếm hoi ở New Zealand có đầy đủ chứng nhận về sữa công thức dành cho trẻ sơ sinh.WowTop chứa hệ dưỡng chất giàu thành phần quý hiếm với hàm lượng cao như CBP 125mg, Canxi 1200mg cùng 29 loại vitamin và khoáng chất thiết yếu cho sự phát triển thể chất ở trẻ. Sử dụng WowTop không chỉ giúptrẻ tăng chiều cao lành mạnh mà còn kích thích sự phát triển ở cấp nguyên bào Xương từ sâu bên trong,giúp tăng khả năng hấp thụ canxi, cho xương dài hơn và chắc khỏe hơn. Cùng WowTop tăng trưởng chiều caocho trẻ không chỉ ở lượng mà còn ở chất.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-8 bg-custom-yellow">
        <div className="max-w-4xl m-auto px-4">
          <div>
            <div className="flex flex-col items-center justify-center text-xl md:text-[40px] uppercase text-center mb-8">
              <div>
                <p className="bg-text bg-clip-text text-transparent font-bold md:py-4">CON VỤT CAO, XƯƠNG CHẮC KHỎE</p>
              </div>
              <div className="md:pt-4 pt-1">
                <span className="bg-text bg-clip-text text-transparent md:pt-4 pt-1 font-semibold">PHÁT TRIỂN TOÀN DIỆN</span>
              </div>
              <div>
                <p className="md:pt-8 pt-1 font-semibold">
                  <span className="bg-[#895501] bg-clip-text text-transparent">Nhờ công thức </span>
                  <span className="py-2 px-4 bg-blue rounded-md text-white">Vượt trội</span>
                </p>
              </div>
            </div>
            <div className="bg-[url('/con-cao-vut.png')] bg-[length:100%_100%] flex justify-center items-center">
              <div className="text-[#002A9E] font-bold text-center py-4 italic">
                <p className="py-1 text-xs md:text-lg">Các mẹ có biết, cao không chỉ về lượng mà còn về chất?</p>
                <p className="py-1 text-xs md:text-lg">Các mẹ có biết xương con đang khóc lóc mỗi ngày?</p>
                <p className="py-1 text-xs md:text-lg">Mẹ hãy tìm hiểu ngay <span className="text-[#002A9E]">cách tăng chiều cao từ cấp độ nguyên bào</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-4">
        <div className="md:max-w-4xl w-full m-auto px-4 relative">
          <div className="flex justify-center relative w-full">
            <Image src="/bgr-giot.webp" alt="bgr-giot" width={896} height={1000} />
            <div className="uppercase absolute top-4 md:top-12 left-[16%] md:text-2xl text-xs font-semibold text-[#84571B]">
              <span className="text-[#002A9E]"><strong>Có thành phần CBP</strong></span>
              <br />
              <span>giúp kích thích</span>
              <br />
              <span><strong>quá trình tạo xương</strong></span>
              <br />
              <span>từ cấp độ nguyên bào</span>
            </div>
            <div className="uppercase absolute top-[25%] left-[10%] text-2xl md:text-[48px] font-bold py-4">
              <span className="text-[#002A9E]">CBP ≈ 1/50 tỷ Nano</span>
            </div>
            <div className="uppercase absolute top-[44%] right-[16%] md:text-2xl font-semibold">
              <span className="bg-text"><strong>10 lít sữa non của bò</strong></span>
              <br />
              <span className="bg-text">tiết ra trong 24h đầu</span>
              <br />
              <span className="bg-text">chiết xuất ra được</span>
              <br />
              <p className="md:text-[48px] text-4xl font-bold text-center mt-4 py-2 text-[#002A9E]">4g CBP</p>
            </div>
          </div>
          <div className="absolute bottom-[-20%] right-0 rotate-[-90deg] max-lg:hidden">
            <Image src="/PT.webp" alt="pt" width={400} height={400} />
          </div>
        </div>
      </section>
      <section className="">
        <div className="max-w-4xl m-auto px-4">
          <div className="mb-8">
            <p className="text-[#84571B] font-bold text-2xl md:text-5xl mb-2 uppercase">Tác dụng của <span className="text-5xl">CBP</span> với</p>
            <div className="relative">
              <Image src="/bgr-tp-2.png" alt="bgr-tp-2" width={640} height={60} />
              <span className="absolute md:top-4 top-4 md:left-12 left-20 text-[#84571B] font-bold text-2xl md:text-5xl uppercase">Nguyên bào xương</span>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4 md:gap-8">
              <Image src="/artboard16.png" alt="a2" width={140} height={184} className="w-20 md:w-[140px]" />
              <div>
                <div className="flex mb-4">
                  <div className="uppercase border-b-[1px] border-[#84571B] text-[#002A9E] font-semibold text-2xl md:text-3xl py-2">Nguyên bào xương</div>
                </div>
                <p className="text-[#84571B] text-justify">Là những công nhân đặc biệt với nhiệm vụ xây dựng và sửa chữa xương. Trong quá trình tăng chiều cao, nguyên bào xương sẽ làm việc chăm chỉ để tạo ra các phần xương mới, nối dài xương hơn, giống như cách công nhân xây lên những tòa nhà cao tầng.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:gap-8">
              <Image src="/artboard14.png" alt="a3" width={140} height={184} className="w-20 md:w-[140px]" />
              <div>
                <div className="flex mb-4">
                  <div className="uppercase border-b-[1px] border-[#84571B] text-[#002A9E] font-semibold text-2xl md:text-3xl py-2">Cao về lượng</div>
                </div>
                <p className="text-justify text-[#84571B]">Nếu chỉ đo xem con cao lên bao nhiêu centimet giống như xây nhà cao tầng mà chỉ quan tâm xem xây được bao nhiêu tầng vậy. Chiều cao về centimet rất quan trọng, nhưng nếu xương không đủ chất lượng, nguyên bào xương thiếu hụt, con sẽ dễ bị loãng xương và các bệnh về xương khác</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:gap-8">
              <Image src="/artboard15.png" alt="a4" width={140} height={184} className="w-20 md:w-[140px]" />
              <div>
                <div className="flex mb-4">
                  <div className="uppercase border-b-[1px] border-[#84571B] text-[#002A9E] font-semibold text-2xl md:text-3xl py-2">Cao về chất</div>
                </div>
                <p className="text-justify text-[#84571B]">Quan tâm tới chất lượng xương (mật độ nguyên bào xương) có đủ hay không cũng giống như việc kết cấu của 1 tòa nhà có vững chắc hay không. Nếu mật độ nguyên bào xương quá ít, chúng sẽ không thể liên kết với nhau tạo thành 1 lưới xương vững chắc, xương sẽ rất dễ tổn thương, giống như tòa nhà cao tầng không đủ chắc chắn, có thể sụp đổ bất kì lúc nào vậy. ngược lại nếu chất lượng xương tốt (đủ số lượng nguyên bào xương) thì con có thể thoải mái vận động vui chơi với khung xương chắc khỏe.</p>
              </div>
            </div>
          </div>
          <div className="bg-[url('/artboard12.png')] bg-[length:100%_100%] p-8 md:px-[100px] rounded-2xl">
            <p className="font-bold text-center py-8 text-[#002A9E]">Tại sao nói CBP là bữa tiệc thịnh soạn dành cho nguyên bào xương Khi hình thành nguyên bào xương, cần tiêu tổn rất nhiều dinh dưỡng và axit amin. CBP cung cấp dồi dào các dưỡng chất này, cho nguyên bào xương &quot;ăn ngon&quot;, &quot;ăn no&quot;, từ đó nó sẽ sinh ra 1 mạng lưới xương vững chắc</p>
          </div>
        </div>
      </section>
      <section className="">
        <div className="max-w-4xl m-auto px-4">
          <div className="flex justify-center flex-col items-center mb-8">
            <h2 className="uppercase bg-text pt-4 text-6xl font-bold mb-8">3 bước</h2>
            <div className="bg-[url('/artboard_23.png')] bg-[length:100%_100%] w-full h-[72px]">
              <div className="flex justify-center flex-col items-center text-xl md:text-3xl uppercase bg-text-blue font-bold relative top-[-20px]">
                <p className="py-1">Tăng chiều cao</p>
                <p className="py-1">Tại nguyên bào xương</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <div className="mb-4 pb-2 border-b-[1px] border-[#edb000] flex items-center">
                <span className="text-[#002A9E] italic text-5xl mr-4">1</span>
                <span className="text-[#84571B]">Tạo ra chất nền của khung xương <strong>giúp xương dài ra</strong></span>
              </div>
              <div className="mb-4 pb-2 border-b-[1px] border-[#edb000] flex items-center">
                <span className="text-[#002A9E] italic text-5xl mr-4">2</span>
                <span className="text-[#84571B]">Phát sóng siêu tần thu hút <strong>canxi và 23 dưỡng chất</strong> cần thiết</span>
              </div>
              <div className="mb-4 pb-2 border-b-[1px] border-[#edb000] flex items-center">
                <span className="text-[#002A9E] italic text-5xl mr-4">3</span>
                <span className="text-[#84571B]">Khoá các dưỡng chất cần thiết cho <strong>tăng trưởng</strong> và <strong>giúp xương chắc khoẻ</strong></span>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image src="/artboard_19.webp" alt="artboard_19" width={250} height={250} />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[url('/artboard17.png')] bg-[length:100%_100%] h-[800px] max-w-4xl m-auto mb-8">
        <div className="flex justify-end relative max-md:flex-col">
          <p className="text-[#002A9E] font-black text-8xl">OPO</p>
          <p className="bg-[url('/bgr-tp-2.png')] bg-[length:100%_100%] text-[#84571B] text-6xl font-bold px-16 py-4">HỮU CƠ</p>
        </div>
        <div className="flex justify-end">
          <p className="w-2/3 text-xl text-[#002A9E]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam harum officia cupiditate doloremque fugit assumenda, sint necessitatibus reprehenderit.</p>
        </div>
      </section>
      <CongThuc />
      <section className="bg-[url('/dong-co.png')] bg-[length:100%_100%] bg-center h-[1062px] relative max-lg:hidden z-[30]">
        <div className="max-w-6xl m-auto px-4">
          <div className="flex justify-center py-4">
            <div className="bg-text2 flex px-12 py-4 text-4xl rounded-full">
              <h3 className="text-[#84571B] font-bold">Đăng kí dùng thử</h3>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl md:text-5xl text-[#002A9E] uppercase text-center !leading-tight">Nguồn sữa từ những chú bò <br /><span><strong>hạnh phúc nhất thế giới</strong></span></h2>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between w-full mb-8">
              <div className="m-auto w-2/3 flex justify-center">
                <div className="flex justify-between w-full mb-4">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center flex-1">
                      <Image src="/conbo_img_1.png" alt="conbo_img_1" width={100} height={45} className='' />
                    </div>
                    <div className="flex items-center flex-1">
                      <p className="text-white font-bold text-2xl text-center">NON-GMO</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center flex-1">
                      <Image src="/conbo_img_2.png" alt="conbo_img_2" width={100} height={45} className='' />
                    </div>
                    <div className="flex items-center flex-1">
                      <p className="text-white font-bold text-2xl text-center">NATURAL <br />INGREDIENTS</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center flex-1">
                      <Image src="/conbo_img_3.png" alt="conbo_img_3" width={100} height={45} className='' />
                    </div>
                    <div className="flex items-center flex-1">
                      <p className="text-white font-bold text-2xl text-center">GRASS FED</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center relative mb-24">
              <div className="relative w-1/2 flex justify-center items-center">
                <Image src="/chung-nhan-bg.png" alt="chung-nhan-bg" width={543} height={357} className="absolute w-full" />
                <div className="flex flex-col items-center relative z-20 p-8">
                  <div className="flex justify-center items-center gap-2">
                    <Image src="/chung-nhan-1.png" alt='chung-nhan-1' width={276} height={276} className="w-1/6" />
                    <p className="text-[#002A9E] font-bold text-xl">Non-GMO: Chứng nhận nguồn nguyên liệu không biến đổi Gen</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Image src="/chung-nhan-2.png" alt='chung-nhan-2' width={276} height={276} className="w-1/6" />
                    <p className="text-[#002A9E] font-bold text-xl">GRASS FED: Chứng nhận 100% Bò ăn cỏ tự nhiên</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Image src="/chung-nhan-3.png" alt='chung-nhan-3' width={276} height={276} className="w-1/6" />
                    <p className="text-[#002A9E] font-bold text-xl">NATURAL INGREDIENTS: Sử dụng nguồn nguyên liệu từ thiên nhiên</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0">
                <Image src="/dong-co-d-2.webp" alt="dong-co-d-2" width={467} height={382} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[url('/bg-co-m.png')] bg-center bg-[length:100%_100%] relative lg:hidden py-8 z-[30]">
        <div className="mb-8">
          <h2 className="text-[5vw] text-[#002A9E] uppercase text-center !leading-tight">Nguồn sữa từ những chú bò <br /><span><strong>hạnh phúc nhất thế giới</strong></span></h2>
        </div>
        <div className="flex justify-center w-full flex-col">
          <div className="mx-auto w-2/3">
            <div className="flex justify-between mb-4 w-full">
              <Image src="/conbo_img_1.png" alt="conbo_img_1" width={120} height={90} className="w-1/4" />
              <Image src="/conbo_img_2.png" alt="conbo_img_2" width={120} height={90} className="w-1/4" />
              <Image src="/conbo_img_3.png" alt="conbo_img_3" width={120} height={90} className="w-1/4" />
            </div>
          </div>
          <div className="flex flex-col items-center relative z-20 w-2/3 m-auto">
            <div className="flex justify-center items-center gap-2 w-full">
              <Image src="/chung-nhan-1.png" alt='chung-nhan-1' width={150} height={150} className="w-1/4" />
              <p className="text-[#002A9E] text-3xl font-bold flex-1">NON-GMO</p>
            </div>
            <div className="flex justify-center items-center gap-2 w-full">
              <Image src="/chung-nhan-2.png" alt='chung-nhan-2' width={150} height={150} className="w-1/4" />
              <p className="text-[#002A9E] text-3xl font-bold flex-1">GRASS FED</p>
            </div>
            <div className="flex justify-center items-center gap-2 w-full">
              <Image src="/chung-nhan-3.png" alt='chung-nhan-3' width={150} height={150} className="w-1/4" />
              <p className="text-[#002A9E] text-3xl font-bold flex-1">NATURAL INGREDIENTS</p>
            </div>
          </div>
          <div className="flex justify-center w-2/3 m-auto mb-9">
            <Image src="/dong-co-d-2.webp" alt="dong-co-d-2" width={500} height={400} className="w-full" />
          </div>
        </div>
      </section>
      <section className="lg:pb-[40%] pb-[80%] bg-[length:100%_100%] pt-[120px] lg:pt-40 relative z-20 top-[-150px] mb-8">
        <Image src="/nha-may.jpeg" width={2400} height={1800} alt='nhà máy' className="absolute inset-0 h-full w-full" />
        <div className="px-4 relative z-10">
          <div className="bg-[url('/asset_10.png')] bg-[length:100%_100%] text-center py-4">
            <h2 className="uppercase md:text-4xl text-[#002A9E] font-bold pb-1">Nhà máy sản xuất WOWTOP tại NewZealand</h2>
            <p className="md:text-4xl text-[#002A9E] uppercase">Dẫn đầu về công nghệ sản xuất sữa</p>
          </div>
        </div>
      </section>
      <section className="py-8 mt-[-120px]">
        <div className="max-w-4xl m-auto px-4 relative">
          <div className="flex absolute top-[-24%] md:top-[-40%] left-[50%] transform -translate-x-1/2">
            <h2 className="text-center text-[calc(1rem+0.9vw)] md:text-4xl mb-4 text-white uppercase font-bold bg-[url('/gfh.png')] px-16 py-12 bg-[length:100%_100%]">Thành phần</h2>
          </div>
          <div className="bg-white border border-[yellow] shadow-md rounded-2xl">
            <p className="p-8 pt-12 text-center text-[#065691] font-semibold">
              Sữa bột [sữa tách béo, bột whey khử khoáng (từ sữa), lactose (từ sữa), đạm whey cô đặc (từ sữa)]. Sản phẩm chứa Calci 1475 mg/100g, Đạm Sữa non chuẩn hóa (CBP) 125mg/100g, Casein Phosphopeptide (CPP) 571mg/100g, Bifidobaterium animalis Probiotic DHA từ tảo, ARA, 1,3-Dioleoyl-2-Palmitoyl Triglyceride (OPO), Lactoferrin, Immunoglobulin G (IgG), và hơn 30 loại vitamin khoáng chất và dưỡng chất thiết yếu.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <div className="max-w-6xl m-auto rounded-2xl p-1 shadow-2xl">
          <div className="bg-[#fefaee] rounded-t-2xl">
            <div className="bg-[#fefaee] text-center bg-text text-[calc(1.5rem+1vw)] py-8 md:text-5xl font-bold rounded-t-2xl uppercase">Thông tin dinh dưỡng</div>
          </div>
          <table className="w-full text-center rounded-b-2xl">
            <thead className="block">
              <tr className="bg-[#f4ddb1] w-full block">
                <th className="text-lg text-[#84571B] p-3 inline-block w-[30%]">Mục</th>
                <th className="text-lg text-[#84571B] p-3 inline-block w-[10%]">Đơn vị</th>
                <th className="text-lg text-[#84571B] p-3 inline-block w-1/5">TB trên mỗi khẩu phần</th>
                <th className="text-lg text-[#84571B] p-3 inline-block w-1/5">TB trên 100g</th>
                <th className="text-lg text-[#84571B] p-3 inline-block w-1/5">TB trên 100kJ</th>
              </tr>
            </thead>
            <tbody className="block w-full h-[400px] overflow-auto">
              {data.map(item => (
                <tr className={`text-[#065691] my-[1px] cursor-pointer ${item.is_bold ? 'bg-[#f7ecd0]' : 'hover:bg-[#f7ecd0]'} duration-300 h-[40px] w-full block`} key={item.id}>
                  <td className="text-[#84571B] py-2 w-[30%] inline-block">{item.muc}</td>
                  <td className="text-[#84571B] py-2 w-[10%] inline-block">{item.don_vi}</td>
                  <td className="text-[#84571B] py-2 w-1/5 inline-block">{item.moi_khau_phan}</td>
                  <td className="text-[#84571B] py-2 w-1/5 inline-block">{item.tren_100g}</td>
                  <td className="text-[#84571B] py-2 w-1/5 inline-block">{item.tren_100kJ}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* <section className="mb-8">
        <div className="max-w-4xl m-auto">
          <div className="px-4">
            <div className="bg-[url('/gfh_1.png')] bg-[length:100%_100%] h-[70px] flex justify-center items-center">
              <span className="text-white font-bold text-lg md:text-4xl uppercase">
                Hướng dẫn truy xuất nguồn gốc
              </span>
            </div>
            <div className="bg-[url('/artboard_27.png')] bg-[length:100%_100%] h-[800px] max-md:hidden relative">
              <div className="flex items-center gap-4 absolute top-20 left-[-4%]">
                <Image src="/anh_b1.png" alt="anh_b1" width={160} height={160} className="border-[#065691] border-[1px] rounded-full" />
                <p className="text-[#065691] font-semibold mt-[12%]">Lật lon sữa sẽ có 1 mã QR đặc biệt in dưới đáy lon</p>
              </div>
              <div className="flex items-center gap-4 absolute top-[40%] right-[-6%]">
                <p className="text-[#065691] font-semibold mt-[22%]">Lật lon sữa sẽ có 1 mã QR đặc biệt in dưới đáy lon</p>
                <Image src="/anh_b2.png" alt="anh_b2" width={160} height={160} className="border-[#065691] border-[1px] rounded-full" />
              </div>
              <div className="flex items-center gap-4 absolute bottom-[4%] left-[-4%]">
                <Image src="/anh_b3.png" alt="anh_b3" width={160} height={160} className="border-[#065691] border-[1px] rounded-full" />
                <p className="text-[#065691] font-semibold mt-[20%]">Lật lon sữa sẽ có 1 mã QR đặc biệt in dưới đáy lon</p>
              </div>
            </div>
            <div className="md:hidden flex flex-col gap-4 mt-8">
              <div className="flex gap-4">
                <Image src="/anh_b1.png" alt="anh_b1" width={75} height={75} className="border-[#065691] border-[1px] rounded-full" />
                <div className="flex flex-col">
                  <Image src="/b1.png" alt="buoc-1" width={100} height={45} />
                  <p className="text-[#065691] font-semibold">Lật lon sữa sẽ có 1 mã QR đặc biệt in dưới đáy lon</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Image src="/anh_b2.png" alt="anh_b2" width={75} height={75} className="border-[#065691] border-[1px] rounded-full" />
                <div className="flex flex-col">
                  <Image src="/b2.png" alt="buoc-2" width={100} height={45} />
                  <p className="text-[#065691] font-semibold">Lật lon sữa sẽ có 1 mã QR đặc biệt in dưới đáy lon</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Image src="/anh_b3.png" alt="anh_b3" width={75} height={75} className="border-[#065691] border-[1px] rounded-full" />
                <div className="flex flex-col">
                  <Image src="/b3.png" alt="buoc-3" width={100} height={45} />
                  <p className="text-[#065691] font-semibold">Lật lon sữa sẽ có 1 mã QR đặc biệt in dưới đáy lon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="mb-8">
        <div className="max-w-6xl m-auto">
          <div className="font-semibold text-center py-4 bg-[url('/hdgh.png')] bg-[length:100%_100%] w-full md:w-2/3 m-auto">
            <p className="text-[calc(1.5rem+1vw)] md:text-4xl font-bold uppercase bg-text">Hướng dẫn sử dụng</p>
          </div>
          <div className="max-md:px-4">
            <div className="flex max-md:flex-col">
              <div className="w-2/5 m-auto">
                <Image src="/be.webp" alt="be" width={305} height={468} className="w-full" />
              </div>
              <ul className="w-full md:w-3/5">
                <li className="flex gap-2">
                  <div className="flex w-[120px] relative">
                    <div className="">
                      <Image src="/gfh_2.png" alt="gfh_2" width={240} height={240} className="w-full" />
                    </div>
                    <div className="flex items-end w-[30px] absolute bottom-[-20%] right-[0%]">
                      <Image src="/mui_ten.png" alt="mui_ten" width={50} height={60} className="w-full" />
                    </div>
                  </div>
                  <p className="flex-1 ml-4 flex items-center">Rửa sạch tay trước khi pha sữa. Vệ sinh và tiệt trùng tất cả dụng cụ bằng cách đun sôi trong 5 phút hoặc sử dụng máy tiệt trùng đã được kiểm duyệt.</p>
                </li>
                <li className="flex gap-2">
                  <div className="flex w-[120px] relative">
                    <div className="">
                      <Image src="/gfh_3.png" alt="gfh_3" width={120} height={240} className="w-full" />
                    </div>
                    <div className="flex items-end w-[30px] absolute bottom-[-20%] right-[0%]">
                      <Image src="/mui_ten.png" alt="mui_ten" width={50} height={60} className="w-full" />
                    </div>
                  </div>
                  <p className="flex-1 ml-4 flex items-center">Đun sôi nước sạch và để nguội xuống 45&#8451; trước khi pha sữa.</p>
                </li>
                <li className="flex gap-2">
                  <div className="flex w-[120px] relative">
                    <div className="">
                      <Image src="/gfh_4.png" alt="gfh_4" width={240} height={240} className="w-full" />
                    </div>
                    <div className="flex items-end w-[30px] absolute bottom-[-20%] right-[0%]">
                      <Image src="/mui_ten.png" alt="mui_ten" width={50} height={60} className="w-full" />
                    </div>
                  </div>
                  <p className="flex-1 ml-4 flex items-center">Sau khi nước đã nguội, đo lượng nước cần thiết và đổ vào bình sữa đã được tiệt trùng.</p>
                </li>
                <li className="flex gap-2">
                  <div className="flex w-[120px] relative">
                    <div className="">
                      <Image src="/dh.png" alt="dh" width={240} height={240} className="w-full" />
                    </div>
                    <div className="flex items-end w-[30px] absolute bottom-[-20%] right-[0%]">
                      <Image src="/mui_ten.png" alt="mui_ten" width={50} height={60} className="w-full" />
                    </div>
                  </div>
                  <p className="flex-1 ml-4 flex items-center">Sử dụng muỗng kèm theo. Pha 1 muỗng gạt sữa bột với mỗi 25.7mL nước, theo hướng dẫn pha sữa. Lắc nhanh để sữa tan hoàn toàn. Mỗi bình nên được pha riêng.</p>
                </li>
                <li className="flex gap-2">
                  <div className="flex w-[120px] justify-center">
                    <Image src="/dghd.png" alt="dghd" width={240} height={240} className="w-[80px]" />
                  </div>
                  <p className="flex-1 ml-4 flex items-center">Kiểm tra nhiệt độ sữa trên cổ tay trước khi cho bé uống. Sử dụng ngay sau khi pha. Loại bỏ sữa thừa không dùng hết.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-16">
        <div className="bg-white rounded-xl max-w-5xl m-auto">
          <div className="relative p-8">
            <div className="w-[20%] absolute z-10 bottom-[-8%] left-[-10%]">
              <Image src="/pt1.webp" alt="pt1" width={200} height={200} className="" />
            </div>
            <div className="absolute z-10 top-[4%] right-[16%] w-[10%]">
              <Image src="/pt2.webp" alt="pt2" width={120} height={120} className="" />
            </div>
            <div className="w-[20%] absolute z-10 top-[0%] right-[4%] rotate-[-45deg]">
              <Image src="/pt2.webp" alt="pt2" width={200} height={200} className="" />
            </div>
            <h2 className="text-center bg-text text-2xl md:text-4xl uppercase font-bold mb-4">Hộp sản phẩm WOWTOP</h2>
            <div className="w-full mb-4 flex relative">
              <p className="absolute top-1/2 -translate-y-1/2 right-0 px-2 text-[#CC8200] font-bold md:text-3xl w-1/2">Công nghệ đóng gói tiên tiến và khóa thông minh</p>
              <Image src="/sp5.jpg" alt="sp5" width={960} height={659} className="rounded-xl" />
            </div>
            <div>
              <div className="flex gap-4 mb-2">
                <div className="w-full rounded-xl">
                  <Image src="/sp2.jpg" alt="sp2" width={400} height={274} className="rounded-xl w-full" />
                  <p className="text-[#CC8200] font-bold md:text-3xl text-center py-2">Nắp đậy kín sáng tạo</p>
                </div>
                <div className="w-full rounded-xl">
                  <Image src="/sp3.jpg" alt="sp3" width={400} height={274} className="rounded-xl w-full" />
                  <p className="text-[#CC8200] font-bold md:text-3xl text-center py-2">Thìa cải nắp độc đáo</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-full rounded-xl">
                  <Image src="/sp4.jpg" alt="sp4" width={400} height={274} className="rounded-xl w-full" />
                  <p className="text-[#CC8200] font-bold md:text-3xl text-center py-2">Thìa đo chính xác</p>
                </div>
                <div className="w-full rounded-xl">
                  <Image src="/sp1.jpg" alt="sp1" width={400} height={274} className="rounded-xl w-full" />
                  <p className="text-[#CC8200] font-bold md:text-3xl text-center py-2">Thuận tiện và an toàn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Question />
      <Feedback />
      <FormOrder ip={ip.ip} />
      <Experience />
    </main>
  )
}

export default Product