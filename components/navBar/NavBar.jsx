import Link from "next/link";
import React, { useState } from "react";
import DropdownNavBar from "./auxComponents/DropdownNavBar";
import SideBar from "./SideBar";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [burgerColor, setBurgerColor] = useState('white')

  return (
    <div className="bg-[#0853fc] fixed top-0 w-full z-10 h-[80px] drop-shadow-2xl">
      {/* NAVBAR */}

      <div className="flex flex-row items-center h-full">
        {/* BURGER BUTTON */}
        <button
          className="sm:hidden px-2 cursor-default absolute"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke={burgerColor}
            className="w-11 h-11 cursor-pointer"
            onClick={() => setNav(!nav)}
            onMouseEnter={() => setBurgerColor('#fb8a00')}
            onMouseLeave={() => setBurgerColor('white')}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        {/* TITLE */}
        <div className="flex flex-row justify-center sm:basis-[30%] sm:justify-start sm:px-4 w-full">
          <Link href={"/"}>
            <img src="/logo.png" alt="logo" className="h-[60px] w-[180px]"/>
          </Link>
        </div>

        {/* OPTIONS */}
        <div className="hidden sm:flex flex-row basis-[70%] justify-end items-center">
          <Link href={"/"}>
            <h2 className="px-4 lg:px-6 text-xl font-semibold text-white hover:text-[#fb8a00] transition-all duration-200">
              Inicio
            </h2>
          </Link>
          <Link href={"/empresas"}>
            <h2 className="px-4 lg:px-6 text-xl font-semibold text-white hover:text-[#fb8a00] transition-all duration-200">
              Empresas
            </h2>
          </Link>
          <DropdownNavBar setIsOpen={setIsOpen} isOpen={isOpen}/>
        </div>
      </div>

      {/* BLURRED BACKGROUND */}

      <div
        onClick={() => setNav(!nav)}
        className={`${
          !nav && "hidden"
        } sm:hidden bg-gray-500/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}
      ></div>

      {/* SIDEBAR */}
      <SideBar setNav={setNav} nav={nav} setIsOpen={setIsOpen} isOpen={isOpen}/>
    </div>
  );
};

export default NavBar;