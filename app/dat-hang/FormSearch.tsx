'use client'

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { createOrder } from '@/services/orderServices';
import { toast } from 'react-toastify';
import LoadingIcon from '@/assets/icons/LoadingIcon';
import { formatDate } from '@/utils/formatDate';
import { OrderEntity } from '@/entities/order';
import { gtagReportConversion } from '@/utils/gtagReportConversion';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
  fullName: yup.string().required('Vui lòng nhập họ tên'),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Vui lòng nhập số điện thoại hợp lệ')
    .length(10, 'Số điện thoại phải đủ 10 chữ số')
    .required('Vui lòng nhập số điện thoại'),
  address: yup.string().required('Vui lòng nhập địa chỉ'),
});

function FormSearch(props: { ip?: string }) {
  const { ip } = props;

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: OrderEntity) => {
    setLoading(true);
    const submitForm = {
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      address: data.address,
    }
    const date = new Date(Date.now());
    const link = window.location.href
    try {
      if (process.env.NEXT_PUBLIC_GOOGLE_API_BASE_URL_2) {
        await fetch(process.env.NEXT_PUBLIC_GOOGLE_API_BASE_URL_2, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            date: formatDate(date),
            ...submitForm,
            link,
            ip
          }),
          mode: 'no-cors'
        })
      }
      gtagReportConversion()
      await createOrder(submitForm)
      // toast.success('Đăng ký đơn hàng thành công, Chúng tôi sẽ liên hệ quý khách trong thời gian tới')
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="my-8">
      <div className="px-8 md:px-16 py-4 md:py-8 md:w-[1000px] w-full m-auto bg-[url('/popup-mobile.png')] md:bg-[url('/popup-des.png')] bg-[length:100%_100%] bg-center rounded-xl">
        <div className="flex justify-center md:justify-end">
          <div className="md:w-2/3 w-full mt-28 max-md:mb-[240px]">
            <form className="flex flex-col gap-2 md:gap-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full flex gap-2 md:gap-4 flex-col">
                <div className="w-full">
                  <input
                    className="w-full px-4 py-2 rounded-full outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold border border-[#002A9E]"
                    placeholder='Họ và tên*'
                    {...register('fullName')}
                  />
                  {errors.fullName && <span className="text-[red] text-xs p-2">{errors.fullName.message}</span>}
                </div>
                <div className="w-full">
                  <input
                    className="w-full px-4 py-2 rounded-full outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold border border-[#002A9E]"
                    placeholder='Số điện thoại*'
                    {...register('phoneNumber')}
                  />
                  {errors.phoneNumber && <span className="text-[red] text-xs p-2">{errors.phoneNumber.message}</span>}
                </div>
              </div>
              <div className="w-full flex gap-2 md:gap-4 flex-col mb-4">
                <div className="w-full">
                  <input
                    placeholder="Bạn đang ở địa chỉ nào*"
                    className="w-full rounded-full px-4 py-2 outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold border border-[#002A9E]"
                    {...register("address", { required: true })}
                  />
                  {errors.address && <span className="text-[red] text-xs p-2">{errors.address.message}</span>}
                </div>
              </div>
              <div className="flex justify-center">
                <button type='submit' className="text-white italic uppercase hover:opacity-85 duration-300 flex justify-center items-center bg-[#002A9E] rounded-full px-16 py-2 transform animate-pulsate">
                  Bắt đầu tìm kiếm
                  {loading && <LoadingIcon size="small" />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormSearch