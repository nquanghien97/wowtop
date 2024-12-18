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
          <h2 className="bg-text-1 text-center text-[5vw] md:text-4xl uppercase font-bold py-1">Nhận quà tặng hấp dẫn</h2>
          <h3 className="bg-text-1 text-center text-[4vw] md:text-3xl uppercase font-bold py-1">Từ sữa cao wowtop</h3>
          <p className="bg-text-1 text-center text-[3vw] md:text-2xl uppercase py-1">Nhập khẩu nguyên lon từ Newzealand</p>
          <div className="max-w-5xl m-auto">
            <div className="bg-[url('/asset_15.png')] bg-[length:100%_100%] h-[70px] flex justify-center items-center mb-2">
              <p className="flex items-center text-white text-2xl">lên đến <span className="text-white text-[5vw] md:text-4xl font-bold uppercase ml-4 py-2">13,800,000 VNĐ/ Suất</span></p>
            </div>
            <div className="flex max-md:flex-col relative">
              <Image src="/asset_5.png" alt="asset_5" width={140} height={140} className="absolute md:top-[-10%] right-0 w-1/5 md:w-[12%]" />
              <Image src="/pt2.webp" alt="pt2" width={140} height={140} className="absolute left-0 md:left-1/2 top-[-4%] w-1/5 md:w-[12%]" />
              <div className="w-2/5 max-md:m-auto md:mr-8">
                <Image src="/asset_18.png" alt="asset_18" width={320} height={455} className="w-full" />
              </div>
              <div className="md:w-3/5 flex items-center flex-col justify-center">
                <p className="text-[#84571B] text-justify">
                  WowTop là sữa hàng đầu tại New Zealand về tăng chiều cao, WowTop mới có mặt tại Việt Nam và chuẩn bị ra mắt. Hiện tại chưa có nhiều người tại Việt Nam có cơ hội trải nghiệm sản phẩm, nên chúng tôi mang đến chương trình đặc biệt này để tạo cơ hội cho các mẹ cùng bé được trải nghiệm dòng sản phẩm tuyệt vời, từ đó cùng chúng tôi lan toả về WowTop - sữa tăng chiều cao thật sự hiệu quả để nhiều người cùng biết tới.
                </p>
                <Link href="#trial-form">
                  <Image src="/bt.png" alt="bt" width={400} height={400} className="cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
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
          <p className="bg-text-blue text-[calc(1.25rem+1.5vw)] md:text-5xl py-4 font-bold text-center uppercase">Tổng giá trị lên đến 145,000,000 VNĐ</p>
          <div className="dkdt md:w-1/2 m-auto">
            <p className="font-bold text-[calc(1.25rem+1.5vw)] text-[#84571B] uppercase">Tham gia ngay</p>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <div className="max-w-6xl m-auto">
          <h2 className="text-[28px] text-[#84571B] text-center uppercase">{'>'}{'>'} Tìm hiểu thêm về sản phẩm</h2>
          <div className="flex max-lg:flex-col gap-4 mb-8">
            <div className="lg:bg-[url('/trhtr.png')] lg:bg-[length:100%_100%] lg:min-h-[200px] flex flex-1 max-lg:flex-col items-center">
              <Image src="/clock.png" alt="clock" width={120} height={120} className="" />
              <div className=" text-[#84571B] text-xl max-lg:bg-[url('/trhtr.png')] max-lg:bg-[length:100%_100%] py-8 px-4 flex justify-center max-md:items-center flex-col w-full text-center lg:text-justify">
                <p className="mb-2">Thời gian tham gia từ ngày 23/12/2024 đến ngày 15/01/2024</p>
                <p className="mb-2">Thời gian công bố kết quả 20/01/2024 đến ngày 25/01/2024</p>
                <p>Thời gian gửi quà sau 1 tuần kể từ ngày thông báo.</p>
              </div>
            </div>
            <div className="lg:bg-[url('/trhtr.png')] lg:bg-[length:100%_100%] lg:min-h-[200px] flex-1 flex max-lg:flex-col justify-center items-center">
              <Image src="/group.png" alt="group" width={120} height={120} className="" />
              <p className="text-[#84571B] text-xl max-lg:bg-[url('/trhtr.png')] max-lg:bg-[length:100%_100%] p-8 max-md:text-center text-justify">Đối tượng tham gia chương trình là các bé trong độ tuổi <strong>từ 1-16 tham gia nhảy</strong> cùng bố mẹ hoặc anh chị cô</p>
            </div>
          </div>
          <div className="bg-[url('/asset_24.png')] bg-[length:100%_100%] min-h-[120px] flex items-center justify-center">
            <span className="uppercase font-bold bg-text-blue text-[5vw] md:text-5xl py-2 mt-2">Cách thức tham gia</span>
          </div>
          <div className="bg-[url('/k-co-duong-ke.png')] md:bg-[url('/co-duong-ke.png')] bg-[length:100%_100%] bg-center p-8">
            <div className="flex flex-wrap">
              <div className="flex-[0_0_auto] w-full md:w-1/3 md:px-6 py-6">
                <p className="mb-2 flex justify-center items-center w-8 h-8 rounded-full bg-[#202B93] text-white font-bold">1</p>
                <Image src="/asset_40.png" alt="asset_40" width={90} height={90} className="m-auto mb-4 mt-[-20px]" />
                <p className="text-center px-4 mb-4 text-[#84571B] font-semibold">Xem video mẫu để học các điệu nhảy &quot;SIÊU SAO WOW CAO CHẤT&quot;</p>
              </div>
              <div className="flex-[0_0_auto] w-full md:w-1/3 md:px-6 py-6">
                <p className="mb-2 flex justify-center items-center w-8 h-8 rounded-full bg-[#202B93] text-white font-bold">2</p>
                <Image src="/asset_41.png" alt="asset_41" width={90} height={90} className="m-auto mb-4 mt-[-20px]" />
                <div className="text-center font-semibold">
                  <p className="text-[#84571B] inline-block"> Đăng tải video lên TikTok (Đăng thêm trên Facebook & Youtube cá nhân để được tính tổng view, tương tác) kèm hashtag:</p>
                  <br />
                  <span className="text-[#202B93] max-lg:whitespace-normal max-lg:break-words">#sieusaowowcaochat #wowtop #tangchieucaotucapdonguyenbao</span>
                </div>
              </div>
              <div className="flex-[0_0_auto] w-full md:w-1/3 md:px-6 py-6">
                <p className="mb-2 flex justify-center items-center w-8 h-8 rounded-full bg-[#202B93] text-white font-bold">3</p>
                <Image src="/asset_42.png" alt="asset_42" width={90} height={90} className="m-auto mb-4 mt-[-20px]" />
                <p className="text-center px-4 mb-4 text-[#84571B] font-semibold">Bố mẹ truy cập website <Link className="text-[#202B93]" href="/wowtopmilk.com.vn">wowtopmilk</Link> gửi link tham dự và đăng ký nhận quà dùng thử</p>
              </div>
              <div className="flex-[0_0_auto] w-full md:w-1/3 md:px-6 py-6">
                <p className="mb-2 flex justify-center items-center w-8 h-8 rounded-full bg-[#202B93] text-white font-bold">4</p>
                <Image src="/asset_43.png" alt="asset_43" width={90} height={90} className="m-auto mb-4" />
                <p className="text-center px-4 mb-4 text-[#84571B] font-semibold">Bố mẹ theo dõi <Link href="/https://www.facebook.com/wowtoptangchieucao" className="text-[#202B93]">Fanpage Wowtop</Link> hoặc website <Link className="text-[#202B93] whitespace-normal break-words" href="https://wowtopmilk.com.vn/sieu-sao-wow-cao-chat">wowtopmilk.com.vn/sieu-sao-wow-cao-chat</Link> để cập nhật kết quả chương trình</p>
              </div>
              <div className="flex-[0_0_auto] w-full md:w-1/3 md:px-6 py-6">
                <p className="mb-2 flex justify-center items-center w-8 h-8 rounded-full bg-[#202B93] text-white font-bold">5</p>
                <Image src="/asset_44.png" alt="asset_44" width={90} height={90} className="m-auto mb-4" />
                <p className="text-center px-4 mb-4 text-[#84571B] font-semibold">Chuyên gia tăng chiều cao tư vấn miễn phí để bố mẹ nắm bắt tình trạng chiều cao của con và chuyên gia lên phác đồ tăng chiều cao cả về chất và lượng cho con.</p>
              </div>
              <div className="flex-[0_0_auto] w-full md:w-1/3 md:px-6 py-6">
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
              <div className="buoc table m-auto md:inline-block md:text-3xl text-[calc(1.5rem+0.5vw)] mb-4 relative">
                Bước 1
                <p className="max-md:hidden absolute bg-[#202B93] w-4 h-4 rounded-full after:absolute after:content-[''] top-1/2 -right-full transform -translate-y-1/2"></p>
                <p className="max-md:hidden absolute bg-[#202B93] w-full h-[1px] rounded-full after:absolute after:content-[''] top-1/2 -right-full transform -translate-y-1/2"></p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="bg-text text-[calc(1rem+1vw)] md:text-3xl max-md:text-center font-semibold">Xem video mẫu để học các điệu nhảy &quot;SIÊU SAO WOW CAO CHẤT&quot; và bấm</p>
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
              <div className="buoc table m-auto md:text-3xl text-[calc(1.5rem+0.5vw)] mb-4">
                Bước 2
              </div>
              <div className="text-center clear-both font-semibold">
                <p className="bg-text text-[calc(1rem+1vw)] inline-block md:text-3xl">Đăng tải video lên TikTok (Đăng thêm trên Facebook & Youtube cá nhân để được tính tổng view, tương tác) kèm hashtag:</p>
                <br /> <span className="text-[#202B93] text-[calc(1rem+1vw)] md:text-3xl whitespace-normal break-words">#sieusaowowcaochat #wowtop #tangchieucaotucapdonguyenbao</span>
              </div>
            </div>
            <div className="flex-1">
              <Image src="/asset_48.png" alt="asset_48" width={256} height={158} className="w-full" />
            </div>
            <div className="flex-1 max-md:hidden">
              <div className="buoc inline-block md:text-3xl text-[calc(1.5rem+0.5vw)] mb-4 float-right relative">
                Bước 2
                <p className="max-md:hidden absolute bg-[#202B93] w-4 h-4 rounded-full after:absolute after:content-[''] top-1/2 -left-full transform -translate-y-1/2"></p>
                <p className="max-md:hidden absolute bg-[#202B93] w-full h-[1px] rounded-full after:absolute after:content-[''] top-1/2 -left-full transform -translate-y-1/2"></p>
              </div>
              <div className="text-end clear-both font-semibold">
                <p className="bg-text text-[calc(1rem+1vw)] inline-block md:text-3xl">Đăng tải video lên TikTok (Đăng thêm trên Facebook & Youtube cá nhân để được tính tổng view, tương tác) kèm hashtag:</p>
                <br /> <span className="text-[#202B93] text-[calc(1.5rem+1vw)] md:text-3xl whitespace-normal break-words">#sieusaowowcaochat #wowtop #tangchieucaotucapdonguyenbao</span>
              </div>
            </div>
          </div>
          <div>
            <p className="buoc table m-auto md:text-3xl text-[calc(1.5rem+0.5vw)] mb-4">Bước 3</p>
            <p className="bg-text text-[calc(1rem+1vw)] md:text-3xl font-semibold text-center w-full m-auto mb-4">BỐ MẸ GỬI LINK THAM GIA ĐỂ NHẬN CƠ HỘI DÙNG THỬ SỮA WOWTOP CHO CON YÊU NHÉ</p>
            <FormOrder ip={ip.ip} />
          </div>
          <div className="flex max-md:flex-col gap-4 mb-4">
            <div className="flex-1">
              <div className="buoc table m-auto md:inline-block md:text-3xl text-[calc(1.5rem+0.5vw)] mb-4 relative">
                Bước 4
                <p className="max-md:hidden absolute bg-[#202B93] w-4 h-4 rounded-full after:absolute after:content-[''] top-1/2 -right-full transform -translate-y-1/2"></p>
                <p className="max-md:hidden absolute bg-[#202B93] w-full h-[1px] rounded-full after:absolute after:content-[''] top-1/2 -right-full transform -translate-y-1/2"></p>
              </div>
              <p className="bg-text text-[calc(1rem+1vw)] md:text-3xl font-semibold max-md:text-center">Bố mẹ theo dõi Fanpage Wowtop hoặc truy cập website <Link href="/#" className="bg-text-blue whitespace-normal break-words">wowtopmilk.com.vn/sieu-sao-wow-cao-chat</Link> để cập nhật kết quả chương trình</p>
            </div>
            <div className="flex-1 relative">
              <div className="flex-1 relative">
                <Link href="https://www.facebook.com/wowtoptangchieucao" target='blank'><Image src="/3.jpg" alt="3" width={469} height={257} className="w-full" /></Link>
              </div>
            </div>
          </div>
          <div className="flex max-md:flex-col gap-4 mb-4">
            <div className="flex-1 md:hidden">
              <p className="buoc table m-auto md:inline-block md:text-3xl text-[calc(1.5rem+0.5vw)] mb-4">Bước 5</p>
              <p className="bg-text text-[calc(1rem+1vw)] md:text-3xl font-semibold text-center">Chuyên gia tăng chiều cao tư vấn và lên phác đồ tăng chiều cao miễn phí cho con</p>
            </div>
            <div className="flex-1">
              <Image src="/bac-si.png" alt="bac-si" width={469} height={257} className="w-full" />
            </div>
            <div className="flex-1 max-md:hidden">
              <div className="buoc table m-auto md:inline-block md:text-3xl text-[calc(15rem+0.5vw)] mb-4 float-right relative">
                Bước 5
                <p className="absolute bg-[#202B93] w-4 h-4 rounded-full after:absolute after:content-[''] top-1/2 -left-full transform -translate-y-1/2"></p>
                <p className="absolute bg-[#202B93] w-full h-[1px] rounded-full after:absolute after:content-[''] top-1/2 -left-full transform -translate-y-1/2"></p>
              </div>
              <p className="bg-text text-[calc(1rem+1vw)] md:text-3xl font-semibold text-end clear-both">Chuyên gia tăng chiều cao tư vấn và lên phác đồ tăng chiều cao miễn phí cho con</p>
            </div>
          </div>
          <div>
            <p className="buoc table m-auto md:text-3xl text-[calc(1.5rem+0.5vw)] mb-4">Bước 6</p>
            <p className="bg-text text-[calc(1rem+1vw)] md:text-3xl font-semibold text-center m-auto">Bố mẹ gửi ảnh con chụp cùng WowTop</p>
            <Slide />
          </div>
        </div>
      </section>
      <section className="flex max-md:flex-col gap-4 mb-4 max-w-5xl m-auto">
        <div className="flex-1 flex items-center max-lg:hidden">
          <div className="flex flex-col justify-center items-center">
            <p className="bg-text text-[calc(1rem+1vw)] md:text-4xl text-center font-semibold uppercase">Giới thiệu về Wowtop</p>
            <br />
            <Link className="dkdt px-8 py-2 " href="/san-pham">Bấm để xem thêm</Link>
          </div>
        </div>
        <div className="flex-1 px-2">
          <LazyYouTubeEmbed videoId='6FVUCtcFDW4' />
        </div>
        <div className="flex justify-center items-center lg:hidden">
          <div className="flex flex-col justify-center items-center">
            <p className="bg-text text-[calc(1rem+1vw)] md:text-4xl text-center font-semibold uppercase mb-2">Giới thiệu về Wowtop</p>
            <Link className="dkdt px-8 py-2 " href="/san-pham">Bấm để xem thêm</Link>
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
          <div className="bg-[url('/asset_24.png')] bg-[length:100%_100%] flex items-center justify-center mb-4">
            <span className="uppercase font-bold bg-text-blue text-[4vw] md:text-3xl py-8 mt-2 text-center">Danh sách người tham gia</span>
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
                  <td className="text-center py-4 border-b border-black border-x">0354654***</td>
                </tr>
                <tr>
                  <td className="text-center py-4 border-b border-black border-x">2</td>
                  <td className="text-center py-4 border-b border-black border-x">Nguyễn Thị An</td>
                  <td className="text-center py-4 border-b border-black border-x">0912626***</td>
                </tr>
                <tr>
                  <td className="text-center py-4 border-b border-black border-x">2</td>
                  <td className="text-center py-4 border-b border-black border-x">Trần Thị Trang</td>
                  <td className="text-center py-4 border-b border-black border-x">0976429***</td>
                </tr>
                <tr>
                  <td className="text-center py-4 border-b border-black border-x">2</td>
                  <td className="text-center py-4 border-b border-black border-x">Nguyễn Khánh Linh</td>
                  <td className="text-center py-4 border-b border-black border-x">0334236***</td>
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