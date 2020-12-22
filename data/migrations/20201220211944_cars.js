// VIN, make, model, mileage, transmission
exports.up = function(knex) {
    return knex.schema.createTable("cars", (table) => {
        table.increments("id")
        table.string("vin").notNullable().unique()
        table.string("make").notNullable()
        table.string("model").notNullable()
        table.integer("mileage").notNullable()
        table.string("transmission")
        table.string("title_status")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars")
};
