interface PhotoSectionProps {
  imageUrl: string;
  alt: string;
}

const PhotoSection = ({ imageUrl, alt }: PhotoSectionProps) => {
  return (
    <section className="h-screen w-screen overflow-hidden">
      <img
        src={imageUrl}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </section>
  );
};

export default PhotoSection;
