import Carousel from "../components/hero/Carousel";
import NavBar from "../components/navBar/NavBar";

export default function Home() {  
  return (
    <div>
      <NavBar/>
      <Carousel autoSlide={true} autoSlideInterval={5000}/>
    </div>
  )
}
