import React from 'react';
import BlurFade from "../ui/blur-fade";

const achievements = [
  {
    image: './images/grphackindia.jpg',
  },
  {
    image: './images/pic11.jpg',
  },
 
 {
    image: './images/pic1.jpg',
  },
 
  {
    image: './images/pic5.jpg',
  },
 
  {
    image: './images/pic2.jpg',
  },
  {
    image: './images/pic4.jpg',
  },

 {
  image: './images/pic3.jpg',
 },
 
 
  {
    image: './images/pic6.jpg',
  },
  
  {
    image: './images/pic7.jpg',
  },
 
  {
    image: './images/pic8.jpg',
  },
  {
    image: './images/pic9.jpg',
  },
 

];

const AchievementGrid: React.FC = () => {
  return (
    <section id="achievements" className="flex flex-col items-center">
      <h2 className="text-5xl font-bold my-10 text-white animate-bounce">SPOTLIGHT</h2>
      <div className="w-full h-1 bg-white mb-10"></div>
      <div className="w-[50%] columns-2 gap-4 sm:columns-3">
      {achievements.map((achievement, idx) => (
        <BlurFade key={achievement.image} delay={0.25 + idx * 0.05} inView>
        <div className="mb-4 rounded-lg overflow-hidden">
          <img
          className="size-full object-cover"
          src={achievement.image}
          alt={`Achievement ${idx + 1}`}
          />
        </div>
        </BlurFade>
      ))}
      </div>
    </section>
   
  );
};

export default AchievementGrid;
