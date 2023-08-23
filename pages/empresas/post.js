import React, { useEffect, useState } from 'react'
import NavBar from '../../components/navBar/NavBar'
import { useRouter } from 'next/router'
import Head from 'next/head'
import EmpresasCardPost from '../../components/empresas/empresasCardPost'
import axios from 'axios'

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
        const res = await axios.get('http://localhost:3000/api/empresas/controller')
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

    const data = await axios.post('http://localhost:3000/api/empresas/controller', {
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
      <NavBar servicesDropdown={!navbarButtons}/>
      <div className='flex flex-row top-[100px] fixed w-full h-full'>
        <div className='basis-[40%] pl-10'>
          {
            empresas.length === 0 
            ? <div>CARGANDO</div>
            : <div>
              {
                
                empresas?.map((emp) => {
                  return  <EmpresasCardPost key={emp.name} name={emp.name} description={emp.description} image={emp.image}/> 
                })
              }
            </div>
          }
        </div>
        <div className='flex flex-col pt-10 gap-6 items-center basis-[60%]'>
          <input onChange={handleChange} className='border-gray-400 border rounded-lg p-2' name='name' type="text" placeholder='NOMBRE' />
          <input onChange={handleChange} className='border-gray-400 border rounded-lg p-2' name='description' type="text" placeholder='DESCRIPCION' />
          <input onChange={handleChange} className='border-gray-400 border rounded-lg p-2' name='image' type="text" placeholder='IMAGEN'/>
          <button onClick={handleSubmit} >CREAR</button>
        </div>
      </div>
  
    </div>
  )
}

export default post