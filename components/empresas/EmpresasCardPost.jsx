import React from 'react'

const EmpresasCardPost = ({ image, name, description }) => {
  return (
    <div>
      <img className='w-[120px] h-[120px] rounded-full' src={image} alt='img'/>
      <h1 className='text-3xl'>{name}</h1>
      <h2>{description}</h2>
    </div>
  )
}

export default EmpresasCardPost