import React, { useState } from "react";

const SearchBar = ({ setCategorySearch }) => {
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // setCategorySearch(search)
    document.getElementById('form').reset()
  }

  return (
    <div className="flex flex-row justify-center items-center py-6 px-8 md:px-0">
      <form id="form" className="w-full md:w-[80%] lg:w-[70%]" onSubmit={handleSubmit}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border-2 border-gray-200 rounded-lg bg-gray-50 focus:ring-blue-600 focus:border-blue-600 outline-none duration-200"
            placeholder="Buscar Rubro"
            required
            onChange={handleSearch}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2"
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
