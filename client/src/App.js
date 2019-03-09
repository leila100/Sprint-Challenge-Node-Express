import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import axios from "axios"

import ProjectsList from "./components/ProjectsList"
import ProjectInfo from "./components/ProjectInfo"
import Navbar from "./components/Navbar"

class App extends Component {
  state = {
    projects: []
  }

  componentDidMount = () => {
    this.fetchProjects()
  }

  fetchProjects = () => {
    const endpoint = "http://localhost:8080/api/projects"
    axios
      .get(endpoint)
      .then(response => {
        this.setState({ projects: response.data })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <ProjectsList {...props} projects={this.state.projects} />
            )}
          />
          <Route path="/projects/:id" component={ProjectInfo} />
        </Switch>
      </div>
    )
  }
}

export default App
