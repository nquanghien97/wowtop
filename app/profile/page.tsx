import UpdateUser from '@/components/UpdateUser'
import { getAccumulationCode } from '@/services/accumulation'
import { getCurrentUser } from '@/services/user'
import { formatDateWithoutHours } from '@/utils/formatDate'
import { cookies } from 'next/headers'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

export const dynamic = 'force-dynamic'
async function page() {

  const cookieStore = cookies()
  const token = cookieStore.get('token')
  const { data } = await getCurrentUser()
  const { data: data_accululation } = await getAccumulationCode()

  if (!token || !data) {
    redirect('/')
  }

  return (
    <main className="bg-[url('/BG-1.png')] bg-[length:100%_100%]">
      <Image src="/Heading-3.png" alt="thông tin tài khoản" width={754} height={69} className="m-auto py-16" />
      <div className="max-w-4xl m-auto mb-8">
        <div className="bg-[#12448E] flex justify-around items-center rounded-t-2xl">
          <div className="flex items-center">
            <Image src="/USER.png" alt="user" width={100} height={100} />
            <span className="text-4xl text-white font-bold">Thông tin tài khoản</span>
          </div>
          <UpdateUser />
        </div>
        <div className="py-12 px-[160px] bg-white">
          <div className="flex mb-4">
            <div className="flex-1">
              <p className="text-[#00609C] text-xl">Họ và tên</p>
              <p className="font-bold">{data.full_name}</p>
            </div>
            <div className="flex-1">
              <p className="text-[#00609C] text-xl">Số điện thoại</p>
              <p className="font-bold">{data.phone_number}</p>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="flex-1">
              <p className="text-[#00609C] text-xl">Ngày tháng năm sinh mẹ</p>
              <p className="font-bold">{formatDateWithoutHours(data.mother_dob)}</p>
            </div>
            <div className="flex-1">
              <p className="text-[#00609C] text-xl">Ngày tháng năm sinh bé</p>
              <p className="font-bold">{formatDateWithoutHours(data.child_dob)}</p>
            </div>
          </div>
          <div>
            <p className="text-[#00609C] text-xl">Địa chỉ</p>
            <p className="font-bold">{`${data.address}, ${data.ward}, ${data.district}, ${data.province}`}</p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl m-auto mb-8">
        <div className="bg-[#BD9522] flex justify-around items-center rounded-t-2xl">
          <div className="flex items-center">
            <Image src="/WALLET.png" alt="WALLET" width={100} height={100} />
            <span className="text-4xl text-white font-bold">Ví điểm</span>
          </div>
          <div>
            <span className="text-4xl text-white font-bold">{data.points_accumulation} điểm</span>
          </div>
        </div>
      </div>
      <div className="max-w-4xl m-auto mb-8">
        <div className="bg-[#870db7] flex justify-around items-center rounded-t-2xl">
          <div className="flex items-center">
            <Image src="/HISTORY.png" alt="HISTORY" width={100} height={100} />
            <span className="text-4xl text-white font-bold">Lịch sử</span>
          </div>
          <div>
            <span className="text-4xl text-white font-bold">Chọn ngày</span>
          </div>
        </div>
        <div className="py-12 px-[160px] bg-white">
          <div className="rounded-xl border border-black overflow-hidden">
            <table className="w-full text-center">
              <thead>
                <tr>
                  <th className="border-b border-r border-black py-2">Thời gian</th>
                  <th className="border-b border-black py-2">Mã</th>
                </tr>
              </thead>
              <tbody>
                {data_accululation.map((data: any) => (
                  <tr key={data.id}>
                    <td className="border-r border-black py-2">{formatDateWithoutHours(data.created_at)}</td>
                    <td className="py-2">{data.code}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page