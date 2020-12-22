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
    try {
        let car = await Cars.insert(request.postData)

        return response.status(201).json(car)
    } catch (error) {
        return response.status(500).json({"message": "error unable to insert"})
    }
})

router.put("/cars/:id", verifyCarsData(), verifyCarsID(), async (request, response) => {
    try {
        let result = await Cars.update(request.carData.id, request.postData)

        return response.status(200).json(result)
    }
    catch (error) {
        return response.status(500).json({"message": "error unable to update"})
    }
})

router.delete("/cars/:id", verifyCarsID(), async (request, response) => {
    try {
        let result = await Cars.remove(request.carData.id)

        return response.status(200).json(result)
    } catch (error) {
        return response.status(500).json({"message": "error unable to delete"})
    }
})

module.exports = router

