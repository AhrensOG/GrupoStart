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
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2Fcorrales1.jpg?alt=media&token=b696ff7b-321d-456b-9816-c442695e8c0a&_gl=1*tp17jv*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODc3ODkyMi4xMC4xLjE2OTg3NzkxNDYuNTcuMC4w",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2Fcorrales2.jpg?alt=media&token=b1064a64-5b54-4f1c-a040-0ffbcd2b3d6f&_gl=1*1ujt5q4*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODc3ODkyMi4xMC4xLjE2OTg3NzkxNjEuNDIuMC4w",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2Fcorrales3.JPG?alt=media&token=d4a8a5f8-4208-4b26-9e77-f230482305dc&_gl=1*1y8uk5b*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODc3ODkyMi4xMC4xLjE2OTg3NzkxNjQuMzkuMC4w",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2Fcorrales4.JPG?alt=media&token=ee0b8324-7b9c-4992-a9a2-632703573354&_gl=1*1a98jj1*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODc3ODkyMi4xMC4xLjE2OTg3NzkxNjguMzUuMC4w",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2Fcorrales5.JPG?alt=media&token=54664a85-843e-4208-896e-ae1e38804be0&_gl=1*oz3bou*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODc3ODkyMi4xMC4xLjE2OTg3NzkxNzIuMzEuMC4w",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2Fcorrales6.JPG?alt=media&token=854e554e-7ed6-41e2-99d4-7947e6013ff1&_gl=1*1kgzj6r*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODc3ODkyMi4xMC4xLjE2OTg3NzkxNzYuMjcuMC4w",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2Fcorrales7.jpg?alt=media&token=33783dd7-1f4c-4575-a8c7-77559d7e569b&_gl=1*1u3c4zk*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODc3ODkyMi4xMC4xLjE2OTg3NzkxNzkuMjQuMC4w",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2Fcorrales8.jpg?alt=media&token=01d49cca-0fb0-4492-bc49-e69b59eb10f1&_gl=1*lococ9*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODc3ODkyMi4xMC4xLjE2OTg3NzkxODMuMjAuMC4w",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2Fcorrales9.jpg?alt=media&token=b76f5c86-14af-4123-bf5d-387a64658125&_gl=1*1mdhhuh*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODc3ODkyMi4xMC4xLjE2OTg3NzkxODYuMTcuMC4w",
  },
];

const DraCorrales = () => {
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
            src={"/Empresas/DraCorrales.jpg"}
            width={1000}
            height={1000}
            alt="IMG"
            className="w-full h-full"
            priority
          />
        </div>
        <div className="w-full h-full bg-white flex flex-row justify-evenly items-center py-4">
          <Link
            target="_blank"
            rel="noreferrer noopener"
            href={
              "https://instagram.com/dra.silvanacorrales?igshid=YzAwZjE1ZTI0Zg=="
            }
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
            href={"https://wa.me/3704309685"}
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
        <div className="flex flex-col px-4 py-4 justify-center items-center gap-4 bg-[#0853fc]">
          <span className="font-roboto text-2xl text-white">
            Dra. Corrales
          </span>
          <p className="font-roboto text-lg text-start break-words text-white">
            Abogado especialista en derecho de la Seguridad Social (derecho
            previsional). Derecho de Sucesiones. Prescripción adquisitiva
            (Usucapion). - Atiendo exclusivamente con turnos⚖️
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

export default DraCorrales;
