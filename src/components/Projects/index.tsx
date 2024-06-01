import Filter from "@/components/Filter";
import { FILTERLOCATION, FILTERTYPE } from "@/data/Filter.ts";
import { useTranslations } from "@/i18n/utils";
import type { CollectionEntry } from "astro:content";
import ProjectCard from "./ProjectCard.tsx";

import type { lang } from "@/types/index.ts";
import { useMemo, useState } from "react";

interface Props {
  slice?: boolean;
  homePage?: boolean;
  projectsPage?: boolean;
  slugItems: CollectionEntry<"projects">[];
  lang: lang;
}

const Projects = ({
  slice,
  homePage = true,
  projectsPage = false,
  slugItems,
  lang,
}: Props) => {
  const [filterTypes, setFilterTypes] = useState<string>("All");
  const [filterLocation, setFilterLocation] = useState<string>("All");
  const t = useTranslations(lang);
  const filteredItems = useMemo(() => {
    return slugItems.filter((item) => {
      if (
        (filterTypes === "All" || filterTypes === "ทั้งหมด") &&
        (filterLocation === "All" || filterLocation === "ทั้งหมด")
      ) {
        return true;
      } else if (
        (filterTypes === "ทาสี" || filterTypes === "painting") &&
        (filterLocation === "All" || filterLocation === "ทั้งหมด")
      ) {
        return !item.data.tags.includes("design");
      } else if (filterTypes === "ทาสี" || filterTypes === "painting") {
        return (
          !item.data.tags.includes("design") &&
          item.data.tags.includes(filterLocation)
        );
      } else if (filterLocation === "All" || filterLocation === "ทั้งหมด") {
        return item.data.tags.includes(filterTypes);
      } else if (filterTypes === "All" || filterTypes === "ทั้งหมด") {
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
  };

  const changeLocation = (location: string) => {
    setFilterLocation(location);
  };

  return (
    <section className="mx-auto max-w-7xl md:px-6">
      {projectsPage && (
        <div className="px-6 pb-6">
          <h1 className="pb-8 font-Inter text-[20px] font-bold text-primary-800 md:text-[40px]">
            {t("project.page.title")}
          </h1>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <Filter
              key="filterTypes"
              data={FILTERTYPE}
              setState={changeType}
              zIndex={60}
              lang={lang}
            />
            <Filter
              key="filterLocation"
              data={FILTERLOCATION}
              setState={changeLocation}
              zIndex={50}
              lang={lang}
            />
          </div>
        </div>
      )}
      {homePage && (
        <h1 className="mb-12 mt-4 text-center font-Inter text-[20px] font-semibold uppercase text-primary-800 lg:text-[40px]">
          our Projects
        </h1>
      )}
      <div className="grid grid-cols-2 gap-1 md:grid-cols-3 md:gap-4">
        {slice
          ? slugItems?.slice(0, 9).map((item, index) => {
              return (
                <ProjectCard
                  key={index}
                  lang={lang}
                  slugRef={item.slug}
                  title={lang === "en" ? item.data.titleEN : item.data.titleTH}
                  thumbnail={item.data.heroImage}
                />
              );
            })
          : filteredItems?.map((item, index) => {
              return (
                <ProjectCard
                  key={index}
                  lang={lang}
                  slugRef={item.slug}
                  title={lang === "en" ? item.data.titleEN : item.data.titleTH}
                  thumbnail={item.data.heroImage}
                />
              );
            })}
      </div>
      {slice && (
        <a href={`/${lang}/projects`}>
          <button className="mx-auto mt-8 flex rounded-full border border-primary-800  bg-white px-[13px] py-[10px] lowercase text-primary-800 transition duration-300 ease-in-out hover:bg-primary-800 hover:text-white">
            {lang === "en" ? "More Projects" : "ดูเพิ่มเติม"}
          </button>
        </a>
      )}
    </section>
  );
};

export default Projects;
