//alter table customers change name full_name
db.customers.updateMany({}, {
    $rename: {
        name: "full_name"
    }
})

db.products.updateMany({}, {
    $inc: {
        stock: 10
    }
})

db.products.updateMany({}, {
    $currentDate: {
        lastModifiedDate: {
            $type: "date"
        }
    }
})