'use client'

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import Select, { SelectInstance, SingleValue } from 'react-select';
import { useEffect, useId, useRef, useState } from 'react';
import { OrderEntity } from '@/entities/order';
import { createOrder } from '@/services/orderServices';
import { toast } from 'react-toastify';
import LoadingIcon from '@/assets/icons/LoadingIcon';
import Image from 'next/image'
import data from '@/app/data.json'
import { formatDate } from '@/utils/formatDate';

interface FormValues extends OrderEntity {
  provinceLabel?: string;
  districtLabel?: string;
  wardLabel?: string;
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
  fullName: yup.string().required('Vui lòng nhập họ tên'),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Vui lòng nhập số điện thoại hợp lệ')
    .required('Vui lòng nhập số điện thoại'),
  province: yup.string().required('Vui lòng chọn tỉnh/thành phố'),
  district: yup.string().required('Vui lòng chọn quận/huyện'),
  ward: yup.string().required('Vui lòng chọn phường/xã'),
  address: yup.string().required('Vui lòng nhập địa chỉ'),
  provinceLabel: yup.string(),
  districtLabel: yup.string(),
  wardLabel: yup.string(),
});

interface Option {
  label: string;
  value: string;
}

function FormSearch(props: { ip?: string }) {
  const { ip } = props;

  const { register, handleSubmit, control, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const gtagReportConversion = (url?: string) => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      const callback = () => {
        if (url) {
          window.location.href = url;
        }
      };

      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-16773984613/DwVPCLeeoegZEOXiur4-',
        value: 1.0,
        currency: 'VND',
        transaction_id: '',
        event_callback: callback,
      });

      return false;
    }
  };

  const id = useId()
  const [optionProvinces, setOptionProvinces] = useState<{ label: string, value: string }[]>([]);
  const [optionsDistricts, setOptionsDistricts] = useState<{ label: string, value: string }[]>([]);
  const [optionsWards, setOptionsWards] = useState<{ label: string, value: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const selectDistrictRef = useRef<SelectInstance<Option, false>>(null);
  const selectWardRef = useRef<SelectInstance<Option, false>>(null);

  useEffect(() => {
    setOptionProvinces(data.map(item => ({ label: item.FullName, value: item.Code })))
  }, [])

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    const submitForm = {
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      province: data.provinceLabel,
      district: data.districtLabel,
      ward: data.wardLabel,
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
      <div className="px-8 md:px-16 py-4 md:py-8 md:w-[1000px] w-full m-auto bg-[url('/popup-mobile.png')] md:bg-[url('/popup-des.png')] bg-[length:100%_100%] bg-center rounded-[50px]">
        <div className="flex justify-center md:justify-end">
          <div className="md:w-2/3 w-full mt-28 max-md:mb-[240px]">
            <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full flex gap-2 max-md:flex-col">
                <div className="md:w-1/2 w-full">
                  <input
                    className="w-full px-4 py-2 rounded-full outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold"
                    placeholder='Họ và tên*'
                    {...register('fullName')}
                  />
                  {errors.fullName && <span className="text-[red] text-xs p-2">{errors.fullName.message}</span>}
                </div>
                <div className="md:w-1/2 w-full">
                  <input
                    className="w-full px-4 py-2 rounded-full outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold"
                    placeholder='Số điện thoại*'
                    {...register('phoneNumber')}
                  />
                  {errors.phoneNumber && <span className="text-[red] text-xs p-2">{errors.phoneNumber.message}</span>}
                </div>
              </div>
              <div className="w-full flex gap-2 flex-col">
                <div className="flex gap-2 max-md:flex-col">
                  <div className="md:w-1/2 w-full">
                    <Controller
                      name="province"
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          options={optionProvinces}
                          instanceId={id}
                          placeholder="Tỉnh/Thành phố*"
                          className="w-full"
                          getOptionLabel={(option: Option) => option.label}
                          getOptionValue={(option: Option) => option.value}
                          value={optionProvinces.find((opt) => opt.value === field.value)} // Set the value correctly
                          onChange={async (selectedOption: SingleValue<Option>) => {
                            field.onChange(selectedOption ? selectedOption.value : "")
                            const provinceId = selectedOption?.value;
                            selectDistrictRef.current?.clearValue();
                            selectWardRef.current?.clearValue();
                            setValue('provinceLabel', selectedOption ? selectedOption.label : "")
                            if (provinceId) {
                              setOptionsDistricts(data.flatMap(item => item.District.filter(item1 => item1.ProvinceCode === provinceId)).map(item3 => ({ label: item3.FullName, value: item3.Code })));
                            }
                          }
                          }
                        />
                      )}
                    />
                    {errors.province && <span className="text-[red] text-xs p-2">{errors.province.message}</span>}
                  </div>
                  <div className="md:w-1/2 w-full">
                    <Controller
                      name="district"
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          ref={selectDistrictRef}
                          options={optionsDistricts}
                          instanceId={id}
                          placeholder="Quận/Huyện*"
                          className="w-full"
                          getOptionLabel={(option: Option) => option.label}
                          getOptionValue={(option: Option) => option.value}
                          value={optionsDistricts.find((opt) => opt.value === field.value)} // Set the value correctly
                          onChange={async (selectedOption: SingleValue<Option>) => {
                            field.onChange(selectedOption ? selectedOption.value : "")
                            setValue('districtLabel', selectedOption ? selectedOption.label : "")
                            const districtId = selectedOption?.value;
                            selectWardRef.current?.clearValue();
                            if (districtId) {
                              setOptionsWards(data.flatMap(item => item.District.flatMap(item1 => item1.Ward?.filter(item2 => item2.DistrictCode === districtId))).filter(item4 => item4 !== undefined).flatMap(item3 => ({ label: item3.FullName, value: item3.Code })));
                            }
                          }
                          }
                        />
                      )}
                    />
                    {errors.district && <span className="text-[red] text-xs p-2">{errors.district.message}</span>}
                  </div>
                </div>
                <div className="flex gap-2 max-md:flex-col">
                  <div className="md:w-1/2 w-full">
                    <Controller
                      name="ward"
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          ref={selectWardRef}
                          options={optionsWards}
                          instanceId={id}
                          placeholder="Phường/Xã*"
                          className="w-full"
                          getOptionLabel={(option: Option) => option.label}
                          getOptionValue={(option: Option) => option.value}
                          value={optionsWards.find((opt) => opt.value === field.value)} // Set the value correctly
                          onChange={(selectedOption: SingleValue<Option>) => {
                            setValue('wardLabel', selectedOption ? selectedOption.label : "")
                            field.onChange(selectedOption ? selectedOption.value : "")
                          }
                          }
                        />
                      )}
                    />
                    {errors.ward && <span className="text-[red] text-xs p-2">{errors.ward.message}</span>}
                  </div>
                  <div className="md:w-1/2 w-full">
                    <input
                      placeholder="Địa chỉ (Số nhà, tên đường)*"
                      className="w-full rounded-full px-4 py-2 outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold"
                      {...register("address", { required: true })}
                    />
                    {errors.address && <span className="text-[red] text-xs p-2">{errors.address.message}</span>}
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button type='submit' className="text-white italic uppercase hover:opacity-85 duration-300 mr-2 flex justify-center items-center bg-[#002A9E] rounded-full px-16 py-2">
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