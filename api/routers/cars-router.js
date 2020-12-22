const express = require("express")
const Cars = require("../models/cars-model")
const {verifyCarsID, verifyCarsData} = require("../middleware/cars-middleware")

const router = express.Router()

router.get("/cars", async (request, response) => {
    try {
        let cars = await Cars.get()

        return response.status(200).json(cars)
    } catch (error) {
        return response.status(500).json({"message": "error cannot get cars"})
    }
})

router.get("/cars/:id", verifyCarsID(), async (request, response) => {
    return response.status(200).json(request.carData)
})

router.post("/cars", verifyCarsData(), async (request, response) => {
    return response.status(200).json({"message": "hello world"})
})

router.put("/cars/:id", verifyCarsData(), verifyCarsID(), async (request, response) => {
    return response.status(200).json({"message": "hello world"})
})

router.delete("/cars/id", verifyCarsID(), async (request, response) => {
    return response.status(200).json({"message": "hello world"})
})

module.exports = router

