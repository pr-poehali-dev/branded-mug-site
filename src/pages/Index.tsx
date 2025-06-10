import PhotoSection from "@/components/PhotoSection";

const Index = () => {
  const photos = [
    {
      url: "https://cdn.poehali.dev/files/fe5c6e45-1efe-4f56-b5a1-c489095795e7.jpg",
      alt: "Фото 1",
    },
    {
      url: "https://cdn.poehali.dev/files/bcc63c91-7ab8-4de2-8f2f-df7ac1328e27.jpg",
      alt: "Фото 2",
    },
    {
      url: "https://cdn.poehali.dev/files/7f06a574-ca0c-4ae0-8213-75da74f5abc4.jpg",
      alt: "Фото 3",
    },
  ];

  return (
    <div>
      {photos.map((photo, index) => (
        <PhotoSection key={index} imageUrl={photo.url} alt={photo.alt} />
      ))}
    </div>
  );
};

export default Index;
