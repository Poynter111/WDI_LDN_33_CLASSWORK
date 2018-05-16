import React from 'react';

const Task = ({completed, task, toggleCompleted}) => {
  return <li
    className={completed ? 'completed' : ''}
    onClick={toggleCompleted}
  >
    {task}
  </li>;
};

export default Task;
