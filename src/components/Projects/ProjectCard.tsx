interface props {
  slugRef?: string;
  title?: string;
  thumbnail: string;
}

const ProjectCard = ({ slugRef = "", title = "", thumbnail }: props) => {
  if (title != "" && slugRef != "") {
    return (
      <a href={`/projects/${slugRef}`}>
        <article className="relative inline-block bg-black duration-300 hover:scale-105">
          <div>
            <img
              className="z-0 block aspect-square object-cover object-center opacity-70"
              src={thumbnail}
              alt={title}
            />
          </div>
          <div className="absolute left-0 top-0 z-10 p-2 lg:p-10">
            <h3 className="text-base lg:text-3xl text-white">{title}</h3>
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
          />
        </div>
        <div className="absolute left-0 top-0 z-10 p-2 lg:p-10">
          <h3 className="text-base lg:text-3xl text-white">{title}</h3>
        </div>
      </article>
    );
  }
};

export default ProjectCard;
