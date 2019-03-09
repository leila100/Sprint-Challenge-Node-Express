import React from "react"

const ProjectsList = props => {
  return (
    <div>
      {props.projects.map(project => (
        <div key={project.id}>
          <div>Name: {project.name}</div>
          <div>Description: {project.description}</div>
          <div>Completed: {project.completed}</div>
        </div>
      ))}
    </div>
  )
}

export default ProjectsList
