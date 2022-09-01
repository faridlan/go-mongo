package productsrv

import (
	"context"

	"github.com/faridlan/go-mongo/helper"
	"github.com/faridlan/go-mongo/helper/model"
	"github.com/faridlan/go-mongo/model/domain"
	"github.com/faridlan/go-mongo/model/web/productweb"
	"github.com/faridlan/go-mongo/repository/mongodb/product"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type ProductServiceImpl struct {
	ProductRepo product.ProductRepository
}

func NewProductService(productRepo product.ProductRepository) ProductService {
	return &ProductServiceImpl{
		ProductRepo: productRepo,
	}
}

func (service *ProductServiceImpl) Create(ctx context.Context, request productweb.ProductCreate) productweb.ProductResponse {
	product := domain.Product{
		Name:     request.Name,
		Price:    request.Price,
		Stock:    request.Stock,
		Category: request.Category,
	}

	product, err := service.ProductRepo.Save(ctx, product)
	helper.PanicIfError(err)

	return model.ToProductResponse(product)
}

//find
func (service *ProductServiceImpl) Find(ctx context.Context, productId string) productweb.ProductResponse {
	newProductId, err := primitive.ObjectIDFromHex(productId)
	helper.PanicIfError(err)

	product, err := service.ProductRepo.Find(ctx, newProductId)
	helper.PanicIfError(err)

	return model.ToProductResponse(product)
}
