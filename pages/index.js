import { useRouter } from "next/router";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import NavBar from "../components/navBar/NavBar";
import Services from "../components/services/Services";
import Wsp from "../components/whatsapp/Wsp";
import Head from "next/head";

export default function Home() { 
  const { asPath } = useRouter() 
  const navbarButtons = asPath === '/'
  return (
    <div>
      <Head>
        <title>GrupoStart</title>
      </Head>
      <NavBar home={!navbarButtons} servicesDropdown={!navbarButtons} />
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
      <Wsp/>
    </div>
  )
}
