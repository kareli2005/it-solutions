import React from 'react'
import { FaFacebook, FaGooglePlus } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import footerMap from '../assets/images/footer-map.png'
import { services } from '../data';
import { useNavigate } from 'react-router-dom';
import footerLogo from '../assets/images/logo-footer.png'


const Footer = () => {


  const navigate = useNavigate()
  
  const handleOpenMap = () => {
    window.open(
      "https://www.google.com/maps/place/37+Vaso+Godziashvili+St,+T'bilisi/@41.7536996,44.7538752,17z/data=!3m1!4b1!4m6!3m5!1s0x4044726640cf1119:0x5472899305d919e7!8m2!3d41.7536956!4d44.7564501!16s%2Fg%2F1hhh5czq_?entry=ttu",
      "_blank",
    )
  }

  return (
    <div className='w-full flex flex-col justify-center items-center font-sans'>
      <div className='w-full bg-[#121212] flex justify-center items-center'>
        <div className='w-full max-w-[1024px] py-6 px-8 lg:px-0 flex'>

          <div className='lg:w-1/3 md:w-1/2 w-full flex flex-col justify-center items-start'>
            <h1 className='text-white font-bold text-lg'>SOCIAL NETWORKS</h1>
            <p className='text-[#8E8D8D] text-sm'>FOLLOW & LIKE US ON SOCIAL MEDIA</p>
          </div>

          <div className='lg:w-1/3 md:w-1/2 w-full hidden lg:flex flex-col justify-center items-start'>
            <h1 className='text-white font-bold text-lg'>OUR SERVICES</h1>
            <p className='text-[#8E8D8D] text-sm'>SERVICES WE PROVIDE</p>
          </div>

          <div className='lg:w-1/3 md:w-1/2 w-full hidden md:flex flex-col justify-center items-start'>
            <h1 className='text-white font-bold text-lg'>CONTACT INFORMATION</h1>
            <p className='text-[#8E8D8D] text-sm'>IN CASE YOU MISSED INFO ON HOMEPAGE</p>
          </div>

        </div>
      </div>

      <div className='w-full bg-[#1c1c1c] flex justify-center items-center'>
        <div className='w-full max-w-[1024px] py-6 px-8 lg:px-0 flex'>

          <div className='lg:w-1/3 md:w-1/2 w-full flex flex-col justify-start items-center gap-4 text-[#c2c2c2]'>

            <div className='w-full flex justify-start items-center py-2'>
              <a className='flex justify-start items-center gap-4 hover:text-white duration-300 cursor-pointer' href="https://www.facebook.com/ItSolutionsGe" target="_blank" rel="noopener noreferrer">
                <FaFacebook className='text-4xl' />
                <div>
                  <h1>
                    Like us on <span className='font-bold'>Facebook</span>
                  </h1>
                  <p className='text-[#5e5e5e]'>
                    /itSolutionsGe
                  </p>
                </div>
              </a>
            </div>

            <div className='w-full flex justify-start items-center py-2'>
              <a className='flex justify-start items-center gap-4 hover:text-white duration-300 cursor-pointer' href="https://plus.google.com/+ItsolutionsGe" target="_blank" rel="noopener noreferrer">
                <FaGooglePlus className='text-4xl' />
                <div>
                  <h1>
                    Circle us on <span className='font-bold'>Google+</span>
                  </h1>
                  <p className='text-[#5e5e5e]'>
                    /itSolutionsGe
                  </p>
                </div>
              </a>
            </div>

          </div>

          <div className='lg:w-1/3 hidden lg:flex justify-start items-start gap-4 text-[#c2c2c2]'>

            <div className='flex justify-start items-start'>
              <div className='grid grid-cols-2 gap-x-4 gap-y-1'>
                {
                  services.map((service, key) => (
                    <p onClick={() => navigate('/' + service.link)} key={key} className='w-full flex justify-start items-center text-[#5e5e5e] text-sm cursor-pointer duration-300 hover:text-blue-400'>
                      {service.title}
                    </p>
                  ))
                }
              </div>
            </div>

          </div>

          <div className='lg:w-1/3 md:w-1/2 hidden md:flex justify-start items-center gap-4 text-[#c2c2c2]'>

            <div className='flex justify-start items-center relative'>
              <div onClick={handleOpenMap}  className='w-auto h-auto flex justify-start items-center cursor-pointer'>
                <img src={footerMap} />
                <IoMdPin className='top-[34px] left-[88px] text-4xl text-red-600 hover:text-red-500 transform transition-transform hover:animate-bounce duration-500 absolute' />
              </div>
            </div>

            <div className='flex h-full w-full flex-col justify-start items-start gap-4'>
              <div className='h-full flex flex-col text-[#c2c2c2]'>
                <p className='text-[#5e5e5e] text-[12px] font-arial-sans-serif'>Our Office Location</p>
                <h1 className='font-bold text-base'>Tbilisi, Georgia</h1>
                <h1 className='font-semibold text-sm'>V.godziashvili str. #3</h1>
              </div>
              <div className='h-full flex flex-col text-[#c2c2c2] font-arial-sans-serif'>
                <p className='text-[#5e5e5e] text-[12px]'>Call Our Office</p>
                <h1 className='font-bold text-base'>032 2 42 44 45</h1>
              </div>
              <div className='h-full flex flex-col text-[#c2c2c2] font-arial-sans-serif'>
                <p className='text-[#5e5e5e] text-[12px]'>Contact our support via e-mail</p>
                <a className='hover:text-white duration-300 font-bold text-base' href="mailto:info@it-solutions.ge">info@it-solutions.ge</a>              
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className='w-full bg-white flex justify-center items-center'>
        <div className='w-full max-w-[1024px] py-6 px-8 lg:px-0 flex justify-start items-center gap-8'>
          <img onClick={() => navigate('/')} src={footerLogo} alt="/logo-footer.png" className='opacity-80 hover:opacity-100 cursor-pointer' />
          <p className='text-[#8e8d8d] font-arial-sans-serif text-xs text-start'>Copyright © 2020 <span onClick={() => navigate('/')} className='font-bold text-[#6c6c6c] cursor-pointer hover:underline'>IT-Solutions.ge</span> All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer