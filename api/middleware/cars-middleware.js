const Cars = require("../models/cars-model")

function verifyCarsData() {
    return (request, response, next) => {
        next()
    }
}

function verifyCarsID() {
    return (request, response, next) => {
        next()
    }
}

module.exports = {
    verifyCarsData,
    verifyCarsID
}
