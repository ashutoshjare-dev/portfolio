import React from 'react';
import MotionWrapper from './MotionWrapper';

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I'm Ashutosh Jare, a Full Stack Developer based in Pune with a BE in Computer Science from DYPIEMR, Akurdi...
        </p>
      </div>
    </section>
  );
};

export default MotionWrapper(About);
