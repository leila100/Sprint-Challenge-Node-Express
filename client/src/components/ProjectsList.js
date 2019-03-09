import React from "react"
import { Link } from "react-router-dom"

const ProjectsList = props => {
  return (
    <div>
      {props.projects.map(project => (
        <div key={project.id}>
          <Link to={`/projects/${project.id}`}>Name: {project.name}</Link>
          <div>Description: {project.description}</div>
        </div>
      ))}
    </div>
  )
}

export default ProjectsList
