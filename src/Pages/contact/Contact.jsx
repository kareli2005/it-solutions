import React, { useEffect } from 'react'
import ContactTeamComponent from './ContactTeamComponent'
import AboutCompanyComponent from './AboutCompanyComponent'
import GoogleMapComponent from './GoogleMapComponent'

const Contact = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [])

  useEffect(() => {
    const screenPosition = window.innerHeight

    const handleScroll = () => {
      const contactTeamElements = document.querySelectorAll('.contactTeamImg')
      contactTeamElements.forEach((element, index) => {
        const elementPosition = element.getBoundingClientRect().top
      
        if (elementPosition < screenPosition) {
          setTimeout(() => {
            element.classList.add('rotate-contact-team')
            element.style.animationDelay = `${index * 0.2}s`
          }, 0)
        }
      })
    }

    const AboutCompanyComponents = document.querySelectorAll('.AboutCompanyComponent')
      
      AboutCompanyComponents.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        if (elementPosition < screenPosition) {
          element.classList.add('slide-in-about-company')
        }
    })
  
    window.addEventListener('scroll', handleScroll)
    handleScroll()
  
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  return (
    <div className='w-full bg-[rgb(243,243,243)]'>
      <GoogleMapComponent />
      <AboutCompanyComponent />
      <ContactTeamComponent />
    </div>
  )
}

export default Contact