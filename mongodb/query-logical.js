db.products.find({
    $and: [{
            category: {
                $in: ["vape", "liquid"]
            }
        },
        {
            prices: {
                $gt: 50000
            }
        }
    ]
})

db.products.find({
    category: {
        $not: {
            $in: ["vape", "liquid"]
        }
    }
})

//select * from products where prices between 50000 and 5000000 and category != 'handphone'
db.products.find({
    $and: [{
            prices: {
                $gte: 50000,
                $lte: 5000000,
            }
        },
        {
            category: {
                $ne: "handphone"
            }
        }
    ]
})