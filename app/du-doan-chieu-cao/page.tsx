
import Form from './Form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://wowtop.com.vn'),
  title: 'Phác đồ dự đoán chiều cao tương lai',
  description: '',
  keywords: 'Oz Farm Wowtop',
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    locale: 'vi_VN',
    title: 'Wowtop',
    url: 'https://wowtop.com.vn/du-doan-chieu-cao',
    siteName: 'Wowtop',
    type: 'website'
  }
}
function DuDoanChieuCao() {
  return (
    <main>
      <section className="mb-8">
        <div className="my-12 text-[#7f4807]">
          <div className="max-w-4xl m-auto max-md:px-4">
            <h1 className="text-4xl font-bold text-center my-4 uppercase">Phác đồ dự đoán chiều cao tương lai</h1>
            <p className="text-center">Phát triển chiều cao luôn là mong muốn không chỉ của các phụ huynh mà còn của chính các con. Chiều
              cao không chỉ phụ thuộc vào gen mà còn phụ thuộc nhiều vào chế độ dinh dưỡng, sinh hoạt và tập luyện.</p>
            <p className="text-center"><strong>Hãy cùng WOWTOP lập nên phác đồ dự đoán chiều cao tương lai để có thể xác định được giai đoạn
              vàng phù hợp</strong> cho lộ trình phát triển chiều cao tối đa của trẻ nhé</p>
          </div>
        </div>
        <Form />
      </section>
    </main>
  )
}

export default DuDoanChieuCao 