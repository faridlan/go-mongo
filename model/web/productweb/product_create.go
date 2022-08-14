package productweb

type ProductCreate struct {
	Name     string `bson:"name,omitempty" json:"name,omitempty"`
	Price    int    `bson:"price,omitempty" json:"price,omitempty"`
	Stock    int    `bson:"stock,omitempty" json:"stock,omitempty"`
	Category string `bson:"category,omitempty" json:"category,omitempty"`
}
