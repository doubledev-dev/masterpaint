import type { ImageMetadata } from "astro";

interface props {
  title: string;
  image: ImageMetadata;
}

const ProjectCard = ({ title, image }: props) => {
  return (
    <article className="relative inline-block size-[420] bg-black duration-300 hover:scale-105">
      <div>
        <img
          className="z-0 block aspect-square size-[420px] object-cover object-center opacity-70"
          src={image.src}
          alt={title}
        />
      </div>
      <div className="absolute left-0 top-0 z-10 p-10">
        <h3 className="text-3xl text-white">{title}</h3>
      </div>
    </article>
  );
};

export default ProjectCard;
