import React from 'react'

const AboutUsComponent = () => {
  return (
    <div className='w-full flex justify-center items-center py-10 md:py-20 bg-aboutus-bg bg-cover bg-center'>
      <div className='w-full h-auto flex flex-col justify-center items-center max-w-[1000px]'> 
        <h1 className='uppercase text-white text-[34px] md:text-[54px] font-arial-sans-serif'>
          About us
        </h1>
        <div className='h-[1px] w-1/2 bg-[#eaeaea] m-8 opacity-30' />
        <p className='w-full columns-1 gap-4 text-justify text-[#cccccc] text-[11px] md:text-[13px] sm:columns-3 px-4 md:px-8 lg:px-0'>
          If you are reading this text, there may be several reasons why you have decided to visit our web site: somebody from our team has told you to visit our site and learn everything about us, or a friend, colleague suggested doing this, or you discovered us using search engine. In any case, you came here to get information about a particular service, or you wish to use this service.
          Our team has the ambition to offer a wide range of services, ranging from the creation of a simple logo to complex IT solutions. The list of services seems too large? Do you think that our developers added some extra links? You are mistaken; we really do offer all the services that you can see in the list.
          You will find similar texts on many websites, all of them will offer the highest quality service and will try to convince you that they are the best ones in today's IT market. We recommend that you just click on the link to read about our works, we are sure that after seeing our portfolio, you will choose us.
        </p>
      </div>
    </div>
  )
}

export default AboutUsComponent