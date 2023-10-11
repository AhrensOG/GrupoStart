import Image from "next/image";
import Link from "next/link";
import React from "react";

const Map = ({ w = 70, h = 70 }) => {
  return (
    <div className="fixed sm:bottom-32 bottom-24 right-6">
      <Link
        target="_blank"
        rel="noreferrer noopener"
        href={"https://maps.app.goo.gl/kXHSVDmSLLGHFyne8"}
      >
        <Image
          priority={true}
          src={"/map.png"}
          width={100}
          height={100}
          alt="img"
          className={`w-[${w}px] h-[${h}px] hover:w-[80px] hover:h-[80px] sm:w-[100px] sm:h-[100px] sm:hover:w-[110px] sm:hover:h-[110px] duration-200`}
        />
      </Link>
    </div>
  );
};

export default Map;
