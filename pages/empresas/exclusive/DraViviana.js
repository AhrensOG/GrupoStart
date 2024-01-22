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
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2Favalos1.jpg?alt=media&token=a3b8cc6b-3110-4810-87ec-467b583192dc",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2Favalos2.jpg?alt=media&token=8747c9ca-9e63-450e-af1c-f820e4b88553",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2Favalos4.jpg?alt=media&token=538fd316-0868-4aa2-9d48-e39118e19c2d",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2Favalos5.jpg?alt=media&token=266b07d5-9866-40ea-aa5b-f1f20e332b94",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2Favalos6.jpg?alt=media&token=06931926-4ef2-4c35-a3e5-fefd39155ba9",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2Favalos7.jpg?alt=media&token=8a982acd-2ab5-4dc4-b73f-4cb8c4bb58b6",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2Favalos8.jpg?alt=media&token=4b2af5f7-8215-4856-bdf4-035441623375",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2Favalos9.jpg?alt=media&token=33b60aa2-4e55-4427-9e24-a65c55f6dd21",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2Favalos10.jpg?alt=media&token=46c0ce8c-7a6f-416b-aa17-816de615ba44",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2Favalos3.jpg?alt=media&token=b8c8885e-1079-48fd-9d96-d2a8de6f50c4",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2Favalos11.jpg?alt=media&token=03372dee-8768-44a9-9ca2-f400243fe8fb",
  }
];

const DraViviana = () => {
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
          <Image src={'/Empresas/AvalosDiratchette.jpg'} width={1000} height={1000} alt="IMG" className="w-full h-full" priority/>
        </div>
        <div className="w-full h-full bg-white flex flex-row justify-evenly items-center py-4">
          {/* <Link 
            target="_blank"
            rel="noreferrer noopener"
            href={'https://www.instagram.com/grupostart.ok/'}
          >
            <Image className="hover:cursor-pointer" src={"/ig.svg"} width={50} height={50} alt="ig" />
          </Link> */}
          {/* <Link
            target="_blank"
            rel="noreferrer noopener" 
            href={'https://www.instagram.com/grupostart.ok/'}
          >
            <Image className="hover:cursor-pointer" src={"/facebook.png"} width={50} height={50} alt="ig" />
          </Link> */}
          <Link
            target="_blank"
            rel="noreferrer noopener" 
            href={'https://wa.me/3704211032'}
          >
            <Image className="hover:cursor-pointer" src={"/wsp.svg"} width={50} height={50} alt="ig" />
          </Link>
          <Link
            target="_blank"
            rel="noreferrer noopener"
            href={"https://maps.app.goo.gl/kXHSVDmSLLGHFyne8"}
          >
            <Image className="hover:cursor-pointer" src={"/map.png"} width={50} height={50} alt="ig" />
          </Link>
          {/* <Image src={"/twitter.png"} width={50} height={50} alt="ig" /> */}
        </div>
        <div className="flex flex-col px-4 py-4 justify-center items-center gap-4 bg-[#0853fc]">
          <span className="font-roboto text-2xl text-white">Dra Avalos</span>
          <p className="font-roboto text-lg text-start break-words text-white">
          👩‍⚖️ Experiencia en una variedad de áreas legales. Uno de mis enfoques principales es el Derecho de Familia, donde ofrezco asesoramiento y representación en casos de divorcio, filiación, cuidado personal y derecho de comunicación. 👨‍👩‍👧‍👦

Además, me especializo en sucesiones, asegurando que los procesos de herencia se realicen de manera justa y legal. También manejo casos de usurpación y desalojo, protegiendo los derechos de la propiedad y la vivienda. 💼🏡

¿Has experimentado daños o perjuicios? No dudes en contactarme para iniciar una acción legal en busca de justicia y compensación. 💔💰

Finalmente, si necesitas asistencia en excarcelaciones, estoy aquí para ayudarte en momentos difíciles. 🗝️

¡Confía en mi experiencia y dedicación para guiar y proteger tus derechos legales! Contáctame para una consulta y trabajaremos juntos para encontrar la mejor solución a tus necesidades legales. ⚖️🤝
          </p>
        </div>
        <div className="w-full h-full">
          <Carousel slides={slides} autoSlide={true} autoSlideInterval={5000} title="" subtitle="" marginTop={0}/>
        </div>
        <div className="w-full h-full">
          <Footer/>
        </div>
      </div>
      {/* <Wsp/> */}
      {/* <Map/> */}
    </div>
  );
};

export default DraViviana;
