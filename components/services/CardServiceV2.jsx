import Link from 'next/link'
import React, { useState } from 'react'

const CardServiceV2 = ({ title, description1, description2, description3,  urlService }) => {
  const [hover, setHover] = useState(false)
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='max-w-[350px]'>
      <Link href={`/servicios/${urlService}`}>
        <div className='bg-white pb-8 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl w-full flex flex-col justify-center items-center text-center h-[420px] relative'>
          <div className=
            {
              hover ?
                'w-full bg-[#fb8a00] py-6 rounded-tl-3xl rounded-br-3xl'
              :
                'w-full py-6 '
            }
          >
            <h1 className=
              {
                hover ? 
                  'text-4xl text-white font-concert uppercase'
                :
                  'text-4xl text-[#fb8a00] font-concert uppercase'
              }
            >
              {title}
            </h1>
          </div>
          <div className='flex flex-col px-10 justify-center items-center text-center gap-6 h-full w-full'>
            <h2 className='text-[1.75rem] leading-7 break-words font-roboto font-bold tracking-wide  text-[#0853fc] uppercase'>{description1}</h2>
            <h2 className='text-3xl text-[1.75rem] break-words font-roboto font-bold tracking-wide leading-7 text-[#0853fc] uppercase'>{description2}</h2>
            <h2 className='text-3xl text-[1.75rem] break-words font-roboto font-bold tracking-wide leading-7 text-[#0853fc] uppercase'>{description3}</h2>
          </div>
          {
            hover && (
              <div className='bg-[#fb8a00] py-2 px-12 rounded-full rounded-bl-none absolute bottom-[-25px]'>
                <h2 className='text-4xl uppercase font-concert text-white tracking-wide'>Mas info</h2>
              </div>
            )
          }
        </div>
      </Link>
    </div>
  )
}

export default CardServiceV2