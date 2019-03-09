const express = require("express")
const router = express.Router()
const projectsDB = require("./projectModel")

router.use(express.json())

router.get("/", async (req, res) => {
  try {
    const projects = await projectsDB.get()
    res.status(200).json(projects)
  } catch {
    res
      .status(500)
      .json({ error: "The projects information could not be retrieved." })
  }
})

router.get("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const project = await projectsDB.get(id) // Throws an error if no project
    res.status(200).json(project)
  } catch {
    res
      .status(500)
      .json({ error: "The project information could not be retrieved." })
  }
})

router.post("/", async (req, res) => {
  const project = req.body
  if (!project.name || !project.description) {
    res
      .status(400)
      .json({ errorMessage: "Please provide project name and description." })
  } else {
    try {
      const newProject = await projectsDB.insert(project)
      res.status(201).json(newProject)
    } catch {
      res.status(500).json({
        error: "There was an error while saving the project to the database"
      })
    }
  }
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params
  try {
    await projectsDB.get(id) //Checking to be sure the project exist. If it doesn't, the database throws an error
    await projectsDB.remove(id)
    res.status(200).json({ message: "Project deleted" })
  } catch {
    res.status(500).json({ error: "The project could not be removed" })
  }
})

router.put("/:id", async (req, res) => {
  const { id } = req.params
  try {
    await projectsDB.get(id)
    const projectInfo = req.body
    if (!projectInfo.name || !projectInfo.description) {
      res.status(400).json({
        errorMessage: "Please provide project name and description."
      })
    } else {
      const updatedProject = await projectsDB.update(id, projectInfo)
      if (updatedProject) {
        res.status(200).json(updatedProject)
      } else {
        res.status(404).json({
          message: "The project with the specified ID does not exist."
        })
      }
    }
  } catch {
    res
      .status(500)
      .json({ error: "The project information could not be modified." })
  }
})

module.exports = router
