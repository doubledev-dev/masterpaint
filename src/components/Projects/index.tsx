import { PROJECTS } from "@/data/Projects.ts";
import ProjectCard from "./ProjectCard.tsx";

// import { React, useState, useEffect } from "react";

interface Props {
  slice?: boolean;
  withTitle?: boolean;
  withButton?: boolean;
}

const Projects = ({ slice, withTitle = true, withButton = true }: Props) => {
  return (
    <section className="mx-auto max-w-7xl p-6">
      {withTitle && (
        <h1 className="mb-12 text-center font-Inter text-[40px] font-semibold uppercase text-primary-800">
          our Projects
        </h1>
      )}
      <div className="grid grid-cols-3 gap-4">
        {slice && PROJECTS != undefined
          ? PROJECTS?.slice(0, 9).map((company) => (
              <ProjectCard
                key={company.name}
                title={company.name}
                image={company.image}
              />
            ))
          : PROJECTS?.map((company) => (
              <ProjectCard
                key={company.name}
                title={company.name}
                image={company.image}
              />
            ))}
      </div>
      {withButton && (
        <button className="mx-auto mt-8 flex rounded-full border border-primary-800 bg-white px-[13px] py-[10px] lowercase transition duration-300 ease-in-out hover:bg-primary-800 hover:text-white">
          <a href="/project">See More</a>
        </button>
      )}
    </section>
  );
};

export default Projects;
