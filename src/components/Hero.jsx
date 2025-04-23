import React from 'react';
import MotionWrapper from './MotionWrapper';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
        Hi, I'm Ashutosh Jare 👋
      </h2>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mb-6">
        Full Stack Developer — React, Angular, Django, DRF, Flask, FastAPI, Firebase & more.
      </p>

      <div className="flex gap-4">
        <a
          href="#contact"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Let's Connect
        </a>
        <a
          href="/resume.pdf"
          download
          className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default MotionWrapper(Hero);
