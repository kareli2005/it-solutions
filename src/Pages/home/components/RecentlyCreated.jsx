import React from 'react'
import GalleryItem from './GalleryItem'
import { firstGalleryList, secondGalleryList, thirdGalleryList } from '../../../data'
import { useNavigate } from 'react-router-dom'

const RecentlyCreated = () => {
  const navigate = useNavigate()

  return (
    <div className='w-full h-auto bg-[#f3f3f3] text-[#5e5e5e] flex flex-col items-center justify-start py-8 md:py-16'>
      <div className='flex flex-col justify-center items-center gap-4 p-8 max-w-[1000px]'>
        <h1 className='text-[25px] leading-[27px] sm:text-[34px] sm:leading-[35px] md:text-[54px] md:leading-[56px] text-[#232323] text-center uppercase'>
          Recently Created Project Galleries
        </h1>
        <p className='uppercase text-[12px] md:text-[20px] md:leading-[22px] text-[#a9a9a9] text-center'>
          Most popular projects
        </p>
      </div>
      <div className='w-full flex justify-center'>
        <div className='h-[2px] w-1/2 md:w-1/3 bg-[#eaeaea]' />
      </div>

      <div className='w-full p-4 md:gap-2 gap-2 max-w-[1000px] grid grid-cols-1 md:grid-cols-4 wrapper-perspective justify-items-center'>
        <GalleryItem GalleryList={firstGalleryList} />
        <GalleryItem GalleryList={secondGalleryList} /> 
        <GalleryItem GalleryList={thirdGalleryList} />
        <div onClick={() => navigate('/Portfolio')} className='galleryItem opacity-100 md:opacity-0 w-2/3 md:w-full h-auto p-8 md:aspect-[1.30558620952091] gap-[5%] flex flex-col justify-center items-center bg-[#eeeeee] border border-solid cursor-pointer duration-300 hover:bg-[#e2e2e2]'>
          <p className='sm:text-5xl text-[250%]'>🌄</p>
          <p className='uppercase sm:text-base text-[70%] text-center font-bold text-[#232323]'>view more works</p>
        </div>
      </div>
    </div>
  )
}

export default RecentlyCreated
