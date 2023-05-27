import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false)

  return (
    <div className="bg-[#0b52c3] relative h-[80px] shadow-xl">

      {/* NAVBAR */}

      <div className="flex flex-row items-center h-full">
        <button onClick={() => setNav(!nav)} className="sm:hidden basis-[10%] px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-11 h-11 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div className="flex flex-row justify-center basis-[90%] sm:basis-[30%] sm:block">
          <Link href={'/'}>
            <h2 className="px-3 font-roboto text-3xl font-bold text-white">
              GrupoStart
            </h2>
          </Link>
        </div>
        <div className="hidden sm:flex flex-row basis-[70%] justify-end">
          <Link href={'#'}>
            <h2 className="px-2 lg:px-4 text-xl font-semibold text-white hover:text-[#ff6c36] transition-all duration-200">
              Nosotros
            </h2>
          </Link>
          <Link href={'#'}>
            <h2 className="px-2 lg:px-4 text-xl font-semibold text-white hover:text-[#ff6c36] transition-all duration-200">
              Que hacemos?
            </h2>
          </Link>
          <Link href={'#'}>
            <h2 className="px-2 lg:px-4 text-xl font-semibold text-white hover:text-[#ff6c36] transition-all duration-200">
              Contacto
            </h2>
          </Link>
          <Link href={'#'}>
            <h2 className="px-2 lg:px-4 text-xl font-semibold text-white hover:text-[#ff6c36] transition-all duration-200">
              Empresas
            </h2>
          </Link>
        </div>
      </div>

      {/* BLURRED BACKGROUND */}

      <div
        onClick={() => setNav(!nav)}
        className={`${!nav && 'hidden'} bg-gray-500/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}
      ></div>

      {/* SIDEBAR */}

      <div className={`${!nav ? 'w-[0%]' : 'w-[60%]'} bg-[#0b52c3] min-h-screen fixed top-0 left-0 transition-all duration-300`}>
        <div className={`${!nav && 'hidden'}`}>

          <button onClick={() => setNav(!nav)} className={`p-4`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-11 h-11 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className={`flex flex-col items-start p-4 gap-8`}>
            <Link href={'#'}>
              <h2 className="px-2 lg:px-4 text-2xl font-semibold text-white hover:text-[#ff6c36] transition-all duration-200">
                Nosotros
              </h2>
            </Link>
            <Link href={'#'}>
              <h2 className="px-2 lg:px-4 text-2xl font-semibold text-white hover:text-[#ff6c36] transition-all duration-200">
                Que hacemos?
              </h2>
            </Link>
            <Link href={'#'}>
              <h2 className="px-2 lg:px-4 text-2xl font-semibold text-white hover:text-[#ff6c36] transition-all duration-200">
                Contacto
              </h2>
            </Link>
            <Link href={'#'}>
              <h2 className="px-2 lg:px-4 text-2xl font-semibold text-white hover:text-[#ff6c36] transition-all duration-200">
                Empresas
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
