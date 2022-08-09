db.customers.insertOne({
    _id: "faridlan",
    name: "Faridlan Nul Hakim"
})

db.products.insertMany([{
        _id: 2,
        name: "Liquid Iceland Strawberry",
        prices: new NumberLong("120000")
    },
    {
        _id: 3,
        name: "Liquid Lunar Super Manggo",
        prices: new NumberLong("130000")
    }
])


//Opsional if id use object id, cause _id deafult is ObjectId (for _id)
db.orders.insertOne({
    _id: new ObjectId(),
    total: new NumberLong("250000"),
    items: [{
            product_id: 2,
            prices: new NumberLong("120000"),
            quantity: new NumberInt(1)
        },
        {
            product_id: 3,
            prices: new NumberLong("130000"),
            quantity: new NumberInt(1)
        }
    ]
})