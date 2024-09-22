import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Todo List</h2>
      <ul className="list-disc">
        {todos.map((todo, index) => (
          <li key={index} className="text-lg">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
