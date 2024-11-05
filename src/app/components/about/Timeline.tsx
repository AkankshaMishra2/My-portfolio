import React from 'react';
import BlurFade from "./../ui/blur-fade";

const achievements = [
  {
    image: 'https://picsum.photos/seed/1/800/600',
    title: 'Reached 1000 Users',
    tagline: 'A major milestone achieved!'
  },
  {
    image: 'https://picsum.photos/seed/2/600/800',
    title: 'Received 5-Star Reviews',
    tagline: 'Delighting customers with quality'
  },
  {
    image: 'https://picsum.photos/seed/3/800/600',
    title: 'Featured on Tech Blog',
    tagline: 'Recognized for innovation'
  },
  {
    image: 'https://picsum.photos/seed/4/600/800',
    title: 'Awarded Industry Grant',
    tagline: 'Investing in the future'
  },
  {
    image: 'https://picsum.photos/seed/5/800/600',
    title: 'Doubled Revenue YoY',
    tagline: 'Sustainable growth achieved'
  },
  {
    image: 'https://picsum.photos/seed/6/600/800',
    title: '100% Customer Satisfaction',
    tagline: 'Exceeding expectations'
  },
  {
    image: 'https://picsum.photos/seed/7/800/600',
    title: 'Launched New Product Line',
    tagline: 'Expanding our offerings'
  },
  {
    image: 'https://picsum.photos/seed/8/600/800',
    title: 'Recognized as Best Startup',
    tagline: 'Industry accolades earned'
  },
  {
    image: 'https://picsum.photos/seed/9/800/600',
    title: 'Reached 10k Instagram Followers',
    tagline: 'Building a strong community'
  }
];

const AchievementGrid: React.FC = () => {
  return (
    <section id="achievements" className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8">Our Remarkable Achievements</h2>
      <div className="w-[50%] columns-2 gap-4 sm:columns-3">
        {achievements.map((achievement, idx) => (
          <BlurFade key={achievement.image} delay={0.25 + idx * 0.05} inView>
            <div className="mb-4 rounded-lg overflow-hidden">
              <img
                className="size-full object-cover"
                src={achievement.image}
                alt={achievement.title}
              />
              <div className="p-4 bg-gray-900 text-white">
                <h3 className="text-lg font-medium">{achievement.title}</h3>
                <p className="text-sm text-gray-400">{achievement.tagline}</p>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default AchievementGrid;