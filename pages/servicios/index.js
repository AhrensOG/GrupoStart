import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/footer/Footer'

const Servicios = () => {
  return (
    <div>
      <NavBar/>
      <div className='pt-[78px]'>
        <img src='/services/1.png' alt='img' className='w-full h-full'/>
        <img src='/services/2.png' alt='img' className='w-full h-full'/>
        <img src='/services/3.png' alt='img' className='w-full h-full'/>
        <img src='/services/4.png' alt='img' className='w-full h-full'/>
      </div>
      <Footer/>
    </div>
  )
}

export default Servicios