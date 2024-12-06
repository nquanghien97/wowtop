'use client'

import React, { useState } from 'react'
import Modal from './common/Modal'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import LoadingIcon from '@/assets/icons/LoadingIcon';
import { toast } from 'react-toastify';
import { findUserByPhoneNumber, forgotPassword } from '@/services/user';
import ShowPassword from '@/assets/icons/ShowPassword';
import HidePassword from '@/assets/icons/HidePassword';
import { sendOtp, verifyOtp } from '@/services/otp';

interface FormValues {
  phone_number: string;
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
  phone_number: yup
    .string()
    .matches(phoneRegExp, 'Vui lòng nhập số điện thoại hợp lệ')
    .required('Vui lòng nhập số điện thoại'),
});

function ModalForgotPassword({ open, onClose, token }: { open: boolean, onClose: () => void, token?: string }) {

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({
    otp: '',
    password: '',
  });

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      if (!otp) {
        await findUserByPhoneNumber({ token: token || '', phone_number: data.phone_number })
        await sendOtp(data.phone_number)
        setShowForm(true);
      }
      if (otp) {
        await verifyOtp({ phone_number: data.phone_number, otp })
        await forgotPassword({ phone_number: data.phone_number, password })
      }
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal open={open} onClose={() => { }}>
      <div className="max-w-4xl md:min-w-[800px] m-auto bg-white p-8 rounded-xl mx-4 relative max-md:top-[-40px]">
        <div className="relative">
          <h1 className="text-[#002A9E] text-4xl font-bold text-center mb-8">Quên mật khẩu</h1>
          <button
            className="absolute top-[-20px] right-[-10px] text-2xl font-bold"
            onClick={onClose}
          >
            x
          </button>
        </div>
        <form className="flex flex-col gap-4 form-register overflow-auto max-h-[70vh] px-2 mb-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <p className="mb-1">Nhập số điện thoại đã đăng ký</p>
            <input
              className="w-full px-4 py-3 rounded-full outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold bg-[#F7F7F7]"
              placeholder='Nhập số điện thoại*'
              {...register('phone_number')}
            />
            {errors.phone_number && <span className="text-[red] text-xs p-2">{errors.phone_number.message}</span>}
          </div>
          {showForm && (
            <>
              <div>
                <p className="mb-1">Nhập mã OTP được gửi về số điện thoại của bạn</p>
                <input
                  className="w-full px-4 py-3 rounded-full outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold bg-[#F7F7F7]"
                  placeholder='Nhập mã OTP*'
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <div>
                <p className="mb-1">Mật khẩu</p>
                <div className="flex items-center bg-[#F7F7F7] rounded-full px-4">
                  <input
                    className="w-full py-3 outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold bg-[#F7F7F7] rounded-full"
                    placeholder='Nhập mật khẩu*'
                    type={showPassword ? 'text' : 'password'}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="cursor-pointer" onClick={() => setShowPassword(pre => !pre)}>
                    {!showPassword ? <ShowPassword width={20} height={20} /> : <HidePassword width={20} height={20} />}
                  </div>
                </div>
                {error.password.length !== 0 && <span className="text-[red] text-xs p-2">{error.password}</span>}
              </div></>
          )}
          <div className="flex justify-center">
            <button type='submit' className="text-white italic uppercase hover:opacity-85 duration-300 mr-2 flex justify-center items-center bg-[#002A9E] rounded-full px-16 py-4">
              Xác nhận
              {loading && <LoadingIcon size="small" />}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default ModalForgotPassword