import { getUser } from '@/services/user'
import { cookies } from 'next/headers'
import Image from 'next/image'
import React from 'react'

async function page() {

  const cookieStore = cookies()
  const token = cookieStore.get('token')
  const { data } = await getUser(token?.value || '')
  return (
    <main className="bg-[url('/BG-1.png')] bg-[length:100%_100%] py-8">
      <Image src="/Heading-3.png" alt="thông tin tài khoản" width={754} height={69} className="m-auto py-4" />
      <div className="max-w-4xl m-auto mb-8">
        <div className="bg-[#12448E] flex justify-around items-center rounded-t-2xl">
          <div className="flex items-center">
            <Image src="/USER.png" alt="user" width={100} height={100} />
            <span className="text-4xl text-white font-bold">Thông tin tài khoản</span>
          </div>
          <div>
            <span className="text-xl text-white underline">Chỉnh sửa</span>
          </div>
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
              <p className="font-bold">{data.mother_dob}</p>
            </div>
            <div className="flex-1">
              <p className="text-[#00609C] text-xl">Ngày tháng năm sinh bé</p>
              <p className="font-bold">{data.child_dob}</p>
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
        <div className="bg-[#BD9522] flex justify-around items-center rounded-t-2xl">
          <div className="flex items-center">
            <Image src="/WALLET.png" alt="WALLET" width={100} height={100} />
            <span className="text-4xl text-white font-bold">Lịch sử</span>
          </div>
          <div>
            <span className="text-4xl text-white font-bold">Chọn ngày</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page