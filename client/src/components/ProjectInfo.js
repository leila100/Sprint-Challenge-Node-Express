import React from "react"
import axios from "axios"

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
      <div>
        <div>Name: {this.state.project.name}</div>
        <div>Description: {this.state.project.description}</div>
        <ul>
          {this.state.project.actions &&
            this.state.project.actions.map(action => (
              <li key={action.id}>
                <div>{action.description}</div>
                <div>{action.notes}</div>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}

export default ProjectInfo
