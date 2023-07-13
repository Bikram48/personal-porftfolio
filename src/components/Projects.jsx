import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProjectList from "./ProjectList";
import projectsData from "./projects.json";

export default function Projects({ mode }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div
      className={`${
        mode ? "bg-white text-body" : "bg-body text-white"
      } p-6 md:p-20 py-20`}
      id="projects"
    >
      <div className="flex item-center justify-center items-center">
        <div className="w-4 h-1 bg-[#de1054] mr-4"></div>
        <h2 className="text-3xl">Projects</h2>
      </div>
      <div className="flex flex-col md:flex-row mt-11 gap-6">
        {projects.map((project) => (
          <ProjectList
            key={project.id}
            title={project.title}
            status={project.status}
            image={project.image}
            url={project.url}
            github={project.github}
          />
        ))}
        <div className="md:basis-2/4 border border-gray p-6 flex flex-col justify-center items-center gap-10">
          <h2 className="text-3xl">More Projects Coming Soon</h2>
          <h2 className="text-xl">Stay Updated</h2>
        </div>
      </div>
    </div>
  );
}
