import React, { useEffect, useState, useRef } from 'react'
import { sliderData } from '../../../data'
import { MdOutlineNavigateBefore, MdOutlineNavigateNext, MdPause } from 'react-icons/md'
import './Slider.css'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [prevSlide, setPrevSlide] = useState(null)
  const [showArrows, setShowArrows] = useState(false)
  const [autoSlider, setAutoSlider] = useState(true)
  const [firstRender, setFirstRender] = useState(true)
  const [forwardSwipe, setForwardSwipe] = useState(false)
  const [slideButtonEnabled, setSlideButtonEnabled] = useState(true)
  const [autoSliderRefresh, setAutoSliderRefresh] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (autoSlider) {
      startAutoSlide()
    } else {
      stopAutoSlide()
    }

    return () => stopAutoSlide()
  }, [autoSliderRefresh, autoSlider])

  const startAutoSlide = () => {
    stopAutoSlide()
    intervalRef.current = setInterval(() => {
      setAutoSliderRefresh(!autoSliderRefresh)
      handleSlideDirection(true)
    }, 5000)
  }
  
  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const resetAutoSlide = () => {
    stopAutoSlide()
    if (autoSlider) {
      startAutoSlide()
    }
  }

  const handleSlideDirection = (bool) => {
    if (!slideButtonEnabled) return

    setPrevSlide(currentSlide)
    bool ? setForwardSwipe(true) : setForwardSwipe(false)
    bool ? setCurrentSlide(prev => (prev + 1) % sliderData.length) : setCurrentSlide(prev => (prev - 1 + sliderData.length) % sliderData.length)
    
    setFirstRender(false)
    resetAutoSlide()
    setSlideButtonEnabled(false)
    setTimeout(() => {
      setSlideButtonEnabled(true)
    }, 1000)
  }

  const handleSetCurrentSlide = (i) => {
    if (!slideButtonEnabled) return

    setFirstRender(false)
    if (i > currentSlide) {
      setForwardSwipe(true)
    } else {
      setForwardSwipe(false)
    }
    setFirstRender(false)
    setPrevSlide(currentSlide)
    setCurrentSlide(i)

    setSlideButtonEnabled(false)
    setTimeout(() => {
      setSlideButtonEnabled(true)
    }, 1000)

    resetAutoSlide()
  }

  const handleAutoSlider = (bool) => {
    setAutoSlider(bool)
  }

  return (
    <div
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
      className='w-full aspect-video max-h-[500px] flex justify-center items-center bg-black relative'
    >
      {/* navigation */}
      <div className={`${showArrows ? 'opacity-100' : 'opacity-0'} h-10 w-10 bg-white absolute top-[calc(50%-20px)] left-16 rounded-full z-[100] duration-300 text-slate-400 hover:text-[#5e5e5e] cursor-pointer text-3xl`}>
        <MdOutlineNavigateBefore onClick={() => handleSlideDirection(false)} className='w-full h-full text-center' />
      </div>
      <div className={`${showArrows ? 'opacity-100' : 'opacity-0'} h-10 w-10 bg-white absolute top-[calc(50%-20px)] right-16 rounded-full z-[100] duration-300 text-slate-400 hover:text-[#5e5e5e] cursor-pointer text-3xl`}>
        <MdOutlineNavigateNext onClick={() => handleSlideDirection(true)} className='w-full h-full text-center' />
      </div>
      <div className='absolute bottom-2 z-[1000] flex justify-center items-center gap-2 duration-300'>
        <div onClick={() => handleAutoSlider(true)} className={`${autoSlider ? 'text-[#5e5e5e]' : 'text-slate-400'} w-5 h-5 bg-white rounded-full text-center text-sm hover:text-[#5e5e5e] cursor-pointer`}>
          <MdOutlineNavigateNext className='w-full h-full text-center' />
        </div>
        {
          Array(sliderData.length).fill().map((_, key) => (
            <div onClick={() => handleSetCurrentSlide(key)} key={key} className='w-3 h-3 rounded-full flex justify-center items-center bg-white cursor-pointer'>
              <div className={`${currentSlide === key ? 'flex' : 'hidden'} rounded-full w-1 h-1 bg-[#5e5e5e]`} />
            </div>
          ))
        }
        <div onClick={() => handleAutoSlider(false)} className={`${!autoSlider ? 'text-[#5e5e5e]' : 'text-slate-400'} w-5 h-5 bg-white rounded-full text-center text-sm hover:text-[#5e5e5e] cursor-pointer`}>
          <MdPause className='w-full h-full text-center' />
        </div>
      </div>

      {/* slides */}
      <div className='w-full h-full flex justify-center items-center relative overflow-hidden'>
        {
          sliderData.map((slide, key) => (
            <div
              key={key}
              className={`${currentSlide === key ? (firstRender ? 'landing-slide' : (forwardSwipe ? 'enter-slide' : 'reverse-enter-slide')) : (prevSlide === key ? (forwardSwipe ? 'leave-slide' : 'reverse-leave-slide') : 'opacity-0')} w-full max-w-[1000px] h-full absolute flex justify-center items-center overflow-hidden`}
            >
              <div className='w-full h-full relative'>
                <img
                  src={slide.titleImg}
                  alt="/title"
                  className={`${currentSlide === key ? (firstRender? 'first-enter-title-img': 'enter-title-img') : 'leave-title-img'} h-[10%] absolute right-[10%] top-[10%]`}
                />
                <img
                  src={slide.firstImg}
                  alt="/title"
                  className={`${currentSlide === key ? (firstRender? 'first-enter-img': 'enter-img') : 'leave-img'} h-[98%] absolute bottom-0 left-0`}
                />
                <img
                  src={slide.secondImg}
                  alt=""
                  className={`${currentSlide === key ? (firstRender? 'first-enter-img': 'enter-img') : 'leave-img'} h-[80%] absolute bottom-0 left-0`}
                />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Slider
