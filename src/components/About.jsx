import React from 'react';
import { motion } from 'framer-motion';

function About() {
  const skills = [
    "UI Design",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "C#",
    ".Net",
    "MySql"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              I'm a passionate UI Designer and Developer currently pursuing my studies
              at Phinma St. Jude College Manila. I focus on creating intuitive and
              visually appealing user interfaces while continuously improving my
              programming skills.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About