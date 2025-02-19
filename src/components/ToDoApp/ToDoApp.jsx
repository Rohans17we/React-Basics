import { useState } from "react";
import "./ToDoApp.css";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskText, setEditingTaskText] = useState("");

  // Add Task
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask("");
    }
  };

  // Remove Task
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Enable Edit Mode
  const startEditing = (id, text) => {
    setEditingTaskId(id);
    setEditingTaskText(text);
  };

  // Save Edited Task
  const saveTask = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, text: editingTaskText } : task)));
    setEditingTaskId(null);
    setEditingTaskText("");
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">📝 To-Do List</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="todo-input"
        />
        <button onClick={addTask} className="add-btn">➕</button>
      </div>
      <ul className="todo-list">
        {tasks.map((task) => (
          <li key={task.id} className="todo-item">
            {editingTaskId === task.id ? (
              <input
                type="text"
                value={editingTaskText}
                onChange={(e) => setEditingTaskText(e.target.value)}
                className="edit-input"
              />
            ) : (
              <span>{task.text}</span>
            )}

            <div className="btn-container">
              {editingTaskId === task.id ? (
                <button onClick={() => saveTask(task.id)} className="save-btn">💾</button>
              ) : (
                <>
                  <button onClick={() => startEditing(task.id, task.text)} className="edit-btn">✏️</button>
                  <button onClick={() => removeTask(task.id)} className="remove-btn">❌</button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
