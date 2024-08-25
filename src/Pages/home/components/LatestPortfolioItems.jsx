import React, {useState} from 'react'
import { portfolioItems } from '../../../data'
import { useNavigate } from 'react-router-dom'
import PortfolioItem from '../../../components/PortfolioItem'

const LatestPortfolioItems = () => {

  const [closedItem, setClosedItem] = useState(null)
  const [currentItem, setCurrentItem] = useState(null)

  const navigate = useNavigate()
  const latestPortfolioItems = portfolioItems.slice(0, 15)

  const handleItemClick = (id) => {
    if (currentItem && currentItem !== id) {
      setClosedItem(currentItem)
    }
    setCurrentItem(id)
    const container = document.getElementById('portfolioItemsContainer')
    if (container) {
      container.removeAttribute('id')
    }
  }

  return (
    <div  className='w-full h-auto bg-white text-[#5e5e5e] flex flex-col items-center justify-start py-8 md:py-16 shadow-md'>
      <div className='flex flex-col justify-center items-center gap-4 p-8 max-w-[1000px]'>
        <h1 className='leading-[27px] text-[25px] sm:text-[34px] sm:leading-[35px] md:text-[54px] md:leading-[56px] text-[#232323] text-center uppercase'>
          Latest portfolio items
        </h1>
        <p className='uppercase text-[12px] md:text-[20px] md:leading-[22px] text-[#a9a9a9] text-center'>
          things what we are doing
        </p>
      </div>
      <div className='w-full flex justify-center'>
        <div className='h-[2px] w-1/2 md:w-1/3 bg-[#eaeaea]' />
      </div>

      <div id='portfolioItemsContainer' className='w-full h-full px-4 md:px-8 lg:px-0 py-4 gap-4 max-w-[1000px] grid grid-cols-1 items-center md:grid-cols-4 wrapper-perspective justify-items-center'>
        {
          latestPortfolioItems.map((item, key) => (
            <PortfolioItem item={item} key={key} closedItem={closedItem} currentItem={currentItem} handleItemClick={handleItemClick} />
          ))
        }
        <div onClick={() => navigate('/Portfolio')} className='opacity-100 md:opacity-0 w-full max-w-[235px] md:max-w-full h-auto p-8 aspect-[1.30558620952091] gap-[5%] flex flex-col justify-center items-center bg-[#eeeeee] border border-solid cursor-pointer duration-300 hover:bg-[#e2e2e2]'>
          <p className='sm:text-5xl text-[250%]'>🌄</p>
          <p className='uppercase sm:text-base text-[70%] text-center font-bold text-[#232323]'>view more works</p>
        </div>
      </div>
    </div>
  )
}

export default LatestPortfolioItems
