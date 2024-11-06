import React from 'react';
import { FaTrophy, FaGraduationCap, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AchievementsTimeline: React.FC = () => {
  const achievements = [
    {
      title: 'Launched First Product',
      description: 'Introduced our flagship product to the market.',
      icon: <FaTrophy size={24} />,
      image: './images/pic1.jpg',
    },
    {
      title: 'Awarded Industry Grant',
      description: 'Received funding to expand our R&D efforts.',
      icon: <FaGraduationCap size={24} />,
      image: 'https://picsum.photos/seed/2/400/300',
    },
    {
        title: 'Awarded Industry Grant',
        description: 'Received funding to expand our R&D efforts.',
        icon: <FaGraduationCap size={24} />,
        image: 'https://picsum.photos/seed/2/400/300',
      },
  ];

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Achievements</h2>
        <div className="relative">
          <div className="absolute left-0 right-0 h-px bg-white hidden sm:block"></div>
          <div className="flex flex-col space-y-12 sm:space-y-0 sm:flex-row sm:space-x-8 justify-between items-center">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center text-center bg-gray-800 rounded-lg shadow-lg p-4 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-500 rounded-full mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{achievement.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{achievement.description}</p>
                <div className="relative overflow-hidden rounded-lg h-48 w-48">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="object-cover h-full w-full transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsTimeline;