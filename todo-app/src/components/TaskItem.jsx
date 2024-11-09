import React from "react";

const TaskItem = ({ task, onComplete, onEdit, onDelete }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div>
        <h3>{task.name}</h3>
        <p>{task.description}</p>
      </div>
      <div>
        <button onClick={() => onComplete(task.id)}>{task.completed ? "Undo" : "Complete"}</button>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
