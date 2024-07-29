import React, { useEffect } from 'react'
import WhoWeAre from '../../components/WhoWeAre'
import ServicesComponent from './ServicesComponent'
import { services } from '../../data'

const ServicesPage = () => {
  const currentPath = window.location.pathname

  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  })

  return (
    <div className='w-full bg-[#f3f3f3]'>

      {
        services.map((item, key) => {
          if (currentPath === ('/' + item.link)) return (
            <div key={key}>
              <ServicesComponent item={item} />
              <WhoWeAre />
            </div>
          )
        })
      }
    </div>
  )
}

export default ServicesPage