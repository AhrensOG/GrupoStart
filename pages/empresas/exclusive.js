import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Image from "next/image";
import Footer from "../../components/footer/Footer";
import Wsp from "../../components/whatsapp/Wsp";
import Map from "../../components/map/Map";
import Carousel from "../../components/carousel/Carousel";

const slides = [
  {
    url: "https://tork.news/__export/1695748921273/sites/tork/img/2023/09/26/dodge_muscle.png_1068883036.png",
  },
  {
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
  },
];

const exclusive = () => {
  const { asPath } = useRouter();
  const navbarButtons = asPath === "/empresas/exclusive";

  return (
    <div>
      <Head>
        <title>GrupoStart</title>
      </Head>
      <NavBar servicesDropdown={!navbarButtons} isFixed={false} />
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="w-full h-full">
          <Image src={'/TJP.jpg'} width={1000} height={1000} alt="IMG" className="w-full h-full" priority/>
        </div>
        <div className="w-full h-full bg-white flex flex-row justify-evenly items-center py-4">
          <Image src={"/ig.svg"} width={50} height={50} alt="ig" />
          <Image src={"/facebook.png"} width={50} height={50} alt="ig" />
          {/* <Image src={"/twitter.png"} width={50} height={50} alt="ig" /> */}
        </div>
        <div className="flex flex-col px-4 py-4 justify-center items-center gap-4 bg-[#0853fc]">
          <span className="font-roboto text-2xl text-white">VS Automotores</span>
          <p className="font-roboto text-lg text-start break-words text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a perferendis, voluptas perspiciatis architecto aut, officia corrupti natus consectetur in, pariatur modi sed! Error minima non accusamus nobis libero accusantium. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt quasi vero iusto dolor odio illo reprehenderit pariatur accusamus impedit voluptate aspernatur recusandae quia asperiores fuga, mollitia magnam officia alias dolorum.
          </p>
        </div>
        <div className="w-full h-full">
          <Carousel slides={slides} autoSlide={true} autoSlideInterval={5000} title="" subtitle="" marginTop={0}/>
        </div>
        <div className="w-full h-full">
          <Footer/>
        </div>
      </div>
      <Wsp/>
      <Map/>
    </div>
  );
};

export default exclusive;
