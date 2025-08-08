import React, { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration: number;
  start?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration, start = 0 }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(start + (end - start) * easeOutQuart));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return <span>{count}</span>;
};

export default AnimatedCounter;