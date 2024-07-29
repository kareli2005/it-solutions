import React from 'react'

const ServicesWithImg = ({ keyProp, item }) => {

  return (
    <div className={`w-full h-auto flex justify-center items-center flex-col p-4 md:p-8 lg:px-0 ${(keyProp + 1) % 2 !== 1 && 'bg-white shadow-md'}`}>
      <div className={`w-full max-w-[1000px] h-auto flex sm:justify-between items-center flex-col py-8 gap-10 md:gap-20 text-start ${(keyProp + 1) % 2 !== 1 ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
        <div className='servicesWithImg wrapper-perspective relative flex flex-col justify-center items-center gap-4'>
          <h1 className='w-full max-w-[380px] md:max-w-full text-[#181818] font-arial-sans-serif text-[26px] uppercase'>
            {item.name}
          </h1>
          <p className='w-full max-w-[380px] md:max-w-full text-[#5e5e5e] font-arial-sans-serif text-xs md:text-sm'>
            {item.description}
          </p>
        </div>
        <img className='servicesWithImg h-[150px] md:h-[250px] rounded-full' src={item.img} alt={item.alt} />        
      </div>
    </div>
  )
}

export default ServicesWithImg