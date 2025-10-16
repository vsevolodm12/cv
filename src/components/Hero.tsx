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
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Layout: Theme Toggle - Title - Menu */}
            <div className="flex md:hidden items-center w-full">
              <ThemeToggle />
              <span className="text-base font-semibold text-gray-900 dark:text-white ml-2">Всеволод Марченко</span>
              <div className="flex-1"></div>
              <button
                onClick={toggleMobileMenu}
                className="p-3 text-gray-600 dark:text-gray-400 active:text-gray-900 active:dark:text-white active:bg-gray-100 active:dark:bg-gray-800 active:scale-[0.95] rounded-lg transition-all duration-150 ease-out touch-manipulation"
                aria-label="Открыть меню"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex items-center justify-between w-full">
              <div className="flex items-center">
                <ThemeToggle />
                <span className="text-lg font-semibold text-gray-900 dark:text-white ml-2">Всеволод Марченко</span>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="flex items-center gap-6">
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
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-800">
              <nav className="flex flex-col space-y-2 pt-4">
                <a 
                  href="/#tech-stack" 
                  className="text-gray-600 dark:text-gray-400 active:text-gray-900 active:dark:text-white py-3 px-3 rounded-lg active:bg-gray-50 active:dark:bg-gray-800 active:scale-[0.98] transition-all duration-150 ease-out touch-manipulation text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Стек
                </a>
                <a 
                  href="/#projects" 
                  className="text-gray-600 dark:text-gray-400 active:text-gray-900 active:dark:text-white py-3 px-3 rounded-lg active:bg-gray-50 active:dark:bg-gray-800 active:scale-[0.98] transition-all duration-150 ease-out touch-manipulation text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Проекты
                </a>
                <a 
                  href="/#experience" 
                  className="text-gray-600 dark:text-gray-400 active:text-gray-900 active:dark:text-white py-3 px-3 rounded-lg active:bg-gray-50 active:dark:bg-gray-800 active:scale-[0.98] transition-all duration-150 ease-out touch-manipulation text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Навыки
                </a>
                <a 
                  href="https://t.me/vsevolodmarchenko" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-modern px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-base font-medium rounded-lg active:scale-[0.95] transition-all duration-150 ease-out mt-2 touch-manipulation"
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
      <section className="py-12 sm:py-16 px-6 sm:px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300 mb-6 sm:mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Открыт к предложениям
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white tracking-tight leading-tight">
              Fullstack разработчик
            </h1>
          
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 leading-relaxed max-w-3xl">
              Автоматизирую бизнес-процессы с помощью AI-агентов и создаю системы, 
              которые заменяют сотрудников и работают 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-10">
              <a 
                href="https://t.me/vsevolodmarchenko" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-modern inline-flex items-center justify-center gap-3 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl active:scale-[0.95] md:hover:scale-[1.025] active:bg-gray-800 active:dark:bg-gray-200 md:hover:bg-gray-800 md:hover:dark:bg-gray-200 md:hover:shadow-[0_4px_20px_rgba(0,0,0,0.11)] md:hover:dark:shadow-[0_4px_20px_rgba(255,255,255,0.11)] transition-all duration-150 md:duration-300 ease-out text-base font-medium touch-manipulation"
              >
                <Send className="w-5 h-5" />
                Связаться
              </a>
              <a 
                href="/#projects"
                className="btn-modern inline-flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl active:scale-[0.95] md:hover:scale-[1.025] active:bg-gray-50 active:dark:bg-gray-700 md:hover:bg-gray-50 md:hover:dark:bg-gray-700 md:hover:shadow-[0_2px_12px_rgba(0,0,0,0.11)] md:hover:dark:shadow-[0_2px_12px_rgba(255,255,255,0.11)] transition-all duration-150 md:duration-300 ease-out text-base font-medium touch-manipulation"
              >
                <BookOpen className="w-5 h-5" />
                Проекты
              </a>
            </div>

            {/* Quick Info */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 sm:gap-8 text-base text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-gray-900 dark:text-white">Возраст:</span>
                <span>20 лет</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-gray-900 dark:text-white">Локация:</span>
                <span>Москва</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-gray-900 dark:text-white">Опыт:</span>
                <span>2+ года</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

