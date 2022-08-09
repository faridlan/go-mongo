//select * from products where category is null
db.products.find({
    category: {
        $exists: false
    }
})

db.products.find({
    category: {
        $type: "string"
    }
})

db.products.find({
    prices: {
        $type: ["int", "long"] //or
    }
})