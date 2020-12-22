const express = require("express")

const cars = require("../api/routers/cars-router")

const app = express()

app.use(express.json())

app.use("/api", cars)

module.exports = app
