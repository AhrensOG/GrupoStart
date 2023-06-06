import React from 'react'

const Hero = ({ title = 'Mi Negocio', description = 'Soluciones creativas, resultados creativos' }) => {
  return (
      <div className="bg-[url('https://static1.s123-cdn-static-a.com/ready_uploads/media/26424/2000_5cdd2aeec5281.jpg')]  h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-no-repeat bg-center">
        <div className='bg-black/40 w-full h-[300px] sm:h-[400px] md:h-[500px]'>
          <div className='flex flex-col justify-center items-center w-full h-full gap-4'>
            <h1 className='text-white text-3xl sm:text-5xl md:text-6xl font-semibold text-center'>{title}</h1>
            <h2 className='text-white text-xl sm:text-2xl md:text-3xl font-semibold text-center'>{description}</h2>
          </div>
        </div>
      </div>
  )
}

export default Hero