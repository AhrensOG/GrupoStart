import Link from "next/link";
import React, { useState } from "react";
import DropdownNavBar from "./auxComponents/DropdownNavBar";
import SideBar from "./SideBar";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#0b52c3] z-10 relative h-[80px] shadow-xl">
      {/* NAVBAR */}

      <div className="flex flex-row items-center h-full">
        {/* BURGER BUTTON */}
        <button
          onClick={() => setNav(!nav)}
          className="sm:hidden basis-[10%] px-2"
        >
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

        {/* TITLE */}
        <div className="flex flex-row justify-center basis-[90%] sm:basis-[30%] sm:block">
          <Link href={"/"}>
            <h2 className="px-3 font-roboto text-3xl font-bold text-white">
              GrupoStart
            </h2>
          </Link>
        </div>

        {/* OPTIONS */}
        <div className="hidden sm:flex flex-row basis-[70%] justify-end">
          <Link href={"/"}>
            <h2 className="px-4 lg:px-6 text-xl font-semibold text-white hover:text-[#ff6c36] transition-all duration-200">
              Inicio
            </h2>
          </Link>
          <Link href={"/empresas"}>
            <h2 className="px-4 lg:px-6 text-xl font-semibold text-white hover:text-[#ff6c36] transition-all duration-200">
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