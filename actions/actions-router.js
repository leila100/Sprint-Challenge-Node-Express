const express = require("express")
const actionsDB = require("./actionModel")
const projectsDB = require("../projects/projectModel")

const router = express.Router()

router.use(express.json())

router.get("/", async (req, res) => {
  try {
    const actions = await actionsDB.get()
    res.status(200).json(actions)
  } catch {
    res
      .status(500)
      .json({ error: "The actions information could not be retrieved." })
  }
})

router.get("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const action = await actionsDB.get(id) // Throws an error if no action
    res.status(200).json(action)
  } catch {
    res
      .status(500)
      .json({ error: "The action information could not be retrieved." })
  }
})

router.post("/", async (req, res) => {
  const action = req.body
  if (!action.project_id || !action.description || !action.notes) {
    res.status(400).json({
      errorMessage:
        "Please provide action's project_id, description, and notes."
    })
  } else {
    try {
      await projectsDB.get(action.project_id) // Check that project with project_id exist
      if (action.description.length > 128) {
        res.status(400).json({
          errorMessage:
            "Please provide a description with no more than 128 characters long"
        })
      } else {
        const newAction = await actionsDB.insert(action)
        res.status(201).json(newAction)
      }
    } catch {
      res.status(500).json({
        error: "There was an error while saving the action to the database"
      })
    }
  }
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params
  try {
    await actionsDB.get(id) //Checking to be sure the action exist. If it doesn't, the database throws an error
    await actionsDB.remove(id)
    res.status(200).json({ message: "Action deleted" })
  } catch {
    res.status(500).json({ error: "The action could not be removed" })
  }
})

router.put("/:id", async (req, res) => {
  const { id } = req.params
  try {
    await actionsDB.get(id) // Check the action with id exist
    const actionInfo = req.body
    if (
      !actionInfo.project_id ||
      !actionInfo.description ||
      !actionInfo.notes
    ) {
      res.status(400).json({
        errorMessage:
          "Please provide action's project_id, description, and notes."
      })
    } else {
      await projectsDB.get(actionInfo.project_id) // Check that project with project_id exist
      const updatedAction = await actionsDB.update(id, actionInfo)
      if (updatedAction) {
        res.status(200).json(updatedAction)
      } else {
        res.status(404).json({
          message: "The action with the specified ID does not exist."
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
