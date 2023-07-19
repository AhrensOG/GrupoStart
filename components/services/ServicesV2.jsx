import React from 'react'
import CardService from './CardService'
import CardServiceV2 from './CardServiceV2'

const listServices = [
  {
    title: 'Emprendedor',
    img: '/service.png',
    description1: 'Contenido constante',
    description2: '3 Imagenes semanales',
    description3: 'Conf. Campaña publicitaria',
    urlService: 'PlanEmprendedor'
  },
  {
    title: 'Empresario',
    img: '/service.png',
    description1: 'Contenido constante',
    description2: '5 Imagenes y 1 video semanal',
    description3: 'Conf. Campaña publicitaria',
    urlService: 'PlanEmpresario'
  },
  {
    title: 'Corporativo',
    img: '/service.png',
    description1: 'Contenido constante',
    description2: '10 Imagenes y 2 videos semanales',
    description3: 'Conf. Campaña publicitaria',
    urlService: 'PlanCorporativo'
  },
]

const ServicesV2 = ({ services = listServices }) => {
  return (
    <div className='bg-[#0853fc] flex flex-col items-center justify-center h-screen'>
      <div className='pb-6 text-center'>
        <h2 className='text-6xl text-white font-concert tracking-tight uppercase '>Delega <span className='text-[#fb8a00]'> Tus redes</span></h2>
        <h2 className='text-3xl text-white font-concert tracking-wide uppercase'>Todos los packs incluyen contenido profesional</h2>
      </div>
      <div className='flex flex-row justify-center items-center gap-10 px-16'>
        {
          services?.map((el) => {
            return (
              <CardServiceV2 key={el.title} img={el.img} title={el.title} description1={el.description1} description2={el.description2} description3={el.description3} urlService={el.urlService}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default ServicesV2