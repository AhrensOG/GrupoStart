import React from "react";

const data = {
  img: "https://static1.s123-cdn-static-a.com/ready_uploads/media/26424/2000_5cdd2aeec5281.jpg",
  title: "Noteworthy technology acquisitions 2021",
  description:
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
};

const Card = ({
  img = data.img,
  title = data.title,
  description = data.description,
}) => {
  return (
    <div className="sm:w-[350px] w-[290px] bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-black/70 hover:shadow-xl hover:-translate-y-2 ease-in duration-200">
      <a href="#">
        <img className="rounded-t-lg" src={`${img}`} alt="" />
      </a>
      <div className="p-5 text-center sm:w-[350px] w-[290px]">
        <a href="#">
          <h5 className="mb-2 text-2xl text-start font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 text-start font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Leer Mas
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
