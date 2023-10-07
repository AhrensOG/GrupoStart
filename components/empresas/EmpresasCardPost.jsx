import React from 'react'

const EmpresasCardPost = ({ image, name, description }) => {
  return (
    <div className='flex flex-row justify-center items-center w-full h-full gap-4'>
      <div className='basis-1/3'>
        <img className='w-full h-full rounded-full' src={image} alt='img'/>
      </div>
      <div className='basis-2/3 flex flex-col gap-2'>
        <h1 className='text-3xl py-2'>{name}</h1>
        <h2 className='text-lg'>{description}</h2>
      </div>
    </div>
  )
}

export default EmpresasCardPost