import Image from 'next/image'
import React from 'react'

// https://static1.s123-cdn-static-a.com/uploads/2031/800_5a16bb1164caa.jpg

const profiles = [
  {
    name: 'Sergio G. Ahrens',
    img: '/about.png'
  },
  {
    name: 'Ivan E. Ayala',
    img: '/about.png'
  },
  {
    name: 'Sebastian B. Luque',
    img: '/about.png'
  },
  {
    name: 'Julio J. Cortazar',
    img: '/about.png'
  }
]
const aboutText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati error maiores magnam corrupti quas exercitationem facere numquam ratione harum placeat nulla nam laborum ipsa quidem enim, alias rerum, quia nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit."

const About = ( { listProfiles = profiles, about = aboutText } ) => {
  return (
    <div className='bg-[#ff4300] flex flex-col py-8 px-4 md:flex-row-reverse gap-1'>
      <div className='pt-4 pb-10 md:pb-0 md:pt-0 md:basis-1/2'>
        <Image 
          src='/about.png'
          width={10000}
          height={10000}
          alt="Picture of the author"
          className=' h-full w-full'
        />
      </div>
      <div className='flex flex-col justify-center items-center md:basis-1/2'>
        <div className='pb-8'>
          <h1 className='text-5xl font-bold font-roboto text-white border-b-4 border-b-[#0b52c3] pb-2'>Nosotros</h1>
        </div>
        <div>
          <p className='font-roboto text-lg  text-white text-center'>
            {about}
          </p>
        </div>
        <div className='pt-8 w-full flex flex-row flex-wrap justify-around gap-2'>
        { listProfiles.map((el) => {
              return (
                <div key={el.name} className='flex flex-col justify-center items-center'>
                  <Image
                    src={el.img}
                    width={130}
                    height={130}
                    alt="Picture of the author"
                    className='rounded-full w-[100px] h-[100px]'
                  />
                  <h3 className='font-roboto text-[12px] text-white w-full text-center pt-1'>{el.name}</h3>
                </div>
              )
            }) }
        </div>
      </div>
      
    </div>
  )
}

export default About