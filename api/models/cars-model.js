const db = require("../../data/dbConfig")

const carsTable = "cars"

function get(id) {
    if(id) {
        return db.table(carsTable)
            .where("id", id)
            .first()
    } else {
        return db.table(carsTable)
    }
}

function insert(data) {
    return "hello world"
}

function update(id, data) {
    return "hello world"
}

function remove(id) {
    return "hello world"
}

module.exports = {
    get,
    insert,
    update,
    remove
}
