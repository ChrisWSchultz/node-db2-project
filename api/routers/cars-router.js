const express = require("express")
const Cars = require("../models/cars-model")
const {verifyCarsID, verifyCarsData} = require("../middleware/cars-middleware")

const router = express.Router()

router.get("/cars", async (request, response) => {
    return request.status(200).json({"message": "hello world"})
})

router.get("/cars/:id", async (request, response) => {
    return request.status(200).json({"message": "hello world"})
})

router.post("/cars", async (request, response) => {
    return request.status(200).json({"message": "hello world"})
})

router.put("/cars/:id", async (request, response) => {
    return request.status(200).json({"message": "hello world"})
})

router.delete("/cars/id", async (request, response) => {
    return request.status(200).json({"message": "hello world"})
})

module.exports = router

