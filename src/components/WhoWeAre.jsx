import React, { useEffect } from 'react'
import { services } from '../data'
import { useNavigate } from 'react-router-dom'
import './WhoWeAre.css'

const WhoWeAre = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const screenPosition = window.innerHeight
      const AboutCompanyComponents = document.querySelectorAll('.WhoWeAreText')
      
      AboutCompanyComponents.forEach((element, index) => {
        const elementPosition = element.getBoundingClientRect().top
        if (elementPosition < screenPosition) {
          setTimeout(() => {
            element.classList.add('fly-down')
            element.style.animationDelay = `${index * 0.2}s`
          }, 0)
        }
      })

    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='w-full bg-white flex flex-col justify-center items-center'>
      <div className='w-full max-w-[1000px] flex flex-col items-start justify-center gap-8 md:flex-row md:items-start md:justify-between px-4 md:px-8 lg:px-0 py-8 wrapper-perspective'>
        <div className='WhoWeAreText w-full md:w-1/3 text-justify flex flex-col gap-4 md:opacity-0'>
          <h1 className='text-[#232323] text-[19px] lg:text-2xl font-bold duration-300'>Who Are We ?</h1>
          <p className='text-[#717171] text-[11px] lg:text-[13px] duration-300'>We, professionals working in different fileds, decided to unite our knowledge and experience to create company where the main values would be: enthusiasm, professionalism, creativity, result – orientation. We keep up going with challenges and we believe we are making well what we offer our customers.</p>
        </div>
        <div className='WhoWeAreText w-full md:w-1/3 text-justify flex flex-col gap-4 md:opacity-0'>
          <h1 className='text-[#232323] text-[19px] lg:text-2xl font-bold duration-300'>Our Mission ?</h1>
          <p className='text-[#717171] text-[11px] lg:text-[13px] duration-300'>Our mission is simple: we want to turn IT technologies into precondition and driving force of development of your activities. We believe in your success with our help and it makes us stronger because your development means our development as well. Development and progress is what we all need.</p>
        </div>
        <div className='WhoWeAreText w-full md:w-1/3 text-justify flex flex-col gap-4 md:opacity-0'>
          <h1 className='text-[#232323] text-[19px] lg:text-2xl font-bold duration-300'>What We Do ?</h1>
          <div className='grid grid-cols-2 max-w-max gap-x-2'>
            {
              services.map((service, key) => (
                <p onClick={() => navigate('/' + service.link)} key={key} className='text-[#717171] text-[11px] lg:text-[13px] text-start cursor-pointer duration-300 hover:text-blue-400'>
                  {service.title}
                </p>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre