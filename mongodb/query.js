// like : "select * from customers where _id = 'faridlan'"
db.customers.find({
    _id: "faridlan"
})

// like : "select * from customers where _id = 'faridlan' and name = 'Faridlan Nul Hakim'"
db.customers.find({
    _id: "faridlan",
    name: "Faridlan Nul Hakim"
})

// like : "select * from products where price = 120000"
db.products.find({
    prices: 120000
})

// select embeded object array
db.orders.find({
    "items.product_id": 2
})