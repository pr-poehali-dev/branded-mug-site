interface PhotoSectionProps {
  imageUrl: string;
  alt: string;
}

const PhotoSection = ({ imageUrl, alt }: PhotoSectionProps) => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="w-full h-full flex items-center justify-center p-4">
        <img
          src={imageUrl}
          alt={alt}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />
      </div>
    </section>
  );
};

export default PhotoSection;
