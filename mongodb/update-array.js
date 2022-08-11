db.products.updateMany({}, {
    $set: {
        ratings: [90, 80, 70]
    }
})

//update first data in array
db.products.updateMany({
    ratings: 90
}, {
    $set: {
        "ratings.$": 100
    }
})

//update all data in array
db.products.updateMany({}, {
    $set: {
        "ratings.$[]": 100
    }
})

//update with elements
db.products.updateMany({}, {
    $set: {
        "ratings.$[element]": 100
    }
}, {
    arrayFilters: [{
        element: {
            $gte: 80
        }
    }]
})

//update array with index
db.products.updateMany({}, {
    $set: {
        "ratings.0": 50,
        "ratings.1": 60,
    }
})

db.products.updateMany({
    _id: 1
}, {
    $addToSet: {
        tag: "popular"
    }
})

// -1 for first, 1 for last
db.products.updateMany({}, {
    $pop: {
        ratings: 1,
    }
})

//remove all gte 80
db.products.updateMany({}, {
    $pull: {
        ratings: {
            $gte: 80
        }
    }
})

//add 100 to ratings
db.products.updateMany({}, {
    $push: {
        ratings: 40
    }
})

//delete item in array
db.products.updateMany({}, {
    $pullAll: {
        ratings: [100, 40]
    }
})

//add multiple item in array
db.products.updateMany({}, {
    $push: {
        ratings: {
            $each: [100, 200, 300]
        }
    }
})

db.products.updateMany({}, {
    $addToSet: {
        tag: {
            $each: ["trending", "popular"]
        }
    }
})

db.products.updateMany({}, {
    $push: {
        tag: {
            $each: ["hot"],
            $position: 1
        }
    }
})

//slice , if - from behind + from depan
db.products.updateMany({}, {
    $push: {
        ratings: {
            $each: [100, 200, 300, 400, 500],
            $slice: -5
        }
    }
})

db.products.updateMany({}, {
    $push: {
        ratings: {
            $each: [100, 200, 300, 400, 500],
            $sort: -1
        }
    }
})