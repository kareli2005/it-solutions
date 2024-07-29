import React, { useState, useRef, useEffect } from 'react';
import { IoSearch } from "react-icons/io5";
import { FiMinimize2 } from "react-icons/fi";
import { FaLink } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './PortfolioItem.css';

const PortfolioItem = ({ item, closedItem, currentItem, handleItemClick }) => {
  const [hoveredItem, setHoveredItem] = useState(false)
  const [firstRender, setFirstRender] = useState(true)
  const [openAnimation, setOpenAnimation] = useState('')
  const [closeAnimation, setCloseAnimation] = useState('')
  const itemRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (itemRef.current && !itemRef.current.contains(event.target)) {
        setHoveredItem(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const updatePositionClass = () => {
      if (itemRef.current) {
        const { left, right } = itemRef.current.getBoundingClientRect()
        const windowWidth = window.innerWidth

        const itemCenter = (left + right) / 2
        const viewportCenter = windowWidth / 2

        if (itemCenter < viewportCenter - windowWidth / 6) {
          setOpenAnimation('open-left-item')
          setCloseAnimation('close-left-item')
        } else if (itemCenter > viewportCenter + windowWidth / 6) {
          setOpenAnimation('open-right-item')
          setCloseAnimation('close-right-item')
        } else {
          setOpenAnimation('open-center-item')
          setCloseAnimation('close-center-item')
        }
      }
    }

    const debouncedUpdate = debounce(updatePositionClass, 200)
    debouncedUpdate()

    window.addEventListener('resize', debouncedUpdate)
    return () => {
      window.removeEventListener('resize', debouncedUpdate)
    }
  }, [itemRef.current])

  const debounce = (func, delay) => {
    let timer
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => func.apply(this, args), delay)
    }
  }

  const handleOpenItem = (item) => {
    if (window.innerWidth > 768) {
      if (firstRender && itemRef.current && itemRef.current.classList.contains('fly-up')) {
        handleItemClick(item.id)
        setFirstRender(false)
      } else if (firstRender && itemRef.current && itemRef.current.classList.contains(!'fly-up')) {
        handleItemClick(null)
      } else {
        handleItemClick(item.id)
        setFirstRender(false)
      }
    } else {
      window.open(item.link, '_blank')
    }
  }

  const handleCloseItem = (event) => {
    event.stopPropagation()
    handleItemClick(null)
  }

  const isActive = item.id === currentItem

  return (
    <div
      ref={itemRef}
      onClick={() => handleOpenItem(item)}
      onMouseEnter={() => setHoveredItem(true)}
      onMouseLeave={() => setHoveredItem(false)}
      className={`w-full h-full flex justify-center items-center relative cursor-pointer ${firstRender ? 'md:opacity-0' : 'md:opacity-100'} ${isActive ? openAnimation : closedItem === item.id && closeAnimation}`}
    >
      <div className={`${isActive ? 'md:hidden' : 'md:flex'} w-full hidden h-full justify-center items-center bg-white absolute duration-300 ${hoveredItem ? 'bg-opacity-30 opacity-100' : 'bg-opacity-0 opacity-0'}`}>
        <div className={`w-12 h-12 flex justify-center items-center rounded-full border border-white bg-white opacity-100 bg-opacity-35 ${!hoveredItem ? 'hidden' : ''}`}>
          <IoSearch className='text-white text-xl' />
        </div>
      </div>
      <img className={`${isActive ? 'hidden' : 'shadow-md md:shadow-none'}`} src={item.coverImg} alt={item.alt} />
      <div className={`${isActive ? 'flex' : 'hidden'} relative w-full h-full opened-item`}>
        <div onClick={handleCloseItem} className='absolute top-2 right-2 text-[#232323] bg-[#00afebe6] bg-opacity-60 hover:bg-[#27c9ff] hover:bg-opacity-100 duration-300 text-[11px] h-4 w-4 flex justify-center items-center cursor-pointer'>
          <FiMinimize2 />
        </div>
        <div className='flex w-full h-auto justify-center items-center absolute bottom-0 p-2'>
          <div className='h-auto w-full text-start flex px-1 bg-[#00afebe6] bg-opacity-60 text-[#232323] text-[7px] lg:text-[9px] relative'>
            <p className='w-3/4'>
              {item.description}
            </p>
            <Link to={item.link} target='_blank' className='bg-[#232323] h-full aspect-square flex justify-center items-center absolute right-0'>
              <FaLink className='text-white text-[9px]' />
            </Link>
          </div>
        </div>
        <img className='w-full h-full' src={item.fullImg} alt={item.alt} />
      </div>
    </div>
  )
}

export default PortfolioItem;
