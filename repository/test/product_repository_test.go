package test

import (
	"context"
	"fmt"
	"testing"

	"github.com/faridlan/go-mongo/app"
	"github.com/faridlan/go-mongo/repository/mongodb/product"
)

func TestFindAll(t *testing.T) {

	db, err := app.Connect()
	if err != nil {
		panic(err)
	}
	repository := product.NewProductRepository(db)
	products, err := repository.FindAll(context.Background())
	if err != nil {
		panic(err)
	}

	fmt.Println(products)

}

// func TestUpdate(t *testing.T) {
// 	db, err := app.Connect()
// 	if err != nil {
// 		panic(err)
// 	}

// 	repository := product.NewProductRepository(db)

// 	productId := primitive.NewObjectID()

// 	repository.Find(context.Background())
// 	repository.Update(context.Background())
// }
