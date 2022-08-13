//create user with access read only
db.createUser({
    user: "contoh",
    pwd: "contoh",
    roles: [
        { role: "read", db: "test" }
    ]
})

// connect using
// mongosh --username contoh --password contoh --authenticationDatabase test

db.createUser({
    user: "contoh2",
    pwd: "contoh2",
    roles: [
        { role: "readWrite", db: "test" }
    ]
})

// connect using
// mongosh --username contoh2 --password contoh2 --authenticationDatabase test

// Get all users
db.getUsers()

// change password for user contoh
db.changeUserPassword("contoh", "rahasia")

//Drop user contoh
db.dropUser("contoh")

// Update user
db.updateUser("contoh2", {
    roles: [
        { role: "readWrite", db: "test" }
    ]
})