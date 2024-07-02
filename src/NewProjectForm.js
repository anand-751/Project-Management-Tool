import React, { useState } from 'react';
import NewTaskForm from './NewTaskForm';

function NewProjectForm({ addProject }) {
  const [projectName, setProjectName] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectName.trim() === '') return;
    addProject({ name: projectName, tasks });
    setProjectName('');
    setTasks([]);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Project Name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <NewTaskForm addTask={addTask} />
      <button type="submit">Create Project</button>
    </form>
  );
}

export default NewProjectForm;
