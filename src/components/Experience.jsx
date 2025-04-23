import React from 'react';
import MotionWrapper from './MotionWrapper';

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Full Stack Developer @ Verificient Technologies</h3>
            <p className="text-sm text-gray-500">Pune | July 2022 – Present</p>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Built scalable full stack apps with Angular, React, Django, DRF, and Flask.</li>
              <li>Created dynamic dashboards for CSMs.</li>
              <li>Mentored juniors and resolved escalations in agile environments.</li>
              <li>Integrated Google Cloud services (Firestore, Firebase, Storage).</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotionWrapper(Experience);
