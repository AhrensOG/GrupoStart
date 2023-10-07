import React from "react";

const RefreshButton = ({ setRefresh }) => {
  return (
    <button onClick={() => setRefresh(true)} className="z-10 sticky top-0 w-full h-full border border-[#0853fc] rounded-lg p-[5px]  font-roboto font-semibold text-white bg-[#0853fc] hover:text-[#fb8a00] duration-200 flex flex-row justify-center gap-2">
      Actualizar
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
    </button>
  );
};

export default RefreshButton;
