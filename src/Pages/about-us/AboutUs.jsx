import React, { useEffect } from 'react'
import './AboutUs.css'
import WhoWeAre from '../../components/WhoWeAre'

const AboutUs = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [])

  return (
    <div className='w-full bg-[#f3f3f3]'>
      <div className='w-full flex justify-center items-center py-8 px-4 md:px-8 lg:px-0'>
        <div className='w-full h-auto flex flex-col justify-center items-center max-w-[1000px]'> 
          <div className='gap-2 w-full text-center'>
            <h1 className='w-full text-[#232323] font-arial-sans-serif text-[34px] md:text-[54px] uppercase duration-300'>About Us</h1>
            <p className='w-full text-[#a9a9a9] font-arial-sans-serif text-[12px] md:text-xl uppercase duration-300'>A Bit About Us Or Send A Message</p>
          </div>
          <div className='h-[2px] w-1/2 bg-[#dbdbdb] m-8 opacity-30' />
          <p className='description duration-300'>
            If you are reading this text, there may be several reasons why you have decided to visit our web site: somebody from our team has told you to visit our site and learn everything about us, or a friend, colleague suggested doing this, or you discovered us using search engine. In any case, you came here to get information about a particular service, or you wish to use this service.
            Our team has the ambition to offer a wide range of services, ranging from the creation of a simple logo to complex IT solutions. The list of services seems too large? Do you think that our developers added some extra links? You are mistaken; we really do offer all the services that you can see in the list.
            You will find similar texts on many websites, all of them will offer the highest quality service and will try to convince you that they are the best ones in today's IT market. We recommend that you just click on the link to read about our works, we are sure that after seeing our portfolio, you will choose us.
          </p>
        </div>
      </div>
      <WhoWeAre />
    </div>

  )
}

export default AboutUs