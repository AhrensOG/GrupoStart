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
import { motion } from "framer-motion";

const slides = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FDOC-VIVIANA-POST-MIERCOLES.png?alt=media&token=44d57fd4-ce95-4e34-86fe-e6d87288d54f&_gl=1*1d53e8e*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODcxMDc3Mi45LjEuMTY5ODcxMDgyOC40LjAuMA..",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FDOC-VIVIANA-POST-25.png?alt=media&token=190375f8-a953-4659-9d91-04127ecd89c3&_gl=1*vzs7lx*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODcxMDc3Mi45LjEuMTY5ODcxMDgzMi42MC4wLjA.",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FDOC-VIVIANA-POST-22.png?alt=media&token=724706dc-c5b2-46de-94c8-49f4addc10f3&_gl=1*wgvgev*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODcxMDc3Mi45LjEuMTY5ODcxMDgzNS41Ny4wLjA.",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FDOC-VIVIANA-POST-20.png?alt=media&token=30d35fc3-49ec-418e-8afc-2ad9bbc564c6&_gl=1*l5te9b*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODcxMDc3Mi45LjEuMTY5ODcxMDgzOC41NC4wLjA.",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FDOC-VIVIANA-POST-18.png?alt=media&token=bdf84133-28a0-4093-87df-38e91b0be8a3&_gl=1*qnc1az*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODcxMDc3Mi45LjEuMTY5ODcxMDg0MS41MS4wLjA.",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2FDOC-VIVIANA-POST-14.png?alt=media&token=cbc36072-199a-467a-8b2a-855ada68eab0&_gl=1*ml4fli*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODcxMDc3Mi45LjEuMTY5ODcxMDg0My40OS4wLjA.",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2F3.png?alt=media&token=d11812ec-298f-4090-aa43-60c731786bab&_gl=1*k6b8zz*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODcxMDc3Mi45LjEuMTY5ODcxMDg0Ni40Ni4wLjA.",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2F3%20(1).png?alt=media&token=be59631f-6bed-4716-be31-07e0a933769e&_gl=1*27sgln*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODcxMDc3Mi45LjEuMTY5ODcxMDg1Mi40MC4wLjA.",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2F2.png?alt=media&token=ef2fb326-a2d7-4883-9ee6-470cd41805dc&_gl=1*w1zbph*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODcxMDc3Mi45LjEuMTY5ODcxMDg1NS4zNy4wLjA.",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/BusinessImage%2F1%20(1).png?alt=media&token=346fc094-facb-4901-9d24-ae201e526b37&_gl=1*kqxry5*_ga*MTQxMTA1OTUwOS4xNjk4MTgzMDI3*_ga_CW55HF8NVT*MTY5ODcxMDc3Mi45LjEuMTY5ODcxMDg1OC4zNC4wLjA.",
  },
];

const Viviana = () => {
  const { asPath } = useRouter();
  const navbarButtons = asPath === "/empresas/exclusive";

  return (
    <div>
      <Head>
        <title>GrupoStart</title>
      </Head>
      <NavBar servicesDropdown={!navbarButtons} isFixed={false} />
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* <div className="w-full h-full">
          <Image
            src={"/Empresas/DraVivianaMeza/DraVivianaMeza.svg"}
            width={1000}
            height={1000}
            alt="IMG"
            className="w-full h-full"
            priority
          />
        </div> */}
        <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Image
        src={"/Empresas/DraVivianaMeza/DraVivianaMeza.svg"}
        width={1000}
        height={1000}
        alt="IMG"
        className="w-full h-full"
        priority
      />
    </motion.div>
        <div className="w-full h-full bg-white flex flex-row justify-evenly items-center py-2">
          <Link
            target="_blank"
            rel="noreferrer noopener"
            href={"https://instagram.com/dra.vivianameza?igshid=OGQ5ZDc2ODk2ZA=="}
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
            href={"https://www.facebook.com/estudiojuridicoygestoria"}
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
            href={"https://wa.me/3704654860"}
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
            Dra. Viviana Meza
          </span>
          <p className="font-roboto text-lg text-start break-words text-white">
            Asesoría y trámites Migratorios Asesoría Jurídica Integral Gestoría del Automotor
          </p>
        </div>
        <div className="w-full h-full">
          <Carousel
            slides={slides}
            autoSlide={true}
            autoSlideInterval={1000}
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

export default Viviana;
