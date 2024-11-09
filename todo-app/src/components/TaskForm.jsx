import React, { useState, useEffect } from "react";

const TaskForm = ({ onSubmit, task }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (task) {
      setName(task.name);
      setDescription(task.description);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && description.trim()) {
      onSubmit({ name, description, id: task ? task.id : Date.now(), completed: task ? task.completed : false });
      setName("");
      setDescription("");
    } else {
      alert("Both fields are required!");
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Task Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <button type="submit">{task ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
