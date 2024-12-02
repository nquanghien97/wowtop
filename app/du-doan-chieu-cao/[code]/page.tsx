import React from 'react'
import Image from 'next/image'
import { getInformations } from '@/services/heightCalculator'
import { ageCalculator } from '@/utils/ageCalculator'
import { Gender, heightCalculator } from '@/utils/heightCalculator'
import { InformationEntity } from '@/entities/information'
import LazyYouTubeEmbed from '@/components/YoutubeEmbed'

export const dynamic = 'force-dynamic'

async function Successfully({ params }: { params: { code: string } }) {
  const { data } = await getInformations({ code: params.code }) as { data: InformationEntity[] }
  const resultCalculator = heightCalculator(
    +data[0].currentHeight,
    ageCalculator(data[0].date_of_birth).years,
    ageCalculator(data[0].date_of_birth).months,
    +data[0].fatherHeight,
    +data[0].motherHeight,
    data[0].gender as Gender
  )
  if (!data) return <p>Không có dữ liệu</p>
  return (
    <div className="bg-[url('/bg-detail.png')] bg-[length:100%_100%]">
      <div className="max-w-6xl m-auto px-4 py-8">
        <div className="relative">
          <div className="flex justify-center">
            <Image src="/logo.webp" alt="logo2" width={400} height={134} />
          </div>
          <div className="text-center">
            <h2 className="text-[#135689] text-6xl py-2 uppercase">Chúc mừng</h2>
            <p className="text-2xl py-2">Mã phác đồ: {params.code}</p>
          </div>
          <div className="max-w-2xl m-auto my-2">
            <p className="text-center">Chúc mừng phụ huynh <strong>{data[0].parentName}</strong> đã hoàn thành thông tin của bé <strong>{data[0].fullName}</strong>, đội ngũ chuyên gia sức khỏe của WOWTOP sẽ lên phác đồ chi tiết để gửi lại bạn.</p>
          </div>
          <div className="flex justify-center my-2">
            <p className="px-4 py-2 bg-liner rounded-2xl">Dự kiến chiều cao của con ở độ tuổi 20 là: <strong>{resultCalculator?.predictedHeightAt20}</strong>cm</p>
          </div>
          <p className="max-w-2xl m-auto text-center my-4">Để nhận kết quả Phác đồ dự đoán chiều cao chi tiết từng giai đoạn của bé <strong>{data[0].fullName}</strong>, phụ huynh <strong>{data[0].parentName}</strong> vui lòng làm theo hướng dẫn sau đây:</p>
          <div className="flex justify-between items-center max-w-2xl m-auto mb-8">
            <div>
              <p className="text-[#135689] uppercase">Quét mã QRCODE của chuyên gia tư vấn chiều cao</p>
              <p className="text-[#135689] uppercase">Nhắn mã phác đồ để nhận kết quả chi tiết của con</p>
            </div>
            <Image src="/qr-zalo.png" alt="Mã QR" width={200} height={200} />
          </div>
          <div className="max-w-6xl m-auto">
            <div className="relative top-6 flex justify-center">
              <div className="bg-[#005D96] rounded-full px-8 py-2">
                <h3 className="uppercase text-xl md:text-2xl font-bold text-white">Một số nhầm tưởng của bố mẹ</h3>
              </div>
            </div>
            <div className="px-4 py-8 border border-[#135689] rounded-2xl">
              <h4 className="text-[#135689] font-bold">Thứ nhất: Bổ sung nhiều canxi là con sẽ cao</h4>
              <p className="text-sm pb-1">Thực tế, Canxi chỉ tham gia quá trình khoáng hóa, cao về lượng phải do Nguyên bào xương quyết định, nên Canxi còn cần các khoáng chất khác như Magie, Phospho. Canxi cần D3, K2 để hỗ trợ hấp thu và chuyển hóa, Vitamin A cũng rất quan trọng với chiều cao.<br />
                Và đặc biệt không được thiếu thành phần CBP giúp con cao hơn từ cấp độ nguyên bào
              </p>
              <h4 className="text-[#135689] font-bold">Thứ 2: Con cao rồi không cần tăng chiều cao</h4>
              <p className="text-sm pb-1">Thực thế, con cao thì nhu cầu dưỡng chất cho chiều cao rất lớn, không bổ sung sẽ khiến chất lượng xương kém và kìm hãm chiều cao về lâu dài<br />
                Không quan tâm chất lượng chiều cao sẽ khiến xương bị cong, vẹo, loãng xương, hoặc lâu dài kìm hãm chiều cao
              </p>
              <h4 className="text-[#135689] font-bold">Thứ 3: Chỉ quan tâm chiều cao</h4>
              <p className="text-sm pb-1">Trong khi Trí não của trẻ phát triển trong giai đoạn dưới 6 tuổi<br />
                Sức khỏe hệ tiêu hóa của trẻ ảnh hưởng đến hấp thu<br />
                Mải mê tăng chiều cao mà không quan tâm cân nặng, con sẽ bị gày yếu, thiếu chất. Do vậy,  bố mẹ cần hỗ trợ con phát triển toàn diện<br />
              </p>
              <h4 className="text-[#135689] font-bold">Thứ 4: Chỉ uống sữa tươi là đủ</h4>
              <p className="text-sm pb-1">
                Thực tế, sữa tươi có hàm lượng dưỡng chất thấp, chủ yếu “mát” là chính
              </p>
              <h4 className="text-[#135689] font-bold">Thứ 5: Không để ý đến luyện tập, sinh hoạt</h4>
              <p className="text-sm pb-1">
                Ngủ muộn, thường xuyên căng thẳng tâm lý làm giảm hormone tăng trưởng khiến trẻ hạn chế về chiều cao
              </p>
              <h4 className="text-[#135689] font-bold">Thứ 6: Bố mẹ thấp thì con không cao được hay bố mẹ cao thì không lo con thấp</h4>
              <p className="text-sm pb-1">
                Gen chiếm 23% yếu tố ảnh hưởng chiều cao<br />
                Gen không chỉ thể hiện ở chiều cao của bố mẹ<br />
                Gen chỉ quyết định “tiềm năng” chiều cao của con, việc con có đạt được tiềm năng hay không là do chế độ nuôi dạy<br />
              </p>
              <div className="mt-8 flex flex-col md:flex-row gap-10">
                <div className="md:w-1/2 w-full">
                  <div className="mb-8">
                    <LazyYouTubeEmbed videoId='6IrJ8Q4Fg6k' />
                  </div>
                  <p className="uppercase text-[#135689] font-bold text-center mx-8">Chuyên gia chia sẽ nguyên lý tăng chiều cao từ cấp độ nguyên bào</p>
                </div>
                <div className="md:w-1/2 w-full">
                  <p className="text-justify mb-2">Giúp trẻ tăng chiều cao bằng cách bổ sung <span className="text-[#135689] font-semibold">CBP</span> để kích thích <span className="text-[#135689] font-semibold">nguyên bào xương</span> (tế bào tạo xương) phát triển để sản xuất ra xương mới, hình thành khung xương dài hơn. Đồng thời bổ sung canxi cùng các dưỡng chất thiết yếu cho tăng trưởng và giúp xương chắc khoẻ hơn, để con <span className="text-[#135689] font-semibold">đạt chiều cao tối ưu không chỉ về lượng mà còn về chất.</span></p>
                  <p className="text-justify">Giúp trẻ tăng chiều cao cần chú trọng các yếu tố: Dinh dưỡng, luyện tập và sinh hoạt. Liên hệ chuyên gia chiều cao để được hỗ trợ thêm về xây dựng chế độ dinh dưỡng, bài tập và sinh hoạt tối ưu cho trẻ.</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="max-w-3xl m-auto text-[#135689] mb-8">
            <p>Bước 1: Tham gia Nhóm <strong>Cho con cao lớn trưởng thành tận cùng</strong></p>
            <p>Bước 2: Nhắn tin cho admin <strong>Bác sĩ Lăng Hường</strong> mã phác đồ để nhận kết quả Phác đồ dự đoán chiều cao chi tiết nhất cùng hướng dẫn giúp tăng chiều cao phù hợp với tình trạng của con</p>
          </div>
          <div className="max-w-xl m-auto flex justify-end gap-8">
            <div className="px-8 py-2 rounded-full bg-liner w-[330px] flex justify-center items-center cursor-pointer hover:opacity-80 duration-300">
              <span className="text-center text-[#135689]">Đến Group</span>
            </div>
            <div className="px-8 py-2 rounded-full bg-[#135689] w-[330px] flex justify-center items-center cursor-pointer hover:opacity-80 duration-300">
              <span className="text-center text-white">Nhắn tin bác sĩ ... để nhận phác đồ</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Successfully