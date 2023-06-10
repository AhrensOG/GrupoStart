import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import Carousel from '../../components/carousel/Carousel'
import Footer from '../../components/footer/Footer'
import SimpleSlider from '../../components/carousel/SimpleSlider'
import SearchBar from '../../components/search/SearchBar'
import ListCompanyCards from '../../components/listCompanyCards/ListCompanyCards'

const Empresas = () => {
  return (
    <div>
      <NavBar/>
      <Carousel autoSlide={true}/>
      <SimpleSlider/>
      <SearchBar/>
      <ListCompanyCards/>
      <Footer/>
    </div>
  )
}

export default Empresas