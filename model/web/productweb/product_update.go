package productweb

import "go.mongodb.org/mongo-driver/bson/primitive"

type ProductUpdate struct {
	Id       primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
	Name     string             `bson:"name,omitempty" json:"name,omitempty"`
	Price    int                `bson:"price,omitempty" json:"price,omitempty"`
	Stock    int                `bson:"stock,omitempty" json:"stock,omitempty"`
	Category string             `bson:"category,omitempty" json:"category,omitempty"`
}
