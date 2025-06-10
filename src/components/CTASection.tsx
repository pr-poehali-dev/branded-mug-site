import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Спасибо за внимание!
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
            Эта кружка создана с вниманием к каждой детали и заботой о качестве
          </p>
        </div>

        <Card className="max-w-md mx-auto bg-white/95 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">
              Характеристики
            </CardTitle>
            <CardDescription>
              Премиальная керамика для особых моментов
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-left space-y-3">
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Материал:</span>
                <span className="font-medium">Керамика высшего качества</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Объём:</span>
                <span className="font-medium">350 мл</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Покрытие:</span>
                <span className="font-medium">Глазурь с брендингом</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Использование:</span>
                <span className="font-medium">Кофе, чай, горячие напитки</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
