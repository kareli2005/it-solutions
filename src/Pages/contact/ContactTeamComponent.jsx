import React from 'react'
import mapImg from '../../assets/icons/content-map.png'
import pinImg from '../../assets/icons/map-pin-white.png'
import './Contact.css'

const ContactTeamComponent = () => {
  return (
    <div className='w-full h-auto flex justify-center items-center py-8 bg-white font-arial-sans-serif'>
      <div className='w-full max-w-[1000px] h-auto justify-center items-center flex flex-col text-center px-4 md:px-8 lg:px-0'>
        <div className='gap-2 w-full'>
          <h1 className='w-full text-[#232323] text-[25px] sm:text-[34px] md:text-[54px] uppercase'>contact our team</h1>
          <p className='w-full text-[#a9a9a9] text-[12px] md:text-xl uppercase'>or just come to our office</p>
        </div>
        <div className='h-[1px] w-1/2 bg-[#eaeaea] m-6' />
        <div className='w-full py-6 flex flex-col gap-4 md:flex-row justify-start md:justify-around items-center wrapper-perspective'>
          <div className='contactTeamImg w-auto h-auto relative md:opacity-0'>
            <img src={mapImg} alt='map' />
            <img className='top-[43%] left-[57%] absolute' src={pinImg} alt='pin' />
          </div>
          <div className='contactTeamImg flex h-full w-1/3 flex-col justify-start items-start gap-4 md:opacity-0'>
            <div className='h-full text-center md:text-start'>
              <p className='text-[#8e8e8e] text-[11px]'>Call Our Office</p>
              <h1 className='font-bold text-[22px] lg:text-[30px] text-[#232323]'>032 2 42 44 45</h1>
            </div>
            <div className='h-full text-center md:text-start'>
              <p className='text-[#8e8e8e] text-[11px]'>Contact our support via e-mail</p>
              <a className='duration-300 font-bold text-[22px] lg :text-[30px] text-[#232323]' href="mailto:info@it-solutions.ge">info@it-solutions.ge</a>              
            </div>
            <div className='h-full text-center md:text-start'>
              <p className='text-[#8e8e8e] text-[11px]'>Our Office Location</p>
              <h1 className='font-bold text-[22px] lg:text-[30px] text-[#232323]'>Tbilisi, Georgia</h1>
              <h1 className='font-semibold text-[#232323] text-[20px]'>V.godziashvili str. #3</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactTeamComponent