import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import Carousel from '../../components/carousel/Carousel'
import Footer from '../../components/footer/Footer'
import SimpleSlider from '../../components/carousel/SimpleSlider'
import SearchBar from '../../components/search/SearchBar'

const Empresas = () => {
  return (
    <div>
      <NavBar/>
      <Carousel/>
      <SimpleSlider/>
      <SearchBar/>
      <Footer/>
    </div>
  )
}

export default Empresas