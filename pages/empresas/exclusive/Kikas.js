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
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FKikas1.jpg?alt=media&token=010c5e66-833f-4f5d-8836-2e76d2b2b5a9",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FKikas2.jpg?alt=media&token=1c2f44b0-4bed-40b0-b1ee-e99f47bce033",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FKikas3.jpg?alt=media&token=65ec5336-6e99-45b6-9d7c-3a0a15a77731",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FKikas4.jpg?alt=media&token=089e91d1-f36c-450c-b610-611a4d322a62",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FKikas5.jpg?alt=media&token=bb3d13e4-ed58-430d-b689-2e310d8d5729",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FKikas6.jpg?alt=media&token=1711b56c-9b58-45d5-a194-d55dccc72c20",
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
          src={"https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2Fkikas%20tarjetas%20web.jpg?alt=media&token=e7e24284-9cac-4aaf-8aeb-8413391e80d6"}
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
            href={"https://www.instagram.com/kikaspasteleria"}
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
            href={"https://www.facebook.com/Kikaspasteleria"}
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
            href={"https://maps.app.goo.gl/BarivVsi1euXs1uk7"}
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
            href={"https://wa.me/3704378777"}
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
          <span className="font-roboto text-2xl text-white">Kika’s Pastelería</span>
          <p className="font-roboto text-lg text-start break-words text-white">
            Pastelería Artesanal🍰
Tortas, postres y desayunos llenos de azúcar y 💖
📍Yrigoyen 349, Formosa
Todos los días de 9 a 13.30 - 17 a 21 hs
Hacé tu pedido👇
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

export default Gatec;
