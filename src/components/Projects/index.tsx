import type { CollectionEntry } from "astro:content";
import { FILTERTYPE, FILTERLOCATION } from "@/data/Filter.ts";
import ProjectCard from "./ProjectCard.tsx";
import Filter from "@/components/Filter"

import { useMemo, useState } from "react";

interface Props {
  slice?: boolean;
  homePage?: boolean;
  projectsPage?: boolean;
  slugItems: CollectionEntry<"projects">[];
}


  

const Projects = ({
  slice,
  homePage = true,
  projectsPage = false,
  slugItems,
}: Props) => {
  const [filterTypes, setFilterTypes] = useState<string>("All");
  const [filterLocation, setFilterLocation] = useState<string>("All");
  const filteredItems = useMemo(() => {
    return slugItems.filter((item) => {
      if (filterTypes === "All" && filterLocation === "All") {
        return true;
      } else if (filterTypes === "ทาสี" && filterLocation === "All") {
        return !item.data.tags.includes("งานออกแบบ");
      } else if (filterTypes === "ทาสี") {
        return !item.data.tags.includes("งานออกแบบ") && item.data.tags.includes(filterLocation);
      } else if (filterLocation === "All") {
        return item.data.tags.includes(filterTypes);
      } else if (filterTypes === "All") {
        return item.data.tags.includes(filterLocation);
      } else {
        return (
          item.data.tags.includes(filterTypes) &&
          item.data.tags.includes(filterLocation)
        );
      }
    });
  }, [filterTypes, filterLocation, slugItems]);

  const changeType = (type: string) => {
    setFilterTypes(type);
  }

  const changeLocation = (location: string) => {
    setFilterLocation(location);
  }

  return (
    <section className="mx-auto max-w-7xl px-6">
      {projectsPage && (
        <div className="px-6 pb-6">
          <h1 className="pb-8 font-Inter text-[40px] font-bold text-primary-800">
            Projects
          </h1>
          <div className="flex flex-row space-x-8">
            <Filter key="filterTypes" data={FILTERTYPE}  setState={changeType}/>
            <Filter key="filterLocation" data={FILTERLOCATION}  setState={changeLocation}/>
          </div>
        </div>
      )}
      {homePage && (
        <h1 className="mb-12 mt-4 text-center font-Inter text-[40px] font-semibold uppercase text-primary-800">
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
          : filteredItems?.map((item, index) => {
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
        <a href="/projects">
          <button className="mx-auto mt-8 flex rounded-full border border-primary-800 bg-white px-[13px] py-[10px] lowercase transition duration-300 ease-in-out hover:bg-primary-800 hover:text-white">
            See More
          </button>
        </a>
      )}
    </section>
  );
};

export default Projects;
