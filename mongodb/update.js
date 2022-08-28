//update  products set category = "liquid" where _id = 1
db.products.updateOne({
    _id: 1
}, {
    $set: {
        category: "liquid"
    }
})

db.products.updateOne({
    _id: ObjectId("62f8e1071479945330afc6c4")
}, {
    $set: {
        price: 10000000,
        stock: 20
    }
})

db.products.updateOne({
    _id: 1
}, {
    $set: {
        tag: ["liquid", "vape"]
    }
})

//update  products set category = "liquid" where _id = 2
db.products.updateOne({
    _id: 2
}, {
    $set: {
        category: "liquid"
    }
})

// update products set tag = ["liquid", "vape"] where category = "liquid" and tag is null
db.products.updateMany({
    $and: [{
            category: {
                $eq: "liquid"
            }
        },
        {
            tag: {
                $exists: false
            }
        }
    ]
}, {
    $set: {
        tag: ["liquid", "vape"]
    }
})

//update but create new field
db.products.updateMany({}, {
    $set: {
        wrong: "wrong"
    }
})

db.products.updateMany({}, {
    $set: {
        wrong: null
    }
})

//unset
db.products.updateMany({}, [{
    $unset: ["wrong"]
}])

db.products.insertMany([{
    _id: 10,
    name: "Ups salah",
    wrong: "Salah Lagi"
}])

//replace document with id 10
db.products.replaceOne({
    _id: 10
}, {
    name: "Adidas Pulseboost HD Running Shoes Sepatu Lari Pria",
    price: new NumberLong("1100000"),
    category: "shoes",
    tag: [
        "adidas", "shoes", "running"
    ]
})