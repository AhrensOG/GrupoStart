import Link from 'next/link'
import React from 'react'

const DropdownNavBar = ({ setIsOpen, isOpen }) => {
  return (
    <div onMouseLeave={() => setIsOpen(false)} className="pr-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mb-1 px-2 text-xl font-semibold text-white hover:text-[#ff6c36] border-2 rounded-lg hover:border-[#ff6c36] transition-all duration-200 flex flex-row justify-between items-center gap-16"
            >
              Servicios
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-4 h-4 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-4 h-4 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </button>
            {isOpen && (
              <div className="fixed flex flex-col gap-1 px-[7px] py-2 rounded-lg bg-[#ff6c36]">
                <Link href={"/servicios/communitymanager"}>
                  <h2 className="font-semibold text-white py-1 pr-2 hover:bg-[#ff8b61] rounded-r-lg border-l-4 border-transparent hover:border-l-[#0b52c3]">
                    Community Manager
                  </h2>
                </Link>
                <Link href={"/servicios/desarrolloweb"}>
                  <h2 className="font-semibold text-white py-1 pr-2 hover:bg-[#ff8b61] rounded-r-lg border-l-4 border-transparent hover:border-l-[#0b52c3]">
                    Desarrollo Web
                  </h2>
                </Link>
                <Link href={"/servicios/marketingdigital"}>
                  <h2 className="font-semibold text-white py-1 pr-2 hover:bg-[#ff8b61] rounded-r-lg border-l-4 border-transparent hover:border-l-[#0b52c3]">
                    Marketing Digital
                  </h2>
                </Link>
              </div>
            )}
          </div>
  )
}

export default DropdownNavBar