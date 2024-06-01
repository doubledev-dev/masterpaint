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
      <a href={`/${lang}/projects/${slugRef}`} className=" size-full aspect-square relative inline-block bg-black duration-300 hover:scale-105">
          <img
            className="z-0 block opacity-70 size-full aspect-square object-cover object-center"
            src={thumbnail}
            alt={title}
            loading="eager"
          />
          <div className="absolute left-0 top-[10%] z-10 mx-[10%]">
            <h3 className="text-base text-white lg:text-3xl">{title}</h3>
          </div>
      </a>
    );
  } else {
    return (
      <article className="relative inline-block size-full duration-300 aspect-square ">
          <img
            className="z-0 block aspect-square object-cover object-center"
            src={thumbnail}
            alt="_blank"
            loading="eager"
          />
        <div className="absolute left-0 top-[10%] z-10 mx-[10%]">
          <h3 className="text-base text-white lg:text-3xl">{title}</h3>
        </div>
      </article>
    );
  }
};

export default ProjectCard;
