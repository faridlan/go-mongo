db.products.insertMany(
    [{
            _id: 7,
            name: "Logitech M235 Wireless Mouse",
            prices: new NumberLong("175000"),
            category: "laptop",
            tag: [
                "logitech", "mouse", "accessories"
            ]
        },
        {
            _id: 8,
            name: "Havit Cooler PAd Gaming 5Fan Blue led F2082",
            prices: new NumberLong("200000"),
            category: "laptop",
            tag: ["cooler", "laptop", "accessories", "fan"]
        },
        {
            _id: 9,
            name: "Samsung LC24F390FHEXXD Curved Monitor",
            prices: new NumberLong("1750000"),
            category: "computer",
            tag: ["samsung", "monitor", "computer"]
        },
    ]
)

// select * from products where (tag = "samsung" and tag = "monitor")
db.products.find({
    tag: {
        $all: ["samsung", "monitor"]
    }
})

// select * from products where tag in ("samsung", "monitor")
db.products.find({
    tag: {
        $elemMatch: {
            $in: ["samsung", "logitech"]
        }
    }
})

//select * from products where size(tag) = 3
db.products.find({
    tag: {
        $size: 4
    }
})