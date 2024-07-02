import React from 'react';
import TaskList from './TaskList';

function ProjectItem({ project, updateTask, deleteTask }) {
  return (
    <div>
      <h2>{project.name}</h2>
      <TaskList tasks={project.tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
}

export default ProjectItem;
