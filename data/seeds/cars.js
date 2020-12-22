// VIN, make, model, mileage, transmission
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('cars').del()
        .then(function () {
            // Inserts seed entries
            return knex('cars').insert([
                {id: 1, vin: "AVIN12345", make: "car", model: "little", mileage: 50, transmission: "sturdy", title_status: "clean"},
                {id: 2, vin: "AVIN54321", make: "truck", model: "guzzler", mileage: 5, transmission: "expensive", title_status: "wreck"},
                {id: 3, vin: "NCC74656", make: "starship", model: "intrepid", mileage: 5000, transmission: "warp drive", title_status: "lost"},
                {id: 4, vin: "NCC1701A", make: "starship", model: "constitution", mileage: 15000, transmission: "warp drive", title_status: "refit"},
            ]);
        });
};
