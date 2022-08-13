package test

import (
	"context"
	"fmt"
	"log"
	"testing"

	"github.com/faridlan/go-mongo/app"
	"github.com/faridlan/go-mongo/model"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// Insert To MongoDB
func insert() {

	db, err := app.Connect()
	if err != nil {
		log.Fatal(err.Error())
	}

	product := model.Product{
		Id:       primitive.NewObjectID(),
		Name:     "Mie Success",
		Price:    2500,
		Category: "Mie",
		Stock:    10,
	}

	_, err = db.Collection("products").InsertOne(context.Background(), product)
	if err != nil {
		log.Fatal(err.Error())
	}

	fmt.Println("Insert Success")
}

func TestInsert(t *testing.T) {
	insert()
}

// Find To MongoDB
func find() {
	db, err := app.Connect()
	if err != nil {
		log.Fatal(err.Error())
	}

	// doc := db.Collection("products").FindOne(context.Background(), bson.M{})

	// var product model.Product
	// doc.Decode(&product)
	// log.Println(product.Id.Hex())

	csr, err := db.Collection("products").Find(context.Background(), bson.M{})
	if err != nil {
		log.Fatal(err.Error())
	}

	result := make([]model.Product, 0)
	for csr.Next(context.Background()) {
		var row model.Product
		err := csr.Decode(&row)
		if err != nil {
			log.Fatal(err.Error())
		}

		result = append(result, row)
	}

	for _, product := range result {
		fmt.Println(product)
	}
	// if len(result) > 0 {
	// 	fmt.Println("Id:", result[0].Id.Hex())
	// 	fmt.Println("Name:", result[0].Name)
	// 	fmt.Println("Price:", result[0].Price)
	// 	fmt.Println("Category:", result[0].Category)
	// 	fmt.Println("Stock:", result[0].Stock)
	// }
}

func TestFind(t *testing.T) {
	find()
}

func TestHexToObjectId(t *testing.T) {
	objectId, err := primitive.ObjectIDFromHex("62f7a6d045deca12ddf992d5")
	if err != nil {
		log.Fatal(err.Error())
	}
	fmt.Println(objectId)
}

// Update To MongoDB
func update() {
	db, err := app.Connect()
	if err != nil {
		log.Fatal(err.Error())
	}

	objectId, _ := primitive.ObjectIDFromHex("62f7b1dec43a667a348292e0")
	var selector = bson.M{"_id": objectId}
	var changes = model.Product{
		Price: 2500,
	}

	_, err = db.Collection("products").UpdateOne(context.Background(), selector, bson.M{"$set": changes})
	if err != nil {
		log.Fatal(err.Error())
	}

	fmt.Println("update success")
}

func TestUpdate(t *testing.T) {
	update()
}

// Delelte To MongoDB
func delete() {
	db, err := app.Connect()
	if err != nil {
		log.Fatal(err.Error())
	}

	objectId, _ := primitive.ObjectIDFromHex("62f7b1f829f5308100dfe485")
	var selector = bson.M{"_id": objectId}
	_, err = db.Collection("products").DeleteOne(context.Background(), selector)
	if err != nil {
		log.Fatal(err.Error())
	}

	fmt.Println("delete success")
}

func TestDelete(t *testing.T) {
	delete()
}
