import React, { useState } from 'react';
import ProjectList from './ProjectList';
import NewProjectForm from './NewProjectForm';
import './styles.css'; // Import styles

function App() {
  const [projects, setProjects] = useState([]);

  const addProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Project Management Tool</h1>
      </div>
      <div className="project-form">
        <NewProjectForm addProject={addProject} />
      </div>
      <div className="project-list">
        <ProjectList projects={projects} />
      </div>
    </div>
  );
}

export default App;
