import React from "react";

const NavBar = () => {
  return (
    <div className="bg-[#0b52c3] relative h-[80px] shadow-xl">
      <div className="flex flex-row items-center h-full">
        <div className="sm:hidden basis-[40%] px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-11 h-11"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className="basis-[60%] sm:basis-[30%] px-3 font-roboto text-3xl font-bold text-white">
          GrupoStart
        </div>
        <div className="hidden sm:flex flex-row basis-[70%] justify-end">
          <h2 className="px-2 lg:px-4 text-xl font-semibold text-white">Nosotros</h2>
          <h2 className="px-2 lg:px-4 text-xl font-semibold text-white">Que hacemos?</h2>
          <h2 className="px-2 lg:px-4 text-xl font-semibold text-white">Contacto</h2>
          <h2 className="px-2 lg:px-4 text-xl font-semibold text-white">Empresas</h2> 
        </div>
      </div>
    </div>
  );
};

export default NavBar;
