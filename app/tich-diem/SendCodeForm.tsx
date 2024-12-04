'use client'

import SendIcon from '@/assets/icons/SendIcon'
import React from 'react'

function SendCodeForm() {
  return (
    <div className="flex items-center w-1/2 m-auto border rounded-xl">
      <input type="text" placeholder='Nhập mã của bạn vào đây' className="w-full outline-0 px-4 py-2 rounded-xl" />
      <div className="mx-2 cursor-pointer">
        <SendIcon width={20} height={20} />
      </div>
    </div>
  )
}

export default SendCodeForm