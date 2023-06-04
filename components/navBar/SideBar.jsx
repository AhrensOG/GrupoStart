import React from 'react'
import DropdownSideBar from './auxComponents/DropdownSideBar'
import Link from 'next/link'

const SideBar = ({ setNav, nav, setIsOpen, isOpen }) => {
  return (
    <div
        className={`${
          !nav ? "w-[0%]" : "w-[60%]"
        } sm:hidden bg-[#0b52c3] min-h-screen fixed top-0 left-0 transition-all duration-300`}
      >
        <div className={`${!nav && "hidden"}`}>
          <button onClick={() => setNav(!nav)} className={`p-4`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-11 h-11 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className={`flex flex-col items-start p-4 gap-8`}>
            <Link href={"#"}>
              <h2 className="px-2 lg:px-4 text-2xl font-semibold text-white hover:text-[#ff6c36] transition-all duration-200">
                Inicio
              </h2>
            </Link>
            <Link href={"#"}>
              <h2 className="px-2 lg:px-4 text-2xl font-semibold text-white hover:text-[#ff6c36] transition-all duration-200">
                Empresas
              </h2>
            </Link>
            <DropdownSideBar setIsOpen={setIsOpen} isOpen={isOpen}/>
          </div>
        </div>
      </div>
  )
}

export default SideBar