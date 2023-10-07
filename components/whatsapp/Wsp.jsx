import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Wsp = () => {
  return (
    <div className='fixed bottom-6 right-6'>
      <Link target='_blank' rel='noreferrer noopener' href={'https://wa.me/543704529689' }>
        <Image priority={true} src={'/wsp.svg'} width={100} height={100} alt='img' className='w-[70px] h-[70px] hover:w-[80px] hover:h-[80px] sm:w-[100px] sm:h-[100px] sm:hover:w-[110px] sm:hover:h-[110px] duration-200'/>
      </Link>
    </div>
  )
}

export default Wsp