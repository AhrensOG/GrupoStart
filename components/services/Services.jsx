import React from 'react'
import CardService from './CardService'

const listServices = [
  {
    title: 'Marketing y Redes',
    img: '/service.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quasi velit sit, necessitatibus fugiat autem.',
    urlService: 'MarketingYRedes'
    
  },
  {
    title: 'Desarrollo Web',
    img: '/service.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quasi velit sit, necessitatibus fugiat autem.',
    urlService: 'DesarrolloWeb'
  },
  // {
  //   title: 'Marketing Digital',
  //   img: '/service.png',
  //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quasi velit sit, necessitatibus fugiat autem.',
  //   urlService: 'MarketingDigital'
  // }
]

const Services = ({ services = listServices }) => {
  return (
    <div className='flex flex-col items-center justify-center py-16'>
      <div className='pb-6'>
        <h2 className='text-3xl font-roboto tracking-widest border-b-2 border-b-[#0853fc]'>Servicios</h2>
      </div>
      <div className='md:grid md:grid-cols-3 sm:flex sm:flex-row sm:gap-2 flex flex-row flex-wrap justify-center items-center'>
        {
          services?.map((el) => {
            return (
              <CardService key={el.title} img={el.img} title={el.title} description={el.description} urlService={el.urlService}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Services