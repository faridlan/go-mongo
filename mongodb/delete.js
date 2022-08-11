db.customers.insertOne({
    _id: "spammer",
    name: "spammer"
})

db.customers.deleteOne({
    _id: "spammer"
})

db.customers.insertMany([{
        _id: "spammer1",
        name: "spammer1"
    },
    {
        _id: "spammer2",
        name: "spammer2"
    },
    {
        _id: "spammer3",
        name: "spammer3"
    }
])

db.customers.deleteMany({
    _id: {
        $regex: "spammer"
    }
})