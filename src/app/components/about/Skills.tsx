import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiCplusplus,  SiMongodb, SiNextdotjs, SiExpress, SiTailwindcss, SiGit, SiGithub } from 'react-icons/si';
import { AnimatedPinDemo } from '../AnimatedPinDemo';

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
  {
    title: 'Operating Systems',
    description:
      'Gain a deep understanding of operating system concepts, including process management, memory management, and file systems.',
    href: '/courses/operating-systems',
  },
  {
    title: 'Python Programming',
    description:
      'Learn the fundamentals of Python programming, including data structures, control flow, and object-oriented programming.',
    href: '/courses/python-programming',
  },
  {
    title: 'Computer Networks',
    description:
      'Explore the principles of computer networking, including protocols, topologies, and network security.',
    href: '/courses/computer-networks',
  },
  {
    title: 'Object-Oriented Programming',
    description:
      'Dive into the world of object-oriented programming, learning concepts like encapsulation, inheritance, and polymorphism.',
    href: '/courses/object-oriented-programming',
  },
  {
    title: 'C/C++ Programming',
    description:
      'Master the C and C++ programming languages, developing skills in low-level programming and system design.',
    href: '/courses/c-cpp-programming',
  },
  {
    title: 'Embedded Systems & IoT',
    description:
      'Discover the world of embedded systems and the Internet of Things, learning to design and develop IoT applications.',
    href: '/courses/embedded-systems-iot',
  },
];

const SkillsSection = () => {
  return (
    <div className="__className_1deade bg-black text-white py-20">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <AnimatedPinDemo
              key={index}
              title={course.title}
              description={course.description}
              href={course.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
