import { Settings, Brain, Users, Palette } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      icon: Settings,
      title: 'Системы и автоматизация',
      skills: [
        'Настройка 1С, Bitrix24, Ramex',
        'Построение бизнес-процессов',
        'Автоматизация сбора лидов и продаж',
        'Сбор требований и написание ТЗ'
      ]
    },
    {
      icon: Brain,
      title: 'AI и работа с данными',
      skills: [
        'Промт-инжиниринг для бизнес-задач',
        'Подготовка датасетов для моделей',
        'Файнтюнинг моделей',
        'Разметка данных для CNN и ML моделей'
      ]
    },
    {
      icon: Users,
      title: 'Команда и управление',
      skills: [
        'Найм и обучение сотрудников',
        'Обучение персонала и публичные выступления',
        'Создание регламентов для работы (до 41 сотрудника)',
        'Управление проектами'
      ]
    },
    {
      icon: Palette,
      title: 'Создание контента',
      skills: [
        'Создание учебных материалов для сотрудников',
        'Дизайн в Photoshop и Illustrator',
        'Видеомонтаж',
        'Английский язык — B2'
      ]
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 px-6 sm:px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Навыки
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-3xl">
          Автоматизация процессов, AI, управление командами и контент
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="card-modern border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 md:hover:border-gray-300 md:hover:dark:border-gray-700 md:hover:shadow-[0_4px_20px_rgba(0,0,0,0.11)] md:hover:dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)] md:hover:scale-[1.025] transition-all duration-200 md:duration-300 ease-out bg-white dark:bg-gray-800">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center md:group-hover:bg-gray-200 md:group-hover:dark:bg-gray-600 transition-colors duration-200 md:duration-300 ease-out">
                    <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400 dark:before:text-gray-600">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

