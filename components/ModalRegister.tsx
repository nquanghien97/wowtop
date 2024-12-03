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
import { RegisterUser } from '@/dto/user';

interface FormValues extends RegisterUser {
  provinceLabel?: string;
  districtLabel?: string;
  wardLabel?: string;
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
  full_name: yup.string().required('Vui lòng nhập họ tên'),
  phone_number: yup
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
  password: yup
    .string()
    .required('Vui lòng nhập mật khẩu'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password')], 'Password must match')
});

interface Option {
  label: string;
  value: string;
}

function ModalRegister({ open, onClose }: { open: boolean, onClose: () => void }) {
  const id = useId()
  const { register, handleSubmit, control, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [optionProvinces, setOptionProvinces] = useState<{ label: string, value: string }[]>([]);
  const [optionsDistricts, setOptionsDistricts] = useState<{ label: string, value: string }[]>([]);
  const [optionsWards, setOptionsWards] = useState<{ label: string, value: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const selectDistrictRef = useRef<SelectInstance<Option, false>>(null);
  const selectWardRef = useRef<SelectInstance<Option, false>>(null);

  useEffect(() => {
    setOptionProvinces(data.map(item => ({ label: item.FullName, value: item.Code })))
  }, []);

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    console.log(data)
    try {

      toast.success('Đăng ký thành công!')
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal open={open} onClose={onClose}>
      <div className="max-w-4xl m-auto bg-white p-8 rounded-xl mx-4 relative max-md:top-[-40px]">
        <div className="relative">
          <h1 className="text-[#002A9E] text-4xl font-bold text-center mb-8">Đăng ký</h1>
          <button
            className="absolute top-1/2 -translate-y-1/2 right-0 text-2xl font-bold"
            onClick={onClose}
          >
            x
          </button>
        </div>
        <form className="flex flex-col gap-4 form-register overflow-auto max-h-[70vh]" onSubmit={handleSubmit(onSubmit)}>
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
            <p className="mb-1">Họ và tên</p>
            <input
              className="w-full px-4 py-3 rounded-full outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold bg-[#F7F7F7]"
              placeholder='Nhập thông tin*'
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
                defaultValue={new Date()}
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
                defaultValue={new Date()}
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
              <div className="md:w-1/2">
                <p className="mb-1">Quận huyện</p>
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
            <div className="flex gap-4 max-md:flex-col">
              <div className="md:w-1/2">
                <p className="mb-1">Phường xã</p>
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
                <p className="mb-1">Địa chỉ</p>
                <input
                  placeholder="Địa chỉ (Số nhà, tên đường)*"
                  className="w-full rounded-full px-4 py-3 outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold bg-[#F7F7F7]"
                  {...register("address", { required: true })}
                />
                {errors.address && <span className="text-[red] text-xs p-2">{errors.address.message}</span>}
              </div>
            </div>
            <div>
              <p className="mb-1">Mật khẩu</p>
              <input
                className="w-full px-4 py-3 rounded-full outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold bg-[#F7F7F7]"
                placeholder='Nhập mật khẩu*'
                {...register('password')}
              />
              {errors.password && <span className="text-[red] text-xs p-2">{errors.password.message}</span>}
            </div>
            <div>
              <p className="mb-1">Nhập lại mật khẩu</p>
              <input
                className="w-full px-4 py-3 rounded-full outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold bg-[#F7F7F7]"
                placeholder='Nhập lại mật khẩu*'
                {...register('confirm_password')}
              />
              {errors.confirm_password && <span className="text-[red] text-xs p-2">{errors.confirm_password.message}</span>}
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
  )
}

export default ModalRegister