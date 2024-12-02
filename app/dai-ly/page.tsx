import SliderStore from '@/components/SliderStore'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
  metadataBase: new URL('https://wowtop.vn'),
  title: 'Đại lý',
  description: '',
  keywords: 'Wowtop',
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    locale: 'vi_VN',
    title: 'Wowtop',
    url: 'https://wowtop.vn/dai-ly',
    siteName: 'Wowtop',
    type: 'website'
  }
}

function Store() {
  return (
    <main className="my-8">
      <div className="max-w-4xl m-auto">
        <div className="flex justify-center">
          <Image src="/asset_4.webp" alt="dang-ky-tro-thanh-dai-ly" width={1920} height={1080} className="m-auto" />
        </div>
        <div>
          <div className="relative mt-4">
            <Image src="/asset_2.png" alt="asset_2.png" width={890} height={110} />
            <p className="uppercase absolute top-[40%] left-[10%] right-0 text-2xl md:text-[40px] text-center font-bold text-[#065691]">Vinh danh đại lý quý II/2024</p>
          </div>
          <SliderStore />
        </div>
        <div className="mb-8">
          <div className="relative mt-4">
            <Image src="/asset_2.png" alt="asset_2.png" width={890} height={110} />
            <div className="uppercase absolute top-[30%] left-[10%] right-0 text-2xl md:text-[40px] text-center font-bold text-[#065691]">WOWTOP ĐỒNG HÀNH</div>
          </div>
          <h2 className="uppercase text-center text-2xl md:text-[40px] font-bold text-[#065691]">Cùng đại lý & nhà phân phối</h2>
          <p className="text-[#42D3CC] font-semibold text-center mt-4">Các quyền lợi dành riêng cho đại lý & nhà phân phối</p>
        </div>
        <div className="mb-8">
          <div className="flex flex-col md:flex-row max-md:mb-8">
            <div className="w-1/2 px-4 max-md:hidden">
              <Image src="/c1.webp" alt="c1.webp" width={469} height={313} />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center px-4">
              <h3 className="text-[#FFB000] font-semibold text-xl mb-4">Sản phẩm chất lượng và uy tín</h3>
              <p className="text-[#06568D] text-justify">Cung cấp sản phẩm sữa cao cấp, đạt tiêu chuẩn chất lượng từ Úc, đảm bảo an toàn và hiệu quả cho khách hàng.</p>
              <p className="text-[#06568D] text-justify">Được đảm bảo quyền phân phối sản phẩm chính hãng với nguồn gốc rõ ràng.</p>
            </div>
            <div className="md:hidden">
              <Image src="/c1.webp" alt="c1.webp" width={469} height={313} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row max-md:mb-4">
            <div className="md:w-1/2 flex flex-col justify-center px-4 max-md:mb-4">
              <h3 className="text-[#FFB000] font-semibold text-xl mb-4">Hỗ trợ marketing chuyên nghiệp</h3>
              <p className="text-[#06568D] text-justify">Đội ngũ marketing mạnh mẽ giúp xây dựng thương hiệu cá nhân, chạy quảng cáo tối ưu để thu hút khách hàng tiềm năng.</p>
              <p className="text-[#06568D] text-justify">Cung cấp tài liệu quảng cáo, hình ảnh, kịch bản video và hỗ trợ truyền thông xã hội để tăng cường sự hiện diện thương hiệu.</p>
              <p className="text-[#06568D] text-justify">Đồng hành và góp mặt trong các chiến dịch marketing toàn quốc để tăng độ nhận diện thương hiệu.</p>
              <p className="text-[#06568D] text-justify">Được đảm bảo quyền phân phối sản phẩm chính hãng với nguồn gốc rõ ràng.</p>
            </div>
            <div className="md:w-1/2 px-4">
              <Image src="/c2.webp" alt="c2.webp" width={469} height={375} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row max-md:mb-4">
            <div className="w-1/2 px-4 max-md:hidden">
              <Image src="/c3.webp" alt="c3.webp" width={469} height={312} />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center px-4">
              <h3 className="text-[#FFB000] font-semibold text-xl mb-4">Đào tạo chuyên sâu và liên tục</h3>
              <p className="text-[#06568D] text-justify">Tham gia các khóa đào tạo về kiến thức sản phẩm, kỹ năng bán hàng và chăm sóc khách hàng từ các chuyên gia dinh dưỡng đầu ngành với hơn 10 năm kinh nghiệm như Ths. Bs. An Thị Dung và Bs. Từ Quang.</p>
              <p className="text-[#06568D] text-justify">Được hỗ trợ trực tiếp từ đội ngũ chuyên gia của WOWTOP trong quá trình kinh doanh.</p>
            </div>
            <div className="md:hidden px-4">
              <Image src="/c3.webp" alt="c3.webp" width={469} height={312} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row max-md:mb-4">
            <div className="md:w-1/2 flex flex-col justify-center px-4 max-md:mb-4">
              <h3 className="text-[#FFB000] font-semibold text-xl mb-4">Chính sách giá và chiết khấu hấp dẫn:</h3>
              <p className="text-[#06568D] text-justify">Chính sách giá ưu đãi và chiết khấu hấp dẫn dành cho đại lý và nhà phân phối.</p>
              <p className="text-[#06568D] text-justify">Nhiều chính sách nhập hàng với số vốn nhỏ và vừa, giúp đối tác dễ dàng nhập hàng và quản lý vốn</p>
            </div>
            <div className="md:w-1/2 px-4">
              <Image src="/c4.webp" alt="c4.webp" width={469} height={313} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row max-md:mb-4">
            <div className="w-1/2 px-4 max-md:hidden">
              <Image src="/c5.webp" alt="c5.webp" width={469} height={313} />
            </div>
            <div className="flex flex-col justify-center md:w-1/2 px-4">
              <h3 className="text-[#FFB000] font-semibold text-xl mb-4">Hỗ trợ vận chuyển và logistics</h3>
              <p className="text-[#06568D] text-justify">Hỗ trợ vận chuyển hàng hóa nhanh chóng và đảm bảo tới kho của quý đối tác, giúp đối tác tiết kiệm chi phí và thời gian.</p>
              <p className="text-[#06568D] text-justify">Có kế hoạch về Lô Date hàng hóa rõ ràng và minh bạch với sự đồng thuận của 2 phía.</p>
            </div>
            <div className="px-4 md:hidden">
              <Image src="/c5.webp" alt="c5.webp" width={469} height={313} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row max-md:mb-4">
            <div className="md:w-1/2 flex flex-col justify-center px-4">
              <h3 className="text-[#FFB000] font-semibold text-xl mb-4">Thưởng doanh số và chương trình khuyến mãi</h3>
              <p className="text-[#06568D] text-justify">Chương trình thưởng doanh số hấp dẫn dành cho các đại lý và nhà phân phối đạt doanh số cao.</p>
              <p className="text-[#06568D] text-justify">Tham gia các chương trình khuyến mãi đặc biệt, giúp tăng doanh số và thu hút khách hàng</p>
            </div>
            <div className="md:w-1/2 px-4">
              <Image src="/c6.webp" alt="c6.webp" width={469} height={313} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row max-md:mb-4">
            <div className="w-1/2 px-4 max-md:hidden">
              <Image src="/c7.webp" alt="c7.webp" width={469} height={313} />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center px-4">
              <h3 className="text-[#FFB000] font-semibold text-xl mb-4">Hỗ trợ kỹ thuật và chăm sóc khách hàng</h3>
              <p className="text-[#06568D] text-justify">Đội ngũ hỗ trợ kỹ thuật và chăm sóc khách hàng chuyên nghiệp, sẵn sàng giải đáp mọi thắc mắc và hỗ trợ đối tác trong suốt quá trình kinh doanh.</p>
            </div>
            <div className="md:hidden px-4">
              <Image src="/c7.webp" alt="c7.webp" width={469} height={313} />
            </div>
          </div>
          <div className="mt-8 px-4">
            <p className="text-[#06568D] text-center">Với những quyền lợi hấp dẫn trên, WOWTOP tin rằng việc trở thành đại lý hoặc nhà phân phối của chúng tôi sẽ mang lại nhiều cơ hội phát triển và thành công. Hãy liên hệ ngay với chúng tôi để biết thêm chi tiết và bắt đầu hành trình hợp tác vững mạnh!</p>
          </div>
        </div>
        <div>
          <div className="relative mt-4">
            <Image src="/asset_2.png" alt="asset_2.png" width={890} height={110} />
            <p className="uppercase absolute top-[40%] left-[10%] right-0 text-2xl md:text-[40px] text-center font-bold text-[#065691]">LIÊN HỆ ĐỂ BIẾT THÊM CHI TIẾT</p>
          </div>
          <div className="md:ml-[10%] max-md:px-4">
            <div className="flex items-center my-4 gap-2">
              <div>
                <Image src="/z1.png" alt="z1.png" width={30} height={30} />
              </div>
              <div>
                <p className="text-[#06568D] font-bold">R4-B1, Royal City, 72A Nguyễn Trãi, Thanh Xuân, Hà Nội</p>
              </div>
            </div>
            <div className="flex items-center my-4 gap-2">
              <div>
                <Image src="/z2.png" alt="z2.png" width={30} height={45} />
              </div>
              <div>
                <p className="text-[#06568D] font-bold">Website: Kid&apos;s Care Plus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Store