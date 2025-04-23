import React from 'react';
import MotionWrapper from './MotionWrapper';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Want to collaborate or have a project in mind? Reach out to me:
        </p>
        <div className="space-y-2">
          <p>📧 <a href="mailto:ashutoshjare.dev@gmail.com" className="text-indigo-500">ashutoshjare.dev@gmail.com</a></p>
          <p>📍 Pune, Maharashtra, India</p>
          <p>📞 +91 75591 71750</p>
          <p>🔗 <a href="https://www.linkedin.com/in/ashutoshjare" target="_blank" rel="noreferrer" className="text-indigo-500">LinkedIn</a></p>
        </div>
      </div>
    </section>
  );
};

export default MotionWrapper(Contact);
