import React, { useState } from 'react'
import Modal from './common/Modal'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { ChangePassword } from '@/dto/user';
import { toast } from 'react-toastify';
import LoadingIcon from '@/assets/icons/LoadingIcon';
import { changePassword } from '@/services/change-password';
import ShowPassword from '@/assets/icons/ShowPassword';
import HidePassword from '@/assets/icons/HidePassword';


const schema = yup.object().shape({
  old_password: yup
    .string()
    .required('Vui lòng nhập mật khẩu cũ'),
  new_password: yup
    .string()
    .required('Vui lòng nhập mật khẩu mới'),
  confirm_new_password: yup
    .string()
    .oneOf([yup.ref('new_password')], 'Mật khẩu mới không khớp')
});

function ModalChangePassword({ open, onClose }: { open: boolean, onClose: () => void }) {

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: ChangePassword) => {
    setLoading(true);
    try {
      await changePassword(data)
      toast.success('Đổi mật khẩu thành công!')
      onClose()
      reset()
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal open={open} onClose={() => { }}>
      <div className="max-w-4xl md:min-w-[800px] m-auto bg-white p-8 rounded-xl mx-4 relative max-md:top-[-40px]">
        <div className="relative">
          <h1 className="text-[#002A9E] text-4xl font-bold text-center mb-8">Đổi mật khẩu</h1>
          <button
            className="absolute top-[-20px] right-[-10px] text-2xl font-bold"
            onClick={onClose}
          >
            x
          </button>
        </div>
        <form className="flex flex-col gap-4 form-register overflow-auto max-h-[70vh] px-2 mb-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <p className="mb-1">Nhập mật khẩu cũ</p>
            <div className="flex items-center bg-[#F7F7F7] rounded-full px-4">
              <input
                className="w-full px-4 py-3 rounded-full outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold bg-[#F7F7F7]"
                placeholder='Nhập mật khẩu cũ*'
                type={showOldPassword ? 'text' : 'password'}
                {...register('old_password')}
              />
              <div className="cursor-pointer" onClick={() => setShowOldPassword(pre => !pre)}>
                {!showOldPassword ? <ShowPassword width={20} height={20} /> : <HidePassword width={20} height={20} />}
              </div>
            </div>
            {errors.old_password && <span className="text-[red] text-xs p-2">{errors.old_password.message}</span>}
          </div>
          <div>
            <p className="mb-1">Nhập mật khẩu mới</p>
            <div className="flex items-center bg-[#F7F7F7] rounded-full px-4">
              <input
                className="w-full px-4 py-3 rounded-full outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold bg-[#F7F7F7]"
                placeholder='Nhập mật khẩu mới*'
                type={showNewPassword ? 'text' : 'password'}
                {...register('new_password')}
              />
              <div className="cursor-pointer" onClick={() => setShowNewPassword(pre => !pre)}>
                {!showNewPassword ? <ShowPassword width={20} height={20} /> : <HidePassword width={20} height={20} />}
              </div>
            </div>
            {errors.new_password && <span className="text-[red] text-xs p-2">{errors.new_password.message}</span>}
          </div>
          <div>
            <p className="mb-1">Nhập lại mật khẩu mới</p>
            <div className="flex items-center bg-[#F7F7F7] rounded-full px-4">
              <input
                className="w-full px-4 py-3 rounded-full outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold bg-[#F7F7F7]"
                placeholder='Nhập lại mật khẩu mới*'
                type={showConfirmNewPassword ? 'text' : 'password'}
                {...register('confirm_new_password')}
              />
              <div className="cursor-pointer" onClick={() => setShowConfirmNewPassword(pre => !pre)}>
                {!showConfirmNewPassword ? <ShowPassword width={20} height={20} /> : <HidePassword width={20} height={20} />}
              </div>
            </div>
            {errors.new_password && <span className="text-[red] text-xs p-2">{errors.new_password.message}</span>}
          </div>
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

export default ModalChangePassword