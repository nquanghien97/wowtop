import { useOutsideClick } from '@/hooks/useOutsideClick';
import Link from 'next/link';
import React from 'react'

function MenuProfile({ setIsOpenMenuProfile } : { setIsOpenMenuProfile: React.Dispatch<React.SetStateAction<boolean>> }) {
  
  const modalProfileRef = useOutsideClick(() => {
    setIsOpenMenuProfile(false);
  })

  return (
    <div ref={modalProfileRef} className="absolute top-[100%] w-full left-0">
      <ul className="p-4 bg-white rounded-xl text-black border border-black">
        <li className="mb-2 cursor-pointer">Đổi mật khẩu</li>
        <li className="mb-2 cursor-pointer">
          <Link href="/profile">Tài khoản</Link>
        </li>
        <li className="cursor-pointer">Đổi mật khẩu</li>
      </ul>
    </div>
  )
}

export default MenuProfile