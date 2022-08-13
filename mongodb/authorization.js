//create role

db.createRole({
    role: "find_and_insert",
    privileges: [],
    roles: [{
        role: "read",
        db: "test"
    }]
})

//get all roles
db.getRoles({ showPrivileges: true })

//update role
db.updateRole("find_and_insert", {
    privileges: [{
        resource: {
            db: "test",
            collection: "products"
        },
        actions: ["insert"]
    }],
    roles: [{
        role: "read",
        db: "test"
    }]
})

// Add use with role
db.createUser({
    user: "faridlan",
    pwd: "faridlan",
    roles: ["find_and_insert"]
})

// connect to mongo server
// mongosh --username faridlan --password faridlan --authenticationDatabase test

//insert product [SUCCESS]
db.products.insertOne({
    _id: 10,
    name: "iPad Pro 11 2020",
    price: new NumberLong("2000000"),
    category: "tablet",
    tags: [
        "apple",
        "ipad",
        "tablet"
    ],
    lastModifiedDate: new Date(),
    stock: 10,
    ratings: [
        100
    ]
})

// Delete product [FAILED]
db.products.deleteOne({
    _id: 10
})

// Update product [FAILED]
db.products.updateOne({
    _id: 10
}, {
    $set: {
        category: "handphone"
    }
})

// Insert customers [FAILED]
db.customers.insertOne({
    _id: "nulhakim",
    name: "Faridlan Nul Hakim"
})