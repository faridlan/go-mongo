package product

import (
	"context"
	"errors"

	"github.com/faridlan/go-mongo/model/domain"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type ProductRepositoryImpl struct {
	DB *mongo.Database
}

func NewProductRepository(db *mongo.Database) ProductRepository {
	return &ProductRepositoryImpl{
		DB: db,
	}
}

func (repository *ProductRepositoryImpl) Save(ctx context.Context, product domain.Product) (domain.Product, error) {
	result, err := repository.DB.Collection("products").InsertOne(ctx, product)
	if err != nil {
		return product, err
	}

	newId := result.InsertedID
	product.Id = newId.(primitive.ObjectID)

	return product, nil
}

func (repository *ProductRepositoryImpl) Find(ctx context.Context, productId primitive.ObjectID) (domain.Product, error) {
	sr := repository.DB.Collection("products").FindOne(ctx, bson.M{"_id": productId})
	product := domain.Product{}
	err := sr.Decode(&product)
	if err != nil {
		return product, errors.New("product not found")
	} else {
		return product, nil
	}
}

func (repository *ProductRepositoryImpl) FindAll(ctx context.Context) ([]domain.Product, error) {
	panic("not implemented") // TODO: Implement
}
