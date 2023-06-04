import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardService = ({ img, title, description, urlService }) => {
  return (
    <div className='basis-auto flex flex-col items-center justify-center px-4 py-8 w-[80%] sm:w-full'>
      <div>
        <Link href={`/servicios/${urlService}`}>
          <Image
          src={img}
          width={10000}
          height={10000}
          alt="Picture of the author"
          className='rounded-full h-[150px] w-[150px]'
          />
        </Link>
      </div>
      <div className='flex flex-col items-center justify-center text-center'>
        <Link href={`/servicios/${urlService}`}>
          <h2 className='font-roboto text-xl py-2 font-semibold'>{title}</h2>
        </Link>
        <Link href={`/servicios/${urlService}`}>
          <h3 className='font-roboto text-xs xsm:text-base'>{description}</h3>
        </Link>
      </div>
    </div>
  )
}

export default CardService