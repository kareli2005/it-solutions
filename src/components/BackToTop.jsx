import React, { useEffect, useState } from 'react'
import { IoMdArrowRoundUp } from "react-icons/io";


const BackToTop = () => {
  
  const [showButton, setShowButton] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  return (
    <div onClick={scrollToTop} className={`${!showButton && 'hidden'} z-[9999] fixed bottom-4 right-4 w-10 h-10 md:w-16 md:h-16 flex flex-col justify-center items-center gap-1 bg-black bg-opacity-60 hover:bg-opacity-100 rounded-md cursor-pointer text-white`}>
      <IoMdArrowRoundUp className='md:text-2xl' />
      <p className='hidden md:text-[10px] md:flex'>
        Back To Top
      </p>
    </div>
  )
}

export default BackToTop