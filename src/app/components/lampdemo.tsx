import React, { useState, useEffect } from 'react';

const LampDemo = () => {
  const [lightLevel, setLightLevel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLightLevel((prevLevel) => (prevLevel + 1) % 101);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-20 max-w-3xl mb-8">
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-300 to-yellow-500"
        style={{
          opacity: lightLevel / 100,
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
      <h2 className="relative z-10 text-4xl font-bold text-white">Achievements</h2>
    </div>
  );
};

export default LampDemo;