import React from "react";
import project from "../assets/project_one.png";

export default function Projects({ mode }) {
  return (
    <div
      className={`${
        mode ? "bg-white text-body" : "bg-body text-white"
      } p-6 md:p-20`}
      id="projects"
    >
      <div className="flex item-center justify-center items-center">
        <div className="w-4 h-1 bg-[#de1054] mr-4"></div>
        <h2 className="text-3xl">Projects</h2>
      </div>
      <div className="flex flex-col md:flex-row mt-11 gap-6">
        <div className="md:basis-2/4 border border-gray p-6">
          <div>
            <img src={project} alt="" />
          </div>
          <div className="flex flex-col items-center mt-6 gap-6">
            <h2 className="font-bold text-xl">Agency Landing Page</h2>
            <div className="flex gap-3 mt-2">
              <a
                href="https://github.com/Bikram48/raven-web-agency"
                target="__blank"
              >
                <button className="border px-4 py-2">Code</button>
              </a>
              <a
                href="https://extraordinary-cheesecake-e1c7fa.netlify.app/"
                target="__blank"
              >
                <button className="border px-4 py-2">View Demo</button>
              </a>
            </div>
          </div>
        </div>

        <div className="md:basis-2/4 border border-gray p-6 flex flex-col justify-center items-center gap-10">
          <h2 className="text-3xl">More Projects Coming Soon</h2>
          <h2 className="text-xl">Stay Updated</h2>
        </div>
      </div>
    </div>
  );
}
