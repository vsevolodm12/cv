import { Send, BookOpen, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useState } from 'react';

export const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Header Navigation */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Всеволод Марченко</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="/#tech-stack" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-[1.025] transition-all duration-300 ease-out">Стек</a>
              <a href="/#projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-[1.025] transition-all duration-300 ease-out">Проекты</a>
              <a href="/#experience" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-[1.025] transition-all duration-300 ease-out">Навыки</a>
              <a 
                href="https://t.me/vsevolodmarchenko" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-modern px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-[1.025] hover:shadow-[0_2px_12px_rgba(0,0,0,0.11)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.11)] transition-all duration-300 ease-out"
              >
                Связаться
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-800">
              <nav className="flex flex-col space-y-3 pt-4">
                <a 
                  href="/#tech-stack" 
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Стек
                </a>
                <a 
                  href="/#projects" 
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Проекты
                </a>
                <a 
                  href="/#experience" 
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Навыки
                </a>
                <a 
                  href="https://t.me/vsevolodmarchenko" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-modern px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 ease-out mt-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Связаться
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 px-4 sm:px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Открыт к предложениям
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight leading-tight">
              Fullstack разработчик
            </h1>
          
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Автоматизирую бизнес-процессы с помощью AI-агентов и создаю системы, 
              которые заменяют сотрудников и работают 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="https://t.me/vsevolodmarchenko" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-modern inline-flex items-center justify-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-[1.025] hover:shadow-[0_4px_20px_rgba(0,0,0,0.11)] dark:hover:shadow-[0_4px_20px_rgba(255,255,255,0.11)] transition-all duration-300 ease-out text-sm font-medium"
              >
                <Send className="w-4 h-4" />
                Связаться
              </a>
              <a 
                href="/#projects"
                className="btn-modern inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-[1.025] hover:shadow-[0_2px_12px_rgba(0,0,0,0.11)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.11)] transition-all duration-300 ease-out text-sm font-medium"
              >
                <BookOpen className="w-4 h-4" />
                Проекты
              </a>
            </div>

            {/* Quick Info */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900 dark:text-white">Возраст:</span>
                <span>20 лет</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900 dark:text-white">Локация:</span>
                <span>Москва</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900 dark:text-white">Опыт:</span>
                <span>2+ года</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

