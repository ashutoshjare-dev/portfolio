import React from 'react';
import MotionWrapper from './MotionWrapper';

const Skills = () => {
  const frontend = ['React', 'Angular', 'AngularJS', 'HTML5', 'CSS3', 'TailwindCSS', 'TypeScript', 'JavaScript'];
  const backend = ['Django', 'DRF', 'Flask', 'FastAPI', 'Python'];
  const cloud = ['Google Cloud (Firestore, Firebase, Storage Buckets)'];
  const dbs = ['MySQL', 'PostgreSQL', 'Redis'];
  const tools = ['Docker', 'Git', 'Agile', 'Scrum'];

  const renderSkills = (title, items) => (
    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-2 text-indigo-600">{title}</h4>
      <div className="flex flex-wrap gap-3 text-gray-700 dark:text-gray-300">
        {items.map((item, index) => (
          <span key={index} className="bg-indigo-100 dark:bg-indigo-800 px-3 py-1 rounded-full text-sm">
            {item}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        {renderSkills('Frontend', frontend)}
        {renderSkills('Backend', backend)}
        {renderSkills('Cloud Services', cloud)}
        {renderSkills('Databases', dbs)}
        {renderSkills('DevOps & Tools', tools)}
      </div>
    </section>
  );
};

export default MotionWrapper(Skills);
