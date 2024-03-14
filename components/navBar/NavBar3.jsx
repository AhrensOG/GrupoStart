import React from 'react';

const NavBar = () => {
  return (
    <nav className="z-30 bg-transparent flex justify-between">
      {/* Logo (Agrega tu logo aquí) */}
      <div className="w-32 h-20 mt-12 ml-32" alt="Logo">
        <img src="\Start logo 1.png"  alt="Logo"></img>
      </div>
      
      {/* Opciones de menú */}
      <div className="flex space-x-12  mt-12  h-40 mr-32">
        
          <button className="w-32 h-10 borde-superior-izquierdo borde-inferior-derecho border  bg-[#f8f8f8] border-orange-500 shadow-md shadow-orange-500 text-center hover:bg-orange-500">
            <span className="text-black  from-gray-200 to-orange-500 font-sora text-base font-normal leading-6 tracking-normal w-24 h-6 inline-block align-middle">Cursos</span>
          </button>

          <button className="w-32 h-10 borde-superior-izquierdo borde-inferior-derecho border  bg-[#f8f8f8] border-orange-500 shadow-md shadow-orange-500 text-center hover:bg-orange-500">
            <span className="text-black  from-gray-200 to-orange-500 font-sora text-base font-normal leading-6 tracking-normal w-24 h-6 inline-block align-middle">Servicios</span>
          </button>
        
          <button className="w-32 h-10 borde-superior-izquierdo borde-inferior-derecho border bg-[#f8f8f8] border-orange-500 shadow-md shadow-orange-500 text-center hover:bg-orange-500">
            <span className="text-black  from-gray-200 to-orange-500 font-sora text-base font-normal leading-6 tracking-normal w-24 h-6 inline-block align-middle">Nosotros</span>
          </button>
        
          <button className="w-32 h-10 borde-superior-izquierdo borde-inferior-derecho border bg-[#f8f8f8] border-orange-500 shadow-md shadow-orange-500 text-center hover:bg-orange-500">
            <span className="text-black  from-gray-200 to-orange-500 font-sora text-base font-normal leading-6 tracking-normal w-24 h-6 inline-block align-middle ">Experiencias</span>
          </button>
       
          <button className="w-32 h-10 borde-superior-izquierdo borde-inferior-derecho border bg-[#f8f8f8] border-orange-500 shadow-md shadow-orange-500 text-center hover:bg-orange-500">
            <span className="text-black  from-gray-200 to-orange-500 font-sora text-base font-normal leading-6 tracking-normal w-24 h-6 inline-block align-middle">Contacto</span>
          </button>
        
      </div>
    </nav>
  );
};

export default NavBar;