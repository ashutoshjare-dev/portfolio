import React from 'react';
import MotionWrapper from './MotionWrapper';

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Project 1 */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">CSM Dashboard</h3>
            <p className="text-gray-700 dark:text-gray-300">
              A custom dashboard for Customer Success Managers (CSMs) using Angular and Django to enhance usability and efficiency.
            </p>
            <span className="text-sm text-indigo-500 mt-2 block">Angular, Django, DRF</span>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">AI Support Chatbot</h3>
            <p className="text-gray-700 dark:text-gray-300">
              An intelligent chatbot built with React and FastAPI, integrated with OpenAI APIs to support customer queries.
            </p>
            <span className="text-sm text-indigo-500 mt-2 block">React, FastAPI, OpenAI</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotionWrapper(Projects);
