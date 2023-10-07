import React from 'react'
import bgLogo from '../../public/bgLogo.png'
import Image from 'next/image'

const HeroV2 = ({ title = 'Impulsamos', subtitle = ' tu marca al', description = 'Mundo digital' }) => {
  return (
    <div className="bg-[#0853fc] h-screen sm:bg-[length:924px_1200px] bg-cover bg-no-repeat bg-[center_top_-3.5rem] w-full"
      style={{
        backgroundImage: `url(${bgLogo.src})`
      }}
    > 
      <div className='flex flex-col pt-[140px] items-center w-full h-full gap-4'>
        <h1 className='text-white text-3xl sm:text-5xl md:text-6xl font-extrabold text-center tracking-widest font-concert uppercase'>{title}</h1>
        <h2 className='text-white text-3xl sm:text-5xl md:text-6xl font-semibold text-center tracking-wider font-concert uppercase'>{subtitle}</h2>
        <h2 className='text-[#fb8a00] text-3xl sm:text-5xl md:text-6xl font-semibold text-center tracking-wider font-concert uppercase'>{description}</h2>

        <div className='flex flex-row justify-center gap-16 h-full w-full'>
          <div className='pt-8'>
            <Image src={'/leftHand.png'} height={10000} width={10000} alt='img' className='w-[240px] h-[240px] left-[20%] top-[62%]'/>
          </div>
          <div>
            <Image src={'/rightHand.png'} height={10000} width={10000} alt='img' className='w-[240px] h-[240px] right-[25%] top-[60%]'/>
          </div>

        </div>
        
      </div>
    </div>
)
}

export default HeroV2