import React from 'react'
import CompanyCard from './CompanyCard'

const ListCompanyCards = () => {
  return (
    <div className='grid xsm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 py-10'>
      <CompanyCard/>
      <CompanyCard/>
      <CompanyCard/>
      <CompanyCard/>
    </div>
  )
}

export default ListCompanyCards