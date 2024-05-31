interface Props {
  images: ImageMetadata[];
  title?: string;
}

export default function ProjectDetail({ images, title }: Props) {
  return (
    <div className="grid grid-cols-2 gap-1 lg:grid-cols-3 lg:gap-4">
      {images?.map((item, index) => (
        <img
          key={index}
          className="aspect-square object-cover object-center"
          src={item.src}
          alt={title + index.toString()}
        />
      ))}
    </div>
  );
}
