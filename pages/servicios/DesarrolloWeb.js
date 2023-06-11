import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/footer/Footer'

const DesarrolloWeb = () => {
  return (
    <div>
      <NavBar/>
      <div className='pt-[78px]'>
        <img src='/services/17.png' alt='img' className='w-full h-full'/>
        <img src='/services/18.png' alt='img' className='w-full h-full'/>
      </div>
      <Footer/>
    </div>
  )
}

export default DesarrolloWeb