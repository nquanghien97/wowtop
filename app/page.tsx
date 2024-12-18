import FormOrder from '@/components/HomePage/FormOrder';
import Image from 'next/image'
import Link from 'next/link';
import Experience from '@/components/HomePage/Experience';
import Banner from '@/components/HomePage/Banner';
import Popup from '@/components/HomePage/Popup';

export default async function Home() {
  const res_ip = await fetch('https://api.ipify.org?format=json')
  const ip = await res_ip.json()

  return (
    <main>
      <Popup />
      <section className="relative max-md:hidden">
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
      </section>
      <section className="md:hidden">
        <Banner />
      </section>
      {/* <Banner /> */}
      <section className="lg:mb-16">
        <div className="max-w-6xl m-auto md:px-4">
          <div className="mb-4">
            <h2 className="text-3xl md:text-5xl bg-text py-4 font-bold uppercase text-center">Những sai lầm trong tăng chiều cao</h2>
          </div>
          <div className="p-3 bg-[#f6f0de] border-2 border-[#fcf2d9] rounded-2xl flex flex-wrap justify-center relative">
            <Image src="/PT.webp" alt="" width={175} height={175} className="absolute bottom-[-10%] left-[-10%] max-md:hidden" />
            <div className="w-full md:w-1/3 p-4">
              <div className="flex justify-center items-center mb-4">
                <Image src="/h4.png" alt="h4" width={136} height={136} />
              </div>
              <div>
                <h4 className="text-[#002A9E] font-semibold text-center text-xl mb-4">Chỉ quan tâm cao về lượng</h4>
                <p className="text-[#002A9E]">
                  Chiều cao về centimet rất quan trọng, nhưng nếu Chất lượng xương không được đảm bảo, trẻ sẽ dễ bị loãng xương và các bệnh về xương khác. Wowtop giúp cao hơn từ nguyên bào xương, cải thiện chiều cao cả về lượng và chất.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="flex justify-center items-center mb-4">
                <Image src="/h5.png" alt="h5" width={136} height={136} />
              </div>
              <div>
                <h4 className="text-[#002A9E] font-semibold text-center text-xl mb-4">Canxi, Khoáng chất là đủ</h4>
                <p className="text-[#002A9E]">
                  Chiều cao do khung xương quyết định. Canxi & khoáng chất chỉ là nguyên liệu cho xương hình thành. Cần có CBP, CPP thúc đẩy nguyên bào xương hoạt động, thu hút và hấp thụ tốt Canxi & khoáng chất thì khung xương mới dài hơn, chắc khỏe hơn.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="flex justify-center items-center mb-4">
                <Image src="/h1.png" alt="h1" width={136} height={136} />
              </div>
              <div>
                <h4 className="text-[#002A9E] font-semibold text-center text-xl mb-4">Uống sữa là đủ để cao</h4>
                <p className="text-[#002A9E]">
                  Sữa là giải pháp dinh dưỡng tối ưu. Tuy nhiên vẫn cần kết hợp luyện tập & sinh hoạt để tăng chiều cao. Wowtop có đội ngũ Healthcoach đồng hành cùng con từ chế độ dinh dưỡng tới vận động để con đạt chiều cao tối đa.
                </p>
              </div>
            </div>
            <div className="w-full md:w-2/5 p-4">
              <div className="flex justify-center items-center mb-4">
                <Image src="/h3.png" alt="h3" width={136} height={136} />
              </div>
              <div>
                <h4 className="text-[#002A9E] font-semibold text-center text-xl mb-4">Tin rằng GEN quyết định chiều cao</h4>
                <p className="text-[#002A9E]">
                  GEN chỉ quyết định 23% Dinh dưỡng, luyện tập và chế độ sinh hoạt mới thực sự giúp con cao vượt trội.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="flex justify-center items-center mb-4">
                <Image src="/h2.png" alt="h2" width={136} height={136} />
              </div>
              <div>
                <h4 className="text-[#002A9E] font-semibold text-center text-xl mb-4">Bỏ qua giai đoạn vàng</h4>
                <p className="text-[#002A9E]">
                  Giai đoạn 0 – 5 tuổi và giai đoạn trước dậy thì là các mốc tăng chiều cao quan trọng ở trẻ, cần được đặc biệt lưu ý và bổ sung dinh dưỡng tối đa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                <Image src="/chung-nhan-bg.webp" alt="chung-nhan-bg" width={543} height={357} className="absolute w-full" />
                <div className="flex flex-col items-center relative z-20 p-8">
                  <div className="flex justify-center items-center gap-2">
                    <Image src="/chung-nhan-1.webp" alt='chung-nhan-1' width={276} height={276} className="w-1/6" />
                    <p className="text-[#002A9E] font-bold text-xl">Non-GMO: Chứng nhận nguồn nguyên liệu không biến đổi Gen</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Image src="/chung-nhan-2.webp" alt='chung-nhan-2' width={276} height={276} className="w-1/6" />
                    <p className="text-[#002A9E] font-bold text-xl">GRASS FED: Chứng nhận 100% Bò ăn cỏ tự nhiên</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Image src="/chung-nhan-3.webp" alt='chung-nhan-3' width={276} height={276} className="w-1/6" />
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
      <section className="bg-[url('/dong-co.png')] bg-[length:100%_100%] relative lg:hidden py-8 z-[30] rounded-xl">
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
          
          <div className="flex justify-center w-1/2 m-auto mb-9">
            <Image src="/dong-co-d-2.webp" alt="dong-co-d-2" width={500} height={400} className="w-full" />
          </div>
        </div>
      </section>
      <section className="lg:pb-[40%] pb-[80%] bg-[length:100%_100%] pt-[120px] lg:pt-40 relative z-20 lg:top-[-150px] top-[-80px] mb-8">
        <Image src="/nha-may.webp" width={2400} height={1800} alt='nhà máy' className="absolute inset-0 h-full w-full" />
        <div className="px-4 relative z-10">
          <div className="bg-[url('/asset_10.png')] bg-[length:100%_100%] text-center py-4">
            <h2 className="uppercase md:text-4xl text-[#002A9E] font-bold pb-1">Nhà máy sản xuất WOWTOP tại NewZealand</h2>
            <p className="md:text-4xl text-[#002A9E] uppercase">Dẫn đầu về công nghệ sản xuất sữa</p>
          </div>
        </div>
      </section>
      <div className="lg:mt-[-120px] mt-[-80px]">
        <FormOrder ip={ip.ip} />
        <Experience />
      </div>
    </main>
  )
}
