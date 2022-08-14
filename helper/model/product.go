package model

import (
	"github.com/faridlan/go-mongo/model/domain"
	"github.com/faridlan/go-mongo/model/web/productweb"
)

func ToProductResponse(product domain.Product) productweb.ProductResponse {
	return productweb.ProductResponse{
		Id:       product.Id.Hex(),
		Name:     product.Name,
		Price:    product.Price,
		Stock:    product.Stock,
		Category: product.Category,
	}
}
