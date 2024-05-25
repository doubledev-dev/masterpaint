// import { PROJECTS } from "@/data/Projects.ts";
import type { CollectionEntry } from "astro:content";
import ProjectCard from "./ProjectCard.tsx";

// import { React, useState, useEffect } from "react";

interface Props {
  slice?: boolean;
  withTitle?: boolean;
  slugItems: CollectionEntry<"projects">[];
}

const Projects = ({ slice, withTitle = true, slugItems }: Props) => {
  return (
    <section className="mx-auto max-w-7xl p-6">
      {withTitle && (
        <h1 className="mb-12 text-center font-Inter text-[40px] font-semibold uppercase text-primary-800">
          our Projects
        </h1>
      )}
      <div className="grid grid-cols-3 gap-4">
        {slice
          ? slugItems?.slice(0, 9).map((item, index) => {
              return (
                <ProjectCard
                  key={index}
                  slugRef={item.slug}
                  title={item.data.title}
                  thumbnail={item.data.heroImage}
                />
              );
            })
          : slugItems?.map((item, index) => {
              return (
                <ProjectCard
                  key={index}
                  slugRef={item.slug}
                  title={item.data.title}
                  thumbnail={item.data.heroImage}
                />
              );
            })}
      </div>
      {slice && (
        <button className="mx-auto mt-8 flex rounded-full border border-primary-800 bg-white px-[13px] py-[10px] lowercase transition duration-300 ease-in-out hover:bg-primary-800 hover:text-white">
          <a href="/project">See More</a>
        </button>
      )}
    </section>
  );
};

export default Projects;
