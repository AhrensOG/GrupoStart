import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#0853fc] flex flex-col-reverse sm:flex-row px-4 py-12 gap-4'>
      <div className='flex flex-col p-2 justify-center items-center sm:basis-2/3 md:basis-[55%]'>
        <h1 className='text-white font-roboto'>Grupo Start</h1>
        <span className='text-white font-roboto text-xs sm:text-base'>
          Copyright © 2023 Todos los derechos reservados
        </span>
        <span className='text-white font-roboto text-xs sm:text-base'>
          Desarrollado por GrupoStart
        </span>
      </div>
      <div className='flex flex-col md:flex-row md:flex-wrap items-center sm:basis-1/3 md:basis-[45%] md:gap-2 justify-evenly'>
        <Link href={'/empresas'}>
          <span className='text-sm font-roboto text-white hover:text-[#fb8a00]'>Empresas</span>
        </Link>
        <Link href={'/servicios/CommunityManager'}>
          <span className='text-sm font-roboto text-white hover:text-[#fb8a00]'>Community Manager</span>
        </Link>
        <Link href={'/servicios/DesarrolloWeb'}>
          <span className='text-sm font-roboto text-white hover:text-[#fb8a00]'>Desarrollo Web</span>
        </Link>
        <Link href={'/servicios/MarketingDigital'}>
          <span className='text-sm font-roboto text-white hover:text-[#fb8a00]'>Marketing Digital</span>
        </Link>
      </div>
    </div>
  )
}

export default Footer