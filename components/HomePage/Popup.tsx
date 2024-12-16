'use client';

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Modal from '../common/Modal';
import CloseIcon from '@/assets/icons/CloseIcon';

function Popup() {

  const [showForm, setShowForm] = useState(false);
  
  useEffect(() => {
      const timer = setTimeout(() => {
        setShowForm(true);
      }, 3000);
  
      // Cleanup timer
      return () => clearTimeout(timer);
    }, []);
    
  return (
    <Modal open={showForm} onClose={() => setShowForm(false)}>
      <div className="w-full flex justify-center items-center px-4 relative">
        <Image src="/popup DANCE-destop.png" alt="popup DANCE-destop" width={828} height={433} className="w-full" />
        <div className="absolute top-2 right-6 p-2 bg-[#e7e7e7] rounded-full cursor-pointer" onClick={() => setShowForm(false)}>
          <CloseIcon width={20} height={20} />
        </div>
        <Link href="/sieu-sao-wow-cao-chat" className="absolute bottom-0 inline-block w-full">
          <Image src="/bt.png" alt="bt" width={640} height={187} className="transform animate-pulsate w-1/3 m-auto" />
        </Link>
      </div>
    </Modal>
  )
}

export default Popup