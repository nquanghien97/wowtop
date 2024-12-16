import Image from 'next/image'

function CongThuc() {
  return (
    <section className="relative bg-[url('/des-8.png')] bg-[length:100%_100%]">
        {/* <Image src="/des-8.png" alt="des-8" width={1920} height={1200} className="max-lg:hidden w-full" /> */}
        <div className="flex flex-col items-center justify-center text-[24px] lg:text-[2vw] uppercase text-center py-4">
          {/* <div>
            <p className="bg-text bg-clip-text text-transparent font-bold">Công thức tối ưu</p>
          </div>
          <div>
            <p className=" pt-1">
              <span className="bg-text bg-clip-text text-transparent">Cho </span>
              <span className="py-2 px-4 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 rounded-md text-white">Chiều cao vượt đỉnh</span>
            </p>
          </div> */}
          <Image src="/công thức@3x-8.png" alt="công thức@3x-8" width={600} height={200} className="m-auto" />
        </div>
        <Image src="/hop@3x-8.png" alt="hop@3x-8" width={640} height={737} className="m-auto w-1/3 pb-[10%] max-lg:hidden" />
        <Image src="/PT.webp" alt="" width={150} height={150} className="absolute bottom-0 right-0 max-lg:hidden" />
        {/* circle */}
        <div className="absolute top-[12%] left-[20%] cursor-pointer w-[12%] hover:scale-110 duration-300 max-lg:hidden">
          <Image src="/5@3x-8.png" alt="5@3x-8" width={280} height={240} className="w-full h-full transform animate-pulsate" />
          <div className="bg-white shadow-[0px_0px_20px_16px_rgb(0_0_0/_0.05)] p-4 rounded-2xl text-[#84571B] absolute text-[0.9vw] top-[100%] -left-[70%] w-[200%] duration-300 text-justify">
            Phát triển khung xương chắc khỏe & tăng chiều cao vượt trội với <strong>CBP</strong> (125 mg/100g) & <strong>CPP</strong> (571 mg/100g) tăng cường hoạt động của nguyên bào xương. Hàm lượng <strong>Canxi</strong> cao hàng đầu (1475 mg/100g), tỷ lệ vàng <strong>Canxi : Phospho</strong> = 1,8:1 kết hợp với D3K1 & khoáng chất·giúp hấp thu Canxi tối đa.
          </div>
        </div>
        <div className="absolute top-[12%] right-[20%] cursor-pointer w-[12%] hover:scale-110 duration-300 max-lg:hidden">
          <Image src="/Artboard 19@3x-8.png" alt="Artboard 19@3x-8" width={280} height={200} className="w-full h-full transform animate-pulsate" />
          <div className="bg-white shadow-[0px_0px_20px_16px_rgb(0_0_0/_0.05)] p-4 rounded-2xl text-[#84571B] absolute text-[0.9vw] top-[100%] -left-[10%] w-[100%] duration-300 text-justify">
            <strong>DHA và ARA</strong> giúp tăng chỉ số trí tuệ, phát triển trí não & hệ thần kinh, phát triển thị lực & sáng mắt
          </div>
        </div>
        <div className="absolute top-[44%] right-[20%] w-[12%] cursor-pointer hover:scale-110 duration-300 max-lg:hidden">
          <Image src="/2@3x-8.png" alt="2@3x-8" width={280} height={200} className="w-full h-full transform animate-pulsate" />
          <div className="bg-white shadow-[0px_0px_20px_16px_rgb(0_0_0/_0.05)] p-4 rounded-2xl text-[#84571B] absolute text-[0.9vw] top-[100%] -left-[10%] w-[120%] duration-300 text-justify">
            <strong>Lactoferrin & IgG</strong> tăng cường điều hòa miễn dịch, Giúp kháng khuẩn, kháng virus, bảo vệ cơ thể khỏi các tác nhân gây hại.
          </div>
        </div>
        <div className="absolute top-[44%] left-[20%] w-[12%] cursor-pointer hover:scale-110 duration-300 max-lg:hidden">
          <Image src="/4@3x-8.png" alt="4@3x-8" width={280} height={200} className="w-full h-full transform animate-pulsate" />
          <div className="bg-white shadow-[0px_0px_20px_16px_rgb(0_0_0/_0.05)] p-4 rounded-2xl text-[#84571B] absolute text-[0.9vw] top-[100%] left-[-44%] w-[160%] duration-300 text-justify">
            <strong>OPO</strong> giúp hệ tiêu hóa vận hành tốt hơn, nhờ những tác động tích cực đến hệ sinh thái 100.000 tỷ vi khuẩn đường ruột. Đồng thời được bổ sung đặc biệt với lợi khuẩn Bifido-bacterium BB-12 và chất xơ (FOS+GOS).
          </div>
        </div>
        <div className="absolute bottom-[12%] left-[46%] w-[12%] cursor-pointer hover:scale-110 duration-300 max-lg:hidden">
          <Image src="/1@3x-8.png" alt="1@3x-8" width={280} height={200} className="w-full h-full transform animate-pulsate" />
          <div className="bg-white shadow-[0px_0px_20px_16px_rgb(0_0_0/_0.05)] p-4 rounded-2xl text-[#84571B] absolute text-[0.9vw] top-[100%] -left-[100%] w-[300%] duration-300 text-justify">
            Cung cấp <strong>chất béo</strong> và <strong>năng lượng</strong> bền bỉ như 1 bữa ăn đầy đủ dinh dưỡng. <strong>Protein từ Đạm Whey thủy phân</strong> với kích thước siêu nhỏ dễ hấp thu & giảm tỉ lệ dị ứng sữa.
          </div>
        </div>
        <div className="lg:hidden text-xs py-4">
          <div className="flex flex-col justify-center items-center mt-2 ">
            <Image src="/hop@3x-8.png" alt="bg-hop-sua" width={400} height={290} />
            <div className="flex flex-col items-center px-2 mt-[-20px]">
              <div className="flex flex-col items-center">
                <div className="relative flex justify-center items-center ml-20">
                  <Image src="/5@3x-8.png" alt="5@3x-8" width={280} height={120} className="transform animate-pulsate" />
                </div>
                <div className="flex items-center px-8">
                  <span className="text-[#84571B] font-semibold text-justify">
                    Phát triển khung xương chắc khỏe & tăng chiều cao vượt trội với <strong>CBP</strong> (125 mg/100g) & <strong>CPP</strong> (571 mg/100g) tăng cường hoạt động của nguyên bào xương. Hàm lượng <strong>Canxi</strong> cao hàng đầu (1475 mg/100g), tỷ lệ vàng <strong>Canxi : Phospho</strong> = 1,8:1 kết hợp với D3K1 & khoáng chất·giúp hấp thu Canxi tối đa.
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative flex justify-center items-center ml-20">
                  <Image src="/4@3x-8.png" alt="4@3x-8" width={280} height={120} className="transform animate-pulsate" />
                </div>
                <div className="flex items-center px-8">
                  <span className="text-[#84571B] font-semibold text-justify">
                    <strong>OPO</strong> giúp hệ tiêu hóa vận hành tốt hơn, nhờ những tác động tích cực đến hệ sinh thái 100.000 tỷ vi khuẩn đường ruột. Đồng thời được bổ sung đặc biệt với lợi khuẩn Bifido-bacterium BB-12 và chất xơ (FOS+GOS).
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative flex justify-center items-center ml-20">
                  <Image src="/1@3x-8.png" alt="1@3x-8" width={280} height={120} className="transform animate-pulsate" />
                </div>
                <div className="flex items-center px-8">
                  <span className="text-[#84571B] font-semibold text-justify">
                    Cung cấp <strong>chất béo</strong> và <strong>năng lượng</strong> bền bỉ như 1 bữa ăn đầy đủ dinh dưỡng. <strong>Protein từ Đạm Whey thủy phân</strong> với kích thước siêu nhỏ dễ hấp thu & giảm tỉ lệ dị ứng sữa.
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative flex justify-center items-center ml-20">
                  <Image src="/Artboard 19@3x-8.png" alt="Artboard 19@3x-8" width={280} height={120} className="transform animate-pulsate" />
                </div>
                <div className="flex items-center px-8">
                  <span className="text-[#84571B] font-semibold text-justify">
                    <strong>DHA và ARA </strong>
                    giúp tăng chỉ số trí tuệ, phát triển trí não & hệ thần kinh, phát triển thị lực & sáng mắt
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative flex justify-center items-center ml-20">
                  <Image src="/2@3x-8.png" alt="2@3x-8" width={280} height={120} className="transform animate-pulsate" />
                </div>
                <div className="flex items-center px-8">
                  <span className="text-[#84571B] font-semibold text-justify">
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