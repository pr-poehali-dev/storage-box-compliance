import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Box',
      title: 'Малые ячейки',
      description: 'Для документов, гаджетов и небольших личных вещей',
      size: '30x40 см'
    },
    {
      icon: 'Package',
      title: 'Средние секции',
      description: 'Для чемоданов, сезонной одежды и коробок',
      size: '60x80 см'
    },
    {
      icon: 'Archive',
      title: 'Большие боксы',
      description: 'Для мебели, спортинвентаря и крупногабаритных вещей',
      size: '120x150 см'
    }
  ];

  const tariffs = [
    {
      name: 'Базовый',
      price: '500',
      period: 'месяц',
      features: ['Малая ячейка', 'Доступ 24/7', 'Видеонаблюдение', 'Страховка до 10 000₽']
    },
    {
      name: 'Стандарт',
      price: '1 200',
      period: 'месяц',
      features: ['Средняя секция', 'Доступ 24/7', 'Видеонаблюдение', 'Климат-контроль', 'Страховка до 50 000₽'],
      popular: true
    },
    {
      name: 'Премиум',
      price: '2 500',
      period: 'месяц',
      features: ['Большой бокс', 'Приоритетный доступ 24/7', 'Видеонаблюдение', 'Климат-контроль', 'Персональная охрана', 'Страховка до 200 000₽']
    }
  ];

  const security = [
    { icon: 'Camera', title: '24/7 видеонаблюдение', desc: 'Запись ведется круглосуточно' },
    { icon: 'Lock', title: 'Электронные замки', desc: 'Индивидуальный код доступа' },
    { icon: 'Shield', title: 'Охранная сигнализация', desc: 'Моментальное реагирование' },
    { icon: 'Thermometer', title: 'Климат-контроль', desc: 'Стабильная температура 18-22°C' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icon name="Package" size={28} className="text-primary" />
              <span className="text-xl font-bold text-secondary">SafeStore</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {['home', 'services', 'tariffs', 'security', 'location'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'services' && 'Услуги'}
                  {section === 'tariffs' && 'Тарифы'}
                  {section === 'security' && 'Безопасность'}
                  {section === 'location' && 'Локация'}
                </button>
              ))}
            </div>
            <Button size="sm" className="hidden md:flex">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Кубано-набережная
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Надежное хранение ваших вещей
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                Современный сервис аренды секций и ящиков для хранения в центре города. Безопасность, доступность, надежность.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90" onClick={() => scrollToSection('tariffs')}>
                  Выбрать тариф
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                  <Icon name="Play" size={18} className="mr-2" />
                  Виртуальный тур
                </Button>
              </div>
              <div className="flex gap-8 mt-12">
                <div>
                  <div className="text-3xl font-bold text-white">300+</div>
                  <div className="text-white/60 text-sm">Ячеек</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-white/60 text-sm">Доступ</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">5+</div>
                  <div className="text-white/60 text-sm">Лет на рынке</div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/84843b3b-6d13-4b4e-a237-1ab456985503/files/45375fc3-db10-4938-9d0e-327062860277.jpg"
                alt="SafeStore storage facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Наши услуги
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Выберите подходящий размер</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              У нас есть решения для любых потребностей — от маленьких ячеек до больших боксов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex items-center gap-2">
                    <Icon name="Ruler" size={16} className="text-accent" />
                    <span className="text-sm font-medium text-accent">{service.size}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Тарифы
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Прозрачные цены</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Выберите оптимальный тариф для ваших нужд. Без скрытых платежей.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tariffs.map((tariff, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  tariff.popular ? 'border-primary border-2 shadow-lg scale-105' : 'hover:-translate-y-1'
                }`}
              >
                {tariff.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent">
                    Популярный
                  </Badge>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{tariff.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{tariff.price}</span>
                    <span className="text-muted-foreground ml-2">₽/{tariff.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tariff.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={tariff.popular ? 'default' : 'outline'}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="security" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Безопасность
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ваши вещи под надежной защитой</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Многоуровневая система безопасности обеспечивает сохранность имущества
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {security.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-card border hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Локация
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Удобное расположение</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Кубано-набережная, в самом центре города с удобным подъездом
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Контакты</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-medium">Адрес</div>
                      <div className="text-sm text-muted-foreground">Кубано-набережная, 17</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-medium">Телефон</div>
                      <div className="text-sm text-muted-foreground">+7 (861) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">info@safestore.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-medium">Режим работы</div>
                      <div className="text-sm text-muted-foreground">Доступ к ячейкам 24/7</div>
                      <div className="text-sm text-muted-foreground">Офис: 9:00 - 21:00</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="w-full h-full min-h-[350px] bg-muted flex items-center justify-center">
                  <div className="text-center p-8">
                    <Icon name="Map" size={48} className="text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Интерактивная карта</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8 relative">
        <div className="container mx-auto px-4">
          <Alert className="mb-6 bg-destructive/10 border-destructive/50 text-destructive">
            <Icon name="AlertTriangle" size={20} />
            <AlertDescription className="ml-2">
              <strong>Уведомление о штрафе:</strong> Владельцу шкафчика Влад Каратыш (№ 17-122-45) назначен штраф 5000 рублей за порчу шкафа кровью. Требуется оплата и явка в офис.
            </AlertDescription>
          </Alert>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Package" size={24} />
                <span className="text-lg font-bold">SafeStore</span>
              </div>
              <p className="text-white/60 text-sm">
                Современный сервис хранения вещей на Кубано-набережной
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2 text-sm text-white/60">
                <div className="hover:text-white cursor-pointer transition-colors">Услуги</div>
                <div className="hover:text-white cursor-pointer transition-colors">Тарифы</div>
                <div className="hover:text-white cursor-pointer transition-colors">Безопасность</div>
                <div className="hover:text-white cursor-pointer transition-colors">Контакты</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Связь</h4>
              <div className="space-y-2 text-sm text-white/60">
                <div>+7 (861) 123-45-67</div>
                <div>info@safestore.ru</div>
                <div>Кубано-набережная, 17</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-sm text-white/60">
            © 2024 SafeStore. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
