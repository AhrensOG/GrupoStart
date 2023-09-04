import React, { useEffect, useState } from 'react'
import NavBar from '../../components/navBar/NavBar'
import { useRouter } from 'next/router'
import Head from 'next/head'
import EmpresasCardPost from '../../components/empresas/empresasCardPost'
import axios from 'axios'

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

const post = () => {
  const { asPath } = useRouter() 
  const navbarButtons = asPath === '/empresas'

  const [empresas, setEmpresas] = useState([])
  const [post, setPost] = useState({
    name: '',
    description: '',
    image: ''
  })


  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${SERVER_URL}/empresas/controller`)
        setEmpresas(res.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    getData()
  }, [])

  const handleChange = (e) => {
    e.preventDefault()
    setPost({ ...post ,[e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {

    const data = await axios.post(`${SERVER_URL}/empresas/controller`, {
      name: post.name,
      description: post.description,
      image: post.image
    })

  }

  return (
    <div>
      <Head>
        <title>GrupoStart</title>
      </Head>
      <NavBar servicesDropdown={!navbarButtons} isFixed={false}/>
      <div className='flex flex-row w-full h-full p-4 pt-8 gap-6'>
        <div className='basis-[40%] w-full h-full '>
          {
            empresas.length === 0 
            ? <div>CARGANDO</div>
            : <div className='flex flex-col justify-center items-center w-full h-full gap-10'>
              {
                empresas?.map((emp) => {
                  return  <EmpresasCardPost key={emp.name} name={emp.name} description={emp.description} image={emp.image}/> 
                })
              }
            </div>
          }
        </div>
        <div className='flex flex-col gap-6 p-4 pt-8 items-center basis-[60%] w-full h-full'>
          <input onChange={handleChange} className='border-gray-400 border rounded-lg p-2 w-full h-full' name='name' type="text" placeholder='NOMBRE' />
          <input onChange={handleChange} className='border-gray-400 border rounded-lg p-2 w-full h-full' name='image' type="text" placeholder='IMAGEN'/>
          <textarea onChange={handleChange} className='border-gray-400 border rounded-lg p-2 w-full h-full' name='description' type="text" placeholder='DESCRIPCION' 
          rows={5}/>
          <button onClick={handleSubmit} className='border-gray-400 border rounded-lg p-2 w-[20%] font-roboto' >CREAR</button>
        </div>
      </div>
  
    </div>
  )
}

export default post