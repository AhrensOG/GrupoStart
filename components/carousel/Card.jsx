import React, { useState } from "react";

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
  const [flip, setFlip] = useState(false);
  const [svgLinkColor, setSvgLinkColor] = useState(false)


  return (
    <div className="group [perspective:1000px] relative sm:w-[350px] w-[290px] h-[480px] sm:min-w-[350px] min-w-[480px]">
      <div
        className={`relative [transform-style:preserve-3d] ${
          flip ? "[transform:rotateY(180deg)]" : ""
        } duration-500`}
      >
        <div className="absolute sm:w-[350px] w-[290px] bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:shadow-black/70 hover:shadow-xl  [backface-visibility:hidden] duration-500">
          <img className="rounded-t-lg" src={`${img}`} alt="" />
          <div className="p-5 text-center sm:w-[350px] w-[290px]">
            <span>
              <h5 className="mb-2 text-2xl text-start font-bold tracking-tight text-white">
                {title}
              </h5>
            </span>
            <p className="mb-3 text-start font-normal text-gray-400">
              {description}
            </p>
            <button
              onClick={() => setFlip(true)}
              className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-[#0853fc] rounded-lg hover:text-[#fb8a00]"
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
            </button>
          </div>
        </div>
        <div onMouseLeave={() => setFlip(false)} className="absolute inset-0 [transform:rotateY(180deg)] hover:[transform:rotateY(180deg)] [backface-visibility:hidden] bg-gray-800 w-full h-[467px] border border-gray-700 rounded-lg shadow-black/70 shadow-xl">
          <div className="flex flex-col justify-center items-center w-full h-full p-4 gap-1">
            <img
              className="rounded-lg w-full h-full basis-2/3"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png"
            />
            <div className="flex flex-row justify-center items-center w-full h-full gap-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={`${ svgLinkColor ? '#0853fc' : 'white'}`}
                className="w-12 h-12"
                onMouseEnter={() => setSvgLinkColor(true)}
                onMouseLeave={() => setSvgLinkColor(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
