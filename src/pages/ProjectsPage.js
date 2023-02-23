// ./src/pages/ProjectsPage.js

import { useState, useEffect } from "react";
// import projectsData from "./../projects-data.json";  // <== REMOVE

// src/pages/ProjectsPage.js
// ... previous imports stay unchanged

import { Link } from "react-router-dom";     // <== IMPORT

function ProjectsPage(props) {
  const [projects, setProjects] = useState([]);

  // This effect will run only once on the initial render.
  // To do it we set the dependency array empty [].
  useEffect(() => {
    setProjects(props.projects);
  }, [props.projects]);

  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project) => {
        return (
          <div key={project._id} className="project">
            <h3>
              
              {/*   ADD   */}
              <Link to={`/projects/${project._id}`}> 
                {project.name} 
              </Link>
              
            </h3>
            <p>{project.technologies}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsPage;

