import React, { useState } from 'react';

function NewTaskForm({ addTask }) {
  const [taskName, setTaskName] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === '' || deadline.trim() === '') return;
    addTask({ name: taskName, deadline });
    setTaskName('');
    setDeadline('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
}

export default NewTaskForm;
