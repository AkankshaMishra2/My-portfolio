import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaJava, FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiCplusplus, SiLinux, SiMongodb, SiNextdotjs, SiExpress, SiTailwindcss, SiGit, SiGithub } from 'react-icons/si';

const skills = [
  { name: 'C', icon: <SiCplusplus className="w-12 h-12 text-blue-500" /> },
  { name: 'C++', icon: <SiCplusplus className="w-12 h-12 text-blue-500" /> },
  { name: 'Python', icon: <FaPython className="w-12 h-12 text-blue-500" /> },
  { name: 'HTML', icon: <FaHtml5 className="w-12 h-12 text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="w-12 h-12 text-blue-600" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="w-12 h-12 text-yellow-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="w-12 h-12 text-green-500" /> },
  { name: 'Express', icon: <SiExpress className="w-12 h-12 text-gray-500" /> },
  { name: 'React', icon: <FaReact className="w-12 h-12 text-blue-400" /> },
  { name: 'MongoDB', icon: <SiMongodb className="w-12 h-12 text-green-500" /> },
  { name: 'SQL', icon: <FaDatabase className="w-12 h-12 text-yellow-500" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="w-12 h-12 text-black" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-12 h-12 text-blue-400" /> },
  { name: 'Git', icon: <SiGit className="w-12 h-12 text-orange-500" /> },
  { name: 'GitHub', icon: <SiGithub className="w-12 h-12 text-black" /> },
];

const courses = [
  { title: 'Operating Systems', description: 'DOne OS' },
  { title: 'Python Programming', description: 'Python' },
  { title: 'Computer Networks', description: 'CN' },
  { title: 'Object-Oriented Programming', description: 'OOPs' },
  { title: 'C/C++ Programming', description: 'C/C++' },
  { title: 'Embedded Systems & IoT', description: 'ES&IOT' },
  { title: 'Database Management Systems', description: 'DBMS' },
];

const Skills = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">TechStack</h2>
        <div className="relative overflow-hidden mb-16">
          <div className="flex animate-marquee space-x-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center min-w-[100px]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {skill.icon}
                <span className="mt-2 text-lg">{skill.name}</span>
              </motion.div>
            ))}
            {skills.map((skill, index) => (
              <motion.div
                key={index + skills.length}
                className="flex flex-col items-center min-w-[100px]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {skill.icon}
                <span className="mt-2 text-lg">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-8">Courses Done</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-400">{course.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export {Skills as default};