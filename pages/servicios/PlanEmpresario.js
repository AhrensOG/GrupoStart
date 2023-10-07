import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/footer/Footer'
import Image from 'next/image'
import Wsp from '../../components/whatsapp/Wsp'
import Head from 'next/head'

const PlanEmpresario = () => {
  return (
    <div>
      <Head>
        <title>GrupoStart</title>
      </Head>
      <NavBar/>
      <div className='pt-[80px]'>
        <Image src='/services/8.png' priority={true} alt='img' width={10000} height={10000} className='w-full h-full'/>
        <Image src='/services/9.png' priority={true} alt='img' width={10000} height={10000} className='w-full h-full'/>
      </div>
      <Footer/>
      <Wsp/>
    </div>
  )
}

export default PlanEmpresario