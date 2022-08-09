db.customers.find({
    _id: {
        $eq: "faridlan"
    }
})

//select * from products where prices > 100000
db.products.find({
    prices: {
        $gt: 100000
    }
})

db.products.insertMany([{
        _id: 4,
        name: "Liquid LCV Grape",
        prices: new NumberLong("65000"),
        category: "liquid"
    },
    {
        _id: 5,
        name: "MXJO Battery 3000MAH",
        prices: new NumberLong("85000"),
        category: "vape"
    },
    {
        _id: 6,
        name: "Xiaomi Redmi Note 11 Pro",
        prices: new NumberLong("3500000"),
        category: "handphone"
    }
])

//select * from products where category in ('vape', 'liquid') and price > 50000
db.products.find({
    category: {
        $in: ["vape", "liquid"]
    },
    prices: {
        $gt: 50000
    }
})