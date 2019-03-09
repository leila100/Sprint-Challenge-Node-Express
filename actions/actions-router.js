const express = require("express")
const actionsDB = require("./actionModel")

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

module.exports = router
