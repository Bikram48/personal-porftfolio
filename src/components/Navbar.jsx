import React, { useState } from "react";

export default function Navbar({ click, mode }) {
  const [menu, setMenu] = useState(false);

  return (
    <div
      className={`${mode ? "bg-white text-body" : "bg-body text-white"} w-full`}
    >
      <nav className="relative">
        <div className="flex justify-between p-5 items-center md:px-20 md:py-10">
          <h1 className="font-roboto font-semibold text-2xl uppercase">
            BikramWeb
          </h1>
          <div className="flex gap-4 items-center">
            <li
              className={`list-none p-3 mr-2 rounded-full ${
                mode ? "bg-body text-white" : "bg-white text-black"
              } cursor-pointer`}
              onClick={() => click()}
            >
              <svg
                className="w-6 h-6"
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
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                ></path>
              </svg>
            </li>

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
              className={`absolute md:text-lg ${
                mode ? "bg-white text-body" : "bg-black text-white"
              } top-[70px] right-0 left-0 flex flex-col items-center p-10 md:relative md:flex md:flex-row md:bg-transparent md:top-0 md:p-0 ${
                menu ? "flex" : "hidden"
              }`}
            >
              <li className="p-3">
                <a href="#about">About</a>
              </li>
              <li className="p-3">
                <a href="#skills">Skills</a>
              </li>
              <li className="p-3">
                <a href="#projects">Projects</a>
              </li>
              <li className="p-3">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
