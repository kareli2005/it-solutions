import React, { useEffect, useState } from 'react'
import Logo from '../assets/images/logo.png'
import { IoMenu } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { services } from '../data'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [showMenuIcon, setShowMenuIcon] = useState(window.innerWidth <= 768)
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [showServices, setShowServices] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    setShowMenuIcon(windowWidth <= 768)
  }, [windowWidth])

  return (
    <div className='w-full bg-[#121212] flex justify-center items-center font-sans'>
      <div className='w-full lg:max-w-[1024px] max-w-[720px] px-8 md:px-0 lg:py-4 py-2 flex justify-between items-center'>
        <img onClick={() => navigate('/')} src={Logo} alt="logo" className='h-[40px] xl:h-auto cursor-pointer' />
        <div className='flex justify-center items-center relative'>
          {showMenuIcon ?
            <>
              <IoMenu onClick={() => setIsMenuActive(prev => !prev)} className={`text-4xl duration-300 cursor-pointer ${isMenuActive? 'bg-white text-black' : 'text-white'}`} />
              {
                isMenuActive && <div className='absolute h-auto w-60 bg-white top-full right-0 flex flex-col justify-center items-start font-semibold text-sm shadow-md'>
                  <button className='hover:bg-gray-200 w-full h-auto flex px-4 py-2'>HOME</button>
                  <div onMouseLeave={() => setShowServices(false)} onMouseEnter={() => setShowServices(true)} className={`w-full flex flex-col justify-center items-start cursor-pointer h-auto`}>
                    <div className={`w-full flex justify-between items-center ${showServices && 'bg-gray-200'}`}>
                      <button className='hover:bg-gray-200 h-auto flex px-4 py-2'>SERVICES</button>
                      {
                        showServices? <IoMdArrowDropup className='text-2xl w-auto px-2'/> : <IoMdArrowDropdown className='text-2xl w-auto px-2'/>
                      }
                    </div>
                    {
                      showServices && showMenuIcon && <>
                        <div className='w-full border-gray-300 border z-10' />
                        {
                          services.map((service, key) => (
                            <button onClick={() => navigate('/' + service.link)} key={key} className='hover:bg-gray-200 w-full h-auto flex px-4 py-2 text-start'>{service.title.toUpperCase()}</button>   
                          ))
                        }
                        <div className='w-full border-gray-300 border' />
                      </>
                    }
                  </div>
                  <button className='hover:bg-gray-200 w-full h-auto flex px-4 py-2'>PORTFOLIO</button>
                  <button className='hover:bg-gray-200 w-full h-auto flex px-4 py-2'>ABOUT US</button>
                  <button className='hover:bg-gray-200 w-full h-auto flex px-4 py-2'>CONTACT</button>
                </div>
              }
            </>
              :
            <div className='w-full h-full flex justify-between items-center text-white font-semibold text-sm lg:text-base'>
              <button className='hover:bg-white hover:text-black flex px-3 py-2 duration-300'>HOME</button>
              <div 
                onClick={() => setShowServices(prev => !prev)}
                onMouseLeave={() => setShowServices(false)} 
                onMouseEnter={() => setShowServices(true)} 
                className={`flex relative flex-col justify-center items-start cursor-pointer h-auto px-3 py-2 hover:bg-white hover:text-black duration-300`}
              >
                <div className={`flex justify-between items-center`}>
                  <button className='h-auto flex'>SERVICES</button>
                  {
                    showServices ? <IoMdArrowDropup className='text-xl' /> : <IoMdArrowDropdown className='text-xl' />
                  }
                </div>
                {
                  showServices && 
                  <div className='w-60 h-auto absolute bg-white top-9 left-0 transform z-10 shadow-md'>
                    <div className='h-2 w-full bg-[#121212]' />
                    {
                      services.map((service, key) => (
                        <button 
                          onClick={() => navigate('/' + service.link)} 
                          key={key} 
                          className='hover:bg-gray-200 w-full h-auto flex px-4 py-2 text-start'
                        >
                          {service.title.toUpperCase()}
                        </button>
                      ))
                    }
                  </div>
                }
                </div>

                <button className='hover:bg-white hover:text-black flex px-3 py-2 duration-300'>PORTFOLIO</button>
                <button className='hover:bg-white hover:text-black flex px-3 py-2 duration-300'>ABOUT US</button>
                <button className='hover:bg-white hover:text-black flex px-3 py-2 duration-300'>CONTACT</button>
              </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Header
