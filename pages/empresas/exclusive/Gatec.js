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
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FGatec%201.jpg?alt=media&token=e96915ae-d5cc-41e6-9b02-344cda5361c3&_gl=1*12akxpn*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODc4NTA2MS4xMS4xLjE2OTg3ODUxNDYuNDYuMC4w",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FGatec%202.jpg?alt=media&token=1a7a6b5f-4b6e-48ec-a99d-99043a79d3fe&_gl=1*1tekji4*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODc4NTA2MS4xMS4xLjE2OTg3ODUxNjcuMjUuMC4w",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FGatec%203.jpg?alt=media&token=f837db13-3bce-48f4-8187-54ad11fe90b8&_gl=1*30ij7b*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODc4NTA2MS4xMS4xLjE2OTg3ODUxNzUuMTcuMC4w",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FGatec%204.jpg?alt=media&token=4c0e226f-39c9-401a-a389-6aad014ea47a&_gl=1*rhr01s*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODc4NTA2MS4xMS4xLjE2OTg3ODUxODAuMTIuMC4w",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FGatec%205.jpg?alt=media&token=6a4339bb-4ef8-4154-a0b4-6fb02d5c13b5&_gl=1*qz0dg6*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODc4NTA2MS4xMS4xLjE2OTg3ODUxODcuNS4wLjA.",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FGatec%206.jpg?alt=media&token=829a5356-c1de-403b-ad5c-3dca764d06bf&_gl=1*ukdk9*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODc4NTA2MS4xMS4xLjE2OTg3ODUxOTEuMS4wLjA.",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FGatec%207.jpg?alt=media&token=b7eba175-03e9-4e84-9359-f1946596c3b4&_gl=1*cxy8l9*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODc4NTA2MS4xMS4xLjE2OTg3ODUxOTQuNTkuMC4w",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FGatec%208.jpg?alt=media&token=a1b6389a-de7f-4ae9-a68b-af489bec991d&_gl=1*wivj33*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODc4NTA2MS4xMS4xLjE2OTg3ODUxOTguNTUuMC4w",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FGatec%209.jpg?alt=media&token=02cb919a-e944-428d-8232-a329ded71b36&_gl=1*1ncbxj7*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODc4NTA2MS4xMS4xLjE2OTg3ODUyMDEuNTIuMC4w",
  },
];

const Gatec = () => {
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
            src={"/Empresas/Gatec/Gatec.jpg"}
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
            href={"https://instagram.com/gatecfsa?igshid=YzAwZjE1ZTI0Zg=="}
          >
            <Image
              className="hover:cursor-pointer"
              src={"/ig.svg"}
              width={50}
              height={50}
              alt="ig"
            />
          </Link>
          <Link
            target="_blank"
            rel="noreferrer noopener"
            href={"https://www.facebook.com/gatecfsa"}
          >
            <Image
              className="hover:cursor-pointer"
              src={"/facebook.png"}
              width={50}
              height={50}
              alt="ig"
            />
          </Link>
          <Link
            target="_blank"
            rel="noreferrer noopener"
            href={"https://maps.app.goo.gl/VrjLathVsLsegjkS8"}
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
            href={"https://wa.me/3704047272"}
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
          <span className="font-roboto text-2xl text-white">Gatec</span>
          <p className="font-roboto text-lg text-start break-words text-white">
            Solucionamos los problemas que tenga tu equipo. 🧑🏻‍🔧⚙️🧰 Celulares📱
            Smart TV🖥️ Informática💻 Equipos de audio 🔊 tablet's,PC, Notebook,
            Consolas + joystick y mas :)
          </p>
        </div>
        <div className="w-full h-full">
          <Carousel
            slides={slides}
            autoSlide={true}
            autoSlideInterval={4000}
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

export default Gatec;
