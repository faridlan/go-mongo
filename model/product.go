package model

import "go.mongodb.org/mongo-driver/bson/primitive"

// type Category struct {
// 	Name string `bson:"name"`
// }

type Product struct {
	Id       primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
	Name     string             `bson:"name,omitempty" json:"name,omitempty"`
	Price    int                `bson:"price,omitempty" json:"price,omitempty"`
	Stock    int                `bson:"stock,omitempty" json:"stock,omitempty"`
	Category string             `bson:"category,omitempty" json:"category,omitempty"`
	// CreatedAt int64      `bson:"created_at"`
	// UpdatedAt int64      `bson:"updated_at"`
}
