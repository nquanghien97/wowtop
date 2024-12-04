import FacebookIcon from "@/assets/icons/FacebookIcon"
import PhoneIcon from "@/assets/icons/PhoneIcon"
import YoutubeIcon from "@/assets/icons/YoutubeIcon"
import Image from "next/image"
import Link from "next/link"
function Footer() {
  return (
    <footer className="footer-bg">
      <div className="max-w-6xl m-auto px-4">
        <div className="flex items-center gap-8 py-4">
          <Image src="/logo-footer-2.png" alt="logo" width={275} height={75} className="relative md:top-[-12px] max-md:w-[190px] max-md:h-[50px] top-[-8px]" />
          {/* <h3 className="uppercase text-xs md:text-xl font-semibold">
            <Link href={`/`} className="text-white">Nhận tư vấn</Link>
          </h3>
          <h3 className="uppercase text-xs md:text-xl font-semibold">
            <Link href={`/`} className="text-white">Hòm thư góp ý</Link>
          </h3> */}
        </div>
      </div>
      <div className="bg-[url('/bg-footer.webp')] bg-cover bg-[80%] relative">
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
        <div className="max-w-6xl m-auto px-4 py-7 relative z-10">
          <div className="flex w-full justify-between mb-8 flex-col md:flex-row">
            <div className="max-md:mb-4">
              <h3 className="text-xl text-white font-bold">Theo dõi chúng tôi</h3>
              <div className="flex gap-4">
                <Link href="#">
                  <FacebookIcon fill="white" width={32} height={32} />
                </Link>
                <Link href="https://www.youtube.com/@WOWTOPVIETNAM">
                  <YoutubeIcon fill="white" width={32} height={32} />
                </Link>
                <Link href="#">
                  <PhoneIcon fill="white" width={32} height={32} />
                </Link>
              </div>
            </div>
            <ul className="text-white">
              <li className="py-2">Lời nhắn tới cha mẹ</li>
              <li className="py-2">Lưu ý về Cookie</li>
              <li className="py-2">Tùy chỉnh Cookie</li>
              <li className="py-2">Pháp lý</li>
            </ul>
            <ul className="text-white">
              <li className="py-2">Chuỗi cung ứng NZ-VN</li>
              <li className="py-2">Chính sách quyền riêng tư</li>
              <li className="py-2">Tùy chỉnh quyền riêng tư</li>
              <li className="py-2">Công thức tăng chiều cao</li>
            </ul>
            <ul className="text-white">
              <li className="py-2">Hướng dẫn đặt hàng và thanh toán</li>
              <li className="py-2">Chính sách kiểm tra, đổi/trả hàng hóa</li>
              <li className="py-2">Chính sách giao nhận</li>
              <li className="py-2">Câu hỏi thường gặp</li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
            <p className="text-white font-bold">Sản xuất tại: NEW ZEALAND PURE DAIRY PRODUCTS LIMITED</p>
            <p className="text-white font-bold mb-4">Địa chỉ: Unit 3, 14 Canaveral drive, Rosedale, Auckland, New Zealand.</p>
              {/* <div className="mb-4">
                <p className="text-white font-bold">Số giấy chứng nhận đăng ký kinh doanh</p>
                <p className="text-white">0110015834</p>
              </div> */}
              {/* <div className="flex gap-4 mb-4">
                <Image src="/footer-image/bct.png" alt="Bộ công thương" width={130} height={40} />
                <Image src="/footer-image/dmca.png" alt="DMCA" width={130} height={40} />
              </div> */}
            </div>
            <div className="md:w-1/2">
              <h4 className="text-white font-bold">Đây là một website ứng dụng</h4>
              <p className="text-white mb-4">Trong website này chúng tôi tổng hợp các thông tin liên quan về sản phẩm, thành phần hoạt chất, thông tin dinh dưỡng, ứng dụng tính toán lộ trình tăng chiều cao, trò chơi trí tuệ cho trẻ. Tuy nhiên trẻ em cần phải có sự cho phép của cha mẹ khi tham quan website.</p>
              <div className="text-white">
                <p>Thương nhân nhập khẩu, phân phối và chịu trách nhiệm về sản phẩm</p>
                <p>CÔNG TY TNHH THƯƠNG MẠI 7WEALTH</p> 
                <p>Địa chỉ: Lô 01A-B1 Tòa R2 Royal City, số 72A Nguyễn Trãi, phường Thượng Đình, quận Thanh Xuân, thành phố Hà Nội, Việt Nam.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer