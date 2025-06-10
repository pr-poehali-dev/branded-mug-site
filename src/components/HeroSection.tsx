import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Твоя идеальная
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              {" "}
              кружка
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
            Премиальная керамическая кружка с персональным брендингом. Идеальна
            для кофе, чая и создания особой атмосферы.
          </p>
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
              Презентация продукта
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-full"
            >
              Заказать сейчас
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg rounded-full"
            >
              Узнать больше
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=600&fit=crop&crop=center"
              alt="Брендированная кружка"
              className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
            />
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-3xl blur-2xl opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
