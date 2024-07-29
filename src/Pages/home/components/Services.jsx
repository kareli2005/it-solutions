import React from 'react'

const Services = () => {

  return (
    <div className='w-full h-auto bg-[#f3f3f3] text-[#5e5e5e]'>
      <div className='flex flex-col justify-center items-center gap-4 p-8'>
        <h1 className='text-[25px] leading-[27px] sm:text-[34px] sm:leading-[35px] md:text-[54px] md:leading-[56px] text-[#232323] text-center'>SERVICES WE OFFER</h1>
        <p className='uppercase text-[12px] md:text-[20px] md:leading-[22px] text-[#a9a9a9] text-center'>
          We offer our customers a comprehensive range of services
        </p>
      </div>
      <div className='w-full flex justify-center'>
        <div className='h-[2px] w-1/2 md:w-1/3 bg-[#eaeaea]' />
      </div>
      <div id='services' className='flex justify-center items-center w-full p-8 lg:px-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-[1000px] text-[13px] font-arial-sans-serif gap-8'>
          <div className='w-full gap-1 flex flex-col justify-start items-start'>
            <strong>Web Design and Development</strong>
            <p>
              Today, real modern and virtual worlds are combined. 
              If your occupation, work or even hobby is not presented in virtual world by website, this means that unfortunately you have not kept up with the modern trends.
              IT Solutions is the bridge between you and virtual world. We offer you development of any kind of web page, including web design, web development and web placement. 
              Please visit our portfolio before contacting us.            
            </p>
          </div>
          <div className='w-full gap-1 flex flex-col justify-start items-start'>
            <strong>Server Infrastructure</strong>
            <p>
              Server infrastructure: server rooms planning, equipment , setup of server operating systems and services, consulting , troubleshooting and services are really our strong point. 
              Please contact us, if you really want to have a guaranteed continuity business processes in the company or you just want to be proud of the fact that "Everything works excellent at yours".            
            </p>
          </div>
          <div className='w-full gap-1 flex flex-col justify-start items-start'>
            <strong>IP telephony</strong>
            <p>
              - Do not hold up the phone, I'm waiting for very important call from companion…
              <br />
              - Please hurry up to answer phone, do not make customer to wait…
              <br />
              Have you ever had such situation in your office? Feel the discomfort from unorganized phone system? You will solve this connectivity problem in your office with modern IP telephone system.
            </p>
          </div>
          <div className='w-full gap-1 flex flex-col justify-start items-start'>
            <strong>Software development</strong>
            <p>
              You have already developed appropriate software in your company but it still does not meet your requirements? That's why we offer you any kind of software service.
            </p>
          </div>
          <div className='w-full gap-1 flex flex-col justify-start items-start'>
            <strong>Computer Networks</strong>
            <p>
              The network infrastructure is not only the so-called Switch, router, Wi-Fi, cable, network adapter, and network printer. 
              All these devices must be selected and configured by professionals. Also professional must help to plan and arrange infrastructure.
            </p>
          </div>
          <div className='w-full gap-1 flex flex-col justify-start items-start'>
            <strong>Computer equipment</strong>
            <p>
              We provide a variety of computer hardware, network and peripheral advices for your office, houses and cottages. 
              Also we offer some techniques for server infrastructure.
            </p>
          </div>
          <div className='w-full gap-1 flex flex-col justify-start items-start'>
            <strong>Network security</strong>
            <p>
              Make your network more secure with the help of our network engineers. We offer any type of network design, the service and troubleshooting.
            </p>
          </div>
          <div className='w-full gap-1 flex flex-col justify-start items-start'>
            <strong>Media streaming</strong>
            <p>
              IT Solutions offers the installation of surveillance (hidden) cameras, arrangement of media servers and service of video content delivery to any location.
            </p>
          </div>
          <div className='w-full gap-1 flex flex-col justify-start items-start'>
            <strong>IT support</strong>
            <p>
              We provide operating systems, different software and antivirus systems for your computer. Our services cover a wide range of IT support.
            </p>
          </div>
        </div>
      </div>
      <div className='w-full bg-white flex justify-center items-center'>
        <div id='facebook-apps' className='w-full max-w-[1000px] flex flex-col justify-center items-start p-8 lg:px-0'>
          <h1 className='text-[20px] font-bold'>Facebook apps</h1>
          <p className='text-[13px]'>
            Make your Facebook page more diverse with high-quality and interesting applications. 
            Facebook application is the best way to introduce your Facebook page to more customers and we are ready to take part in this process.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
