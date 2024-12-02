import Feedback from "@/components/HomePage/Feedback"
import FormOrder from "@/components/HomePage/FormOrder"
import { data } from "@/config/dataThanhPhan"
import { Metadata } from "next"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
const Experience = dynamic(() => import('@/components/HomePage/Experience'), { ssr: false })

export const metadata: Metadata = {
  metadataBase: new URL('https://wowtop.com.vn'),
  title: 'Wowtop 700g',
  description: 'Nếu được chăm sóc tốt, trẻ có thể cao lên đến 8-12cm mỗi năm. WOWTOP chứa hệ dưỡng chất giàu thành phần quý hiếm với hàm lượng cao như CBP ...',
  keywords: 'Wowtop',
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    locale: 'vi_VN',
    title: 'Wowtop',
    url: 'https://wowtop.com.vn/san-pham',
    siteName: 'Wowtop',
    type: 'website'
  }
}

function Product() {
  return (
    <main className="bg-custom-yellow">
      <section className="bg-[url('/bgr-sua.webp')] bg-cover bg-center md:bg-[length:100%_100%] mb-8">
        <div className="max-w-6xl m-auto px-4">
          <div className="flex pb-[100px] flex-col md:flex-row">
            <div className="md:w-2/5 flex items-center">
              <Image src="/Artboard 13.webp" alt="banner-hop-sua" width={600} height={800} />
            </div>
            <div className="md:w-3/5">
              <div className="md:h-[565px] md:overflow-y-scroll md:px-8 py-8">
                <Image src="/logo-ngang.webp" alt="logo2" width={500} height={132} />
                <div className="mb-4">
                  <h2 className="text-[#002A9E] font-bold text-3xl">CAO TỪ CẤP NGUYÊN BÀO XƯƠNG</h2>
                </div>
                <p className="text-[#845618] text-xl mb-4">Sữa bột 700G</p>
                <p className="text-justify">WOWTOP là thực phẩm dinh dưỡng công thức dành cho trẻ em từ 1 tuổi trở lên. Sản phẩm chứa Calci, Đạm, Sữa non (CBP), Casein Phosphopeptide (CPP), DHA từ tảo. ARA, 1,3-Dioleoy1-2-Palmitoy Tri-glyceride (OPO), Lactoferrin, Immunoglobulin G (IgG), và hơn 30 loại vitamin, khoáng chất và dưỡng chất thiết yếu cho sự phát triển thể chất ở trẻ. Sử dụng WowTop không chỉ giúp trẻ tăng chiều cao lành mạnh mà còn kích thích sự phát triển ở cấp nguyên bào Xương từ sâu bên trong, giúp tăng khả năng hấp thụ canxi, cho xương dài hơn và chắc khỏe hơn. Cùng WowTop tăng cường chiều cao cho trẻ không chỉ ở lượng mà còn ở chất. Tiêu chuẩn và cam kết của sản phẩm</p>
                <Image src="/cn.webp" alt="cn" width={496} height={66} />
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
      <section className="bg-custom-yellow">
        <div className="max-w-6xl m-auto px-4 pb-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 w-full flex flex-col justify-center max-md:mb-4">
              <div className="flex justify-center mb-4">
                <Image src="/artboard_14.webp" alt="artboard_14" width={240} height={160} />
              </div>
              <div className="flex justify-evenly items-center">
                <Image src="/artboard_16.webp" alt="artboard_16" width={100} height={100} />
                <Image src="/bfdhb.webp" alt="bfdhb" width={100} height={64} className="h-full" />
                <Image src="/artboard_15.webp" alt="artboard_15" width={100} height={100} />
                <Image src="/artboard_13.webp" alt="artboard_13" width={100} height={100} />
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
        <Image src="/nha-may.webp" width={2400} height={1800} alt='nhà máy' className="absolute inset-0 h-full w-full" />
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
      <section className="mb-8">
        <div className="max-w-6xl m-auto">
          <div className="font-semibold text-center py-4 bg-[url('/hdgh.png')] bg-[length:100%_100%] w-full md:w-2/3 m-auto">
            <p className="text-[calc(1.5rem+1vw)] md:text-4xl font-bold uppercase py-4 bg-text">Hướng dẫn sử dụng</p>
          </div>
          <div className="max-md:px-4">
            <div className="flex max-md:flex-col">
              <div className="w-2/5 m-auto">
                <Image src="/be.webp" alt="be" width={305} height={468} className="w-full" />
              </div>
              <ul className="md:w-3/5 px-4">
                <li className="flex gap-2">
                  <div className="flex w-[120px] relative">
                    <div className="">
                      <Image src="/gfh_2.webp" alt="gfh_2" width={240} height={240} className="w-full" />
                    </div>
                    <div className="flex items-end w-[30px] absolute bottom-[-20%] right-[0%]">
                      <Image src="/mui_ten.webp" alt="mui_ten" width={50} height={60} className="w-full" />
                    </div>
                  </div>
                  <p className="flex-1 ml-4 flex items-center">Rửa sạch tay trước khi pha sữa. Vệ sinh và tiệt trùng tất cả dụng cụ bằng cách đun sôi trong 5 phút hoặc sử dụng máy tiệt trùng đã được kiểm duyệt.</p>
                </li>
                <li className="flex gap-2">
                  <div className="flex w-[120px] relative">
                    <div className="">
                      <Image src="/gfh_3.webp" alt="gfh_3" width={120} height={240} className="w-full" />
                    </div>
                    <div className="flex items-end w-[30px] absolute bottom-[-20%] right-[0%]">
                      <Image src="/mui_ten.webp" alt="mui_ten" width={50} height={60} className="w-full" />
                    </div>
                  </div>
                  <p className="flex-1 ml-4 flex items-center">Đun sôi nước sạch và để nguội xuống 45&#8451; trước khi pha sữa.</p>
                </li>
                <li className="flex gap-2">
                  <div className="flex w-[120px] relative">
                    <div className="">
                      <Image src="/gfh_4.webp" alt="gfh_4" width={240} height={240} className="w-full" />
                    </div>
                    <div className="flex items-end w-[30px] absolute bottom-[-20%] right-[0%]">
                      <Image src="/mui_ten.webp" alt="mui_ten" width={50} height={60} className="w-full" />
                    </div>
                  </div>
                  <p className="flex-1 ml-4 flex items-center">Sau khi nước đã nguội, đo lượng nước cần thiết và đổ vào bình sữa đã được tiệt trùng.</p>
                </li>
                <li className="flex gap-2">
                  <div className="flex w-[120px] relative">
                    <div className="">
                      <Image src="/dh.webp" alt="dh" width={240} height={240} className="w-full" />
                    </div>
                    <div className="flex items-end w-[30px] absolute bottom-[-20%] right-[0%]">
                      <Image src="/mui_ten.webp" alt="mui_ten" width={50} height={60} className="w-full" />
                    </div>
                  </div>
                  <p className="flex-1 ml-4 flex items-center">Sử dụng muỗng kèm theo. Pha 1 muỗng gạt sữa bột với mỗi 25.7mL nước, theo hướng dẫn pha sữa. Lắc nhanh để sữa tan hoàn toàn. Mỗi bình nên được pha riêng.</p>
                </li>
                <li className="flex gap-2">
                  <div className="flex w-[120px] justify-center">
                    <Image src="/dghd.webp" alt="dghd" width={240} height={240} className="w-[80px]" />
                  </div>
                  <p className="flex-1 ml-4 flex items-center">Kiểm tra nhiệt độ sữa trên cổ tay trước khi cho bé uống. Sử dụng ngay sau khi pha. Loại bỏ sữa thừa không dùng hết.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <FormOrder />
      <Experience />
    </main>
  )
}

export default Product