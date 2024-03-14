import { useRouter } from "next/router";
import Servicio1 from "../components/services/Servicio1";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import NavBar3 from "../components/navBar/NavBar3";
import Fundadores from "../components/services/Fundadores";
import Wsp from "../components/whatsapp/Wsp";
import Head from "next/head";
import HeroV2 from "../components/hero/HeroV2";
import NavBarV2 from "../components/navBar/NavBarV2";
import JirafaFuturista from "../components/services/JirafaFuturista";
import TuNegocio from "../components/services/TuNegocio"

export default function Home() { 
  const { asPath } = useRouter() 
  const navbarButtons = asPath === '/'
  return (
    <div className="flex flex-col w-full">
      <Head>
        <title>GrupoStart</title>
      </Head>
      
      {/* <NavBar3/> */}
      {/* <HeroV2/> */}
      {/* <Servicio1/> */}
      {/* <JirafaFuturista/> */}
      <Fundadores/>      
      {/* <Contact/> */}
      {/* <Footer/> */}
      {/* <TuNegocio/> */}
      {/* <Wsp/> */}
    </div>
  )
}
