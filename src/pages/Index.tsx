import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const navigationItems = [
    "Главная",
    "Каталог товаров", 
    "Услуги и сервис",
    "Доставка и оплата",
    "О компании",
    "Контакты"
  ];

  const productCategories = [
    {
      title: "Строительные смеси",
      description: "Цемент, бетон, штукатурки, клеи",
      icon: "Package",
      items: ["Цемент М400", "Цемент М500", "Бетон B25", "Плиточный клей"]
    },
    {
      title: "Металлопрокат",
      description: "Арматура, профиль, листовая сталь",
      icon: "Square",
      items: ["Арматура А500С", "Уголок стальной", "Швеллер", "Лист стальной"]
    },
    {
      title: "Пиломатериалы",
      description: "Доска, брус, фанера, OSB",
      icon: "TreePine",
      items: ["Доска обрезная", "Брус 150x150", "Фанера ФК", "OSB-3"]
    },
    {
      title: "Кровельные материалы",
      description: "Металлочерепица, профнастил, утеплители",
      icon: "Home",
      items: ["Металлочерепица", "Профнастил С21", "Минвата", "Гидроизоляция"]
    },
    {
      title: "Отделочные материалы", 
      description: "Плитка, краски, обои, декор",
      icon: "Palette",
      items: ["Керамогранит", "Краска фасадная", "Обои виниловые", "Декоративная штукатурка"]
    },
    {
      title: "Инструменты",
      description: "Ручной и электроинструмент",
      icon: "Wrench",
      items: ["Дрель ударная", "Болгарка", "Молоток", "Набор ключей"]
    }
  ];

  const services = [
    {
      title: "Оптовые поставки",
      description: "Специальные цены для крупных заказов",
      icon: "Truck"
    },
    {
      title: "Доставка по региону",
      description: "Быстрая доставка собственным транспортом",
      icon: "MapPin"
    },
    {
      title: "Консультации",
      description: "Помощь в подборе материалов",
      icon: "MessageCircle"
    },
    {
      title: "Складские услуги",
      description: "Хранение и комплектация заказов",
      icon: "Warehouse"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Icon name="Building2" size={32} className="text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">СтройМатериалы</h1>
                <p className="text-sm text-muted-foreground">Надежный поставщик с 2005 года</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="Clock" size={16} />
                <span>Пн-Пт: 8:00-18:00</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex space-x-8">
              {navigationItems.map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="hover:text-blue-200 transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
            <Button variant="secondary" size="sm">
              <Icon name="FileText" size={16} className="mr-2" />
              Скачать прайс
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Оптовые поставки</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Качественные строительные материалы для профессионалов
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Прямые поставки от производителей. Конкурентные цены. 
                Индивидуальные условия для постоянных клиентов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Download" size={20} className="mr-2" />
                  Получить прайс-лист
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать заказ
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/f49ecc83-d74d-4f0a-a36d-46998952dd15.jpg"
                alt="Склад строительных материалов"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Каталог товаров</h3>
            <p className="text-xl text-muted-foreground">
              Полный ассортимент строительных материалов и инструментов
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon name={category.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{item}</span>
                        <Button variant="ghost" size="sm">
                          <Icon name="ArrowRight" size={14} />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/bb25af3d-91ce-44f7-bea7-72e7f012fcb8.jpg"
                alt="Образцы строительных материалов"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <Badge className="mb-4">Для оптовиков</Badge>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Специальные условия для оптовых покупателей
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Прайс-листы в Excel</h4>
                    <p className="text-muted-foreground">Актуальные цены и наличие товаров</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Гибкая система скидок</h4>
                    <p className="text-muted-foreground">От объема и регулярности заказов</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Отсрочка платежа</h4>
                    <p className="text-muted-foreground">Индивидуальные условия оплаты</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="text-lg px-8">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать прайс-лист
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Услуги и сервис</h3>
            <p className="text-xl text-muted-foreground">
              Полный цикл обслуживания клиентов
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">Свяжитесь с нами</h3>
              <p className="text-xl text-muted-foreground">
                Получите персональное предложение или задайте вопрос
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Отправить запрос</CardTitle>
                  <CardDescription>Мы свяжемся с вами в течение часа</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Ваше имя" />
                    <Input placeholder="Телефон" />
                  </div>
                  <Input placeholder="Email" />
                  <Input placeholder="Компания" />
                  <Textarea placeholder="Опишите ваши потребности..." className="min-h-24" />
                  <Button className="w-full" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить запрос
                  </Button>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="MapPin" size={20} className="mr-2" />
                      Адрес
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>г. Москва, ул. Промышленная, д. 15</p>
                    <p className="text-muted-foreground">Режим работы: Пн-Пт 8:00-18:00</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Контакты
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Отдел продаж:</span>
                      <span className="font-medium">+7 (495) 123-45-67</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Email:</span>
                      <span className="font-medium">sales@stroymaterials.ru</span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <span>Склад:</span>
                      <span className="font-medium">+7 (495) 123-45-68</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" size={24} />
                <span className="text-xl font-bold">СтройМатериалы</span>
              </div>
              <p className="text-blue-100">
                Надежный поставщик строительных материалов с 2005 года
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <div className="space-y-2 text-blue-100">
                <p>Строительные смеси</p>
                <p>Металлопрокат</p>
                <p>Пиломатериалы</p>
                <p>Кровельные материалы</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-blue-100">
                <p>Оптовые поставки</p>
                <p>Доставка</p>
                <p>Консультации</p>
                <p>Складские услуги</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-blue-100">
                <p>+7 (495) 123-45-67</p>
                <p>sales@stroymaterials.ru</p>
                <p>г. Москва, ул. Промышленная, 15</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-blue-400/30" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-blue-100">
            <p>&copy; 2024 СтройМатериалы. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;