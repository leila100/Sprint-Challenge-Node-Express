const express = require("express")
const cors = require("cors")
const logger = require("morgan")
const helmet = require("helmet")

const projectsRouter = require("./projects/project-router")

const server = express()

server.use(helmet())
server.use(express.json())
server.use(logger("dev"))
server.use(cors())

server.use("/api/projects", projectsRouter)

server.get("/", (req, res) => {
  res.status(200).json("Welcome to Projects/Actions API App")
})

module.exports = server
