package test

import (
	"context"
	"fmt"
	"log"
	"testing"

	"github.com/faridlan/go-mongo/app"
	model "github.com/faridlan/go-mongo/model/domain"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// Insert To MongoDB
func insert() model.Product {

	db, err := app.Connect()
	if err != nil {
		log.Fatal(err.Error())
	}

	product := model.Product{
		Name:     "Vape Puma 200W",
		Price:    300000,
		Category: "vape",
		Stock:    10,
	}

	result, err := db.Collection("products").InsertOne(context.Background(), product)
	if err != nil {
		log.Fatal(err.Error())
	}

	newId := result.InsertedID
	product.Id = newId.(primitive.ObjectID)

	// fmt.Println("Insert Success")
	return product
}

func TestInsert(t *testing.T) {
	p := insert()
	fmt.Println(p)
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
