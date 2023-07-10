import React, { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="bg-body text-white w-full">
      <nav className="relative">
        <div className="flex justify-between p-5 items-center md:px-20 md:py-10">
          <h1 className="font-roboto font-semibold text-2xl uppercase md:text-3xl">
            BikramWeb
          </h1>
          <div className="md:hidden">
            {menu ? (
              <svg
                onClick={() => setMenu(false)}
                className="w-8"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                onClick={() => setMenu(true)}
                className="w-8"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            )}
          </div>
          <ul
            className={`absolute md:text-xl bg-black top-[70px] right-0 left-0 flex flex-col items-center p-10 md:relative md:flex md:flex-row md:bg-transparent md:top-0 md:p-0 ${
              menu ? "flex" : "hidden"
            }`}
          >
            <li className="p-3">About</li>
            <li className="p-3">Skills</li>
            <li className="p-3">Project</li>
            <li className="p-3">Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
