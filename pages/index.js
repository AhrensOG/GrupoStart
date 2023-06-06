import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Carousel from "../components/hero/Carousel";
import Hero from "../components/hero/Hero";
import NavBar from "../components/navBar/NavBar";
import Services from "../components/services/Services";

export default function Home() {  
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}
