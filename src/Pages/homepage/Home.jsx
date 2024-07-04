import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div className='w-full min-h-screen h-auto bg-white flex flex-col justify-between items-center'>
      <Header />
      <Footer />
    </div>
  )
}

export default Home