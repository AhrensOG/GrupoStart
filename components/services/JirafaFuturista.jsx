import React from "react";
import CardService from "./CardService";

const Services = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/futurista.jpg')" }}
    >
      <div className="">
        <div className="absolute  inset-0 flex justify-center items-center">
          <p
            className="font-inter font-bold text-orange-500 text-7xl lg:text-8xl top-56 leading-tight bg-transparent bg-opacity-50 ml-16 rounded-lg text-left absolute left-2/4"
          >
            <span className="block text-white">EL FUTURO</span>
            <span className="block text-white">ESTA AQUI</span>
            <span className="block">VIENDO</span>
            <span className="block">¡SUMATE!</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
