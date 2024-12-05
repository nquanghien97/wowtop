import { useOutsideClick } from '@/hooks/useOutsideClick';
import { logoutUser } from '@/services/auth';
import { useAuthStore } from '@/zustand/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

function MenuProfile({ setIsOpenMenuProfile, setIsOpenChangePassword } : { setIsOpenMenuProfile: React.Dispatch<React.SetStateAction<boolean>>, setIsOpenChangePassword: React.Dispatch<React.SetStateAction<boolean>> }) {
  
  const { setUser } = useAuthStore();
  const router = useRouter();
 
  const modalProfileRef = useOutsideClick(() => {
    setIsOpenMenuProfile(false);
  })

  const handleLogout = async () => {
    await logoutUser();
    setUser(null);
    router.push('/');
  }

  return (
    <div ref={modalProfileRef} className="absolute top-[100%] w-full left-0">
      <ul className="p-4 bg-white rounded-xl text-black border border-black">
        <li
          className="mb-2 cursor-pointer"
          onClick={() => setIsOpenChangePassword(true)}
        >
          Đổi mật khẩu
        </li>
        <li className="mb-2 cursor-pointer">
          <Link href="/profile">Tài khoản</Link>
        </li>
        <li
          className="cursor-pointer"
          onClick={handleLogout}
        >
          Thoát
        </li>
      </ul>
    </div>
  )
}

export default MenuProfile