import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Contact = () => {
  const [query, setQuery] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // Form Submit function
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch("https://getform.io/f/c0c6f49c-c71f-419c-8291-4b0d0875005a", {
      method: "POST",
      body: formData,
    }).then(() => setQuery({ name: "", email: "", message: "" }));
  };
  return (
    <div
      id="contact"
      className="bg-[#fb8a00] flex flex-col justify-center items-center px-4 py-10"
    >
      <div className="pb-8">
        <h1 className="font-roboto text-5xl text-white font-semibold border-b-4 border-b-[#0853fc] pb-2">
          Contacto
        </h1>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row w-full h-full justify-center items-center">
        <div className="flex flex-col items-center justify-center p-4 sm:basis-1/3 md:basis-1/2">
          <h2 className="font-roboto font-semibold text-white">
            Formosa, Argentina
          </h2>
          <span className="flex flex-row gap-1 items-center justify-center font-roboto text-[#0853fc] font-semibold">
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
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
              />
            </svg>
            3705999999
          </span>
          <span className="flex flex-row gap-1 items-center justify-center font-roboto text-[#0853fc] font-semibold">
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
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            grupostartfsa@gmail.com
          </span>
          <span className="flex flex-row gap-2 items-center justify-center font-roboto text-[#0853fc] font-semibold">
            <Image src={"/ig.svg"} width={22} height={22} alt="ig" />
            <Link
              href={"https://www.instagram.com/grupostart.ok/"}
              target="_blank"
              rel="noreferrer noopener"
            >
              grupostart.ok
            </Link>
          </span>
        </div>
        <div className="w-full h-full p-4 sm:basis-2/3 md:basis-1/2">
          <form
            onSubmit={formSubmit}
            className="w-full h-full flex flex-col justify-center items-center gap-2"
          >
            <div className="w-full h-full">
              <input
                type="text"
                name="name"
                required
                placeholder="Nombre"
                className="w-full h-[50px] p-2 rounded-lg text-lg focus:outline-none focus:ring-[3px] focus:ring-[#0853fc]"
                value={query.name}
                onChange={handleParam()}
              />
            </div>
            <div className="w-full h-full">
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full h-[50px] p-2 rounded-lg text-lg focus:outline-none focus:ring-[3px] focus:ring-[#0853fc]"
                value={query.email}
                onChange={handleParam()}
              />
            </div>
            <div className="w-full h-full">
              <textarea
                type="text"
                name="message"
                rows={5}
                required
                placeholder="Mensaje"
                className="w-full p-2 rounded-lg text-lg focus:outline-none focus:ring-[3px] focus:ring-[#0853fc]"
                value={query.message}
                onChange={handleParam()}
              />
            </div>
            <button
              type="submit"
              className="bg-[#0853fc] w-full h-[50px] rounded-lg text-white text-2xl hover:shadow-xl hover:shadow-black/25 ease-in duration-300"
            >
              Consultanos!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
