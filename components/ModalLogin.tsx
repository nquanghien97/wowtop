import { Dispatch, useState } from 'react'
import Modal from './common/Modal'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { LoginUser } from '@/dto/user';
import { toast } from 'react-toastify';
import LoadingIcon from '@/assets/icons/LoadingIcon';
import { loginUser } from '@/services/auth';
import { getCurrentUser } from '@/services/user';
import { useAuthStore } from '@/zustand/auth';
import ShowPassword from '@/assets/icons/ShowPassword';
import HidePassword from '@/assets/icons/HidePassword';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
  phone_number: yup
    .string()
    .matches(phoneRegExp, 'Vui lòng nhập số điện thoại hợp lệ')
    .required('Vui lòng nhập số điện thoại'),
  password: yup
    .string()
    .required('Vui lòng nhập mật khẩu'),
});

function ModalLogin(
  { open, setIsOpenLogin, setIsOpenRegister, setIsOpenForgotPassword } 
  :
  { open: boolean, setIsOpenLogin: (isOpen: boolean) => void, setIsOpenRegister: Dispatch<React.SetStateAction<boolean>>, setIsOpenForgotPassword: Dispatch<React.SetStateAction<boolean>> })
  {

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });


  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuthStore()

  const onSubmit = async (data: LoginUser) => {
    setLoading(true);
    try {
      const res_login = await loginUser(data)
      const res_user = await getCurrentUser(res_login.accessToken)
      setUser(res_user.data)
      toast.success('Đăng nhập thành công!')
      setIsOpenLogin(false)
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
          <h1 className="text-[#002A9E] text-4xl font-bold text-center mb-8">Đăng nhập</h1>
          <button
            className="absolute top-[-20px] right-[-10px] text-2xl font-bold"
            onClick={() => setIsOpenLogin(false)}
          >
            x
          </button>
        </div>
        <form className="flex flex-col gap-4 form-register overflow-auto max-h-[70vh] px-2 mb-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <p className="mb-1">Số điện thoại</p>
            <input
              className="w-full px-4 py-3 rounded-full outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold bg-[#F7F7F7]"
              placeholder='Nhập số điện thoại*'
              {...register('phone_number')}
            />
            {errors.phone_number && <span className="text-[red] text-xs p-2">{errors.phone_number.message}</span>}
          </div>
          <div>
            <p className="mb-1">Mật khẩu</p>
            <div className="flex items-center bg-[#F7F7F7] rounded-full px-4">
              <input
                className="w-full py-3 outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold bg-[#F7F7F7] rounded-full"
                placeholder='Nhập mật khẩu*'
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
              />
              <div className="cursor-pointer" onClick={() => setShowPassword(pre => !pre)}>
                {!showPassword ? <ShowPassword width={20} height={20} /> : <HidePassword width={20} height={20} />}
              </div>
            </div>
            {errors.password && <span className="text-[red] text-xs p-2">{errors.password.message}</span>}
          </div>
          <div className="flex justify-end">
            <p
              className="underline text-[#002A9E] ml-2"
              onClick={() => {
                setIsOpenLogin(false)
                setIsOpenForgotPassword(true)
              }}
            >
              Quên mật khẩu
            </p>
          </div>
          <div className="flex justify-center">
            <button type='submit' className="text-white italic uppercase hover:opacity-85 duration-300 mr-2 flex justify-center items-center bg-[#002A9E] rounded-full px-16 py-4">
              Xác nhận
              {loading && <LoadingIcon size="small" />}
            </button>
          </div>
        </form>
        <p className="text-center">
          Chưa có tài khoản?
          <button
            className="underline text-[#002A9E] ml-2"
            onClick={() => {
              setIsOpenLogin(false)
              setIsOpenRegister(true)
            }}
          >
            Đăng ký
          </button>
        </p>
      </div>
    </Modal>
  )
}

export default ModalLogin