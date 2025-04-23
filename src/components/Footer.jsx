import React from "react";
import MotionWrapper from './MotionWrapper';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-6 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-5xl mx-auto px-6 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Ashutosh Jare. All rights reserved.
        </p>
        <div className="flex justify-center mt-2 space-x-4">
          <a
            href="mailto:ashutoshjare.dev@gmail.com"
            className="hover:text-indigo-500 transition"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/ashutoshjare"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-500 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ashutoshjare"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-500 transition"
          >
            GitHub
          </a>
          <a
            href="/resume.pdf"
            download
            className="hover:text-indigo-500 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default MotionWrapper(Footer);
