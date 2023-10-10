import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Image from "next/image";
import Footer from "../../components/footer/Footer";

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
          <Image src={'/CARD.jpg'} width={1000} height={1000} alt="IMG" className="w-full h-full" priority/>
        </div>
        <div className="w-full h-full bg-white flex flex-row justify-around items-center py-4">
          <Image src={"/ig.svg"} width={50} height={50} alt="ig" />
          <Image src={"/facebook.png"} width={50} height={50} alt="ig" />
          <Image src={"/twitter.png"} width={50} height={50} alt="ig" />
        </div>
        <div className="flex flex-col px-4 py-4 justify-center items-center gap-4 bg-[#0853fc]">
          <span className="font-roboto text-2xl text-white">VS Automotores</span>
          <p className="font-roboto text-lg text-start break-words text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a perferendis, voluptas perspiciatis architecto aut, officia corrupti natus consectetur in, pariatur modi sed! Error minima non accusamus nobis libero accusantium. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt quasi vero iusto dolor odio illo reprehenderit pariatur accusamus impedit voluptate aspernatur recusandae quia asperiores fuga, mollitia magnam officia alias dolorum.
          </p>
        </div>
        <div className="px-4 py-4 flex flex-col gap-4">
          <img className="w-full h-full rounded-xl max-h-[200px]" src="https://tork.news/__export/1695748921273/sites/tork/img/2023/09/26/dodge_muscle.png_1068883036.png" alt="" />
          <img className="w-full h-full rounded-xl max-h-[200px]" src="https://tork.news/__export/1695748921273/sites/tork/img/2023/09/26/dodge_muscle.png_1068883036.png" alt="" />
          <img className="w-full h-full rounded-xl max-h-[200px]" src="https://tork.news/__export/1695748921273/sites/tork/img/2023/09/26/dodge_muscle.png_1068883036.png" alt="" />
          <img className="w-full h-full rounded-xl max-h-[200px]" src="https://tork.news/__export/1695748921273/sites/tork/img/2023/09/26/dodge_muscle.png_1068883036.png" alt="" />

        </div>
        <div className="w-full h-full">
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default exclusive;
