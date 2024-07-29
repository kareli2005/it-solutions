import React, { useEffect, useState } from 'react'
import WhoWeAre from '../../components/WhoWeAre'
import { portfolioItems } from '../../data'
import PortfolioItem from '../../components/PortfolioItem'

const Portfolio = () => {

  const [closedItem, setClosedItem] = useState(null)
  const [currentItem, setCurrentItem] = useState(null)

  const handleItemClick = (id) => {
    if (currentItem && currentItem !== id) {
      setClosedItem(currentItem)
    }
    setCurrentItem(id)
  }

  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [])

  useEffect(() => {
    const portfolioItemsContainer = document.getElementById('portfolioItemsContainer')
    const portfolioItemsElements = Array.from(portfolioItemsContainer.querySelectorAll(':scope > div'))
    
    portfolioItemsElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('fly-up')
      }, index * 200)
    })
  }, [])

  return (
    <div className='w-full bg-[#f3f3f3] flex flex-col justify-center items-center'>
      <div className='w-full flex flex-col justify-center items-center py-8 px-4 md:px-8 lg:px-0 max-w-[1000px]'>
        <div className='w-full h-auto flex flex-col justify-center items-center'> 
          <div className='gap-2 w-full text-center'>
            <h1 className='w-full text-[#232323] font-arial-sans-serif text-[34px] md:text-[54px] uppercase duration-300'>Our Portfolio</h1>
            <p className='w-full text-[#a9a9a9] font-arial-sans-serif text-[12px] md:text-xl uppercase duration-300'>Project We Have Done</p>
          </div>
          <div className='h-[2px] w-1/2 bg-[#dbdbdb] m-8 opacity-30' />
          <p className='duration-300 text-[11px] sm:text-[13px] text-[#5e5e5e] py-4'>
            Professionals, working in our company, have already implemented different type of projects in these organizations: News Agency GHN, News Agency  PrimeTime, Radio Star FM, Radio GIPA, Tbilisi Green School, "Saga Impex" Ltd., British-Georgian Academy, Oil and Gas Corporation, Interes GE Ltd., Caucasian Auto Auction.
          </p>
        </div>
        <div id='portfolioItemsContainer' className='w-full py-4 gap-4 grid grid-cols-1 md:grid-cols-4 wrapper-perspective z-10'>
          {
            portfolioItems.map((item, key) => (
              <PortfolioItem item={item} key={key} closedItem={closedItem} currentItem={currentItem} handleItemClick={handleItemClick} />
            ))
          }
        </div>
      </div>
      <WhoWeAre />
    </div>
  )
}

export default Portfolio