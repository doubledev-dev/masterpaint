import ProjectCard from "./ProjectCard";

interface Props {
  images: ImageMetadata[];
}

export default function ProjectDetail({ images }: Props) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images?.map((item, index) => {
        return <ProjectCard key={index} thumbnail={item.src} />;
      })}
    </div>
  );
}
