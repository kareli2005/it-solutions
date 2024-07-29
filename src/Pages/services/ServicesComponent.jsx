import React from 'react';
import './ServicesPage.css';

const ServicesComponent = ({ item }) => {

  return (
    <div className='w-full h-auto flex justify-center items-center flex-col p-4 md:p-8 lg:px-0'>
      <div className='w-full max-w-[1000px] wrapper-perspective relative h-auto flex sm:justify-between sm:items-start justify-start items-center flex-col py-8 gap-10 md:gap-20 text-start sm:flex-row'>
        <img className='h-[150px] md:h-[250px] rounded-full rotate-services-item' src={item.img} alt={item.alt} />        
        <div className='flex flex-col justify-center items-center gap-4 sm:p-8 rotate-services-item'>
          <h1 className='w-full max-w-[380px] md:max-w-full text-[#181818] font-bold font-arial-sans-serif text-2xl'>
            {item.title}
          </h1>
          <p className='w-full max-w-[380px] md:max-w-full text-[#5e5e5e] font-arial-sans-serif text-xs md:text-sm'
             dangerouslySetInnerHTML={{ __html: item.description }}>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServicesComponent;
