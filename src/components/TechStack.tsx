export const TechStack = () => {
  const categories = [
    {
      title: 'Frontend',
      technologies: [
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' }
      ]
    },
    {
      title: 'Backend',
      technologies: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
      ]
    },
    {
      title: 'Интеграции',
      technologies: [
        { name: 'n8n', icon: 'https://n8n.io/favicon.ico' },
        { name: 'ChatGPT API', icon: 'https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.59f2e898.png' },
        { name: 'Telegram API', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg' },
        { name: 'Telegram Mini Apps', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg' },
        { name: 'WhatsApp Business', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' },
        { name: '1С', icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRkZGNzAwIi8+CjxwYXRoIGQ9Ik0xMCAxMEgyMFYxNUgxMFYxMFoiIGZpbGw9IiNGRjAwMDAiLz4KPHBhdGggZD0iTTIyIDEwQzI4IDEwIDMwIDEyIDMwIDE4QzMwIDI0IDI4IDI2IDIyIDI2QzE2IDI2IDE0IDI0IDE0IDE4QzE0IDEyIDE2IDEwIDIyIDEwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkYwMDAwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8dGV4dCB4PSIzMiIgeT0iMTIiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4IiBmaWxsPSIjRkYwMDAwIj7igqw8L3RleHQ+Cjwvc3ZnPgo=' }
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-8 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
          Стек технологий
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
          Инструменты и технологии, с которыми я работаю
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className="group inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-black dark:text-white rounded-xl text-sm hover:shadow-[0_2px_12px_rgba(0,0,0,0.11)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.11)] hover:scale-[1.025] transition-all duration-300 ease-out transform-gpu"
                  >
                    <div className={`w-5 h-5 flex-shrink-0 overflow-hidden ${tech.name === 'JavaScript' || tech.name === 'TypeScript' ? 'rounded-md' : 'rounded-full'}`}>
                      <img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className="w-full h-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.05]"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                    <span className="font-medium text-black dark:text-white">{tech.name}</span>
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

