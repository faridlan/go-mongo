db.customers.bulkWrite([{
        insertOne: {
            document: {
                _id: "nul",
                full_name: "Nul"
            }
        }
    },
    {
        insertOne: {
            document: {
                _id: "hakim",
                full_name: "Hakim"
            }
        }
    },
    {
        updateMany: {
            filter: {
                _id: {
                    $in: ["faridlan", "nul", "hakim"]
                }
            },
            update: {
                $set: {
                    full_name: "Faridlan Nul Hakim"
                }
            }
        }
    }
])