'use client';

import MenuIcon from '@/assets/icons/MenuIcon'
import { ListHeader } from '@/config/ListHeader'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import AppSidebar from './Sidebar';
import MenuDropdown from './common/MenuDropdown';
import { usePathname } from 'next/navigation';
import ModalRegister from './ModalRegister';
import ModalLogin from './ModalLogin';
import { UserEntity } from '@/entities/user';
import { useAuthStore } from '@/zustand/auth';
import MenuProfile from './MenuProfile';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import ModalChangePassword from './ModalChangePassword';
import ModalForgotPassword from './ModalForgotPassword';

function Header({ currentUser, token }: { currentUser: UserEntity, token?: string }) {
  const pathname = usePathname();
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenRegister, setIsOpenRegister] = useState(false);
  const [isOpenMenuProfile, setIsOpenMenuProfile] = useState(false);
  const [isOpenChangePassword, setIsOpenChangePassword] = useState(false);
  const [isOpenForgotPassword, setIsOpenForgotPassword] = useState(false);

  const { user, setUser, isOpenLogin, setIsOpenLogin } = useAuthStore();

  useEffect(() => {
    setUser(currentUser)
  }, [currentUser, setUser])
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div className={`w-full ${isScrolled ? 'header' : ''}`}>
        <div className="header-top flex justify-end max-w-6xl m-auto">
          <ul className="flex flex-row text-[#643D14] gap-4 text-xs max-lg:hidden">
            <li className="cursor-pointer">
              <Link href="/gioi-thieu">Trang trại New Zealand</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/dat-hang">Mua hàng trực tuyến</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="tel:0978488123">Nhận tư vấn</Link>
            </li>
          </ul>
          <ul className="flex flex-row text-[#643D14] gap-4 lg:hidden text-[10px] m-auto">
            <li><Link href="/du-doan-chieu-cao" className="font-bold uppercase">Dự đoán chiều cao của con</Link></li>
            <li><Link href="/sieu-sao-wow-cao-chat" className="font-bold uppercase">Siêu sao cao wow chất</Link></li>
          </ul>
        </div>
        <header className="lg:h-[80px] header-bg-1 h-[60px] shadow-sm shadow-black/20 header-bottom">
          <div className="h-full flex lg:justify-center justify-between max-w-screen-2xl m-auto lg:relative z-[99]">
            <Link href="/" className={`flex justify-start lg:justify-center items-center max-lg:w-full max-lg:hidden ${isScrolled ? 'mt-4' : 'mt-6'}`}>
              <Image src="/logo.png" alt="logo" width={280} height={280} className={`max-lg:hidden duration-300 ${isScrolled ? 'scale-50' : ''}`} />
            </Link>
            <div className="flex justify-center w-full lg:hidden">
              <Link href="/">
                <Image src="/logo.png" alt="logo" width={100} height={100} className="mt-[-8px]" />
              </Link>
            </div>
            <div className="max-lg:hidden flex items-center">
              <ul className="flex items-center gap-4 text-white mr-4">
                {ListHeader.map(item => (
                  <li key={item.id} className={`py-1 font-bold ${pathname === item.path ? 'text-[yellow]' : ''}`}>
                    {item.children ? (
                      <MenuDropdown
                        title={item.title}
                        path={item.path}
                        key={item.id}
                      >
                        <ul className="bg-white flex flex-col min-w-[15rem] border border-[#ffffff12] rounded-md text-black">
                          {item.children.map(childItem => (
                            <li key={childItem.id} className="border-b-[1px]">
                              <Link className={`cursor-pointer hover:text-[yellow] p-4 w-full flex items-center duration-300`} href={childItem.path}>
                                {childItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </MenuDropdown>
                    ) : (
                      <Link key={item.id} href={item.path} className={`hover:text-[yellow] duration-300 `}>
                        {item.title}
                      </Link>
                    )}
                  </li>
                )
                )}
              </ul>
              <div className="cursor-pointer mr-2">
                <Link href="/sieu-sao-wow-cao-chat" className="dk-dung-thu font-bold hover:opacity-80 duration-300">SIÊU SAO WOW CAO CHẤT</Link>
              </div>
              {/* {user ? (
                <div
                  className="relative"  
                >
                  <p className="px-4 py-2 rounded-full bg-[#002A9E] font-bold cursor-pointer" onClick={() => setIsOpenMenuProfile(true)}>Hi, {(user).full_name}</p>
                  {isOpenMenuProfile && <MenuProfile setIsOpenMenuProfile={setIsOpenMenuProfile} setIsOpenChangePassword={setIsOpenChangePassword} />}
                </div>
              ) : (
                <div className="cursor-pointer" onClick={() => setIsOpenLogin(true)}>
                  <span className="bg-[#002A9E] py-[6px] px-2 rounded-full font-bold hover:opacity-80 duration-300">Đăng nhập</span>
                </div>
              )} */}
            </div>
            <div className="flex items-center mr-8 lg:hidden">
              <div className="cursor-pointer p-1 hover:bg-[#e0e0e0] rounded-full duration-300" onClick={() => setIsOpenSidebar(true)}>
                <MenuIcon fill='black' />
              </div>
            </div>
          </div>
        </header>
        <AppSidebar
          open={isOpenSidebar}
          setOpen={setIsOpenSidebar}
          start="-24rem"
          end="0"
          exit="-24rem"
        >
          <div className="py-7">
            <ul className="flex max-lg:flex-col text-black mb-4">
              {ListHeader.map(item => (
                <li key={item.path} className="px-3 lg:py-1 py-4 max-lg:border-b-2" onClick={() => setIsOpenSidebar(false)}>
                  {item.children ? (
                    <MenuDropdown
                      title={item.title}
                      path={item.path}
                    >
                      <ul className="bg-[#0f0f10] flex flex-col min-w-[15rem] border border-[#ffffff12] rounded-md lg:py-2">
                        {item.children.map(childItem => (
                          <li key={childItem.path} className={childItem.path === pathname ? 'text-[#643D14]' : ''}>
                            <Link className={`cursor-pointer hover:text-[#f18017] px-4 py-2 w-full flex items-center`} href={childItem.path}>
                              {childItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </MenuDropdown>
                  ) : (
                    <Link href={item.path} className={`hover:text-[#f18017] duration-300 ${pathname === item.path ? 'text-[#f18017]' : ''}`}>
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="cursor-pointer flex justify-center mb-4 w-full px-2">
              <Link href="/sieu-sao-wow-cao-chat" className='dk-dung-thu w-full text-center font-bold duration-300'>SIÊU SAO WOW CAO CHẤT</Link>
            </div>
            <ul className="flex flex-col text-[#643D14] gap-4">
              <li className="cursor-pointer border-b-2 px-2 pb-4">
                <Link href="/gioi-thieu">Trang trại New Zealand</Link>
              </li>
              <li className="cursor-pointer border-b-2 px-2 pb-4">
                <Link href="/dat-hang">Mua hàng trực tuyến</Link>
              </li>
              <li className="cursor-pointer border-b-2 px-2 pb-4">
                <Link href="tel:0978488123">Nhận tư vấn</Link>
              </li>
            </ul>
            {/* <div
              className="cursor-pointer flex justify-center w-full px-2"
              onClick={() => {
                setIsOpenLogin(true)
                setIsOpenSidebar(false)
              }}
            >
              <span className="py-[6px] px-2 bg-[#002A9E] rounded-full w-full text-center font-bold hover:opacity-80 duration-300 text-white">Đăng nhập</span>
            </div> */}
          </div>
        </AppSidebar>
      </div>
      <ModalLogin open={isOpenLogin} setIsOpenLogin={setIsOpenLogin} setIsOpenRegister={setIsOpenRegister} setIsOpenForgotPassword={setIsOpenForgotPassword} />
      <ModalRegister open={isOpenRegister} onClose={() => setIsOpenRegister(false)} />
      <ModalChangePassword open={isOpenChangePassword} onClose={() => setIsOpenChangePassword(false)} />
      <ModalForgotPassword open={isOpenForgotPassword} onClose={() => setIsOpenForgotPassword(false)} token={token} />
    </>
  )
}

export default Header