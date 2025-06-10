import { Badge } from "@/components/ui/badge";

const SpecsSection = () => {
  const specs = [
    { label: "Объем", value: "350 мл" },
    { label: "Материал", value: "Премиум керамика" },
    { label: "Высота", value: "9.5 см" },
    { label: "Диаметр", value: "8.2 см" },
    { label: "Вес", value: "280 гр" },
    { label: "Температура", value: "До 100°C" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Технические характеристики
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {specs.map((spec, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-sm text-gray-500 mb-2">{spec.label}</div>
                  <div className="text-lg font-semibold text-gray-900">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Можно в посудомойке
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Микроволновка
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Экологично
              </Badge>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-purple-100 to-indigo-100 rounded-3xl p-8">
              <img
                src="https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=500&h=500&fit=crop&crop=center"
                alt="Кружка в разрезе"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
