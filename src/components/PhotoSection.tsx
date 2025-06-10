interface PhotoSectionProps {
  imageUrl: string;
  alt: string;
}

const PhotoSection = ({ imageUrl, alt }: PhotoSectionProps) => {
  return (
    <section className="h-screen w-screen">
      <img src={imageUrl} alt={alt} className="w-full h-full object-cover" />
    </section>
  );
};

export default PhotoSection;
