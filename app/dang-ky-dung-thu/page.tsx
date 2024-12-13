import React from 'react'
import Banner from './Banner'
import Image from 'next/image'
import Link from 'next/link'
import LazyYouTubeEmbed from '@/components/YoutubeEmbed'
import Slide from './Slide'
import FormOrder from './FormOrder'

async function page() {

  const res_ip = await fetch('https://api.ipify.org?format=json')
  const ip = await res_ip.json()

  return (
    <main>
      <Banner />
      <section className="mb-8">
        <div className="m-auto px-4">
          <h2 className="bg-text-1 text-center text-[5vw] md:text-4xl uppercase font-bold py-1">Nhận xuất quà tặng</h2>
          <h3 className="bg-text-1 text-center text-[4vw] md:text-3xl uppercase font-bold py-1">Sữa cao wowtop</h3>
          <p className="bg-text-1 text-center text-[3vw] md:text-2xl uppercase py-1">Nhập khẩu nguyên lon từ Newzealand</p>
          <div className="max-w-5xl m-auto">
            <div className="bg-[url('/asset_15.png')] bg-[length:100%_100%] h-[70px] flex justify-center items-center mb-2">
              <p className="flex items-center text-white text-2xl">lên đến <span className="text-white text-[5vw] md:text-4xl font-bold uppercase ml-4 py-2">4.600.000 VNĐ/ Suất</span></p>
            </div>
            <p className="text-[#84571B] text-justify mb-4">
              WowTop là sữa hàng đầu tại New Zealand về tăng chiều cao, WowTop mới có mặt tại Việt Nam và chuẩn bị ra mắt. Hiện tại chưa có nhiều người tại Việt Nam có cơ hội trải nghiệm sản phẩm, nên chúng tôi mang đến chương trình đặc biệt này để tạo cơ hội cho các mẹ cùng bé được trải nghiệm dòng sản phẩm tuyệt vời, từ đó cùng chúng tôi lan toả về WowTop - sữa tăng chiều cao thật sự hiệu quả để nhiều người cùng biết tới.
            </p>
          </div>
          <Image src="/asset_18.png" alt="asset_18" width={588} height={490} className="m-auto" />
          <div className="flex flex-col w-full gap-8 relative mb-8 max-md:flex-col items-center justify-center">
            <div className="flex jutify-center">
              <div className="flex-1 bg-[url('/asset_23.png')] bg-[length:100%_100%] w-full">
                <div className="text-center flex max-md:flex-col items-center justify-center p-4">
                  <p className="bg-text-blue text-5xl font-extrabold uppercase py-4">Giải nhất</p>
                  <div className="flex bg-[url('/dfhb.png')] bg-[length:100%_100%]">
                    <p className="text-2xl px-4 font-semibold text-[#135689] uppercase">Siêu sao wow cao chất</p>
                  </div>
                </div>
                <div className="bg-[url('/asset_22.png')] bg-[length:100%_100%] min-h-[100px] flex justify-center items-center relative">
                  <Image src="/Artboard 3.png" alt="Artboard 3" width={256} height={135} className="absolute left-[16%] w-1/3" />
                  <Image src="/Artboard 8.png" alt="Artboard 8" width={256} height={142} className="absolute right-[28%] w-1/4" />
                  <Image src="/Artboard 7.png" alt="Artboard 8" width={256} height={253} className="absolute right-0 w-1/3" />
                </div>
                <div className="p-4 font-semibold md:w-2/3">
                  <p className="text-center text-[#202B93]">Chọn 1 nguời có video đạt lượng view và tương tác cao nhất</p>
                </div>
              </div>
            </div>
            <div className="flex max-md:flex-col gap-4">
              <div className="flex-1 bg-[url('/asset_23.png')] bg-[length:100%_100%] w-full">
                <div className="text-center flex flex-col items-center justify-center p-4 mb-4">
                  <p className="bg-text-blue text-5xl font-extrabold uppercase py-4">Giải nhì</p>
                  <div className="flex bg-[url('/dfhb.png')] bg-[length:100%_100%]">
                    <p className="text-2xl px-4 font-semibold text-[#135689] uppercase">Siêu sao wow cao chất</p>
                  </div>
                </div>
                <div className="bg-[url('/asset_22.png')] bg-[length:100%_100%] min-h-[100px] flex justify-center items-center relative">
                  <Image src="/Artboard 2.png" alt="Artboard 2" width={256} height={135} className="absolute left-[16%] w-1/3" />
                  <Image src="/Artboard 9.png" alt="Artboard 9" width={256} height={142} className="absolute right-[28%] w-1/4" />
                  <Image src="/Artboard 6.png" alt="Artboard 6" width={256} height={253} className="absolute right-0 w-1/3" />
                </div>
                <div className="p-4 font-semibold md:w-2/3">
                  <p className="text-center text-[#202B93]">Chọn 1 nguời có video đạt lượng view và tương tác cao thứ 2</p>
                </div>
              </div>
              <div className="flex-1 bg-[url('/asset_23.png')] bg-[length:100%_100%] w-full">
                <div className="text-center flex flex-col items-center justify-center p-4 mb-4">
                  <p className="bg-text-blue text-5xl font-extrabold uppercase py-4">Giải ba</p>
                  <div className="flex bg-[url('/dfhb.png')] bg-[length:100%_100%]">
                    <p className="text-2xl px-4 font-semibold text-[#135689] uppercase">Siêu sao wow cao chất</p>
                  </div>
                </div>
                <div className="bg-[url('/asset_22.png')] bg-[length:100%_100%] min-h-[100px] flex justify-center items-center relative">
                  <Image src="/Artboard 4.png" alt="Artboard 4" width={256} height={135} className="absolute left-[16%] w-1/3" />
                  <Image src="/Artboard 10.png" alt="Artboard 10" width={256} height={142} className="absolute right-[28%] w-1/4" />
                  <Image src="/Artboard 5.png" alt="Artboard 5" width={256} height={253} className="absolute right-0 w-1/3" />
                </div>
                <div className="p-4 font-semibold md:w-2/3">
                  <p className="text-center text-[#202B93]">Chọn 1 nguời có video đạt lượng view và tương tác cao nhất</p>
                </div>
              </div>
            </div>
            <div className="flex max-lg:flex-col gap-4 md:px-16">
              <div className="flex-1 bg-[url('/asset_23.png')] bg-[length:100%_100%] w-full">
                <div className="text-center flex items-center justify-center px-4">
                  <p className="bg-text-blue text-[75px] font-extrabold uppercase">80</p>
                  <div className="flex bg-[url('/dfhb.png')] bg-[length:100%_100%] ml-[-16px]">
                    <p className="text-xl px-4 font-semibold text-[#135689] uppercase">Giải &quot;Wow thần tượng&quot;</p>
                  </div>
                </div>
                <div className="bg-[url('/asset_22.png')] bg-[length:100%_100%] min-h-[100px] flex justify-center items-center relative">
                  <Image src="/Artboard 11.png" alt="Artboard 11" width={400} height={189} className="w-1/2" />
                </div>
                <div className="p-4 font-semibold">
                  <p className="text-center text-[#202B93]">Chọn 80 người chơi có video đạt lượng view và tương tác cao từ thứ 3 đến 83 trong thời gian diễn ra cuộc thi nhận giải &quot;WOW thần tượng&quot;</p>
                </div>
              </div>
              <div className="flex-1 bg-[url('/asset_23.png')] bg-[length:100%_100%] w-full">
                <div className="text-center flex items-center justify-center px-4">
                  <p className="bg-text-blue text-[75px] font-extrabold uppercase">10</p>
                  <div className="flex bg-[url('/dfhb.png')] bg-[length:100%_100%] ml-[-16px]">
                    <p className="text-xl px-4 font-semibold text-[#135689] uppercase">Giải &quot;Wow tài năng&quot;</p>
                  </div>
                </div>
                <div className="bg-[url('/asset_22.png')] bg-[length:100%_100%] min-h-[100px] flex justify-center items-center relative">
                  <Image src="/Artboard 11.png" alt="Artboard 11" width={400} height={189} className="w-1/2" />
                </div>
                <div className="p-4 font-semibold">
                  <p className="text-center text-[#202B93]">Chọn 10 người chơi có video nhảy đẹp được BTC lựa chọn</p>
                </div>
              </div>
              <div className="flex-1 bg-[url('/asset_23.png')] bg-[length:100%_100%] w-full">
                <div className="text-center flex items-center justify-center px-4">
                  <p className="bg-text-blue text-[75px] font-extrabold uppercase">10</p>
                  <div className="flex bg-[url('/dfhb.png')] bg-[length:100%_100%] ml-[-16px]">
                    <p className="text-xl px-4 font-semibold text-[#135689] uppercase">Giải &quot;Wow nhảy giỏi&quot;</p>
                  </div>
                </div>
                <div className="bg-[url('/asset_22.png')] bg-[length:100%_100%] min-h-[100px] flex justify-center items-center relative">
                  <Image src="/Artboard 11.png" alt="Artboard 11" width={400} height={189} className="w-1/2" />
                </div>
                <div className="p-4 font-semibold">
                  <p className="text-center text-[#202B93]">Chọn 10 người chơi may mắn tham gia quay thưởng random</p>
                </div>
              </div>
            </div>
          </div>
          <p className="bg-text-blue text-[calc(1.25rem+1.5vw)] md:text-5xl py-4 font-bold text-center uppercase">Tổng giá trị lên đến 1,3 tỷ VNĐ</p>
          <div className="dkdt md:w-1/2 m-auto">
            <p className="font-bold text-[calc(1.25rem+1.5vw)] text-[#84571B]">Đăng ký dùng thử</p>
          </div>
        </div>
      </section>
      {/* <CongThuc /> */}
      {/* <section className="bg-[url('/dong-co.png')] bg-[length:100%_100%] bg-center h-[1062px] relative max-lg:hidden z-[30]">
        <div className="max-w-6xl m-auto px-4">
          <div className="py-8">
            <h2 className="text-xl md:text-4xl text-[#002A9E] uppercase text-center !leading-tight"><strong>Nông trại bò sữa chuẩn quốc tế</strong><br />Cung cấp nguồn sữa<br />Từ những chú bò hạnh phúc nhất thế giới</h2>
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
        <div className="mb-8 px-4">
          <h2 className="text-[5vw] text-[#002A9E] uppercase text-center !leading-tight"><strong>Nông trại bò sữa chuẩn quốc tế</strong><br />Cung cấp nguồn sữa từ những chú bò hạnh phúc nhất thế giới</h2>
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
      </section> */}
      <section className="mb-8">
        <div className="max-w-5xl m-auto">
          <h2 className="text-[28px] text-[#84571B] text-center uppercase mb-16">{'>'}{'>'} Tìm hiểu thêm về sản phẩm</h2>
          <div className="flex max-md:flex-col gap-4 mb-8">
            <div className="bg-[url('/asset_46.png')] bg-[length:100%_100%] min-h-[160px] flex-1 flex justify-center items-center relative">
              <div className="absolute left-[25%] text-[#84571B] text-xl">
                <p>Thời gian tham gia từ ngày ... đến ngày ...</p>
                <p>Thời gian công bố kết quả ...</p>
                <p>Thời gian gửi quà sau 1 tuần kể từ ngày thông báo.</p>
              </div>
            </div>
            <div className="bg-[url('/asset_47.png')] bg-[length:100%_100%] min-h-[160px] flex-1 flex justify-center items-center relative">
              <p className="absolute left-[25%] text-[#84571B] text-xl">Đối tượng tham gia chương trình là các bé trong độ tuổi <strong>từ 1-16 tham gia nhảy</strong> cùng bố mẹ hoặc anh chị cô</p>
            </div>
          </div>
          <div className="bg-[url('/asset_24.png')] bg-[length:100%_100%] min-h-[120px] flex items-center justify-center">
            <span className="uppercase font-bold bg-text-blue text-[5vw] md:text-5xl py-2 mt-2">Cách thức tham gia</span>
          </div>
          <div className="bg-[url('/k-co-duong-ke.png')] md:bg-[url('/co-duong-ke.png')] bg-[length:100%_100%] bg-center p-8">
            <div className="flex flex-wrap">
              <div className="flex-[0_0_auto] w-1/2 md:w-1/3 md:px-6 py-6">
                <p className="mb-2 flex justify-center items-center w-8 h-8 rounded-full bg-[#202B93] text-white font-bold">1</p>
                <Image src="/asset_40.png" alt="asset_40" width={90} height={90} className="m-auto mb-4" />
                <p className="text-center px-4 mb-4 text-[#84571B] font-semibold">Xem video mẫu để học các điệu nhảy &quot;SIÊU SAO WOW CAO CHẤT&quot;</p>
              </div>
              <div className="flex-[0_0_auto] w-1/2 md:w-1/3 md:px-6 py-6">
                <p className="mb-2 flex justify-center items-center w-8 h-8 rounded-full bg-[#202B93] text-white font-bold">2</p>
                <Image src="/asset_41.png" alt="asset_41" width={90} height={90} className="m-auto mb-4" />
                <p className="text-center px-4 mb-4 text-[#84571B] font-semibold">Đăng tải video lên Tiktok kèm hastag: <span className="text-[#202B93]">#sieusaowowcaochat #wowtop #tangchieucaotucap-donguyenbao</span></p>
              </div>
              <div className="flex-[0_0_auto] w-1/2 md:w-1/3 md:px-6 py-6">
                <p className="mb-2 flex justify-center items-center w-8 h-8 rounded-full bg-[#202B93] text-white font-bold">3</p>
                <Image src="/asset_42.png" alt="asset_42" width={90} height={90} className="m-auto mb-4" />
                <p className="text-center px-4 mb-4 text-[#84571B] font-semibold">Bố mẹ truy cập website <Link className="text-[#202B93]" href="/wowtopmilk.com.vn">wowtopmilk</Link> gửi link tham dự và đăng ký nhận quà dùng thử</p>
              </div>
              <div className="flex-[0_0_auto] w-1/2 md:w-1/3 md:px-6 py-6">
                <p className="mb-2 flex justify-center items-center w-8 h-8 rounded-full bg-[#202B93] text-white font-bold">4</p>
                <Image src="/asset_43.png" alt="asset_43" width={90} height={90} className="m-auto mb-4" />
                <p className="text-center px-4 mb-4 text-[#84571B] font-semibold">Bố mẹ theo dõi Fanpage Wowtop hoặc website <Link className="text-[#202B93]" href="/wowtopmilk.com.vn">wowtopmilk</Link> để cập nhật kết quả chương trình</p>
              </div>
              <div className="flex-[0_0_auto] w-1/2 md:w-1/3 md:px-6 py-6">
                <p className="mb-2 flex justify-center items-center w-8 h-8 rounded-full bg-[#202B93] text-white font-bold">5</p>
                <Image src="/asset_44.png" alt="asset_44" width={90} height={90} className="m-auto mb-4" />
                <p className="text-center px-4 mb-4 text-[#84571B] font-semibold">Chuyên gia tăng chiều cao tư vấn miễn phí để bố mẹ nắm bắt tình trạng chiều cao của con và chuyên gia lên phác đồ tăng chiều cao cả về chất và lượng cho con.</p>
              </div>
              <div className="flex-[0_0_auto] w-1/2 md:w-1/3 md:px-6 py-6">
                <p className="mb-2 flex justify-center items-center w-8 h-8 rounded-full bg-[#202B93] text-white font-bold">6</p>
                <Image src="/asset_45.png" alt="asset_45" width={90} height={90} className="m-auto mb-4" />
                <p className="text-center p mb-4x-4 text-[#84571B] font-semibold">Bố mẹ nhận sản phẩm, cam kết gửi ảnh chụp của bé cùng sản phẩm.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-2">
        <div className="max-w-5xl m-auto">
          <div className="flex mb-4 justify-center">
            <div className="dkdt px-8 py-4">
              <p className="font-bold text-[calc(1.25rem+0.5vw)] md:text-5xl text-[#84571B]">Tham gia ngay</p>
            </div>
          </div>
          <h3 className="bg-text-blue text-[calc(1.25rem+0.5vw)] md:text-5xl text-center font-bold py-2">Tham gia siêu sao wow cao chất</h3>
          <div className="bg-[url('/asset_24.png')] bg-[length:100%_100%] min-h-[120px] flex items-center justify-center mb-4">
            <span className="uppercase font-semibold bg-text text-[calc(1.5rem+1vw)] md:text-5xl py-2 mt-2">Nhận quà</span>
          </div>
          <div className="flex max-md:flex-col gap-4 mb-4">
            <div className="flex-1">
              <div className="buoc table m-auto md:inline-block md:text-3xl text-[calc(1.25rem+0.5vw)] mb-4 relative">
                Bước 1
                <p className="max-md:hidden absolute bg-[#202B93] w-4 h-4 rounded-full after:absolute after:content-[''] top-1/2 -right-full transform -translate-y-1/2"></p>
                <p className="max-md:hidden absolute bg-[#202B93] w-full h-[1px] rounded-full after:absolute after:content-[''] top-1/2 -right-full transform -translate-y-1/2"></p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="bg-text text-[calc(1.5rem+1vw)] md:text-3xl max-md:text-center font-semibold">Xem video mẫu để học các điệu nhảy &quot;SIÊU SAO WOW CAO CHẤT&quot; và bấm</p>
                <br />
                <Link className="dkdt px-8 py-2 " href="#">Tham gia ngay</Link>
              </div>
            </div>
            <div className="flex-1 px-2">
              <LazyYouTubeEmbed videoId='6FVUCtcFDW4' />
            </div>
          </div>
          <div className="flex max-md:flex-col gap-4 mb-4">
            <div className="flex-1 md:hidden">
              <div className="buoc table m-auto md:text-3xl text-[calc(1.25rem+0.5vw)] mb-4">
                Bước 2
              </div>
              <p className="bg-text text-[calc(1.5rem+1vw)] md:text-2xl text-center">Đăng tải video lên Tiktok kèm hastag: <span className="!text-[calc(1rem+1vw)] md:!text-2xl">#sieusaowowcaochat #wowtop #tangchieucaotucapdonguyenbao</span></p>
            </div>
            <div className="flex-1">
              <Image src="/asset_48.png" alt="asset_48" width={256} height={158} className="w-full" />
            </div>
            <div className="flex-1 max-md:hidden">
              <div className="buoc inline-block md:text-3xl text-[calc(1.25rem+0.5vw)] mb-4 float-right relative">
                Bước 2
                <p className="max-md:hidden absolute bg-[#202B93] w-4 h-4 rounded-full after:absolute after:content-[''] top-1/2 -left-full transform -translate-y-1/2"></p>
                <p className="max-md:hidden absolute bg-[#202B93] w-full h-[1px] rounded-full after:absolute after:content-[''] top-1/2 -left-full transform -translate-y-1/2"></p>
              </div>
              <p className="bg-text text-[calc(1.5rem+1vw)] md:text-3xl text-end clear-both font-semibold">Đăng tải video lên Tiktok kèm hastag:<br /> #sieusaowowcaochat #wowtop #tangchieucaotucapdonguyenbao</p>
            </div>
          </div>
          <div>
            <p className="buoc table m-auto md:text-3xl text-[calc(1.25rem+0.5vw)] mb-4">Bước 3</p>
            <p className="bg-text text-[calc(1.5rem+1vw)] md:text-3xl font-semibold text-center w-full md:w-1/2 m-auto mb-4">BỐ MẸ ĐIỀN FORM ĐĂNG KÝ DÙNG THỬ SỮA WOWTOP CHO CON YÊU</p>
            <FormOrder ip={ip.ip} />
          </div>
          <div className="flex max-md:flex-col gap-4 mb-4">
            <div className="flex-1">
              <div className="buoc table m-auto md:inline-block md:text-3xl text-[calc(1.25rem+0.5vw)] mb-4 relative">
                Bước 4
                <p className="max-md:hidden absolute bg-[#202B93] w-4 h-4 rounded-full after:absolute after:content-[''] top-1/2 -right-full transform -translate-y-1/2"></p>
                <p className="max-md:hidden absolute bg-[#202B93] w-full h-[1px] rounded-full after:absolute after:content-[''] top-1/2 -right-full transform -translate-y-1/2"></p>
              </div>
              <p className="bg-text text-[calc(1.5rem+1vw)] md:text-3xl font-semibold max-md:text-center">Bố mẹ theo dõi Fanpage Wowtop hoặc truy cập website <Link href="/#" className="bg-text-blue">wowtopmilk.com.vn/sieu-sao-wow-cao-chat</Link> để cập nhật kết quả chương trình</p>
            </div>
            <div className="flex-1 relative">
              <Image src="/3.jpg" alt="3" width={469} height={257} className="w-full" />
              <Link href="/" className="absolute top-[46%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 italic uppercase text-[#84571B]">Tham gia group</Link>
            </div>
          </div>
          <div className="flex max-md:flex-col gap-4 mb-4">
            <div className="flex-1 md:hidden">
              <p className="buoc table m-auto md:inline-block md:text-3xl text-[calc(1.25rem+0.5vw)] mb-4">Bước 5</p>
              <p className="bg-text text-[calc(1.5rem+1vw)] md:text-3xl font-semibold text-center">Chuyên gia tăng chiều cao tư vấn và lên phác đồ tăng chiều cao miễn phí cho con</p>
            </div>
            <div className="flex-1">
              <Image src="/2.jpg" alt="2" width={469} height={257} className="w-full" />
            </div>
            <div className="flex-1 max-md:hidden">
              <div className="buoc table m-auto md:inline-block md:text-3xl text-[calc(1.25rem+0.5vw)] mb-4 float-right relative">
                Bước 5
                <p className="absolute bg-[#202B93] w-4 h-4 rounded-full after:absolute after:content-[''] top-1/2 -left-full transform -translate-y-1/2"></p>
                <p className="absolute bg-[#202B93] w-full h-[1px] rounded-full after:absolute after:content-[''] top-1/2 -left-full transform -translate-y-1/2"></p>
              </div>
              <p className="bg-text text-[calc(1.5rem+1vw)] md:text-3xl font-semibold text-end clear-both">Chuyên gia tăng chiều cao tư vấn và lên phác đồ tăng chiều cao miễn phí cho con</p>
            </div>
          </div>
          <div>
            <p className="buoc table m-auto md:text-3xl text-[calc(1.25rem+0.5vw)] mb-4">Bước 6</p>
            <p className="bg-text text-[calc(1.5rem+1vw)] md:text-3xl font-semibold text-center m-auto mb-4">Bố mẹ gửi ảnh con chụp cùng WowTop</p>
            <Slide />
          </div>
        </div>
      </section>
      {/* <section className="mb-8">
        <div className="max-w-3xl m-auto">
          <div className="bg-[url('/asset_24.png')] bg-[length:100%_100%] min-h-[120px] flex items-center justify-center mb-4">
            <span className="uppercase font-bold bg-text-blue text-[4vw] md:text-3xl py-2 mt-2">Điều khoản tham gia chương trình</span>
          </div>
          <ul className="text-[#84571B] mx-2">
            <li className="mb-1">* Bố mẹ khi tham gia chương trình đăng ký dùng thử đồng ý với Thể lệ và Điều khoản chương trình</li>
            <li className="mb-1">* Đồng ý cho Nhãn hàng sử dụng video, hình ảnh cho mục đích truyền thông sản phẩm</li>
            <li className="mb-1">* Mọi quyết định cuối cùng thuộc về ban tổ chức</li>
          </ul>
        </div>
      </section> */}
      <section className="mb-8">
        <div className="max-w-4xl m-auto">
          <div className="bg-[url('/asset_24.png')] bg-[length:100%_100%] min-h-[120px] flex items-center justify-center mb-4">
            <span className="uppercase font-bold bg-text-blue text-[5vw] md:text-3xl py-8 mt-2 text-center">Danh sách<br />Người tham gia siêu sao wow cao chất</span>
          </div>
          <div className="flex justify-center">
            <table className="w-full">
              <thead className="bg-[#202B93] text-white border border-[#202B93]">
                <tr>
                  <th className="text-center py-4">STT</th>
                  <th className="text-center py-4">Họ tên người tham gia</th>
                  <th className="text-center py-4">Số điện thoại</th>
                </tr>
              </thead>
              <tbody className="bg-[url('/bg-table.png')] bg-[length:100%_100%]">
                <tr>
                  <td className="text-center py-4 border-b border-black border-x">1</td>
                  <td className="text-center py-4 border-b border-black border-x">Nam Thị Ly</td>
                  <td className="text-center py-4 border-b border-black border-x">0987654***</td>
                </tr>
                <tr>
                  <td className="text-center py-4 border-b border-black border-x">2</td>
                  <td className="text-center py-4 border-b border-black border-x">Nguyễn Thị An</td>
                  <td className="text-center py-4 border-b border-black border-x">0912345***</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page