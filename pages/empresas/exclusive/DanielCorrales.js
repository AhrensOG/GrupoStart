import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import NavBar from "../../../components/navBar/NavBar";
import Image from "next/image";
import Footer from "../../../components/footer/Footer";
import Wsp from "../../../components/whatsapp/Wsp";
import Map from "../../../components/map/Map";
import Carousel from "../../../components/carousel/Carousel";
import Link from "next/link";

const slides = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FDaniel1.jpeg?alt=media&token=1de20d5c-9481-4ca5-9656-77ec716f5e44",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2Fdaniel2.jpeg?alt=media&token=e827a0a6-6cf8-46a9-bd90-8f6dfc9150c7",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2Fdaniel3.jpeg?alt=media&token=659f060e-0c3b-448c-90eb-71913da9ab8c",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2Fdaniel4.jpeg?alt=media&token=c92b9b1a-ec1f-477f-ac80-bfdf917b6057",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2Fdaniel5.jpeg?alt=media&token=c7ae65bd-9667-4248-a8b7-479724d2901a",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2Fdaniel6.jpeg?alt=media&token=74777d73-f503-45bd-b924-f3fa52bea1ab",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2Fdaniel7.jpeg?alt=media&token=d0889864-47f7-4c7c-92cd-db9cb7cfa309",
  },
];

const DraAvalos = () => {
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
          <Image
            src={"https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FDanielCorrales.jpg?alt=media&token=85407efa-0ff5-407e-9055-b0a626265a7b"}
            width={1000}
            height={1000}
            alt="IMG"
            className="w-full h-full"
            priority
          />
        </div>
        <div className="w-full h-full bg-white flex flex-row justify-evenly items-center py-2">
          
          
          <Link
            target="_blank"
            rel="noreferrer noopener"
            href={"https://maps.app.goo.gl/R1WzFZWCGRL2TxT88"}
          >
            <Image
              className="hover:cursor-pointer"
              src={"/map.png"}
              width={50}
              height={50}
              alt="ig"
            />
          </Link>
          <Link
            target="_blank"
            rel="noreferrer noopener"
            href={"https://wa.me/3704702312"}
          >
            <Image
              className="hover:cursor-pointer"
              src={"/wsp.svg"}
              width={65}
              height={65}
              alt="ig"
            />
          </Link>
        </div>
        <div className="flex flex-col w-full px-4 py-4 justify-center items-center gap-4 bg-[#0853fc]">
          <span className="font-roboto text-2xl text-white">
            Profesor Daniel Corrales 
          </span>
          <p className="font-roboto text-lg text-start break-words text-white">
          👨‍🏫 Profesor Particular de Matemáticas, Análisis Matemático, Física, Geometría y Álgebra 📐📚. Con amplia experiencia educativa, mi enfoque se centra en proporcionar una enseñanza clara y efectiva para facilitar el entendimiento de conceptos complejos. 💡 Mi objetivo es cultivar la pasión por las ciencias exactas, guiando a mis estudiantes hacia el éxito académico con métodos pedagógicos sólidos y personalizados. 🎓 ¡Juntos, exploraremos el fascinante mundo de las matemáticas y la física! 🌐✨
          </p>
        </div>
        <div className="w-full h-full">
          <Carousel
            slides={slides}
            autoSlide={true}
            autoSlideInterval={3000}
            title=""
            subtitle=""
            marginTop={0}
          />
        </div>
        <div className="w-full h-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DraAvalos;
