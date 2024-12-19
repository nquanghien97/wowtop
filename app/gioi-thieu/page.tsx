import Link from 'next/link'
import Image from 'next/image'

function page() {
  return (
    <main className="bg-gioi-thieu">
      <section className="md:mb-20">
        <Image src="/gioi-thieu/banner-gioi-thieu.jpg" alt="banner-gioi-thieu" width={1920} height={1080} className="w-full" />
      </section>
      <section className="mb-8">
        <div className="max-w-7xl m-auto md:bg-[url('/gioi-thieu/asset_3.png')] bg-[length:100%_100%]">
          <div className="flex p-8 max-md:flex-col">
            <div className="w-2/5 md:relative mx-auto">
              <Image src="/lon-wow.png" alt="asset_4" width={256} height={452} className="w-[90%] md:absolute md:top-[-120px]" />
            </div>
            <div className="w-full md:w-3/5">
              <div>
                <h2 className="text-xl text-[#002A9E] uppercase font-semibold">WOWTOP PREMIUMN NUTRITIONAL GROWTH MILK FORMULA</h2>
                <p className="mb-4 text-xl text-[#002A9E] uppercase font-semibold">Là thực phẩm dinh dưỡng công thức cao cấp dành cho trẻ em từ 1 tuổi trở lên</p>
                <div className="w-full h-[2px] bg-[#002A9E] mb-4" />
                <div className="text-[#84571B]">
                  <p className="mb-2"><strong>Sữa bột dinh dưỡng WOWTOP</strong> là thành quả của các nghiên cứu khoa học mới nhất ứng dụng cơ chế tăng chiều cao từ nguyên bào xương - bước ngoặt trong phát triển chiều cao nhờ vượt qua tiềm năng do gen quy định. </p>
                  <p className="mb-2">Nhờ chứa hàm lượng cao hoạt chất CBP (Đạm chuẩn hoá từ sữa non), WOWTOP gia tăng số lượng và chất lượng của nguyên bào xương (Còn gọi là tạo cốt bào) nhờ đó thúc đẩy khung xương dài cao vượt tiềm năng của gen, nhu cầu khoáng chất (Canxi, Phospho, Magie..) của cơ thể cũng vì thế mà tăng cao để hoàn thiện khung xương. WOWTOP chứa hàm lượng khoáng chất cao nhất trên thị trường giúp cung cấp đủ nguyên liệu để hoàn thiện xương, nhờ đó trẻ cao vượt tiềm năng tối ưu.</p>
                  <p>WOWTOP nhập khẩu từ New Zealand - nơi sản sinh loại sữa “tốt nhất thế giới” từ bò ăn cỏ tự nhiên, đảm bảo nguồn sữa sạch, giàu dưỡng chất vượt trội, đáp ứng các tiêu chuẩn khắt khe nhất trên thế giới về sữa cho trẻ.<br />
                    Sử dụng WOWTOP, con cao hơn không chỉ về lượng mà còn về chất nhờ cơ chế kích hoạt nguyên bào Xương với Sữa non chuẩn hóa CBP - đột phá mới nhất từ New Zealand, giúp khung xương phát triển dài hơn, chắc khỏe hơn, tạo chỗ trống để hấp thụ tối đa Canxi & khoáng chất. Đây là cơ chế hỗ trợ tăng chiều cao vượt trội, giúp trẻ phát triển chiều cao cả về “lượng” (số cm chiều cao) và “chất” (mật độ xương và độ chắc khỏe).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-7xl m-auto px-2">
          <div className="bg-[url('/asset_24.png')] bg-[length:100%_100%] min-h-[120px] flex items-center justify-center max-w-4xl m-auto mb-8">
            <span className="uppercase font-bold bg-text-blue text-[5vw] md:text-5xl py-2 mt-2">Nguồn gốc & Nhà máy</span>
          </div>
          <div className="flex max-md:flex-col mb-4">
            <div className="w-full md:w-2/5">
              <h3 className="font-bold text-[#002A9E] text-xl mb-2">Sản xuất và nhập khẩu từ NewZealand</h3>
              <p className="text-[#002A9E] mb-2">Sữa công thức cao cấp WOWTOP được sản xuất bởi nhà máy New Zealand Pure Dairy (NZPDP), North Shore, New Zealand. Được thành lập và đi vào hoạt động từ năm 2010 - NZPDP có lịch sử 14 năm chuyên sản xuất các sản phẩm sữa công thức cho trẻ em trên khắp thế giới.</p>
              <p className="text-[#84571B] font-semibold mb-2">Nhà máy New Zealand Pure Dairy có công nghệ tự động hóa tiên tiến nhất</p>
              <ul className="bg-[url('/gioi-thieu/asset_5.png')] bg-[length:100%_100%] p-4">
                <li className="flex mb-2">
                  <div className="flex items-center mr-2">
                    <Image src="/gioi-thieu/asset_6.png" alt="asset_6" width={60} height={60} />
                  </div>
                  <p className="text-[#002A9E] font-semibold">Lắp đặt các thiết bị tiên tiến nhất ( nhập khẩu từ Thuỵ Điển, Đức, Nhật Bản và các nước khác )</p>
                </li>
                <li className="flex mb-2">
                  <div className="flex items-center mr-2">
                    <Image src="/gioi-thieu/asset_6.png" alt="asset_6" width={60} height={60} />
                  </div>
                  <p className="text-[#002A9E] font-semibold">Lắp đặt các thiết bị tiên tiến nhất ( nhập khẩu từ Thuỵ Điển, Đức, Nhật Bản và các nước khác )</p>
                </li>
                <li className="flex mb-2">
                  <div className="flex items-center mr-2">
                    <Image src="/gioi-thieu/asset_6.png" alt="asset_6" width={60} height={60} />
                  </div>
                  <p className="text-[#002A9E] font-semibold">Lắp đặt các thiết bị tiên tiến nhất ( nhập khẩu từ Thuỵ Điển, Đức, Nhật Bản và các nước khác )</p>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-3/5">
              <Image src="/gioi-thieu/asset_7.png" alt="asset_7" width={791} height={533} className="w-full" />
            </div>
          </div>
          <div className="flex">
            <Image src="/gioi-thieu/asset_8.png" alt="asset_8" width={40} height={40} className="mr-2" />
            <h3 className="font-bold text-[#002A9E] text-xl mb-2">Đảm bảo môi trường tối ưu để chăn nuôi và khai khác sữa đạt chất lượng tốt nhất.</h3>
          </div>
          <div className="mb-8">
            <p className="mb-2">Với cơ sở sản xuất 3 CAO: Công nghệ Cao, Tốc độ cao, Đội ngũ kỹ thuật trình độ cao, NZPDP đảm bảo sản phẩm tuân thủ tiêu chuẩn và nhận được các chứng nhận cao nhất của quốc tế và quốc gia bản địa như:</p>
            <Image src="/cn.png" alt='cn' width={828} height={112} className="w-full md:w-1/2 mb-2" />
            <ul className="text-[#002A9E]">
              <li><strong>Non GMO:</strong> Chứng nhận không sử dụng nguyên liệu biến đổi Gen</li>
              <li><strong>Grass Fed:</strong> Chứng nhận nguồn sữa từ bò ăn cỏ tự nhiên</li>
              <li><strong>Natural Ingredient:</strong> Chứng nhận sử dụng nguyên liệu từ thiên nhiên</li>
              <li><strong>GMP -</strong> Tiêu chuẩn thực hành sản xuất tốt chuẩn thế giới</li>
              <li><strong>Hazard -</strong> Hệ thống phân tích và kiểm soát nguy hại cho sữa bột công thức dành cho trẻ sơ sinh và trẻ nhỏ</li>
              <li>Chương trình quản lý rủi ro từ Bộ Công nghiệp sơ cấp (MPI) New Zealand</li>
              <li>Nhà xuất khẩu sản phẩm động vật từ Bộ Công nghiệp sơ cấp (MPI) New Zealand</li>
              <li>CNCA, CFDA, CCIC ... cùng hàng loạt các chứng nhận khác</li>
            </ul>
          </div>
          <div className="flex max-md:flex-col mb-8">
            <div className="w-full md:w-3/5">
              <Image src="/gioi-thieu/asset_9.png" alt="asset_9" width={791} height={533} className="w-full" />
            </div>
            <div className="w-full md:w-2/5">
              <h3 className="font-bold text-[#002A9E] text-xl mb-2">Dây chuyền sản xuất tiên tiến hàng đầu thế giới</h3>
              <p className="text-[#84571B] font-semibold mb-2">Bò được đảm bảo sống trong môi trường tự nhiên, xanh, sạch, chất lượng </p>
              <div>
                <div className="flex gap-8 mb-8">
                  <div className="w-1/2 flex items-center">
                    <div className="bg-[url('/gioi-thieu/asset_5.png')] bg-[length:100%_100%] p-4 relative">
                      <span>Bò được massage dọc theo lưng và hai bên sườn bằng những chiếc bàn chải lông cứng tự động.</span>
                      <Image src="/gioi-thieu/arrow_right.png" alt="arrow_right" width={42} height={32} className="absolute right-[-10%] top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                  <div className="flex items-center w-1/2">
                    <div className="bg-[url('/gioi-thieu/asset_5.png')] bg-[length:100%_100%] p-4 relative">
                      <span>Đi đến khu vực điểm tâm.</span>
                      <Image src="/gioi-thieu/arrow_down.png" alt="arrow_down" width={42} height={32} className="absolute left-1/2 bottom-[-50%] -translate-x-1/2" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-8 mb-8">
                  <div className="w-1/2 flex items-center">
                    <div className="bg-[url('/gioi-thieu/asset_5.png')] bg-[length:100%_100%] p-4 relative">
                      <p>VẮT SỮA.<br />Kết nối với máy tính để theo dõi sát sao theo thời gian thực các chỉ số sức khoẻ và phát hiện sớm các nguy cơ tiềm ẩn của bò.</p>
                      <Image src="/gioi-thieu/arrow_down.png" alt="arrow_down" width={42} height={32} className="absolute left-1/2 bottom-[-12%] -translate-x-1/2" />
                    </div>
                  </div>
                  <div className="flex items-center w-1/2">
                    <div className="bg-[url('/gioi-thieu/asset_5.png')] bg-[length:100%_100%] p-4 relative">
                      <span>Trong lúc tận hưởng bữa ăn, hệ thống cánh tay đòn rửa sẽ làm nhiệm vụ vệ sinh bầu vú, núm vú bằng nước ấm và kích thích sữa cho bò.</span>
                      <Image src="/gioi-thieu/arrow_left.png" alt="arrow_left" width={42} height={32} className="absolute left-[-16%] top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-[url('/gioi-thieu/asset_5.png')] bg-[length:100%_100%] p-4 relative">
                    <span>Di chuyển, vui chơi, nô đùa ở bãi chăn thả.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-md:flex-col mb-8">
            <div className="md:w-2/5">
              <h3 className="font-bold text-[#002A9E] text-xl mb-4">Nguồn sữa &quot;Tốt nhất thế giới&quot; từ New Zealand</h3>
              <p className="text-[#002A9E]">Nhờ sử dụng Sữa bò New Zealand từ Bò Ăn Cỏ Tươi cùng quy trình vắt sữa nghiêm ngặt, WOWTOP có hương vị thơm ngon với hàm lượng dinh dưỡng cao. Sữa bò tại New Zealand được mệnh danh là “nguồn sữa tốt nhất thế giới”, đến từ những con bò nuôi thả tự nhiên, ăn cỏ tươi 365 ngày/ năm, và được chăm sóc bởi đôi bàn tay của  những người nông dân New Zealand giàu kinh nghiệm.</p>
            </div>
            <div className="w-full md:w-3/5">
              <Image src="/gioi-thieu/asset_10.png" alt="asset_10" width={791} height={533} className="w-full" />
            </div>
          </div>
          <div className="flex flex-wrap max-md:flex-col">
            <div className="px-2 md:w-1/3">
              <div className="bg-[url('/gioi-thieu/asset_5.png')] bg-[length:100%_100%] p-8 mb-[16%]">
                <Image src="/gioi-thieu/asset_11.png" alt="asset_11" width={100} height={100} className="m-auto mt-[-20%]" />
                <p>Quốc đảo New Zealand có đồng cỏ rộng lớn và khí hậu ôn hòa. Với lượng mưa trung bình năm là 640-1500mm, đồng cỏ tại đây xanh tươi quanh năm. New Zealand áp dụng phương pháp canh tác hữu cơ, nuôi gia súc ngoài đồng cỏ, tự do đi lại và ăn cỏ tươi. Quốc gia này cấm tuyệt đối việc sử dụng Hormone tăng trưởng trong chăn nuôi bò sữa. Ở New Zealand không có bệnh lạ hay ký sinh trùng từ bên ngoài vì vị trí biệt lập và môi trường sạch sẽ. Những điều kiện này khiến New Zealand trở thành môi trường lý tưởng cho chăn nuôi bò sữa, cho phép sản xuất sữa chất lượng hàng đầu!</p>
              </div>
            </div>
            <div className="px-2 md:w-1/3">
              <div className="bg-[url('/gioi-thieu/asset_5.png')] bg-[length:100%_100%] p-8 mb-[16%]">
                <Image src="/gioi-thieu/asset_12.png" alt="asset_12" width={100} height={100} className="m-auto mt-[-20%]" />
                <p>Quốc đảo New Zealand có đồng cỏ rộng lớn và khí hậu ôn hòa. Với lượng mưa trung bình năm là 640-1500mm, đồng cỏ tại đây xanh tươi quanh năm. New Zealand áp dụng phương pháp canh tác hữu cơ, nuôi gia súc ngoài đồng cỏ, tự do đi lại và ăn cỏ tươi. Quốc gia này cấm tuyệt đối việc sử dụng Hormone tăng trưởng trong chăn nuôi bò sữa. Ở New Zealand không có bệnh lạ hay ký sinh trùng từ bên ngoài vì vị trí biệt lập và môi trường sạch sẽ. Những điều kiện này khiến New Zealand trở thành môi trường lý tưởng cho chăn nuôi bò sữa, cho phép sản xuất sữa chất lượng hàng đầu!</p>
              </div>
            </div>
            <div className="px-2 md:w-1/3">
              <div className="bg-[url('/gioi-thieu/asset_5.png')] bg-[length:100%_100%] p-8 mb-[16%]">
                <Image src="/gioi-thieu/asset_13.png" alt="asset_13" width={100} height={100} className="m-auto mt-[-20%]" />
                <p>Quốc đảo New Zealand có đồng cỏ rộng lớn và khí hậu ôn hòa. Với lượng mưa trung bình năm là 640-1500mm, đồng cỏ tại đây xanh tươi quanh năm. New Zealand áp dụng phương pháp canh tác hữu cơ, nuôi gia súc ngoài đồng cỏ, tự do đi lại và ăn cỏ tươi. Quốc gia này cấm tuyệt đối việc sử dụng Hormone tăng trưởng trong chăn nuôi bò sữa. Ở New Zealand không có bệnh lạ hay ký sinh trùng từ bên ngoài vì vị trí biệt lập và môi trường sạch sẽ. Những điều kiện này khiến New Zealand trở thành môi trường lý tưởng cho chăn nuôi bò sữa, cho phép sản xuất sữa chất lượng hàng đầu!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl m-auto">
          <div className="bg-[url('/asset_24.png')] bg-[length:100%_100%] min-h-[120px] flex items-center justify-center max-w-5xl m-auto mb-8">
            <span className="uppercase font-bold bg-text-blue text-[5vw] md:text-5xl py-2 mt-2">Tiêu chuẩn hàng đầu thế giới</span>
          </div>
          <div className="flex flex-wrap">
            <div className="p-4 md:w-1/3">
              <Image src="/gioi-thieu/asset_14.png" alt="asset_14" width={213} height={167} className="h-[200px] m-auto" />
              <h3 className="font-bold text-[#002A9E] text-xl mb-4 text-center">WOWTOP sử dụng nguồn sữa từ bò ăn cỏ tự nhiên</h3>
              <p className="text-[#84571B] font-semibold mb-2">Sữa bò grass-fed được thu hoạch từ những con bò được nuôi bằng cỏ và không được cho ăn thức ăn chứa hóa chất hoặc hormone tăng trưởng. Sữa bò đáp ứng tiêu chuẩn Grass-fed được ưu tiên  sử dụng trong các loại sữa cao cấp bởi nguồn sữa này chứa nhiều chất dinh dưỡng hơn và không chứa các chất phụ gia tiềm năng từ thức ăn không tự nhiên mà bò được nuôi dưỡng. Phương pháp này hỗ trợ phúc lợi động vật, tính bền vững của môi trường và sản xuất các sản phẩm từ sữa sạch, giàu dinh dưỡng.</p>
            </div>
            <div className="p-4 md:w-1/3">
              <Image src="/gioi-thieu/asset_15.png" alt="asset_15" width={186} height={186} className="h-[200px] m-auto" />
              <h3 className="font-bold text-[#002A9E] text-xl mb-4 text-center">WOWTOP sử dụng nguồn sữa từ bò ăn cỏ tự nhiên</h3>
              <p className="text-[#84571B] font-semibold mb-2">Sữa bò grass-fed được thu hoạch từ những con bò được nuôi bằng cỏ và không được cho ăn thức ăn chứa hóa chất hoặc hormone tăng trưởng. Sữa bò đáp ứng tiêu chuẩn Grass-fed được ưu tiên  sử dụng trong các loại sữa cao cấp bởi nguồn sữa này chứa nhiều chất dinh dưỡng hơn và không chứa các chất phụ gia tiềm năng từ thức ăn không tự nhiên mà bò được nuôi dưỡng. Phương pháp này hỗ trợ phúc lợi động vật, tính bền vững của môi trường và sản xuất các sản phẩm từ sữa sạch, giàu dinh dưỡng.</p>
            </div>
            <div className="p-4 md:w-1/3">
              <Image src="/gioi-thieu/asset_16.png" alt="asset_16" width={213} height={167} className="h-[200px] m-auto" />
              <h3 className="font-bold text-[#002A9E] text-xl mb-4 text-center">WOWTOP sử dụng nguồn sữa từ bò ăn cỏ tự nhiên</h3>
              <p className="text-[#84571B] font-semibold mb-2">Sữa bò grass-fed được thu hoạch từ những con bò được nuôi bằng cỏ và không được cho ăn thức ăn chứa hóa chất hoặc hormone tăng trưởng. Sữa bò đáp ứng tiêu chuẩn Grass-fed được ưu tiên  sử dụng trong các loại sữa cao cấp bởi nguồn sữa này chứa nhiều chất dinh dưỡng hơn và không chứa các chất phụ gia tiềm năng từ thức ăn không tự nhiên mà bò được nuôi dưỡng. Phương pháp này hỗ trợ phúc lợi động vật, tính bền vững của môi trường và sản xuất các sản phẩm từ sữa sạch, giàu dinh dưỡng.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page