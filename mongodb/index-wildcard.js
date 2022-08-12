db.cusctomers.createIndex({
    "customFields.$**": 1
})

db.customers.insertMany([{
        _id: "budi",
        full_name: "budi",
        customFields: {
            hobby: "Gaming",
            university: "Universitas Belum Ada"
        }
    },
    {
        _id: "joko",
        full_name: "joso",
        customFields: {
            ipk: 3.2,
            university: "Universitas Belum Ada"
        }
    },
    {
        _id: "udin",
        full_name: "udin",
        customFields: {
            motherName: "Tini",
            passion: "Entepreneur"
        }
    }
])

db.cusctomers.find({
    "customFields.passion": "Enterpreneur"
}).explain()
db.cusctomers.find({
    "customFields.ipk": 3.2
}).explain()
db.cusctomers.find({
    "customFields.hobby": "Gaming"
}).explain()