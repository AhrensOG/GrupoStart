import React from "react";
import CardService from "./CardService";
import CardServiceV2 from "./CardServiceV2";

const listServices = [
  {
    title: "Emprendedor",
    img: "/service.png",
    description1: "Contenido constante",
    description2: "3 Imagenes semanales",
    description3: "Conf. Campaña publicitaria",
    urlService: "PlanEmprendedor",
  },
  {
    title: "Empresario",
    img: "/service.png",
    description1: "Contenido constante",
    description2: "5 Imagenes y 1 video semanal",
    description3: "Conf. Campaña publicitaria",
    urlService: "PlanEmpresario",
  },
  {
    title: "Corporativo",
    img: "/service.png",
    description1: "Contenido constante",
    description2: "10 Imagenes y 2 videos semanales",
    description3: "Conf. Campaña publicitaria",
    urlService: "PlanCorporativo",
  },
];

const ServicesV2 = ({ services = listServices }) => {
  return (
    <div className="-space-y-8 relative w-screen h-screen bg-gradient-to-b from-orange-400 to-transparent via-orange-400">
      <div className="p-8 pb-6 text-center">
        <h2 className="text-4xl text-black font-thin tracking-tight uppercase ">
          Fundadores
        </h2>
      </div>
      <div className="flex flex-row justify-center items-center p-7 gap-48 ">
        <div className="-space-y-14 flex flex-col justify-center items-center">
          <div className="w-52 h-52 z-10">
            <img src="/seba.png" alt="logo" />
          </div>
          <div className="w-52 h-56 bg-white">
            <p className="p-16">
              <span className="block text-center text-black font-bold">
                El Sebas
              </span>
              <span className="block text-center text-black font-bold whitespace-nowrap">
                Diseñador Gráfico
              </span>
              <span className="block text-center text-gray-600">
                Figma ipsum component variant main layer.
              </span>
            </p>
          </div>
        </div>
        <div className="-space-y-14 flex flex-col justify-center items-center">
          <div className="w-56 h-56 z-10">
            <img src="/guille.png" alt="logo" />
          </div>
          <div>
            <div className="bg-white">
              <p className="p-16">
                <span className="block text-black">Cabezon</span>
                <span className="block text-black">ESTA AQUI</span>
                <span className="block">VIENDO</span>
                <span className="block">¡SUMATE!</span>
              </p>
            </div>
          </div>
        </div>
        <div className="-space-y-14 flex flex-col justify-center items-center">
          <div className="w-56 h-56 z-10">
            <img src="/ivan.png" alt="logo" />
          </div>
          <div>
            <div className="bg-white">
              <p className="p-16">
                <span className="block text-black">Ivan</span>
                <span className="block text-black">ESTA AQUI</span>
                <span className="block">VIENDO</span>
                <span className="block">¡SUMATE!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesV2;
