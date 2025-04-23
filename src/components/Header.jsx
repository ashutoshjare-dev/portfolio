import React from 'react';
import MotionWrapper from './MotionWrapper';

const Header = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
          Ashutosh Jare
        </h1>

        <nav className="space-x-6 hidden md:flex">
          <a href="#about" className="hover:text-indigo-500">About</a>
          <a href="#experience" className="hover:text-indigo-500">Experience</a>
          <a href="#projects" className="hover:text-indigo-500">Projects</a>
          <a href="#skills" className="hover:text-indigo-500">Skills</a>
          <a href="#contact" className="hover:text-indigo-500">Contact</a>
        </nav>

        <button
          onClick={toggleDarkMode}
          className="ml-4 text-lg bg-gray-200 dark:bg-gray-700 p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {darkMode ? '🌞' : '🌙'}
        </button>
      </div>
    </header>
  );
};

export default MotionWrapper(Header);
