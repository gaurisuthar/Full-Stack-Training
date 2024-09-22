import React, { useState } from 'react';

const LikeButton = ({ likeCount }) => {
  const [count, setCount] = useState(likeCount);

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
      >
        Like
      </button>
      <p className="text-xl font-semibold">{count} Likes</p>
    </div>
  );
};

export default LikeButton;
