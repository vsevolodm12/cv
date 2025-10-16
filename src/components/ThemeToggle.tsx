import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white md:hover:bg-gray-200 md:hover:dark:bg-gray-700 transition-all duration-200 md:duration-300 ease-out md:hover:scale-[1.05] active:scale-[0.95] active:bg-gray-200 active:dark:bg-gray-700 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 transition-transform duration-300 ease-out" />
      ) : (
        <Sun className="w-5 h-5 transition-transform duration-300 ease-out rotate-180" />
      )}
    </button>
  );
};

