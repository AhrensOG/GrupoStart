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
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-9.jpg?alt=media&token=c45adc46-b134-4dc8-b571-f964db85c533",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-21.jpg?alt=media&token=a0821256-8bd7-43b7-a760-b0e1a3129479",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-5.jpg?alt=media&token=804da2be-db54-4a7f-8d36-5805ab839bfe",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-24.png?alt=media&token=12a71351-59b7-41a6-ac4a-dcc7969e5517",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-11.jpg?alt=media&token=d39f9eac-d79a-42a7-9fae-a0d27a35f002",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-4.jpg?alt=media&token=4d34aba4-b7b7-41ca-8748-1af7495e2792",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-10.jpg?alt=media&token=50f06398-e754-4484-9b35-afaa856d1051",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-28.jpg?alt=media&token=b1b2bc01-1360-47d5-afd1-fc741c3ad27f",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-25.jpg?alt=media&token=3550cca1-cc08-407f-8ceb-57d2411db5fe",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-17.png?alt=media&token=f6613525-510b-41e1-acfb-9ac7a96916f7",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-27.jpg?alt=media&token=04f1003d-e61b-4746-8153-1e4a0be33853",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-8.png?alt=media&token=c03a5b36-97b0-47ea-ad92-a502bd293827",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-12.png?alt=media&token=8879df33-b546-4d51-b5ab-099c1e0a53b2",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-19.png?alt=media&token=17219d55-b7ac-4d10-97d1-22fa0e7188a9",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-14.png?alt=media&token=c0037a23-1482-4f1c-a76c-a285ddb0dddb",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-13.png?alt=media&token=fdd71fe9-f016-4b74-b695-4b321cc7fd72",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-18.png?alt=media&token=ee3375cc-b362-4c1b-a67e-cee9533b192d",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-2.png?alt=media&token=6dd97fcf-086f-4922-9c03-9d02368476ff",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-16.png?alt=media&token=9aaf14a4-929c-4df3-b6f0-df855ce66438",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-7.jpg?alt=media&token=8b0a871e-b1cb-4361-bcfd-b89a3069dad0",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-15.jpg?alt=media&token=c489115a-80dc-45af-8794-fd8f89d3a535",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-32.jpg?alt=media&token=a8305691-aac9-4c57-a12d-2158f0f15c82",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-30.jpg?alt=media&token=6103f22d-c2b7-4550-ba13-177285984fa6",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-26.jpg?alt=media&token=bf20fec7-e999-4502-932d-02095e12a2d7",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-1.jpg?alt=media&token=88ec8595-1c9a-49ae-a589-1b9f58314c28",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-29.jpg?alt=media&token=c86aadeb-eabd-43fd-9770-40f9da105e12",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-23.jpg?alt=media&token=2db39943-e755-49c2-9019-db6b47a87be9",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-22.png?alt=media&token=5c5ac052-a712-4060-ba59-ec1bd5dd4ac9",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-3.jpg?alt=media&token=42279a2b-9db3-4d18-b1c9-7bd29024109d",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-6.jpg?alt=media&token=7e35f270-27ef-4b3c-a908-77d5884050cf",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-33.jpg?alt=media&token=4ab00b0e-e7f1-4a73-adb4-a484296cd633",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-20.jpg?alt=media&token=4e88a175-1ff0-4c1b-bd43-c6063e2c21a5",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-31.jpg?alt=media&token=cce8fec5-2618-4249-a91b-08af71dfc066",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-Chats-1.png?alt=media&token=669666ba-3933-41c3-93c3-71d70dd266f9",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-chats-2.png?alt=media&token=7230119e-09b1-4505-9fb7-5556fa716bf0",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-chats-3.png?alt=media&token=e7dc83ab-c73a-49cb-8a90-00268066b37f",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FStart-chats-4.png?alt=media&token=23d9a363-bfa7-4622-afd1-f4646c54d0e3",
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
            src={"/Empresas/Seba.png"}
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
            href={"https://www.instagram.com/grupostart.ok/"}
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
            href={"https://www.facebook.com/profile.php?id=100091823826062"}
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
            href={"https://wa.me/3704619402"}
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
            Sebastian Vera
          </span>
          <p className="font-roboto text-lg text-start break-words text-white">
          Te ayudamos a impulsar tus redes sociales para mejorar tu imagen y que puedas alcanzar nuevos clientes; Además de desarrollar poderosas herramientas de autogestión para mantener tu negocio activo las 24 hs.📈
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

export default DraAvalos;