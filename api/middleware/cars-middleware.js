const Cars = require("../models/cars-model")

function verifyCarsData() {
    return (request, response, next) => {
        let data = {
            vin: request.body.vin,
            make: request.body.make,
            model: request.body.model,
            mileage: request.body.mileage,
            transmission: request.body.transmission,
            title_status: request.body.title_status
        }

        if(!data.vin || !data.make || !data.model || !data.mileage) {
            response.status(400).json({"message": "error required data is missing"})
        } else {
            request.postData = data
            next()
        }
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
