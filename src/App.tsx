import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Cases } from './components/Cases';
import { TechStack } from './components/TechStack';
import { Skills } from './components/Skills';
import { WindowsAutomation } from './pages/WindowsAutomation';

function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Hero />
      <TechStack />
      <Cases />
      <Skills />
      
      <footer className="py-12 sm:py-16 px-4 sm:px-6 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-base text-gray-600 dark:text-gray-400">
              © 2025 Всеволод Марченко
            </p>
            <div className="flex gap-8 text-base">
              <a href="https://t.me/vsevolodmarchenko" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-[1.025] transition-all duration-300 ease-out font-medium">
                Telegram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/windows-automation" element={<WindowsAutomation />} />
      </Routes>
    </Router>
  );
}

export default App;

