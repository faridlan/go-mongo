db.createCollection("merchants", {
    validationAction: "error",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "balance", "type", "address"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "Must be a string"
                },
                balance: {
                    bsonType: "long",
                    description: "Must be a long"
                },
                type: {
                    enum: ["PREMIUM", "REGULAR"],
                    description: "can only be one of enum values"
                },
                address: {
                    bsonType: "object",
                    required: ["street", "city"],
                    properties: {
                        street: {
                            bsonType: "string",
                            description: "Must be a string"
                        },
                        city: {
                            bsonType: "string",
                            description: "Must be a string"
                        },
                        country: {
                            bsonType: "string",
                            description: "Must be a string"
                        }
                    }
                }
            }
        }
    }
})

//insert valid document
db.merchants.insertOne({
    _id: "toko1",
    name: "Toko Satu",
    balance: new NumberLong("1000000"),
    type: "PREMIUM",
    address: {
        street: "Jalan Raya Belum Jadi",
        city: "Jakarta",
        country: "Indonesia"
    }
})

//insert invalid document: name is blank
db.merchants.insertOne({
    _id: "toko2",
    balance: new NumberLong("1000000"),
    type: "PREMIUM",
    address: {
        street: "Jalan Raya Belum Jadi",
        city: "Jakarta",
        country: "Indonesia"
    }
})

//insert invalid document: address city is blank
db.merchants.insertOne({
    _id: "toko2",
    name: "toko2",
    balance: new NumberLong("1000000"),
    type: "PREMIUM",
    address: {
        street: "Jalan Raya Belum Jadi",
        country: "Indonesia"
    }
})

// add validator existing collection

db.runCommand({
    collMod: "customers",
    validationAction: "error",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["full_name"],
            properties: {
                full_name: {
                    bsonType: "string",
                    description: "Must be a string"
                }
            }
        }
    }
})

db.customers.insertOne({
    _id: "udin",
    name: "udin"
})