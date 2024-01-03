// src/App.js
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Task from './Task';

function App() {
  const [tasks, setTasks] = useState([]);
  const [history, setHistory] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setHistory([...history, tasks]);
  };

  const markCompleted = (description) => {
    const updatedTasks = tasks.map(task => {
      if (task.description === description) {
        task.markAsCompleted();
      }
      return task;
    });
    setTasks(updatedTasks);
    setHistory([...history, tasks]);
  };

  const deleteTask = (description) => {
    const filteredTasks = tasks.filter(task => task.description !== description);
    setTasks(filteredTasks);
    setHistory([...history, tasks]);
  };

  const undo = () => {
    if (history.length > 0) {
      const prevState = history.pop();
      setTasks(prevState);
    }
  };

  return (
    <div className="App">
      <h1>ToDo List Manager</h1>
      <TaskForm onAddTask={addTask} />
      <button onClick={undo}>Undo</button>
      <button onClick={() => console.log(tasks)}>Show Tasks</button>
      <TaskList tasks={tasks} onMarkCompleted={markCompleted} onDelete={deleteTask} />
    </div>
  );
}

export default App;
