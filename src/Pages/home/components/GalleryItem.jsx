import React, { useRef, useState, useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const GalleryItem = ({ GalleryList }) => {
  const [hoveredItem, setHoveredItem] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [prevSlide, setPrevSlide] = useState(null)
  const [isClickable, setIsClickable] = useState(true)

  const itemRef = useRef(null)

  useEffect(() => {
    const item = itemRef.current

    const handleMouseEnter = () => {
      setHoveredItem(true)
    }

    const handleMouseLeave = () => {
      setHoveredItem(false)
    }

    if (item) {
      item.addEventListener('mouseenter', handleMouseEnter)
      item.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (item) {
        item.removeEventListener('mouseenter', handleMouseEnter)
        item.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  const handleNextSlide = () => {
    if (!isClickable) return

    setIsClickable(false)
    setPrevSlide(currentSlide)
    setCurrentSlide(prev => (prev + 1) % GalleryList.length)

    setTimeout(() => {
      setIsClickable(true)
    }, 1000)
  }

  return (
    <div ref={itemRef} className='galleryItem relative w-2/3 md:w-full aspect-square md:aspect-auto md:opacity-0'>
      <div className='fbg-div'/>
      <div className='sbg-div'/>
      <div className='mbg-div'>
        {
          GalleryList.map((item, key) => (
            <div
              key={key}
              className={`${currentSlide === key ? 'z-10 opacity-100' : (prevSlide === key ? 'leave-gallery-item' : 'opacity-0')} border-white border-4 border-solid w-full h-full absolute`}
            >
              <img className='w-full h-full' src={item.img} alt={item.alt} />
            </div>
          ))
        }
      </div>
      <div
        onClick={handleNextSlide}
        className={`${hoveredItem && 'md:flex'} hidden z-50 absolute justify-center items-center opacity-50 hover:opacity-80 duration-300 cursor-pointer h-8 w-8 text-center bg-black rounded-full text-white top-[calc(50%-16px)] right-4`}
      >
        <IoIosArrowForward />
      </div>
    </div>
  )
}

export default GalleryItem;
