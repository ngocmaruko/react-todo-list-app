import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([
  { description: 'Learn JavaScript', date: '2024-2-23' },
  { description: 'Edit Resume', date: '2024-2-24' }
]);
  const [newTask, setNewTask] = useState('');
  const [newDate, setNewDate] = useState('');

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleDateChange(event) {
    setNewDate(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== '' && newDate !== '') {
      setTasks(t => [...t, { description: newTask, date: newDate }]);
      setNewTask('');
      setNewDate('');
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => index !== i);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    const updatedTasks = [...tasks];

    if (index > 0) {
      [updatedTasks[index], updatedTasks[index - 1]] = 
      [updatedTasks[index - 1], updatedTasks[index]];
    }
    setTasks(updatedTasks);
  }

  function moveTaskDown(index) {
    const updatedTasks = [...tasks];

    if (index < tasks.length - 1) {
      [updatedTasks[index], updatedTasks[index + 1]] = 
      [updatedTasks[index + 1], updatedTasks[index]];
    }
    setTasks(updatedTasks);
  }

  return (
    <div className="to-do-list">
      <h1>Todo List</h1>
      <div className="input-container">
        <input 
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <input 
          type="date"
          value={newDate}
          onChange={handleDateChange}
        />
        <button
          className="add-button"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => 
          <li key={index}>
            <span className="text">{task.description} - {task.date}</span>
            <button 
              className="delete-button"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
            <button
              className="move-button"
              onClick={() => moveTaskUp(index)}
            >
              Up
            </button>
            <button
              className="move-button"
              onClick={() => moveTaskDown(index)}
            >
              Down
            </button>
          </li>
        )}
      </ol>
    </div>
  );
}

export default TodoList;
