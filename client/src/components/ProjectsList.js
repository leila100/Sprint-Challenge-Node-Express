import React from "react"
import { Link } from "react-router-dom"

import { ProjectsWrapper, ProjectWrapper, Info } from "../styles/projectStyles"

const ProjectsList = props => {
  return (
    <ProjectsWrapper>
      {props.projects.map(project => (
        <ProjectWrapper key={project.id}>
          <Info>
            <Link to={`/projects/${project.id}`}>
              <span>Name:</span> {project.name}
            </Link>
            <p>Description: {project.description}</p>
          </Info>
        </ProjectWrapper>
      ))}
    </ProjectsWrapper>
  )
}

export default ProjectsList
