'use client'

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { getDistricts, getProvinces, getWards } from '@/services/provinces';
import { Controller, useForm } from 'react-hook-form';
import Select, { SelectInstance, SingleValue } from 'react-select';
import { useEffect, useId, useRef, useState } from 'react';
import { OrderEntity } from '@/entities/order';
import { createOrder } from '@/services/orderServices';
import { toast, ToastContainer } from 'react-toastify';
import LoadingIcon from '@/assets/icons/LoadingIcon';
import Image from 'next/image'
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
  productName: yup.string().required('Vui lòng nhập tên sản phẩm'),
  quantity: yup
    .number()
    .typeError('Vui lòng chọn số lượng')
    .required('Vui lòng chọn số lượng')
    .test('quantity', 'Số lượng sản phẩm phải lớn hơn 0', (value: number) => {
      if (!value) return false;
      return value > 0
    }),
  province: yup.string().required('Vui lòng chọn tỉnh/thành phố'),
  district: yup.string().required('Vui lòng chọn quận/huyện'),
  ward: yup.string().required('Vui lòng chọn phường/xã'),
  address: yup.string().required('Vui lòng nhập địa chỉ'),
  provinceLabel: yup.string(),
  districtLabel: yup.string(),
  wardLabel: yup.string(),
  term: yup.bool().oneOf([true], 'Bố mẹ phải đồng ý với điều khoản đăng ký')
});

interface Option {
  label: string;
  value: string;
}

function FormOrder() {
  const { register, handleSubmit, control, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const id = useId()
  const [optionProvinces, setOptionProvinces] = useState<{ label: string, value: string }[]>([]);
  const [optionsDistricts, setOptionsDistricts] = useState<{ label: string, value: string }[]>([]);
  const [optionsWards, setOptionsWards] = useState<{ label: string, value: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const selectDistrictRef = useRef<SelectInstance<Option, false>>(null);
  const selectWardRef = useRef<SelectInstance<Option, false>>(null);

  useEffect(() => {
    (async () => {
      const res = await getProvinces()
      setOptionProvinces(res.data.map((item: { name: string, id: number }) => ({ label: item.name, value: item.id })))
    })()
  }, [])

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    const submitForm = {
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      productName: data.productName,
      quantity: data.quantity,
      province: data.provinceLabel,
      district: data.districtLabel,
      ward: data.wardLabel,
      address: data.address,
    }
    try {
      await createOrder(submitForm)
      toast.success('Đăng ký đơn hàng thành công, Chúng tôi sẽ liên hệ quý khách trong thời gian tới')
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="mb-8 bg-[bg-[#69dbe1]">
      <div className="px-4 py-8 max-w-6xl m-auto bg-[url('/dki3.webp')] bg-[length:100%_100%]  bg-center rounded-[50px]">
        <div className="mb-8">
          <h2 className="text-[#84571B] text-4xl uppercase text-center font-bold">Đăng ký mua hàng</h2>
        </div>
        <div className="flex">
          <div className="w-full px-4">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full flex gap-4 max-md:flex-col">
                <div className="md:w-1/2">
                  <input
                    className="w-full p-4 rounded-full outline-none"
                    placeholder='Họ và tên*'
                    {...register('fullName')}
                  />
                  {errors.fullName && <span className="text-[red] text-xs p-2">{errors.fullName.message}</span>}
                </div>
                <div className="md:w-1/2">
                  <input
                    className="w-full p-4 rounded-full outline-none"
                    placeholder='Số điện thoại*'
                    {...register('phoneNumber')}
                  />
                  {errors.phoneNumber && <span className="text-[red] text-xs p-2">{errors.phoneNumber.message}</span>}
                </div>
              </div>
              <div className="w-full flex gap-4 max-md:flex-col">
                <div className="md:w-1/2">
                  <input
                    className="w-full p-4 rounded-full outline-none"
                    placeholder='Sản phẩm đăng ký mua*'
                    {...register('productName')}
                  />
                  {errors.productName && <span className="text-[red] text-xs p-2">{errors.productName.message}</span>}
                </div>
                <div className="md:w-1/2">
                  <input
                    type='number'
                    className="w-full p-4 rounded-full outline-none"
                    placeholder='Số lượng'
                    {...register('quantity')}
                  />
                  {errors.quantity && <span className="text-[red] text-xs p-2">{errors.quantity.message}</span>}
                </div>
              </div>
              <div className="w-full flex gap-4 flex-col">
                <div className="flex gap-4 max-md:flex-col">
                  <div className="md:w-1/2">
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
                              const res = await getDistricts(provinceId);
                              setOptionsDistricts(res.data?.map((item: { name: string, id: string }) => ({ label: item.name, value: item.id })));
                            }
                          }
                          }
                        />
                      )}
                    />
                    {errors.province && <span className="text-[red] text-xs p-2">{errors.province.message}</span>}
                  </div>
                  <div className="md:w-1/2">
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
                              const res = await getWards(districtId);
                              setOptionsWards(res.data?.map((item: { name: string, id: string }) => ({ label: item.name, value: item.id })));
                            }
                          }
                          }
                        />
                      )}
                    />
                    {errors.district && <span className="text-[red] text-xs p-2">{errors.district.message}</span>}
                  </div>
                </div>
                <div className="flex gap-4 max-md:flex-col">
                  <div className="md:w-1/2">
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
                  <div className="md:w-1/2">
                    <input
                      placeholder="Địa chỉ (Số nhà, tên đường)*"
                      className="w-full rounded-full px-4 py-3 outline-none"
                      {...register("address", { required: true })}
                    />
                    {errors.address && <span className="text-[red] text-xs p-2">{errors.address.message}</span>}
                  </div>
                </div>
              </div>
              <div className="flex items-center text-white italic">
                <input id="checkbox" type="checkbox" {...register('term')} className="w-5 h-5 rounded-full outline-none cursor-pointer border-none" />
                <label htmlFor="checkbox">Bố mẹ đã đọc và đồng ý <strong>Điều khoản đăng ký</strong></label>
                {errors.term && <span className="text-[red] text-xs p-2">{errors.term.message}</span>}
              </div>
              {/* <p className="text-white italic">Hãy liên hệ chuyên gia dinh dưỡng theo số <strong>028 555 555 555</strong> để được tư vấn thêm</p> */}
              <div className="flex justify-center">
                <div className="flex justify-center items-center bg-[#84571B] rounded-full px-8 py-2">
                  <button type='submit' className="text-white italic uppercase hover:opacity-85 duration-300 mr-2">Xác nhận</button>
                  {loading && <LoadingIcon size="small" />}
                </div>
              </div>
            </form>
          </div>
          <div className="mt-[-40px] max-md:hidden">
            <Image src="/lon-gau@2x-8.png" alt="giot2" width={300} height={400} />
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}

export default FormOrder