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
            Готовы создать свою кружку?
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня и получите персональное предложение для
            вашего проекта
          </p>
        </div>

        <Card className="max-w-md mx-auto bg-white/95 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">
              Оформить заказ
            </CardTitle>
            <CardDescription>
              Оставьте заявку и мы свяжемся с вами в течение часа
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-left space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Введите ваше имя"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email или телефон
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Как с вами связаться?"
                />
              </div>
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg rounded-lg">
              Отправить заявку
            </Button>
            <p className="text-xs text-gray-500">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
