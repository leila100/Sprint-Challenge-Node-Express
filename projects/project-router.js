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

module.exports = router
