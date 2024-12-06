'use client';

import Modal from './common/Modal';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useEffect, useId, useRef, useState } from 'react';
import data from '@/app/data.json'
import Select, { SelectInstance, SingleValue } from 'react-select';
import { toast } from 'react-toastify';
import LoadingIcon from '@/assets/icons/LoadingIcon';
import DatePicker from 'react-datepicker';
import { vi } from 'date-fns/locale';
import { updateUser } from '@/services/user';
import { useAuthStore } from '@/zustand/auth';
import EditIcon from '@/assets/icons/EditIcon';
import Image from 'next/image'
import { formatDateWithoutHours } from '@/utils/formatDate';
import { UserEntity } from '@/entities/user';

interface FormValues {
  full_name: string;
  mother_dob: Date;
  child_dob: Date;
  province: string;
  district: string;
  ward: string;
  address: string;
  provinceLabel?: string;
  districtLabel?: string;
  wardLabel?: string;
}

const schema = yup.object().shape({
  full_name: yup.string().required('Vui lòng nhập họ tên'),
  province: yup.string().required('Vui lòng chọn tỉnh/thành phố'),
  district: yup.string().required('Vui lòng chọn quận/huyện'),
  ward: yup.string().required('Vui lòng chọn phường/xã'),
  address: yup.string().required('Vui lòng nhập địa chỉ'),
  provinceLabel: yup.string(),
  districtLabel: yup.string(),
  wardLabel: yup.string(),
  mother_dob: yup
    .date()
    .nullable()
    .required('Vui lòng chọn ngày sinh'),
  child_dob: yup
    .date()
    .nullable()
    .required('Vui lòng chọn ngày sinh')
    .test('age', 'Tuổi của bé không được quá 20 tuổi', (value: Date) => {
      if (!value) return false;
      const age = new Date().getFullYear() - value.getFullYear();
      return age <= 20;
    })
    .test('age', 'Tuổi của bé phải lớn hơn 1 tuổi', (value: Date) => {
      if (!value) return false;
      const age = new Date().getFullYear() - value.getFullYear();
      return age >= 1;
    })
    .test('dob', 'Ngày sinh không hợp lệ', (value: Date) => {
      if (!value) return false;
      const today = new Date();
      return value <= today;
    }),
});

interface Option {
  label: string;
  value: string;
}

function UpdateUser({ dataUser } : { dataUser: UserEntity }) {
  const id = useId()
  const { register, handleSubmit, control, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [isOpenUpdateUser, setIsOpenUpdateUser] = useState(false);
  const [optionProvinces, setOptionProvinces] = useState<{ label: string, value: string }[]>([]);
  const [optionsDistricts, setOptionsDistricts] = useState<{ label: string, value: string }[]>([]);
  const [optionsWards, setOptionsWards] = useState<{ label: string, value: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const selectDistrictRef = useRef<SelectInstance<Option, false>>(null);
  const selectWardRef = useRef<SelectInstance<Option, false>>(null);

  const { user, setUser } = useAuthStore()

  useEffect(() => {
    setOptionProvinces(data.map(item => ({ label: item.FullName, value: item.Code })))
    setOptionsDistricts(data.flatMap(item => item.District.filter(item1 => item1.ProvinceCode === user?.province_id)).map(item3 => ({ label: item3.FullName, value: item3.Code })))
    setOptionsWards(data.flatMap(item => item.District.flatMap(item1 => item1.Ward?.filter(item2 => item2.DistrictCode === user?.district_id))).filter(item4 => item4 !== undefined).flatMap(item3 => ({ label: item3.FullName, value: item3.Code })));
  }, [user?.district_id, user?.province_id]);

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      const submit_data = {
        full_name: data.full_name,
        province_id: data.province || user?.province_id || '',
        province: data.provinceLabel || user?.province || '',
        district_id: data.district || user?.district_id || '',
        district: data.districtLabel || user?.district || '',
        ward_id: data.ward || user?.ward_id || '',
        ward: data.wardLabel || user?.ward || '',
        address: data.address,
        mother_dob: data.mother_dob,
        child_dob: data.child_dob,
      }
      await updateUser(submit_data)
      setUser(pre => ({
        ...pre,
        full_name: submit_data.full_name,
        province: submit_data.province,
        district: submit_data.district,
        ward: submit_data.ward,
        address: submit_data.address,
        mother_dob: submit_data.mother_dob,
        child_dob: submit_data.child_dob,
      }))
      setIsOpenUpdateUser(false);
      toast.success('Chỉnh sửa thông tin thành công!')
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <div className="max-w-4xl m-auto mb-8">
        <div className="bg-[#12448E] flex justify-around items-center rounded-t-2xl">
          <div className="flex items-center">
            <Image src="/USER.png" alt="user" width={100} height={100} />
            <span className="text-4xl text-white font-bold">Thông tin tài khoản</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer" onClick={() => setIsOpenUpdateUser(true)}>
            <span className="text-xl text-white underline">Chỉnh sửa</span>
            <EditIcon color='#ccc' width={20} height={20} />
          </div>
        </div>
        <div className="py-12 px-[160px] bg-white">
          <div className="flex mb-4">
            <div className="flex-1">
              <p className="text-[#00609C] text-xl">Họ và tên</p>
              <p className="font-bold">{(user || dataUser).full_name}</p>
            </div>
            <div className="flex-1">
              <p className="text-[#00609C] text-xl">Số điện thoại</p>
              <p className="font-bold">{(user || dataUser).phone_number}</p>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="flex-1">
              <p className="text-[#00609C] text-xl">Ngày tháng năm sinh mẹ</p>
              <p className="font-bold">{formatDateWithoutHours((user || dataUser).mother_dob)}</p>
            </div>
            <div className="flex-1">
              <p className="text-[#00609C] text-xl">Ngày tháng năm sinh bé</p>
              <p className="font-bold">{formatDateWithoutHours((user || dataUser).child_dob)}</p>
            </div>
          </div>
          <div>
            <p className="text-[#00609C] text-xl">Địa chỉ</p>
            <p className="font-bold">{`${(user || dataUser).address}, ${(user || dataUser).ward}, ${(user || dataUser).district}, ${(user || dataUser).province}`}</p>
          </div>
        </div>
      </div>
      <Modal open={isOpenUpdateUser} onClose={() => { }}>
        <div className="max-w-4xl md:min-w-[800px] m-auto bg-white px-4 py-8 rounded-xl mx-4 relative max-md:top-[-40px]">
          <div className="relative">
            <h1 className="text-[#002A9E] text-4xl font-bold text-center mb-8">Thông tin người dùng</h1>
            <button
              className="absolute top-[-20px] right-0 text-2xl font-bold"
              onClick={() => setIsOpenUpdateUser(false)}
            >
              x
            </button>
          </div>
          <form className="flex flex-col gap-4 form-register overflow-auto max-h-[70vh] px-2" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p className="mb-1">Số điện thoại</p>
              <p
                className="w-full px-4 py-3 rounded-full outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold bg-[#F7F7F7]"
              >{user?.phone_number}</p>
            </div>
            <div>
              <p className="mb-1">Họ và tên</p>
              <input
                className="w-full px-4 py-3 rounded-full outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold bg-[#F7F7F7]"
                placeholder='Nhập thông tin*'
                defaultValue={user?.full_name}
                {...register('full_name')}
              />
              {errors.full_name && <span className="text-[red] text-xs p-2">{errors.full_name.message}</span>}
            </div>
            <div className="flex gap-2">
              <div className="w-1/2 flex flex-col">
                <p className="mb-1">Ngày tháng năm sinh mẹ</p>
                <Controller
                  name="mother_dob"
                  control={control}
                  defaultValue={new Date(user?.mother_dob || '')}
                  render={({ field }) => (
                    // @ts-ignore
                    <DatePicker
                      {...field}
                      locale={vi}
                      className="w-full rounded-full px-4 py-3 outline-none bg-[#F7F7F7]"
                      selected={field.value ? new Date(field.value) : null}
                      onChange={(date: Date | null) => field.onChange(date)}
                      dateFormat="dd/MM/yyyy"
                    />
                  )}
                />
                {errors.mother_dob && <span className="text-[red] text-xs p-2">{errors.mother_dob.message}</span>}
              </div>
              <div className="w-1/2 flex flex-col">
                <p className="mb-1">Ngày tháng năm sinh bé</p>
                <Controller
                  name="child_dob"
                  control={control}
                  defaultValue={new Date(user?.child_dob || '')}
                  render={({ field }) => (
                    // @ts-ignore
                    <DatePicker
                      {...field}
                      locale={vi}
                      className="w-full rounded-full px-4 py-3 outline-none bg-[#F7F7F7]"
                      selected={field.value ? new Date(field.value) : null}
                      onChange={(date: Date | null) => field.onChange(date)}
                      dateFormat="dd/MM/yyyy"
                    />
                  )}
                />
                {errors.child_dob && <span className="text-[red] text-xs p-2">{errors.child_dob.message}</span>}
              </div>
            </div>
            <div className="w-full flex gap-4 flex-col">
              <div className="flex gap-4 max-md:flex-col">
                <div className="md:w-1/2">
                  <p className="mb-1">Thành phố</p>
                  <Controller
                    name="province"
                    control={control}
                    defaultValue={user?.province_id}
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
                        onChange={(selectedOption: SingleValue<Option>) => {
                          field.onChange(selectedOption ? selectedOption.value : "")
                          const provinceId = selectedOption?.value;
                          selectDistrictRef.current?.clearValue();
                          selectWardRef.current?.clearValue();
                          setValue('provinceLabel', selectedOption ? selectedOption.label : "")
                          if (provinceId) {
                            setOptionsDistricts(data.flatMap(item => item.District.filter(item1 => (item1.ProvinceCode) === (provinceId))).map(item3 => ({ label: item3.FullName, value: item3.Code })));
                          }
                        }
                        }
                      />
                    )}
                  />
                  {errors.province && <span className="text-[red] text-xs p-2">{errors.province.message}</span>}
                </div>
                <div className="md:w-1/2">
                  <p className="mb-1">Quận huyện</p>
                  <Controller
                    name="district"
                    control={control}
                    defaultValue={user?.district_id}
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
                        onChange={(selectedOption: SingleValue<Option>) => {
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
              <div className="flex gap-4 max-md:flex-col">
                <div className="md:w-1/2">
                  <p className="mb-1">Phường xã</p>
                  <Controller
                    name="ward"
                    control={control}
                    defaultValue={user?.ward_id}
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
                  <p className="mb-1">Địa chỉ</p>
                  <input
                    placeholder="Địa chỉ (Số nhà, tên đường)*"
                    className="w-full rounded-full px-4 py-3 outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold bg-[#F7F7F7]"
                    defaultValue={user?.address}
                    {...register("address", { required: true })}
                  />
                  {errors.address && <span className="text-[red] text-xs p-2">{errors.address.message}</span>}
                </div>
              </div>
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
    </>
  )
}

export default UpdateUser