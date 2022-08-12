//create index at category in products
db.products.createIndex({
    category: 1
})

db.products.getIndexes()

db.products.find({
    category: "liquid"
})

//with index
db.products.find({
    category: "liquid"
}).explain();

//without index
db.products.find({
    name: "liquid"
}).explain();

db.products.find({}).sort({
    category: 1
}).explain();

//create compound index
db.products.createIndex({
    stock: 1,
    tag: 1
})

//jika menggunakan compund index (menambahkan index secara kelompok), yang bisa terkena index hanya field pertama contoh :
//1
//1,2
//1,2,3
db.products.find({
    stock: 10,
    tag: "popular"
}).explain();

db.products.find({
    stock: 10,
}).explain();

//did't get impact index
db.products.find({
    tag: "popular"
}).explain();