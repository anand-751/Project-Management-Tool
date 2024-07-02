import React from 'react';

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task.name} - Deadline: {task.deadline}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
