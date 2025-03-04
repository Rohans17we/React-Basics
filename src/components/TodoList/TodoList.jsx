import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaSave } from "react-icons/fa";
import "./TodoList.css"; 

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editTaskId, setEditTaskId] = useState(null); // Track the task being edited
  const [editText, setEditText] = useState(""); // Store the updated text

  // Add Task
  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  // Toggle Task Completion
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Enable Editing
  const startEditing = (id, text) => {
    setEditTaskId(id);
    setEditText(text);
  };

  // Save Edited Task
  const saveEdit = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: editText } : task
      )
    );
    setEditTaskId(null); // Exit edit mode
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">Todo List App</h2>

      <div className="todo-input">
        <input
          type="text"
          placeholder="ENTER TODO"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="add-btn" onClick={addTask}>
          <FaPlus />
        </button>
      </div>

      
      <ul className="todo-list">
        {tasks.map((task) => (
          <li key={task.id} className={`todo-item ${task.completed ? "completed" : ""}`}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />

            {/* Edit Mode */}
            {editTaskId === task.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && saveEdit(task.id)} // Save on Enter
                
              />
            ) : (
              <span className="task-text">{task.text}</span>
            )}

            
            {editTaskId === task.id ? (
              <button className="save-btn" onClick={() => saveEdit(task.id)}>
                <FaSave />
              </button>
            ) : (
              <button className="edit-btn" onClick={() => startEditing(task.id, task.text)}>
                <FaEdit />
              </button>
            )}

            
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;