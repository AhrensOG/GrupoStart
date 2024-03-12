import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0853FC] flex flex-col-reverse sm:flex-row px-4 py-12 gap-4 items-center justify-center">
  <div className="relative flex flex-col items-center sm:w-1/3">
    <div className="absolute w-157 h-30 top-15 left-20">
      <h1 className="text-white text-lg font-medium leading-6 tracking-normal text-center">
        Seguinos en
      </h1>
      <div className="flex flex-col items-center mt-4">
        <div className="flex items-center mb-3">
          <img src="/insta.png" alt="Instagram" className="h-4 w-4 mr-2" />
          <span className="text-white text-base" style={{ fontSize: "20px", lineHeight: "24.38px" }}>
            Instagram
          </span>
        </div>
        <div className="flex items-center mb-3">
          <img src="/face.png" alt="Facebook" className="h-4 w-4 mr-2" />
          <span className="text-white text-base" style={{ fontSize: "20px", lineHeight: "24.38px" }}>
            Facebook
          </span>
        </div>
        <div className="flex items-center mb-3">
          <img src="/ln.svg" alt="LinkedIn" className="h-4 w-4 mr-2" />
          <span className="text-white text-base" style={{ fontSize: "20px", lineHeight: "24.38px" }}>
            LinkedIn
          </span>
        </div>
      </div>
    </div>
  </div>
  
  <div className="contact-container flex flex-col items-center sm:w-1/3">
    <h1 className="contact-title mb-6" style={{ marginTop: "15px" }}>
      Contactos
    </h1>
    <div className="flex items-center mb-6">
      <img src="/ln.svg" alt="Correo electrónico" className="h-6 w-8 mr-2" />
      <span className="contact-email">grupoSTART@gmail.com</span>
    </div>
    <div className="flex items-center mb-6">
      <img src="/ln.svg" alt="Teléfono" className="h-6 w-6 mr-2" />
      <span className="contact-phone">+1234567890</span>
    </div>
    <div className="mb-">
      <img src="/ln.svg" alt="Logo de la empresa" className="h-20 w-30" />
    </div>
    <p className="contact-footer">
      2024 grupo START - Todos los derechos reservados
    </p>
  </div>
  
  <div className="contact-container flex flex-col items-center sm:w-1/3">
  <h1 className="text-white text-lg font-medium leading-6 tracking-normal text-center">
        Seguinos en
      </h1>
      <img src="/mapsimg.png" alt="Logo de la empresa" className="h-150 w-100" />
      <p className="contact-footer">
      P. Sherman calle wallaby 42 Sydney 
    </p>
  </div>
</div>
  );
};

export default Footer;
