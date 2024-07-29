import React, { useEffect, useState, useRef } from 'react'
import Logo from '../assets/icons/logo.png'
import { IoMenu } from 'react-icons/io5'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { services } from '../data'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [showMenuIcon, setShowMenuIcon] = useState(window.innerWidth <= 768)
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [showServices, setShowServices] = useState(false)
  const [fixedHeader, setFixedHeader] = useState(false)
  const headerRef = useRef(null)

  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    const handleScroll = () => {
      if (headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight
        if (window.scrollY > headerHeight) {
          setFixedHeader(true)
        } else {
          setFixedHeader(false)
        }
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setShowMenuIcon(windowWidth <= 768)
  }, [windowWidth])

  return (
    <>
      <div ref={headerRef} className={`w-full h-auto bg-[#121212] justify-center items-center font-sans ${fixedHeader ? 'hidden' : 'flex'} z-[9999]`}>
        <div className='w-full max-w-[1000px] px-4 md:px-8 lg:px-0 lg:py-4 py-2 flex justify-between items-center'>
          <img onClick={() => navigate('/')} src={Logo} alt='logo' className='h-10 lg:h-auto cursor-pointer' />
          <div className='flex justify-center items-center relative'>
            {showMenuIcon ? (
              <>
                <IoMenu onClick={() => setIsMenuActive(prev => !prev)} className={`text-4xl duration-300 cursor-pointer ${isMenuActive ? 'bg-white text-black' : 'text-white'}`} />
                {isMenuActive && (
                  <div className='absolute h-auto w-60 bg-white top-full right-0 flex flex-col justify-center items-start font-semibold text-sm shadow-md z-[9999]'>
                    <button onClick={() => navigate('/')} className='hover:bg-gray-200 w-full h-auto flex px-4 py-2'>HOME</button>
                    <div
                      onMouseLeave={() => setShowServices(false)}
                      onMouseEnter={() => setShowServices(true)}
                      onClick={() => setShowServices(!showServices)}
                      className='w-full flex flex-col justify-center items-start cursor-pointer h-auto'
                    >
                      <div className={`w-full flex justify-between items-center ${showServices && 'bg-gray-200'}`}>
                        <button className='hover:bg-gray-200 h-auto flex px-4 py-2'>SERVICES</button>
                        {showServices ? <IoMdArrowDropup className='text-2xl w-auto px-2' /> : <IoMdArrowDropdown className='text-2xl w-auto px-2' />}
                      </div>
                      {showServices && showMenuIcon && (
                        <>
                          <div className='w-full border-gray-300 border z-[9999]' />
                          {services.map((service, key) => (
                            <button onClick={() => navigate('/' + service.link)} key={key} className='hover:bg-gray-200 w-full h-auto flex px-4 py-2 text-start'>
                              {service.title.toUpperCase()}
                            </button>
                          ))}
                          <div className='w-full border-gray-300 border' />
                        </>
                      )}
                    </div>
                    <button onClick={() => navigate('/Portfolio')} className='hover:bg-gray-200 w-full h-auto flex px-4 py-2'>PORTFOLIO</button>
                    <button onClick={() => navigate('/About-Us')} className='hover:bg-gray-200 w-full h-auto flex px-4 py-2'>ABOUT US</button>
                    <button onClick={() => navigate('/Contact-Us')} className='hover:bg-gray-200 w-full h-auto flex px-4 py-2'>CONTACT</button>
                  </div>
                )}
              </>
            ) : (
              <div className='w-full h-full flex justify-between items-center text-white font-semibold text-sm lg:text-base'>
                <button onClick={() => navigate('/')} className='hover:bg-white hover:text-black flex px-3 py-2 duration-300'>HOME</button>
                <div
                  onClick={() => setShowServices(!showServices)}
                  onMouseLeave={() => setShowServices(false)}
                  onMouseEnter={() => setShowServices(true)}
                  className='flex relative flex-col justify-center items-start cursor-pointer h-auto px-3 py-2 hover:bg-white hover:text-black duration-300'
                >
                  <div className='flex justify-between items-center'>
                    <button className='h-auto flex'>SERVICES</button>
                    {showServices ? <IoMdArrowDropup className='text-xl' /> : <IoMdArrowDropdown className='text-xl' />}
                  </div>
                  {showServices && (
                    <div className='w-60 h-auto absolute bg-white top-9 lg:top-10 left-0 transform z-[9999] shadow-md'>
                      <div className='h-1 w-full bg-[#121212]' />
                      {services.map((service, key) => (
                        <button onClick={() => navigate('/' + service.link)} key={key} className='hover:bg-gray-200 w-full h-auto flex px-4 py-2 text-start'>
                          {service.title.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button onClick={() => navigate('/Portfolio')} className='hover:bg-white hover:text-black flex px-3 py-2 duration-300'>PORTFOLIO</button>
                <button onClick={() => navigate('/About-Us')} className='hover:bg-white hover:text-black flex px-3 py-2 duration-300'>ABOUT US</button>
                <button onClick={() => navigate('/Contact-Us')} className='hover:bg-white hover:text-black flex px-3 py-2 duration-300'>CONTACT</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={`w-full h-auto bg-[#121212] fixed flex justify-center items-center font-sans duration-300 transform ${fixedHeader ? 'translate-y-0' : '-translate-y-full'} z-[9999]`}>
        <div className={`w-full max-w-[1000px] py-2 px-4 md:px-8 lg:px-0 justify-between items-center ${fixedHeader ? 'flex' : 'hidden'}`}>
          <img onClick={() => navigate('/')} src={Logo} alt='logo' className='h-6 md:h-8 max-h-8 cursor-pointer' />
          <div className='flex justify-center items-center relative'>
            {showMenuIcon ? (
              <>
                <IoMenu onClick={() => setIsMenuActive(prev => !prev)} className={`text-4xl duration-300 cursor-pointer ${isMenuActive ? 'bg-white text-black' : 'text-white'}`} />
                {isMenuActive && (
                  <div className='absolute h-auto w-60 bg-white top-full right-0 flex flex-col justify-center items-start font-semibold text-sm shadow-md'>
                    <button onClick={() => navigate('/')} className='hover:bg-gray-200 w-full h-auto flex px-4 py-2'>HOME</button>
                    <div
                      onClick={() => setShowServices(!showServices)}
                      onMouseLeave={() => setShowServices(false)}
                      onMouseEnter={() => setShowServices(true)}
                      className='w-full flex flex-col justify-center items-start cursor-pointer h-auto'
                    >
                      <div className={`w-full flex justify-between items-center ${showServices && 'bg-gray-200'}`}>
                        <button className='hover:bg-gray-200 h-auto flex px-4 py-2'>SERVICES</button>
                        {showServices ? <IoMdArrowDropup className='text-2xl w-auto px-2' /> : <IoMdArrowDropdown className='text-2xl w-auto px-2' />}
                      </div>
                      {showServices && showMenuIcon && (
                        <>
                          <div className='w-full border-gray-300 border z-[9999]' />
                            {services.map((service, key) => (
                              <button onClick={() => navigate('/' + service.link)} key={key} className='hover:bg-gray-200 w-full h-auto flex px-4 py-2 text-start'>
                                {service.title.toUpperCase()}
                              </button>
                            ))}
                          <div className='w-full border-gray-300 border' />
                        </>
                      )}
                    </div>
                    <button onClick={() => navigate('/Portfolio')} className='hover:bg-gray-200 w-full h-auto flex px-4 py-2'>PORTFOLIO</button>
                    <button onClick={() => navigate('/About-Us')} className='hover:bg-gray-200 w-full h-auto flex px-4 py-2'>ABOUT US</button>
                    <button onClick={() => navigate('/Contact-Us')} className='hover:bg-gray-200 w-full h-auto flex px-4 py-2'>CONTACT</button>
                  </div>
                )}
              </>
            ) : (
              <div className='w-full h-full flex justify-between items-center text-white font-semibold text-sm lg:text-base'>
                <button onClick={() => navigate('/')} className='hover:bg-white hover:text-black flex px-3 py-2 duration-300'>HOME</button>
                <div
                  onClick={() => setShowServices(!showServices)}
                  onMouseLeave={() => setShowServices(false)}
                  onMouseEnter={() => setShowServices(true)}
                  className='flex relative flex-col justify-center items-start cursor-pointer h-auto px-3 py-2 hover:bg-white hover:text-black duration-300'
                >
                  <div className='flex justify-between items-center'>
                    <button className='h-auto flex'>SERVICES</button>
                    {showServices ? <IoMdArrowDropup className='text-xl' /> : <IoMdArrowDropdown className='text-xl' />}
                  </div>
                  {showServices && (
                    <div className='w-60 h-auto absolute bg-white top-9 lg:top-10 left-0 transform shadow-md z-[9999]'>
                      <div className='h-1 w-full bg-[#121212]' />
                      {services.map((service, key) => (
                        <button onClick={() => navigate('/' + service.link)} key={key} className='hover:bg-gray-200 w-full h-auto flex px-4 py-2 text-start'>
                          {service.title.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button onClick={() => navigate('/Portfolio')} className='hover:bg-white hover:text-black flex px-3 py-2 duration-300'>PORTFOLIO</button>
                <button onClick={() => navigate('/About-Us')} className='hover:bg-white hover:text-black flex px-3 py-2 duration-300'>ABOUT US</button>
                <button onClick={() => navigate('/Contact-Us')} className='hover:bg-white hover:text-black flex px-3 py-2 duration-300'>CONTACT</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
