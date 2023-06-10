import React from "react"; 

const data = {
  title: 'Noteworthy technology acquisitions 2021',
  description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
  img: 'https://static1.s123-cdn-static-a.com/ready_uploads/media/26424/2000_5cdd2aeec5281.jpg'
}

const CompanyCard = ({ img = data.img, title = data.title, description = data.description }) => {
  return (
    <div className="w-full shadow-black hover:drop-shadow-lg hover:-translate-y-1 duration-300">
      <div className="flex flex-col xsm:flex-row bg-white rounded-lg border border-gray-400">
        <div className="xsm:basis-[40%]">
          <img src={`${img}`} alt="img" className="w-full h-[207px] rounded-t-lg xsm:rounded-l-lg xsm:rounded-t-none bg-cover"/>
        </div>
        <div className="flex flex-col gap-2 py-4 px-2 xsm:basis-[60%] items-center justify-center">
          <h1 className="text-xl text-black font-semibold">{title}</h1>
          <p className="text-sm">{description}</p>
        </div>
      </div>

    </div>
  );
};

export default CompanyCard;
