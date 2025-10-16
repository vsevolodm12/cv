import { ExternalLink } from 'lucide-react';

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  category: string;
  link?: string;
  technologies: string[];
}

export const Cases = () => {
  const projects: ProjectItem[] = [
    {
      id: 1,
      title: 'Автоматизация розничных продаж окон',
      description: 'Полная автоматизация процесса продаж окон через Авито с AI-агентами, заменяющая 3 сотрудников и работающая 24/7.',
      category: 'automation',
      link: '/project/windows-automation',
      technologies: ['JavaScript', 'React', 'PostgreSQL', 'n8n', 'Telegram API', 'Telegram Mini App', 'WhatsApp Business', 'LLM-модели']
    },
    {
      id: 2,
      title: 'Кружок Станкевича',
      description: 'Telegram Mini App для подготовки к олимпиадам по истории. Реализована система управления занятиями и домашними заданиями.',
      category: 'app',
      link: 'https://github.com/vsevolodm12/kruzhok_app',
      technologies: ['React', 'TypeScript', 'Telegram Bot API', 'Tailwind CSS']
    }
  ];

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      'app': 'приложение',
      'automation': 'автоматизация',
      'backend': 'backend',
      'fullstack': 'fullstack'
    };
    return labels[category] || category;
  };

  return (
    <section id="projects" className="py-8 px-6 bg-white dark:bg-gray-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
          Проекты
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
          Избранные работы и кейсы
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group card-modern border border-gray-200 dark:border-gray-800 rounded-lg p-5 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-[0_4px_20px_rgba(0,0,0,0.11)] dark:hover:shadow-[0_4px_20px_rgba(255,255,255,0.05)] hover:scale-[1.025] transition-all duration-300 ease-out bg-white dark:bg-gray-800 cursor-pointer"
              onClick={() => {
                if (project.link?.startsWith('/')) {
                  window.location.href = project.link;
                } else if (project.link) {
                  window.open(project.link, '_blank');
                }
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded font-medium">
                    {getCategoryLabel(project.category)}
                  </span>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:scale-[1.05] transition-all duration-300 ease-out"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-gray-100 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 px-2 py-1 rounded hover:shadow-[0_2px_8px_rgba(0,0,0,0.11)] dark:hover:shadow-[0_2px_8px_rgba(255,255,255,0.11)] hover:scale-[1.025] transition-all duration-200 ease-out"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

