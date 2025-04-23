import React from 'react';
import MotionWrapper from './MotionWrapper';

const Awards = () => {
  return (
    <section id="awards" className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Awards</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          🏆 <strong>Employee Recognition Award</strong> — For outstanding contributions to Full Stack Development at Verificient Technologies.
        </p>
      </div>
    </section>
  );
};

export default MotionWrapper(Awards);
