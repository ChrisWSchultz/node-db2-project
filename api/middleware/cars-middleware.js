const Cars = require("../models/cars-model")

function verifyCarsData() {
    return (request, response, next) => {
        next()
    }
}

function verifyCarsID() {
    return async (request, response, next) => {
        try {
            let car = await Cars.get(request.params.id)

            if (car) {
                request.carData = car
                next()
            } else {
                response.status(404).json({"message": "unable to find car"})
            }
        } catch (error) {
            response.status(500).json({"message": "error unable to verify ID"})
        }
    }
}

module.exports = {
    verifyCarsData,
    verifyCarsID
}
