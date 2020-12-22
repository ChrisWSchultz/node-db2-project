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
    return db.table(carsTable)
        .insert(data, "id")
        .then(([id]) => get(id))
}

function update(id, data) {
    return db.table(carsTable)
        .where("id", id)
        .update(data)
        .then(changed => (changed > 0 ? get(id) : null))
}

function remove(id) {
    return db.table(carsTable)
        .where("id", id)
        .delete()
}

module.exports = {
    get,
    insert,
    update,
    remove
}
