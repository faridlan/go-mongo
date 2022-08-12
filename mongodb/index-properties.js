db.createCollection("sessions");

db.sessions.createIndex({
    createdAt: 1
}, {
    expireAfterSeconds: 10
})

db.sessions.insertOne({
    _id: 1,
    session: "Session 1",
    createdAt: new Date()
})

db.customers.updateMany({}, [{
    $set: {
        email: {
            "$concat": ["$_id", "@", "example.com"]
        }
    }
}])

db.customers.createIndex({
    email: 1
}, {
    unique: true
})

db.customers.insertOne({
    _id: "gagal",
    full_name: "Gagal",
    email: "faridlan@example.com"
})