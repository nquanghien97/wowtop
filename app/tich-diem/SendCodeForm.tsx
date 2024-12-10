'use client'

import LoadingIcon from '@/assets/icons/LoadingIcon';
import SendIcon from '@/assets/icons/SendIcon'
import { sendAccumulationCode } from '@/services/accumulation';
import { useAuthStore } from '@/zustand/auth';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

function SendCodeForm() {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const { user, setIsOpenLogin } = useAuthStore();

  const handleSendCode = async () => {
    setLoading(true);
    try {
      if(!user) {
        setIsOpenLogin(true);
        return;
      }
      await sendAccumulationCode(code)
      toast('Tích điểm thành công!')
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center w-1/2 m-auto border rounded-xl bg-white">
      <input type="text" placeholder='Nhập mã của bạn vào đây' className="w-full outline-0 px-4 py-2 rounded-xl" onChange={(e) => setCode(e.target.value)} />
      <div className="mx-2 cursor-pointer" onClick={handleSendCode}>
        {loading ? (
          <LoadingIcon size='small' />
        ) : (
          <SendIcon width={20} height={20} />
        )}
      </div>
    </div>
  )
}

export default SendCodeForm