import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center space-y-4 bg-gray-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold">Count: {count}</h2>
      <div className="space-x-4">
        <button 
          onClick={() => setCount(count + 1)} 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Increment + 
        </button>
        <button 
          onClick={() => setCount(count - 1)} 
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Decrement 
        </button>
      </div>
    </div>
  );
};

export default Counter;
