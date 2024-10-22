import Banner from '@/components/HomePage/Banner'
import Certificate from '@/components/HomePage/Certificate'
import Feedback from '@/components/HomePage/Feedback';
import FormOrder from '@/components/HomePage/FormOrder';
import { getNews } from '@/services/news';
import Image from 'next/image'
import Link from 'next/link';
import { NewsEntity } from '@/entities/news';
import Experience from '@/components/HomePage/Experience';

export default async function Home() {
  return (
    <main>
      {/* <Banner /> */}
      <section className="mb-8 mt-4 bg-cover md:h-[660px]">
        <div className="max-w-6xl m-auto px-6 flex items-center h-full relative">
          <p className="bg-text text-base md:text-5xl max-w-[200px] md:max-w-[600px] font-bold">
            WOWTOP PREMIUM NUTRITIONAL GROWTH MILK FORMULA FOR 1+ YEARS OLD
          </p>
          <Image src="/lon-gau@2x-8.png" alt="" width={544} height={802} className="w-1/2 h-full md:w-full" />
        </div>
      </section>
      {/* <section className="mb-8 mt-4 bg-[url('/nen-ct.webp')] bg-[length:100%_100%]">
        <div className="max-w-6xl m-auto">
          <div className="flex flex-col items-center justify-center text-2xl md:text-[40px] uppercase text-center py-4">
            <div>
              <p className="bg-text bg-clip-text text-transparent font-bold md:pt-4 pt-1">Công thức tối ưu</p>
            </div>
            <div>
              <p className="md:pt-6 pt-1">
                <span className="bg-text bg-clip-text text-transparent">Cho </span>
                <span className="py-2 px-4 bg-text2 rounded-md text-white">Chiều cao vượt đỉnh</span>
              </p>
            </div>
          </div>
          <div className="relative text-xs max-md:hidden">
            <Image src="/fhdgt@3x.webp" alt="hop-sua" width={1200} height={900} />
            <div className="text-[#84571B]">
              <p className="w-[240px] absolute xl:top-[60px] xl:left-[140px] md:top-[100px] md:left-12 top-[96px] left-11">
                Phát triển khung xương chắc khỏe & tăng chiều cao vượt trội với <strong>CBP & CPP</strong> tăng cường hoạt động của nguyên bào xương, Hàm lượng Canxi cao hàng đầu (1200mg), tỷ lệ vàng Canxi : Photo = 1,4:1 kết hợp với D3K2 & khoáng chất·giúp hấp thu Canxi tối đa.
              </p>
              <p className="w-[190px] absolute xl:top-[20px] xl:right-[150px] sm:top-[30px] sm:right-[20px] lg:top-[72px] lg:right-[60px]">
                <strong>DHA và ARA </strong>
                giúp tăng chỉ số trí tuệ, phát triển trí não & hệ thần kinh, phát triển thị lực & sáng mắt</p>
              <p className="lg:w-[204px] w-[160px] absolute xl:top-[320px] xl:right-16 md:top-[254px] md:right-[12px] top-[200px] right-[12px]">
                <strong>Lactoferrin & IgG </strong>
                tăng cường điều hòa miễn dịch, Giúp kháng khuẩn, kháng virus, bảo vệ cơ thể khỏi các tác nhân gây hại.
              </p>
              <p className="w-[190px] absolute xl:bottom-[200px] xl:left-24 bottom-[180px] left-[80px]">
                Chứa <strong>200 triệu lợi khuẩn Lactobacillus</strong> giúp hệ tiêu hóa luôn khỏe mạnh. Hệ chất xơ <strong>GOS & FOS</strong> bảo vệ đường ruột, giúp hấp thu Canxi tốt hơn
              </p>
              <p className="w-[190px] absolute xl:bottom-[180px] xl:right-32 bottom-[200px] right-0">
                Cung cấp <strong>chất béo</strong> và <strong>năng lượng</strong> bền bỉ như 1 bữa ăn đầy đủ dinh dưỡng. <strong>Protein từ Đạm Whey thủy phân</strong> với kích thước siêu nhỏ dễ hấp thu & giảm tỉ lệ dị ứng sữa.
              </p>
            </div>
          </div>
          <div className="md:hidden text-xs">
            <div className="flex flex-col justify-center items-center mt-2 ">
              <Image src="/lonsua.webp" alt="bg-hop-sua" width={300} height={290} />
              <div className="flex flex-col px-2">
                <div className="flex">
                  <div className="w-1/3 relative flex justify-center items-center">
                    <Image src="/bong.webp" alt="bong" width={120} height={120} />
                    <span className="text-[#84571B] text-center text-shadow font-bold absolute max-w-[100px]">Cao hơn, chắc khỏe hơn từ cấp nguyên bào xương</span>
                  </div>
                  <div className="w-2/3 flex items-center">
                    <span className="text-[#84571B] font-semibold">
                    Phát triển khung xương chắc khỏe & tăng chiều cao vượt trội với <strong>CBP</strong> (125 mg/100g) & <strong>CPP</strong> (571 mg/100g) tăng cường hoạt động của nguyên bào xương. Hàm lượng <strong>Canxi</strong> cao hàng đầu (1475 mg/100g), tỷ lệ vàng <strong>Canxi : Phospho</strong> = 1,8:1 kết hợp với D3K1 & khoáng chất·giúp hấp thu Canxi tối đa.
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/3 relative flex justify-center items-center">
                    <Image src="/bong.webp" alt="bong" width={120} height={120} />
                    <span className="text-[#84571B] text-center text-shadow font-bold absolute max-w-[100px]">Tiêu hoá Tốt</span>
                  </div>
                  <div className="w-2/3 flex items-center">
                    <span className="text-[#84571B] font-semibold">
                      Chứa <strong>200 triệu lợi khuẩn Lactobacillus</strong> giúp hệ tiêu hóa luôn khỏe mạnh. Hệ chất xơ <strong>GOS & FOS</strong> bảo vệ đường ruột, giúp hấp thu Canxi tốt hơn
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/3 relative flex justify-center items-center">
                    <Image src="/bong.webp" alt="bong" width={120} height={120} />
                    <span className="text-[#84571B] text-center text-shadow font-bold absolute max-w-[100px]">Cung cấp dinh dưỡng toàn diện</span>
                  </div>
                  <div className="w-2/3 flex items-center">
                    <span className="text-[#84571B] font-semibold">
                      Cung cấp <strong>chất béo</strong> và <strong>năng lượng</strong> bền bỉ như 1 bữa ăn đầy đủ dinh dưỡng. <strong>Protein từ Đạm Whey thủy phân</strong> với kích thước siêu nhỏ dễ hấp thu & giảm tỉ lệ dị ứng sữa.
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/3 relative flex justify-center items-center">
                    <Image src="/bong.webp" alt="bong" width={120} height={120} />
                    <span className="text-[#84571B] text-center text-shadow font-bold absolute max-w-[100px]">Phát triển trí não & sáng mắt</span>
                  </div>
                  <div className="w-2/3 flex items-center">
                    <span className="text-[#84571B] font-semibold">
                      <strong>DHA và ARA </strong>
                      giúp tăng chỉ số trí tuệ, phát triển trí não & hệ thần kinh, phát triển thị lực & sáng mắt
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/3 relative flex justify-center items-center">
                    <Image src="/bong.webp" alt="bong" width={120} height={120} />
                    <span className="text-[#84571B] text-center text-shadow font-bold absolute max-w-[100px]">Tăng sức đề kháng</span>
                  </div>
                  <div className="w-2/3 flex items-center">
                    <span className="text-[#84571B] font-semibold">
                      <strong>Lactoferrin & IgG </strong>
                      tăng cường điều hòa miễn dịch, Giúp kháng khuẩn, kháng virus, bảo vệ cơ thể khỏi các tác nhân gây hại.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="mb-20 bg-[url('/pt-bg-yellow.webp')]">
        <div className="max-w-4xl m-auto">
          <div className="flex flex-col items-center justify-center text-2xl md:text-3xl uppercase mb-8 text-center">
            <div>
              <p className="bg-[#84571B] bg-clip-text text-transparent pt-2">Tăng chiều cao từ cấp độ nguyên bào xương*</p>
            </div>
            <div>
              <p className="bg-[#84571B] bg-clip-text font-bold text-transparent pt-2">Cao hơn cả về chất lượng</p>
            </div>
          </div>
          <div className="mt-4 mb-14 px-4">
            <div className="border-[1px] border-[#84571B] rounded-full px-8">
              <span className="relative top-[-15px] bg-[#e9fafb] text-xs md:text-base rounded-full text-[#84571B] inline-block px-3 py-2 text-center">(*) Nguyên bào xương xây dựng cấu trúc ma trận xương, dẫn các hạt Canxi và khoáng chất vào xương, từ đó tác động trực tiếp tới chất lượng xương và chiều cao tối đa của cơ thể.</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex max-md:flex-col gap-10 px-4">
              <div className="md:w-1/2 bg-[url('/bg2f.png')] bg-cover bg-center rounded-2xl px-8 py-5 shadow-2xl">
                <Image src="/cbp.webp" alt="bg-sua" width={160} height={175} />
                <span className="text-[#135689]">
                  <strong>CBP </strong>
                  trong KID&apos;S CARE PLUS có kích thước phân tử siêu nhỏ, <strong>30 Kilodalton (≈ 1/50 tỷ hạt Nano),</strong> dễ dàng len lỏi và kích thích Nguyên bào xương hoạt động hiệu quả hơn*
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
      </section> */}
      {/* <section className="mb-8 md:mb-20">
        <div className="max-w-6xl m-auto px-4">
          <div>
            <p className="bg-text text-center text-xl md:text-3xl uppercase">Chuyên gia new zealand <br /><strong>chia sẻ nguyên lý tăng chiều cao</strong><br /> từ cấp độ nguyên bào</p>
          </div>
          <div className="mt-4 flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2 w-full">
              <iframe className="rounded-2xl w-full h-[315px]" src="https://www.youtube.com/embed/y9vlAFDEr7I?rel=0&showinfo=0&autoplay=1" />
            </div>
            <div className="md:w-1/2 w-full">
              <p className="text-[#84571B] text-justify">Xương dài ra do quá trình <strong>cốt hóa</strong> sụn tăng trưởng thành xương. Hầu hết quá trình này do <strong>nguyên bào xương</strong> chịu trách nhiệm. Nguyên bào xương tạo ra ma tr ận xương (Khung nền xương) đồng thời tăng cường chuyển hóa, lắng đọng Canxi, Phospho để lấp đầy và làm cứng ma trận xương, giúp xương dài ra ở 2 đầu. <strong>KID&apos;S CARE PLUS</strong> vừa bổ sung <strong>Canxi, Phospho, D3, K2</strong> làm nguyên liệu cho quá trình tạo xương, vừa chứa thành phần <strong>CBP</strong> kích thích nguyên bào xương phát triển, nhờ đó thúc đẩy mạnh mẽ quá trình cốt hóa ở 2 đầu xương, giúp <strong>tăng chiều cao cả về lượng và về chất.</strong></p>
              <Image src="/asset_11.png" alt='asset_11' width={400} height={1} className="mx-auto my-4" />
              <p className="text-[#84571B] mb-4"><strong>Chuyên gia tăng chiều cao David - viện dinh dưỡng New Zealand.</strong></p>
              <Link href="#" className="text-[#84571B] underline">Tìm hiểu ngay</Link>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="md:mb-20">
        <div className="max-w-6xl m-auto px-4">
          <div className="mb-8">
            <h2 className="text-xl md:text-5xl text-[#84571B] font-bold uppercase text-center">Những sai lầm trong tăng chiều cao</h2>
          </div>
          <div className="p-3 bg-[#fcf2d9] border-2 border-[#fcf2d9] rounded-2xl flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="flex justify-center items-center mb-4">
                <Image src="/h4.png" alt="h4" width={136} height={136} />
              </div>
              <div>
                <h4 className="text-[#84571B] font-semibold text-center text-xl mb-4">Chỉ quan tâm cao về lượng</h4>
                <p className="text-[#84571B]">
                  Chiều cao về centimet rất quan trọng, nhưng nếu Chất lượng xương không được đảm bảo, trẻ sẽ dễ bị loãng xương và các bệnh về xương khác. KID&apos;S CARE PLUS giúp cao hơn từ nguyên bào xương, cải thiện chiều cao cả về lượng và chất.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="flex justify-center items-center mb-4">
                <Image src="/h5.png" alt="h5" width={136} height={136} />
              </div>
              <div>
                <h4 className="text-[#84571B] font-semibold text-center text-xl mb-4">Canxi, Khoáng chất là đủ</h4>
                <p className="text-[#84571B]">
                  Chiều cao do khung xương quyết định. Canxi & khoáng chất chỉ là nguyên liệu cho xương hình thành. Cần có CBP, CPP thúc đẩy nguyên bào xương hoạt động, thu hút và hấp thụ tốt Canxi & khoáng chất thì khung xương mới dài hơn, chắc khỏe hơn.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="flex justify-center items-center mb-4">
                <Image src="/h1.png" alt="h1" width={136} height={136} />
              </div>
              <div>
                <h4 className="text-[#84571B] font-semibold text-center text-xl mb-4">Uống sữa là đủ để cao</h4>
                <p className="text-[#84571B]">
                  Sữa là giải pháp dinh dưỡng tối ưu. Tuy nhiên vẫn cần kết hợp luyện tập & sinh hoạt để tăng chiều cao. KID&apos;S CARE PLUS có đội ngũ Healthcoach đồng hành cùng con từ chế độ dinh dưỡng tới vận động để con đạt chiều cao tối đa.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="flex justify-center items-center mb-4">
                <Image src="/h3.png" alt="h3" width={136} height={136} />
              </div>
              <div>
                <h4 className="text-[#84571B] font-semibold text-center text-xl mb-4">Tin rằng GEN quyết định chiều cao</h4>
                <p className="text-[#84571B]">
                  GEN chỉ quyết định 23% Dinh dưỡng, luyện tập và chế độ sinh hoạt mới thực sự giúp con cao vượt trội.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="flex justify-center items-center mb-4">
                <Image src="/h2.png" alt="h2" width={136} height={136} />
              </div>
              <div>
                <h4 className="text-[#84571B] font-semibold text-center text-xl mb-4">Bỏ qua giai đoạn vàng</h4>
                <p className="text-[#84571B]">
                  Giai đoạn 0 – 5 tuổi và giai đoạn trước dậy thì là các mốc tăng chiều cao quan trọng ở trẻ, cần được đặc biệt lưu ý và bổ sung dinh dưỡng tối đa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="max-md:mb-8 bg-[url('/dong-co-d-1.webp')] bg-[length:100%_100%] bg-center h-[1062px] relative max-md:hidden">
        <div className="max-w-6xl m-auto px-4">
          <div className="flex justify-center mb-4">
            <div className="bg-text2 flex px-6 py-2 text-4xl rounded-full">
              <h3 className="text-[#84571B] font-bold">Đăng kí dùng thử</h3>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl md:text-5xl bg-text uppercase text-center !leading-tight">Nguồn sữa từ những chú bò <br /><span><strong>hạnh phúc nhất thế giới</strong></span></h2>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between w-full">
              <div className="flex justify-center w-2/5">
                <Image src="/non-gmo.png" alt="non-gmo.png" width={400} height={120} />
              </div>
              <div className="mx-12 w-3/5 flex flex-col justify-center">
                <div className="flex justify-between w-full mb-4">
                  <Image src="/conbo_img_1.png" alt="conbo_img_1" width={120} height={45} />
                  <Image src="/conbo_img_2.png" alt="conbo_img_2" width={120} height={45} />
                  <Image src="/conbo_img_3.png" alt="conbo_img_3" width={120} height={45} />
                </div>
                <div>
                  <p className="text-center text-xl font-semibold text-[white]">Nông trại bò sữa chuẩn Quốc tế</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <Image src="/conbo_img_5.png" alt="conbo_img_5" width={434} height={252} />
              </div>
              <div>
                <Image src="/dong-co-d-2.webp" alt="dong-co-d-2" width={467} height={382} />
              </div>
            </div>
            <div className="flex justify-center text-center flex-col mt-[48px] text-2xl text-[#f0c561]">
              <p>BIẾN MÓN QUÀ KỲ DIỆU CỦA THIÊN NHIÊN TRỞ THÀNH SẢN PHẨM HỮU CƠ</p>
              <p>TUYỆT VỜI CHO THẾ HỆ TƯƠNG LAI CAO LỚN VÀ TỐT ĐẸP HƠN</p>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="pt-20 mb-8 md:mb-20 bg-[url('/bgr-co-m.webp')] bg-center bg-[length:100%_100%] h-[820px] relative md:hidden">
        <div className="mb-8">
          <h2 className="text-xl md:text-5xl text-[#135689] uppercase text-center !leading-tight">Nguồn sữa từ những chú bò <br /><span><strong>hạnh phúc nhất thế giới</strong></span></h2>
        </div>
        <div className="flex justify-center w-full flex-col">
          <div className="mb-12 mx-12">
            <div className="flex justify-between w-full mb-4">
              <Image src="/conbo_img_1.png" alt="conbo_img_1" width={75} height={45} />
              <Image src="/conbo_img_2.png" alt="conbo_img_2" width={75} height={45} />
              <Image src="/conbo_img_3.png" alt="conbo_img_3" width={75} height={45} />
            </div>
            <div>
              <p className="text-center text-xl font-semibold text-[#715421]">Nông trại bò sữa chuẩn Quốc tế</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Image src="/non-gmo.png" alt="non-gmo.png" width={320} height={120} />
          </div>
        </div>
      </section>
      <section className="hidden">
        <div className="flex flex-col px-4">
          <div className="w-full">
            <div className="px-12 py-2 rounded-2xl bg-liner relative z-[2]">
              <p className="text-lg text-center text-white">Nguồn sữa Úc tự nhiên giàu giá trị dinh dưỡng</p>
            </div>
            <div className="bg-[#e8f2e9] text-[#204D97] border-[1px] border-white text-justify relative bottom-5 z-[1] py-8 px-4 rounded-2xl">
              <p>Phương thức chăn nuôi bò tự nhiên cùng thức ăn là đồng cỏ tươi và sạch giúp nguồn sữa Úc chứa hàm lượng dinh dưỡng cao, cụ thể: hàm lượng omega-3 cao hơn 147% so với sữa thông thường, hàm lượng acid béo linoleic liên hợp (dưỡng chất có khả năng chống viêm) nhiều gấp đôi,…
                <br />
                <br />
                Úc là vùng đất của những đàn bò sữa được chăn nuôi tự nhiên: Bò tại các trang trại Úc được thả tự do, uống nước sạch và ăn cỏ tươi. Các trang trại này tách biệt với khu đô thị, do vậy hoàn toàn trong lành. Mỗi ngày, đàn bò Úc còn được massage và cho nghe nhạc để thả lỏng. Đặc biệt, bò còn được gắn chip để theo dõi sức khỏe nhằm đảm bảo cho ra dòng sữa chất lượng bậc nhất. Mỗi con bò đều được cấp mã số và quản lý theo Chương trình Định danh Vật nuôi Quốc gia</p>
            </div>
          </div>
          <div className="w-full">
            <div className="px-12 py-2 rounded-2xl bg-liner relative z-[2]">
              <p className="text-lg text-center text-white">Công nghệ sản xuất tiên tiến bậc nhất từ Úc</p>
            </div>
            <div className="bg-[#e8f2e9] text-[#204D97] border-[1px] border-white text-justify relative bottom-5 z-[1] py-8 px-4 rounded-2xl">
              <p>Sữa từ khi được vắt tại trang trại cho đến khi ra thành phẩm chỉ mất 24 giờ. Các thành phần dinh dưỡng sau khi trộn với sữa tươi sẽ được đưa vào sấy lạnh 1 lần duy nhất, đảm bảo dưỡng chất được giữ trọn vẹn và phân bố đều trong từng muỗng sữa.</p>
            </div>
          </div>
          <div className="absolute bottom-1/4 right-1/4 max-md:hidden">
            <Image src="/dong-co-d-2.webp" alt="dong-co-d-2" width={360} height={360} />
          </div>
        </div>
      </section> */}
      <section className="mb-8 h-[450px] md:h-[1050px] bg-[length:100%_100%] pt-16 relative">
        <Image src="/nha-may@2x-100.jpg" width={2400} height={1800} alt='nhà máy' className="absolute inset-0 h-full w-full" />
        <div className="px-4 relative z-10">
          <div className="bg-[url('/asset_10.png')] bg-[length:100%_100%] text-center py-4">
            <h2 className="uppercase text-4xl text-[#84571B] font-bold">Nhà máy sản xuất WOWTOP tại NewZealand</h2>
            {/* <p className="text-4xl text-[#84571B] uppercase">và hành trình 12 năm phá vỡ mọi kỷ lục</p> */}
          </div>
        </div>
      </section>
      {/* <Certificate />
      <Feedback /> */}
      <FormOrder />
      {/* <Experience /> */}
    </main>
  )
}
