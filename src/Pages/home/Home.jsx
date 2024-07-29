import React, { useEffect } from 'react'
import Slider from './components/Slider'
import Services from './components/Services'
import RecentlyCreated from './components/RecentlyCreated'
import LatestPortfolioItems from './components/LatestPortfolioItems'
import { homeServicesList } from '../../data'
import ServicesWithImg from './components/ServicesWithImg'
import AboutUsComponent from './components/AboutUsComponent'
import ContactTeam from './components/ContactTeam'
import AboutCompany from './components/AboutCompany'
import './components/Animations.css'

const Home = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const screenPosition = window.innerHeight

      // services we offer
      const servicesWeOffer = document.getElementById('services')
      const facebookApps = document.getElementById('facebook-apps')

      const servicesPosition = servicesWeOffer.getBoundingClientRect().top
      const facebookAppsPosition = facebookApps.getBoundingClientRect().top

      if (servicesPosition < screenPosition) {
        servicesWeOffer.classList.add('services')
      }

      if (facebookAppsPosition < screenPosition) {
        facebookApps.classList.add('facebook-apps')
      }

      // recently created
      const recentlyCreatedElements = document.querySelectorAll('.galleryItem')
      
      recentlyCreatedElements.forEach((element, index) => {
        const elementPosition = element.getBoundingClientRect().top

        if (elementPosition < screenPosition) {
          setTimeout(() => {
            element.classList.add('fly-up')
            element.style.animationDelay = `${index * 0.2}s`
          }, 0)
        }
      })

      // latest portfolio items
      const portfolioItemsContainer = document.getElementById('portfolioItemsContainer')
      const portfolioItemsContainerPosition = portfolioItemsContainer.getBoundingClientRect().top
      if (portfolioItemsContainerPosition < screenPosition) {
        const portfolioItemsElements = Array.from(portfolioItemsContainer.querySelectorAll(':scope > div'))  
        portfolioItemsElements.forEach((element, index) => {
          setTimeout(() => {
            element.classList.add('fly-up')
          }, index * 200)
        })
      }

      // contact team
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

      // services with img
      const servicesWithImgElements = document.querySelectorAll('.servicesWithImg')

      servicesWithImgElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top

        if (elementPosition < screenPosition) {
          element.classList.add('rotate-services-item')
        }
      })

      // about our company
      const AboutCompanyComponents = document.querySelectorAll('.AboutCompanyComponent')
      
      AboutCompanyComponents.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        if (elementPosition < screenPosition) {
          element.classList.add('slide-in-about-company')
        }
      })

    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='w-full bg-[#f3f3f3]'>
      <Slider />
      <Services />
      <RecentlyCreated />
      <LatestPortfolioItems />
      {
        homeServicesList.map((item, key) => (
          <ServicesWithImg item={item} key={key} keyProp={key} />
        ))
      }
      <AboutUsComponent bgImg={true} />
      <ContactTeam />
      <AboutCompany />
    </div>
  )
}

export default Home