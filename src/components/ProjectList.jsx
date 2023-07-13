import React from "react";

export default function ProjectList({ image, title, status, github, url }) {
  return (
    <div className="md:basis-2/4 border border-gray p-6">
      <div className="relative">
        <img
          className="md:h-250 md:w-full md:object-cover"
          src={image}
          alt=""
        />

        <button className="absolute top-0 left-0 text-xs bg-orange-500 p-1 ">
          {status}
        </button>
      </div>
      <div className="flex flex-col items-center mt-6 gap-6">
        <h2 className="font-bold text-xl">{title}</h2>
        <div className="flex gap-3 mt-2">
          <a href={github} target="__blank">
            <button className="border px-4 py-2">Code</button>
          </a>
          <a href={url} target="__blank">
            <button className="border px-4 py-2">View Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
}
