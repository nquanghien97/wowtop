import Image from 'next/image'

function CongThuc() {
  return (
    <section className="bg-[url('/nen-ct.webp')] relative">
        <div className="flex flex-col items-center justify-center text-[24px] lg:text-[2vw] uppercase text-center py-4 lg:absolute lg:top-0 lg:left-1/2 lg:transform lg:-translate-x-1/2">
          <div>
            <p className="bg-text bg-clip-text text-transparent font-bold">Công thức tối ưu</p>
          </div>
          <div>
            <p className=" pt-1">
              <span className="bg-text bg-clip-text text-transparent">Cho </span>
              <span className="py-2 px-4 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 rounded-md text-white">Chiều cao vượt đỉnh</span>
            </p>
          </div>
        </div>
        <Image src="/artboard12.jpg" alt="" width={1920} height={1080} className="max-lg:hidden w-full" />
        <Image src="/PT.webp" alt="" width={150} height={150} className="absolute bottom-0 right-0 max-lg:hidden" />
        {/* circle */}
        <div className="absolute top-[32%] left-[27%] cursor-pointer w-[12%] hover:scale-110 duration-300 group max-lg:hidden">
          <Image src="/circle1.png" alt="circle1" width={240} height={240} className="w-full h-full" />
          <div className="bg-white shadow-[0px_0px_20px_16px_rgb(0_0_0/_0.05)] p-4 rounded-2xl text-[#84571B] absolute text-[0.9vw] top-0 left-[-120%] w-[120%] opacity-0 group-hover:opacity-100 duration-300">
            Phát triển khung xương chắc khỏe & tăng chiều cao vượt trội với <strong>CBP</strong> (125 mg/100g) & <strong>CPP</strong> (571 mg/100g) tăng cường hoạt động của nguyên bào xương. Hàm lượng <strong>Canxi</strong> cao hàng đầu (1475 mg/100g), tỷ lệ vàng <strong>Canxi : Phospho</strong> = 1,8:1 kết hợp với D3K1 & khoáng chất·giúp hấp thu Canxi tối đa.
          </div>
        </div>
        <div className="absolute top-[14%] left-[54%] cursor-pointer w-[10%] hover:scale-110 duration-300 group max-lg:hidden">
          <Image src="/circle2.png" alt="circle1" width={200} height={200} className="w-full h-full" />
          <div className="bg-white shadow-[0px_0px_20px_16px_rgb(0_0_0/_0.05)] p-4 rounded-2xl text-[#84571B] absolute text-[0.9vw] top-[0%] left-[100%] w-[100%] opacity-0 group-hover:opacity-100 duration-300">
            <strong>DHA và ARA</strong> giúp tăng chỉ số trí tuệ, phát triển trí não & hệ thần kinh, phát triển thị lực & sáng mắt
          </div>
        </div>
        <div className="absolute top-[40%] left-[57%] w-[10%] cursor-pointer hover:scale-110 duration-300 group max-lg:hidden">
          <Image src="/circle3.png" alt="circle1" width={200} height={200} className="w-full h-full" />
          <div className="bg-white shadow-[0px_0px_20px_16px_rgb(0_0_0/_0.05)] p-4 rounded-2xl text-[#84571B] absolute text-[0.9vw] top-[10%] left-[100%] w-[120%] opacity-0 group-hover:opacity-100 duration-300">
            <strong>Lactoferrin & IgG</strong> tăng cường điều hòa miễn dịch, Giúp kháng khuẩn, kháng virus, bảo vệ cơ thể khỏi các tác nhân gây hại.
          </div>
        </div>
        <div className="absolute bottom-[24%] left-[30%] w-[10%] cursor-pointer hover:scale-110 duration-300 group max-lg:hidden">
          <Image src="/circle4.png" alt="circle1" width={200} height={200} className="w-full h-full" />
          <div className="bg-white shadow-[0px_0px_20px_16px_rgb(0_0_0/_0.05)] p-4 rounded-2xl text-[#84571B] absolute text-[0.9vw] top-[0%] left-[-160%] w-[160%] opacity-0 group-hover:opacity-100 duration-300">
            <strong>OPO</strong> giúp hệ tiêu hóa vận hành tốt hơn, nhờ những tác động tích cực đến hệ sinh thái 100.000 tỷ vi khuẩn đường ruột. Đồng thời được bổ sung đặc biệt với lợi khuẩn Bifido-bacterium BB-12 và chất xơ (FOS+GOS).
          </div>
        </div>
        <div className="absolute bottom-[12%] left-[50%] w-[10%] cursor-pointer hover:scale-110 duration-300 group max-lg:hidden">
          <Image src="/circle5.png" alt="circle1" width={200} height={200} className="w-full h-full" />
          <div className="bg-white shadow-[0px_0px_20px_16px_rgb(0_0_0/_0.05)] p-4 rounded-2xl text-[#84571B] absolute text-[0.9vw] top-[10%] left-[100%] w-[160%] opacity-0 group-hover:opacity-100 duration-300">
            Cung cấp <strong>chất béo</strong> và <strong>năng lượng</strong> bền bỉ như 1 bữa ăn đầy đủ dinh dưỡng. <strong>Protein từ Đạm Whey thủy phân</strong> với kích thước siêu nhỏ dễ hấp thu & giảm tỉ lệ dị ứng sữa.
          </div>
        </div>
        <div className="lg:hidden text-xs">
          <div className="flex flex-col justify-center items-center mt-2 ">
            <Image src="/artboard-13.png" alt="bg-hop-sua" width={300} height={290} />
            <div className="flex flex-col px-2 mt-[-80px]">
              <div className="flex">
                <div className="md:w-1/4 w-1/3 relative flex justify-center items-center">
                  <Image src="/bong.webp" alt="bong" width={120} height={120} />
                  <span className="text-[#84571B] text-center text-shadow font-bold absolute max-w-[100px]">Cao hơn, chắc khỏe hơn từ cấp nguyên bào xương</span>
                </div>
                <div className="md:w-3/4 w-2/3 flex items-center pr-4">
                  <span className="text-[#84571B] font-semibold">
                    Phát triển khung xương chắc khỏe & tăng chiều cao vượt trội với <strong>CBP</strong> (125 mg/100g) & <strong>CPP</strong> (571 mg/100g) tăng cường hoạt động của nguyên bào xương. Hàm lượng <strong>Canxi</strong> cao hàng đầu (1475 mg/100g), tỷ lệ vàng <strong>Canxi : Phospho</strong> = 1,8:1 kết hợp với D3K1 & khoáng chất·giúp hấp thu Canxi tối đa.
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="md:w-1/4 w-1/3 relative flex justify-center items-center">
                  <Image src="/bong.webp" alt="bong" width={120} height={120} />
                  <span className="text-[#84571B] text-center text-shadow font-bold absolute max-w-[100px]">Tiêu hoá Tốt</span>
                </div>
                <div className="md:w-3/4 w-2/3 flex items-center pr-4">
                  <span className="text-[#84571B] font-semibold">
                    <strong>OPO</strong> giúp hệ tiêu hóa vận hành tốt hơn, nhờ những tác động tích cực đến hệ sinh thái 100.000 tỷ vi khuẩn đường ruột. Đồng thời được bổ sung đặc biệt với lợi khuẩn Bifido-bacterium BB-12 và chất xơ (FOS+GOS).
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="md:w-1/4 w-1/3 relative flex justify-center items-center">
                  <Image src="/bong.webp" alt="bong" width={120} height={120} />
                  <span className="text-[#84571B] text-center text-shadow font-bold absolute max-w-[100px]">Cung cấp dinh dưỡng toàn diện</span>
                </div>
                <div className="md:w-3/4 w-2/3 flex items-center pr-4">
                  <span className="text-[#84571B] font-semibold">
                    Cung cấp <strong>chất béo</strong> và <strong>năng lượng</strong> bền bỉ như 1 bữa ăn đầy đủ dinh dưỡng. <strong>Protein từ Đạm Whey thủy phân</strong> với kích thước siêu nhỏ dễ hấp thu & giảm tỉ lệ dị ứng sữa.
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="md:w-1/4 w-1/3 relative flex justify-center items-center">
                  <Image src="/bong.webp" alt="bong" width={120} height={120} />
                  <span className="text-[#84571B] text-center text-shadow font-bold absolute max-w-[100px]">Phát triển trí não & sáng mắt</span>
                </div>
                <div className="md:w-3/4 w-2/3 flex items-center pr-4">
                  <span className="text-[#84571B] font-semibold">
                    <strong>DHA và ARA </strong>
                    giúp tăng chỉ số trí tuệ, phát triển trí não & hệ thần kinh, phát triển thị lực & sáng mắt
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="md:w-1/4 w-1/3 relative flex justify-center items-center">
                  <Image src="/bong.webp" alt="bong" width={120} height={120} />
                  <span className="text-[#84571B] text-center text-shadow font-bold absolute max-w-[100px]">Tăng sức đề kháng</span>
                </div>
                <div className="md:w-3/4 w-2/3 flex items-center pr-4">
                  <span className="text-[#84571B] font-semibold">
                    <strong>Lactoferrin & IgG </strong>
                    tăng cường điều hòa miễn dịch, Giúp kháng khuẩn, kháng virus, bảo vệ cơ thể khỏi các tác nhân gây hại.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CongThuc