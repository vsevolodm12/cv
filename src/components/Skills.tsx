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
    <section id="experience" className="py-8 px-4 sm:px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
          Навыки
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-base sm:text-lg">
          Автоматизация процессов, AI, управление командами и контент
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="card-modern border border-gray-200 dark:border-gray-800 rounded-lg p-5 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-[0_4px_20px_rgba(0,0,0,0.11)] dark:hover:shadow-[0_4px_20px_rgba(255,255,255,0.05)] hover:scale-[1.025] transition-all duration-300 ease-out bg-white dark:bg-gray-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors duration-300 ease-out">
                    <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:scale-[1.05] transition-transform duration-300 ease-out" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400 dark:before:text-gray-600 hover:text-gray-800 dark:hover:text-gray-300 hover:before:text-gray-600 dark:hover:before:text-gray-400 transition-colors duration-200 ease-out">
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

