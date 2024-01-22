import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import NavBar from '../../../components/navBar/NavBar';
import Carousel from '../../../components/carousel/Carousel';
import Image from 'next/image';
import Footer from '../../../components/footer/Footer';
import Link from 'next/link';

const EmpresaPage = ({ businessName }) => {

  const { asPath } = useRouter();
  const navbarButtons = asPath === "/empresas/exclusive";
  const [business, setBusiness] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`/api/empresas/controller?name=${businessName}`)
      setBusiness(res.data)      
    }
    getData()
  }, [])
 
  return (
    <div>
      {console.log(business?.firstImage)}
      {
        business?.id 
        ? (
          <div>
            <Head>
              <title>GrupoStart</title>
            </Head>
            <NavBar servicesDropdown={!navbarButtons} isFixed={false} />
            <div className="flex flex-col justify-center items-center w-full h-full">
              <div className="w-full h-full">
                <img
                  src={business.firstImage}
                  width={1000}
                  height={1000}
                  alt="IMG"
                  className="w-full h-full"
                  priority
                />
              </div>
              <div className="w-full h-full bg-white flex flex-row justify-evenly items-center py-2">
                {
                  business.instagramLink 
                  ? (
                    <Link
                    target="_blank"
                    rel="noreferrer noopener"
                    href={business.instagramLink}
                  >
                    <Image
                      className="hover:cursor-pointer"
                      src={"/ig.svg"}
                      width={65}
                      height={65}
                      alt="ig"
                    />
                  </Link>
                  ) : (
                    <div className='hidden'></div>
                  )
                }                
                {
                  business.facebookLink 
                  ? (
                    <Link
                    target="_blank"
                    rel="noreferrer noopener"
                    href={business.facebookLink}
                  >
                    <Image
                      className="hover:cursor-pointer"
                      src={"/facebook.png"}
                      width={65}
                      height={65}
                      alt="ig"
                    />
                  </Link>
                  ) : (
                    <div className='hidden'></div>
                  )
                }
                {
                  business.mapsLink 
                  ? (
                    <Link
                    target="_blank"
                    rel="noreferrer noopener"
                    href={business.mapsLink}>
                    <Image
                      className="hover:cursor-pointer"
                      src={"/map.png"}
                      width={65}
                      height={65}
                      alt="ig"
                    />
                  </Link>
                  ) : (
                    <div className='hidden'></div>
                  )
                }
                {
                  business.whatsappLink ?
                  (
                  <Link
                    target="_blank"
                    rel="noreferrer noopener"
                    href={business.whatsappLink}
                  >
                    <Image
                      className="hover:cursor-pointer"
                      src={"/wsp.svg"}
                      width={65}
                      height={65}
                      alt="ig"
                    />
                  </Link>
                  ) : (
                    <div className='hidden'></div>
                  )
                }
              </div>
              <div className="flex flex-col w-full px-4 py-4 justify-center items-center gap-4 bg-[#0853fc]">
                <span className="font-roboto text-2xl text-white">
                  {business.name}
                </span>
                <p className="font-roboto text-lg text-start break-words text-white">
                  {business.description}
                </p>
              </div>
              <div className="w-full h-full">
                <Carousel
                  slides={business?.BusinessImages}
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
        ) : (
          <div>...</div>
        )
      }
    </div>
  );
};

export async function getServerSideProps(context) {
  const businessName = context.params.name;

  return {
    props: {
      businessName,
    },
  };
}

export default EmpresaPage;
