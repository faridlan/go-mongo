db.products.find({}, {
    name: 1,
    category: 1
})

db.products.find({}, {
    tag: 0
})

db.products.find({
    tag: {
        $elemMatch: {
            $in: ["samsung", "logitech"]
        }
    }
}, {
    name: 1,
    category: 1,
    prices: 1,
    "tag.$": 1
})

db.products.find({}, {
    name: 1,
    category: 1,
    prices: 1,
    tag: {
        $elemMatch: {
            $in: ["samsung", "logitech"]
        }
    }
})

db.products.find({
    $text: {
        $search: "monitor"
    }
}, {
    score: {
        $meta: "textScore"
    }
})

db.products.find({}, {
    tag: {
        $slice: 2
    }
})

db.products.find({}, {
    tag: {
        $slice: -2
    }
})

db.products.find({}, {
    tag: {
        $slice: [1, 2]
    }
})