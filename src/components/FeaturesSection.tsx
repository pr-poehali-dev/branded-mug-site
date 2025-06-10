import FeatureCard from "@/components/FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      icon: "Palette",
      title: "Персональный дизайн",
      description:
        "Создаем уникальный дизайн специально для вашего бренда с учетом всех пожеланий",
    },
    {
      icon: "Shield",
      title: "Премиум качество",
      description:
        "Высококачественная керамика, устойчивая к температурам и ежедневному использованию",
    },
    {
      icon: "Heart",
      title: "Эмоциональная связь",
      description:
        "Каждая кружка рассказывает историю и создает особые моменты в повседневной жизни",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы создаем не просто кружки, а предметы, которые становятся частью
            вашей истории
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
