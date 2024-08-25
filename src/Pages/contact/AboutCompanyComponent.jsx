import React, { useState } from 'react'
import captchaImg from '../../assets/icons/captchaImg.png'
import sendMessageIcon from '../../assets/icons/spray-send-message.png'
import './Contact.css'

const AboutCompanyComponent = () => {

  const [clickedButton, setClickedButton] = useState(false)

  const handleButtonClick = () => {
    setClickedButton(true)
    setTimeout(() => {
      setClickedButton(false)
    }, 150)
  }

  return (
    <div className='w-full h-auto flex justify-center items-center py-8'>
      <div className='w-full max-w-[1000px] h-auto flex flex-col text-center justify-center items-center px-4 md:px-8 lg:px-0'>
        <div className='gap-2 w-full'>
          <h1 className='text-[#232323] text-[25px] sm:text-[34px] md:text-[54px] uppercase font-arial-sans-serif'>About Our Company</h1>
          <p className='text-[#a9a9a9] text-[12px] md:text-xl uppercase font-arial-sans-serif'>A Bit About Us Or Send A Message</p>
        </div>
        <div className='h-[1px] w-1/2 bg-[#eaeaea] m-6' />
        <div className='w-full md:minw-[500px] py-6 flex flex-col gap-4 md:gap-8 md:flex-row justify-start md:justify-between items-center'>
          <div className='flex flex-col w-full md:w-1/2 gap-4 AboutCompanyComponent'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-[20px] text-[#232323] font-bold text-start'>Who Are We?</h1>
              <p className='text-[11px] md:text-[13px] text-[#5e5e5e] text-start'>
                We, professionals working in different fields, decided to unite our knowledge and experience to create a company where the main values would be: enthusiasm, professionalism, creativity, result–orientation. We keep up with challenges and believe we are making well what we offer our customers.
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <h1 className='text-[20px] text-[#232323] font-bold text-start'>Our Mission?</h1>
              <p className='text-[11px] md:text-[13px] text-[#5e5e5e] text-start'>
                Our mission is simple: we want to turn IT technologies into a precondition and driving force for the development of your activities. We believe in your success with our help, and it makes us stronger because your development means our development as well. Development and progress are what we all need.
              </p>
            </div>
          </div>
          <div className='aboutcompany-width flex flex-col gap-4 text-[11px] relative w-full md:pt-20 md:-20 AboutCompanyComponent'>
            <img className='hidden md:flex absolute z-10 top-[10px] -left-[80px]' src={sendMessageIcon} alt="/sendmessageicon" />
            <div className='w-full flex flex-col gap-2 text-[11px] relative'>
              <div className='flex flex-col sm:flex-row items-start gap-4'>
                <div className='w-full flex flex-col items-start justify-center'>
                  <label className='text-[#b4b4b4] font-bold uppercase' htmlFor="name">Name:</label>
                  <input className='outline-none w-full bg-white px-3 py-2 border border-[#b4b4b4] rounded-sm' type="text" placeholder='Name' name="name" id="name" autoComplete="name" />
                </div>
                <div className='w-full flex flex-col items-start justify-center'>
                  <label className='text-[#b4b4b4] font-bold uppercase' htmlFor="email">E-mail:</label>
                  <input className='outline-none w-full bg-white px-3 py-2 border border-[#b4b4b4] rounded-sm' type="email" placeholder='E-mail' name="email" id="email" autoComplete="email" />
                </div>
              </div>
              <div className='w-full flex flex-col items-start justify-center'>
                <label className='text-[#b4b4b4] font-bold uppercase' htmlFor="message">Message:</label>
                <textarea className='outline-none w-full bg-white px-3 py-2 border border-[#b4b4b4] rounded-sm' placeholder='Your message..' name="message" id="message" rows="4" />
              </div>
              <div className='flex flex-col items-start gap-4'>
                <img src={captchaImg} alt="captcha" className='w-full md:w-1/3' />
                <div className='w-full flex flex-col items-start justify-center'>
                  <label className='text-[#b4b4b4] font-bold uppercase' htmlFor="captcha">Code:</label>
                  <input className='outline-none w-full bg-white px-3 py-2 border border-[#b4b4b4] rounded-sm' type="text" placeholder='CAPTCHA' name="captcha" id="captcha" autoComplete="off" />
                </div>
              </div>
              <button onClick={() => handleButtonClick()} className={`mt-4 px-4 py-2 bg-[#71b33a] text-white font-bold rounded-sm hover:bg-[#65a333] duration-300 shadow-md border border-solid border-[#5a922b] ${clickedButton ? 'translate-y-1 shadow-none' : 'shadow-[#58773f]'}`}>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCompanyComponent