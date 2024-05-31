import type { lang } from "@/types";

interface props {
  slugRef?: string;
  title?: string;
  thumbnail: string;
  lang?: lang;
}

const ProjectCard = ({
  slugRef = "",
  title = "",
  thumbnail,
  lang = "th",
}: props) => {
  if (title != "" && slugRef != "") {
    return (
      <a href={`/${lang}/projects/${slugRef}`}>
        <article className="relative inline-block bg-black duration-300 hover:scale-105">
          <div>
            <img
              className="z-0 block aspect-square h-full object-cover object-center opacity-70"
              src={thumbnail}
              alt={title}
              loading="eager"
            />
          </div>
          <div className="absolute left-0 top-[10%] z-10 mx-[10%]">
            <h3 className="text-base text-white lg:text-3xl">{title}</h3>
          </div>
        </article>
      </a>
    );
  } else {
    return (
      <article className="relative inline-block  duration-300 ">
        <div>
          <img
            className="z-0 block aspect-square object-cover object-center"
            src={thumbnail}
            alt="_blank"
            loading="eager"
          />
        </div>
        <div className="absolute left-0 top-[10%] z-10 mx-[10%]">
          <h3 className="text-base text-white lg:text-3xl">{title}</h3>
        </div>
      </article>
    );
  }
};

export default ProjectCard;
