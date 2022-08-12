db.products.dropIndex("name_text")

db.products.createIndex({
    name: "text",
    category: "text",
    tag: "text"
}, {
    weights: {
        name: 10,
        category: 5,
        tag: 1
    }
})

db.products.find({
    $text: {
        $search: "liquid"
    }
}).explain()


db.products.find({
    $text: {
        $search: '"liquid iceland"'
    }
})

db.products.find({
    $text: {
        $search: "liquid -iceland"
    }
}).explain()


//collection with no index
db.customers.find({
    $text: {
        $search: "faridlan"
    }
})