// SearchBar.js
import React, { useState } from "react";

const SearchBar = ({ setCategorySearch }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setCategorySearch(search)
    document.getElementById('form').reset();
  };

  return (
    <div className="flex justify-center items-center py-6 px-8 md:px-0">
      <form id="form" className="w-full md:w-[80%] lg:w-[800%] max-w-screen-xl" onSubmit={handleSubmit}>
        <div className="relative flex items-center w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
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
            className="block w-full p-3 pl-10 pr-25 text-lg text-[#fb8a00] border-2 border-[#fb8a00] rounded-full bg-[#0853fc] outline-none"
            placeholder="Buscar Rubro"
            required
            onChange={handleSearch}
         />
          {/* <button
            type="submit"
            className="text-white font-semibold ml-4 bg-[#fb8a00] hover:text-[#0853fc] rounded-lg text-sm px-6 py-2"
          >
            Buscar
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;