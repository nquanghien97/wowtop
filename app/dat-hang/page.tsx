import CongThuc from '@/components/CongThuc';
import LazyYouTubeEmbed from '@/components/YoutubeEmbed';
import Image from 'next/image';
import Link from 'next/link';
import Feedback from '@/components/HomePage/Feedback';
import FormOrder from '@/components/HomePage/FormOrder';
import Experience from '@/components/HomePage/Experience';
import Form from './Form';
import PhoneIcon from '@/assets/icons/PhoneIcon';
import CartIcon from '@/assets/icons/CartIcon';

async function page() {

  const res_ip = await fetch('https://api.ipify.org?format=json')
  const ip = await res_ip.json()

  return (
    <main>
      <div className="fixed bottom-4 right-4 z-[100]">
        <Link href="tel:0978488123" className="w-16 h-16 rounded-full bg-[#0054a5] flex justify-center items-center mb-4">
          <PhoneIcon width={40} height={40} fill='white' />
        </Link>
        <Link href="#order" className="w-16 h-16 rounded-full bg-[#0054a5] flex justify-center items-center">
          <CartIcon width={40} height={40} fill='white' />
        </Link>
      </div>
      <section className="relative">
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
      <CongThuc />
      <section className="mb-20 bg-[url('/pt-bg-yellow.webp')] bg-[length:100%_100%]">
        <div className="max-w-4xl m-auto">
          <div className="flex flex-col items-center justify-center text-2xl md:text-3xl uppercase mb-8 text-center">
            <div>
              <p className="bg-[#002A9E] bg-clip-text text-transparent pt-2">Tăng chiều cao từ cấp độ nguyên bào xương*</p>
            </div>
            <div>
              <p className="bg-[#002A9E] bg-clip-text font-bold text-transparent pt-2">Cao hơn không chỉ về lượng mà còn về chất</p>
            </div>
          </div>
          <div className="mt-4 mb-14 px-4">
            <div className="border-[1px] border-[#84571B] rounded-full px-2">
              <span className="relative top-[-15px] bg-[#e9fafb] text-xs md:text-base rounded-full text-[#84571B] font-semibold inline-block px-3 py-2 text-center">(*) Nguyên bào xương xây dựng cấu trúc ma trận xương, dẫn các hạt Canxi và khoáng chất vào xương, từ đó tác động trực tiếp tới chất lượng xương và chiều cao tối đa của cơ thể.</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex max-md:flex-col gap-10 px-4">
              <div className="md:w-1/2 bg-[url('/bg2f.png')] bg-cover bg-center rounded-2xl px-8 py-5 shadow-2xl">
                <Image src="/cbp.webp" alt="bg-sua" width={160} height={175} className="m-auto" />
                <span className="text-[#135689]">
                  <strong>CBP </strong>
                  trong Wowtop có kích thước phân tử siêu nhỏ, <strong>30 Kilodalton (≈ 1/50 tỷ hạt Nano),</strong> dễ dàng len lỏi và kích thích Nguyên bào xương hoạt động hiệu quả hơn*
                </span>
              </div>
              <div className="md:w-1/2 bg-10-lit bg-cover bg-center rounded-2xl px-8 py-5 shadow-2xl">
                <Image src="/10l.webp" alt="bg-sua" width={320} height={175} />
                <span className="text-[#135689]">
                  <strong>CBP</strong> là thành phần quý hiếm bậc nhất ngành sữa. <strong>10 lít sữa non</strong> từ Bò ăn cỏ tự nhiên chỉ chiết xuất được <strong>4 gam CBP</strong>.
                </span>
              </div>
            </div>
            <div className="px-4 mt-10 md:mt-16">
              <div className="bg-[url('/bg2f.png')] bg-cover bg-center rounded-2xl px-8 py-5 shadow-2xl relative">
                <Image src="/xuong.webp" alt="bg-sua" width={215} height={290} className="mx-auto md:hidden" />
                <span className="w-full md:w-3/5 inline-block text-[#135689]">
                  <strong>CBP</strong> thúc đẩy <strong>nguyên bào xương</strong> sản sinh và hoạt động hiệu quả, hình thành ma trận xương, kích thích xương dài ra nhanh hơn. Ngoài ra, <strong>CBP</strong> còn giúp tăng mật độ xương, hấp thu <strong>Canxi</strong> cùng các dưỡng chất quan trọng như Sắt, Kẽm... tốt hơn, từ đó <strong>tăng chiều cao cả về lượng & chất.</strong>
                </span>
                <Image src="/xuong.webp" alt="bg-sua" width={276} height={276} className="mx-auto max-md:hidden absolute top-[-40px] right-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-8 md:mb-20">
        <div className="max-w-6xl m-auto px-4">
          <div>
            <p className="bg-text text-center text-2xl md:text-3xl uppercase">Chuyên gia new zealand <br /><strong>chia sẻ nguyên lý tăng chiều cao</strong><br /> từ cấp độ nguyên bào</p>
          </div>
          <div className="mt-4 flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2 w-full">
              <LazyYouTubeEmbed videoId='6FVUCtcFDW4' />
            </div>
            <div className="md:w-1/2 w-full">
              <p className="text-[#84571B] text-justify">Xương dài ra do quá trình <strong>cốt hóa</strong> sụn tăng trưởng thành xương. Hầu hết quá trình này do <strong>nguyên bào xương</strong> chịu trách nhiệm. Nguyên bào xương tạo ra ma tr ận xương (Khung nền xương) đồng thời tăng cường chuyển hóa, lắng đọng Canxi, Phospho để lấp đầy và làm cứng ma trận xương, giúp xương dài ra ở 2 đầu. <strong>Wowtop</strong> vừa bổ sung <strong>Canxi, Phospho, D3, K2</strong> làm nguyên liệu cho quá trình tạo xương, vừa chứa thành phần <strong>CBP</strong> kích thích nguyên bào xương phát triển, nhờ đó thúc đẩy mạnh mẽ quá trình cốt hóa ở 2 đầu xương, giúp <strong>tăng chiều cao cả về lượng và về chất.</strong></p>
              <Image src="/asset_11.png" alt='asset_11' width={400} height={1} className="mx-auto my-4" />
              <p className="text-[#84571B] mb-4"><strong>Chuyên gia tăng chiều cao David - viện dinh dưỡng New Zealand.</strong></p>
              <Link href="#" className="text-[#84571B] underline">Tìm hiểu ngay</Link>
            </div>
          </div>
        </div>
      </section>
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
      <div className="mt-[-120px]">
        <Feedback />
        <FormOrder ip={ip.ip} />
        <Experience />
      </div>
      <Form ip={ip.ip} />
    </main>
  )
}

export default page