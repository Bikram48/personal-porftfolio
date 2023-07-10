import React from "react";
import { css, html, js, react, tailwind } from "./imports.js";

export default function Skill() {
  return (
    <div className="bg-body text-white p-6 md:p-20">
      <div className="flex mt-6 items-center">
        <div className="w-4 h-1 bg-[#de1054] mr-4"></div>
        <h2 className="text-3xl">Skills</h2>
      </div>
      <div className="mt-6 md:flex md:justify-between md:items-center md:mt-11">
        <h3 className="hidden text-4xl md:block">FrontEnd</h3>
        <div className="grid grid-cols-3 gap-10 basis-2/4">
          <div className="flex flex-col items-center w-1/2">
            <img src={react} />
            <p className="text-white mt-4 text-xl font-bold">React</p>
          </div>
          <div className="flex flex-col items-center w-1/2">
            <img src={css} />
            <p className="text-white mt-4 text-xl font-bold">CSS</p>
          </div>
          <div className="flex flex-col items-center w-1/2">
            <img src={js} />
            <p className="text-white mt-4 text-xl font-bold">JavaScript</p>
          </div>
          <div className="flex flex-col items-center w-1/2">
            <img src={tailwind} />
            <p className="text-white mt-4 text-xl font-bold">TailWind</p>
          </div>
          <div className="flex flex-col items-center w-1/2">
            <img className="w-1/2" src={html} />
            <p className="text-white mt-4 text-xl font-bold">HTML</p>
          </div>
        </div>
      </div>
    </div>
  );
}
