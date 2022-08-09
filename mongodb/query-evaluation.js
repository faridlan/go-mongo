db.products.find({
    $expr: {
        $gt: ["$prices", 100000]
    }
})

db.customers.find({
    $expr: {
        $eq: [{
                $toUpper: "$_id"
            },
            "FARIDLAN"
        ]
    }
})

db.products.find({
    $jsonSchema: {
        required: ["name", "category"]
    }
})

db.products.find({
    $jsonSchema: {
        required: ["name"],
        properties: {
            name: {
                bsonType: "string"
            },
            prices: {
                bsonType: "long"
            }
        }
    }
})

//select * from products where prices % 5 = 0
db.products.find({
    prices: {
        $mod: [5, 0]
    }
})

//select * from products where name like "%liquid%"
db.products.find({
    name: {
        $regex: /liquid/,
        $options: "i"
    }
})

//select * from products where name like "liquid%"
db.products.find({
    name: {
        $regex: /^liquid/
    }
})

//create text index on products
db.products.createIndex({
    name: "text"
})

// select * from products where (name like "%liquid%" or name like "%Iceland%")
db.products.find({
    $text: {
        $search: "liquid Iceland"
    }
})

// select * from products where name like "%Liquid Iceland%"
db.products.find({
    $text: {
        $search: '"liquid Iceland"'
    }
})

//can custome with function with javascript
db.customers.find({
    $where: function() {
        return this._id == "faridlan";
    }
})