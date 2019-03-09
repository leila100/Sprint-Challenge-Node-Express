import React from "react"
import axios from "axios"

import { ProjectsWrapper, InfoWrapper, Info } from "../styles/projectStyles"

class ProjectInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      project: {}
    }
  }

  componentDidMount = () => {
    const id = this.props.match.params.id
    const endpoint = `http://localhost:8080/api/projects/${id}`
    axios
      .get(endpoint)
      .then(response => {
        this.setState({ project: response.data })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <ProjectsWrapper>
        <InfoWrapper>
          <Info>
            <span>Name: {this.state.project.name}</span>
            <div>
              <span>Description:</span>
              <p> {this.state.project.description}</p>
            </div>
            <br />
            <div>
              <span>Notes:</span>
            </div>
            <ul>
              {this.state.project.actions &&
                this.state.project.actions.map(action => (
                  <li key={action.id}>
                    <div>{action.description}</div>
                    <div>{action.notes}</div>
                  </li>
                ))}
            </ul>
          </Info>
        </InfoWrapper>
      </ProjectsWrapper>
    )
  }
}

export default ProjectInfo
