import { ArrowLeft, Users, TrendingUp, Bot, Database, Zap, ChevronRight } from 'lucide-react';

export const WindowsAutomation = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={handleBack}
                className="group flex items-center gap-2 px-2 sm:px-3 py-2 text-gray-600 dark:text-gray-400 active:text-gray-900 active:dark:text-white md:hover:text-gray-900 md:hover:dark:text-white active:bg-gray-50 active:dark:bg-gray-800 md:hover:bg-gray-50 md:hover:dark:bg-gray-800 rounded-lg transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4 md:group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="text-sm font-medium hidden sm:inline">Назад</span>
              </button>
              <span className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Всеволод Марченко</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-6 sm:px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-full text-sm text-blue-700 dark:text-blue-300 mb-6">
              <Zap className="w-4 h-4" />
              Кейс автоматизации
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight leading-tight">
              Автоматизация розничных продаж окон
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
              Полная автоматизация процесса продаж окон через Авито с AI-агентами, 
              заменяющая 3 сотрудников и работающая 24/7.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="group relative overflow-hidden bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/40 dark:to-orange-900/30 rounded-xl p-6 md:hover:scale-[1.025] transition-all duration-200 md:duration-300 ease-out border border-red-200 dark:border-red-900/50">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <span className="text-sm font-medium text-red-900/70 dark:text-red-300">Заменено сотрудников</span>
                </div>
                <span className="text-4xl font-bold text-red-900 dark:text-red-100">3</span>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 dark:bg-red-600/10 rounded-full -mr-16 -mt-16"></div>
            </div>
            <div className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-900/30 rounded-xl p-6 md:hover:scale-[1.025] transition-all duration-200 md:duration-300 ease-out border border-blue-200 dark:border-blue-900/50">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Bot className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium text-blue-900/70 dark:text-blue-300">ИИ агентов</span>
                </div>
                <span className="text-4xl font-bold text-blue-900 dark:text-blue-100">2</span>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 dark:bg-blue-600/10 rounded-full -mr-16 -mt-16"></div>
            </div>
            <div className="group relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/40 dark:to-emerald-900/30 rounded-xl p-6 md:hover:scale-[1.025] transition-all duration-200 md:duration-300 ease-out border border-green-200 dark:border-green-900/50">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-medium text-green-900/70 dark:text-green-300">Экономия в месяц</span>
                </div>
                <span className="text-4xl font-bold text-green-900 dark:text-green-100">150 000₽</span>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-600/5 dark:bg-green-600/10 rounded-full -mr-16 -mt-16"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-4 pb-12 px-6 sm:px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 md:space-y-12">
          
          {/* Problem Section */}
          <div className="group">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-5">Что было на старте</h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 sm:p-7 shadow-sm md:hover:shadow-[0_4px_20px_rgba(0,0,0,0.11)] md:hover:dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)] transition-all duration-200 md:duration-300 ease-out">
              <div className="space-y-5">
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Компания занималась розничной продажей окон через Авито. Процесс выглядел так:
                </p>
                <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
                    Проблемы:
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                      Обработка одной заявки занимала несколько часов
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                      В нерабочее время и по выходным заявки не собирались вообще
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                      Сотрудники часто ошибались, игнорировали заявки, долго считали стоимость
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Goal Section */}
          <div className="group">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-5">Цель проекта</h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 sm:p-7 shadow-sm md:hover:shadow-[0_4px_20px_rgba(0,0,0,0.11)] md:hover:dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)] transition-all duration-200 md:duration-300 ease-out">
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Сделать систему, которая заменит трёх сотрудников и сможет принимать заявки из Авито, 
                автоматически уточнять параметры, рассчитывать стоимость через API завода, 
                отправлять цену и спецификацию клиенту, доводить его до оплаты без участия человека.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="group">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-5">Технологический стек</h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[
                { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
                { name: 'n8n', icon: 'https://n8n.io/favicon.ico' },
                { name: 'Telegram API', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg' },
                { name: 'Telegram Mini App', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg' },
                { name: 'WhatsApp Business', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' },
                { name: 'LLM-модели', icon: 'https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.59f2e898.png' }
              ].map((tech) => (
                <span
                  key={tech.name}
                  className="group inline-flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-black dark:text-white rounded-xl text-xs sm:text-sm font-medium md:hover:shadow-[0_2px_12px_rgba(0,0,0,0.11)] md:hover:dark:shadow-[0_2px_12px_rgba(255,255,255,0.11)] md:hover:scale-[1.025] transition-all duration-200"
                >
                  <div className="w-4 h-4 flex-shrink-0 overflow-hidden rounded flex items-center justify-center">
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="group">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-5">Команда проекта</h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 sm:p-7 shadow-sm md:hover:shadow-[0_4px_20px_rgba(0,0,0,0.11)] md:hover:dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)] transition-all duration-200 md:duration-300 ease-out">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    Команда:
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                      2 фуллстек-разработчика — бэкенд, фронтенд, интеграции
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                      Инженер CNN-модели — обработка замерных листов
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                      Руководитель проекта — архитектура и контроль сроков
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    Мои задачи:
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                      Создание ИИ-агента для Авито
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                      Создание датасетов для CNN модели
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                      Фронтенд разработка
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                      Создание ИИ-агента для WhatsApp
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                      Бизнес логика для догрева клиента
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                      Связки между ИИ агентами, бэкендом и фронтендом
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                      Генеральный промтинжиниринг всех процессов
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="group">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-5">Ответвления продукта</h2>
            
            <div className="space-y-5">
              {/* A. Avito Automation */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 sm:p-7 shadow-sm md:hover:shadow-[0_4px_20px_rgba(0,0,0,0.11)] md:hover:dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)] transition-all duration-200 md:duration-300 ease-out">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                    <Bot className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">А. Полная автоматизация продаж через Авито</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Работают два ИИ-агента в связке</p>
                  </div>
                </div>
                
                {/* Схема автоматизации */}
                <div className="space-y-5">
                  {/* 1. ИИ-агент Авито */}
                  <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-6">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">1. ИИ-агент Авито</h4>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      Первый агент работает прямо в Авито и полностью заменяет менеджера по обработке заявок. 
                      Он автоматически отвечает на сообщения клиентов, задаёт уточняющие вопросы о размерах окна, 
                      количестве створок, типе открывания. Проверяет корректность ответов и собирает всю информацию 
                      в структурированный JSON-объект с параметрами и контактными данными клиента.
                    </p>
                  </div>

                  {/* Стрелка */}
                  <div className="flex justify-center">
                    <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>

                  {/* Бэкенд */}
                  <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-6">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">Бэкенд обработки</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Собранные данные передаются на бэкенд, написанный на JavaScript. Система подключается 
                      к API завода-производителя, автоматически рассчитывает стоимость по полученным параметрам, 
                      формирует коммерческое предложение со спецификацией и мгновенно отправляет клиенту 
                      сообщение в WhatsApp с готовым предложением.
                    </p>
                  </div>

                  {/* Стрелка */}
                  <div className="flex justify-center">
                    <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>

                  {/* 2. ИИ-агент WhatsApp */}
                  <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-6">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">2. ИИ-агент WhatsApp</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Второй агент берёт эстафету в WhatsApp и полностью заменяет менеджера по дожиму. 
                      Он демонстрирует клиенту фотографии окон, видео монтажа, сертификаты качества, 
                      рассказывает об акциях и скидках. Предоставляет ссылку на оплату и отвечает на все 
                      вопросы клиента. Когда клиент совершает оплату, менеджер только подтверждает 
                      факт поступления средств в системе.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 pt-5 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    <strong>Результат:</strong> Вся цепочка от первого сообщения в Авито до готового заказа 
                    выполняется автоматически. Вместо трёх сотрудников работает одна интегрированная система, 
                    доступная 24/7 без выходных и ошибок.
                  </p>
                </div>
              </div>

              {/* B. Telegram Bot */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 sm:p-7 shadow-sm md:hover:shadow-[0_4px_20px_rgba(0,0,0,0.11)] md:hover:dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)] transition-all duration-200 md:duration-300 ease-out">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                    <Database className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Б. Telegram-бот для дилеров и замерщиков</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Помогает партнёрам — дилерам и замерщикам</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                  Отдельный бот для работы с партнёрами принимает фото замерных листов, где указаны размеры окон. 
                  CNN-модель распознаёт изображение, извлекает данные, собирает JSON и отправляет его на завод через API.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Через минуту бот возвращает расчёт стоимости и спецификацию. В Telegram Mini App реализованы: 
                  личный кабинет, корзина, история заказов, авторизация по JWT, админка для подтверждения регистрации.
                </p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="group">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-5">Результаты</h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 sm:p-7 shadow-sm md:hover:shadow-[0_4px_20px_rgba(0,0,0,0.11)] md:hover:dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)] transition-all duration-200 md:duration-300 ease-out">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 text-base sm:text-lg">
                    <TrendingUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    Операционные результаты:
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                      Полностью заменены 3 должности: менеджер по заявкам, логист, менеджер по дожиму
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                      Обработка заявки сокращена с нескольких часов до 1 минуты
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                      Исключён человеческий фактор и ошибки при расчётах
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                      Система работает 24/7 без выходных и праздников
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                      Создана масштабируемая архитектура для других регионов
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 text-base sm:text-lg">
                    <Zap className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    Бизнес-результаты:
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                      Экономия ~150 000 рублей в месяц на зарплатах
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                      Значительно снижена стоимость привлечения лида
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                      Увеличен объём обрабатываемых заявок без роста штата
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                      Повышена конверсия благодаря мгновенной обработке
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                      Получена возможность быстрого масштабирования бизнеса
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-black dark:bg-white flex items-center justify-center">
                <span className="text-sm font-bold text-white dark:text-black">ВМ</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Всеволод Марченко</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2025</p>
              </div>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="https://t.me/vsevolodmarchenko" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 active:text-gray-900 active:dark:text-white md:hover:text-gray-900 md:hover:dark:text-white md:hover:scale-[1.025] md:hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] md:hover:dark:shadow-[0_2px_8px_rgba(255,255,255,0.08)] transition-all duration-200 md:duration-300 ease-out font-medium">
                Telegram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
