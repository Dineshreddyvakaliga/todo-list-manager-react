// src/TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onMarkCompleted, onDelete }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index}>
          {task.toString()}
          {!task.completed && <button onClick={() => onMarkCompleted(task.description)}>Mark Completed</button>}
          <button onClick={() => onDelete(task.description)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
