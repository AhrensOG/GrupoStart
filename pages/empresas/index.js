import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import Carousel from '../../components/carousel/Carousel'
import Footer from '../../components/footer/Footer'
import SimpleSlider from '../../components/carousel/SimpleSlider'
import SearchBar from '../../components/search/SearchBar'
import ListCompanyCards from '../../components/listCompanyCards/ListCompanyCards'
import { useRouter } from 'next/router'
import Wsp from '../../components/whatsapp/Wsp'
import Head from 'next/head'

const Empresas = () => {
  const { asPath } = useRouter() 
  const navbarButtons = asPath === '/empresas'
  return (
    <div>
      <Head>
        <title>GrupoStart</title>
      </Head>
      <NavBar servicesDropdown={!navbarButtons}/>
      <Carousel autoSlide={true} autoSlideInterval={5000}/>
      <SimpleSlider/>
      <SearchBar/>
      <ListCompanyCards/>
      <Footer/>
      <Wsp/>
    </div>
  )
}

export default Empresas