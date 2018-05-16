import React from 'react';

const TaskForm = ({ handleSubmit, handleChange, newTask }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Task"
        name="newTask"
        onChange={handleChange}
        value={newTask}
      />
      <button>+</button>
    </form>
  );
};

export default TaskForm;
