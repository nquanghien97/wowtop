'use client'

import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useEffect, useState } from 'react'
import FormSearch from './FormSearch';

function Form(props: { ip: string }) {
  const { ip } = props;

  const [showForm, setShowForm] = useState(false);
  const [scrollTriggered, setScrollTriggered] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowForm(true);
  //   }, 10000);

  //   // Cleanup timer
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= pageHeight - 800 && !scrollTriggered) {
        setShowForm(true);
        setScrollTriggered(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup sự kiện scroll
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollTriggered]);

  const closeFormRef = useOutsideClick(() => {
    setShowForm(false);
  })

  return (
    <div>
      {showForm && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div ref={closeFormRef} className="relative">
            <div className="absolute top-10 right-4 p-2 hover:bg-[#ebeaea] duration-300 rounded-full w-8 h-8 flex justify-center items-center cursor-pointer" onClick={() => setShowForm(false)}>
              <span className="font-bold text-xl">x</span>
            </div>
            <FormSearch ip={ip} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Form