import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./styles/styles.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addOrUpdateTask = (task) => {
    if (currentTask) {
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
      setCurrentTask(null);
    } else {
      setTasks([...tasks, task]);
    }
  };

  const completeTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const editTask = (task) => setCurrentTask(task);

  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  return (
    <div className="app-container">
      <h1>To-Do List by Ighalo Emmanuel</h1>
      <TaskForm onSubmit={addOrUpdateTask} task={currentTask} />
      <TaskList tasks={tasks} onComplete={completeTask} onEdit={editTask} onDelete={deleteTask} />
    </div>
  );
};

export default App;
