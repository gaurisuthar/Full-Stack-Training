import React, { useState, useEffect } from 'react';

const Timer = ({ start }) => {
  const [time, setTime] = useState(start);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime+1); 
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <h2 className="text-2xl font-bold">Current Time: {time} seconds</h2>
    </div>
  );
};

export default Timer;
