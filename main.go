package main

import (
	"log"
	"net/http"

	"github.com/faridlan/go-mongo/app"
	"github.com/faridlan/go-mongo/controller/productctr"
	"github.com/faridlan/go-mongo/helper"
	"github.com/faridlan/go-mongo/repository/mongodb/product"
	"github.com/faridlan/go-mongo/service/productsrv"
	"github.com/julienschmidt/httprouter"
)

func main() {

	db, err := app.Connect()
	helper.PanicIfError(err)

	productRepository := product.NewProductRepository(db)
	productService := productsrv.NewProductService(productRepository)
	productController := productctr.NewProductController(productService)

	router := httprouter.New()
	router.POST("/product", productController.Create)
	router.GET("/product/:productId", productController.Find)

	server := http.Server{
		Addr:    "localhost:4000",
		Handler: router,
	}

	err = server.ListenAndServe()
	if err != nil {
		helper.PanicIfError(err)
	}

	log.Println("Start server on port 4000")
}
