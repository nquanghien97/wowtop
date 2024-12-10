'use client';

import LoadingIcon from "@/assets/icons/LoadingIcon";
import { exchangeGift } from "@/services/gift";
import { useAuthStore } from "@/zustand/auth";
import { useState } from "react";
import { toast } from "react-toastify";

function ExchangeButton(props: { gift_id: number, token?: string }) {
  const { gift_id, token } = props;
  const { user, setIsOpenLogin } = useAuthStore();
  const [loading, setLoading] = useState(false);

  const onClickButton = async () => {
    if(!user) {
      setIsOpenLogin(true);
      return;
    }
    setLoading(true)
    try {
      await exchangeGift({ token, gift_id})
      toast.success('Đổi quà thành công!!')
    } catch (err: any) {
      console.log(err);
      toast.error(err.message)
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="px-5 pb-5 mt-4 flex-1">
      <p
        className="bg-[#1AC1FF] py-4 rounded-xl text-center text-2xl text-white font-extrabold cursor-pointer flex items-center justify-center"
        onClick={onClickButton}
      >
        Đổi quà
        {loading && <LoadingIcon size="small" />}
      </p>
    </div>
  )
}

export default ExchangeButton