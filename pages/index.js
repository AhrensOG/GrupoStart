import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Carousel from "../components/hero/Carousel";
import NavBar from "../components/navBar/NavBar";
import Services from "../components/services/Services";

export default function Home() {  
  return (
    <div>
      <NavBar/>
      <Carousel autoSlide={true} autoSlideInterval={5000}/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  )
}
