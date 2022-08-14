package product

import (
	"context"

	"github.com/faridlan/go-mongo/model/domain"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type ProductRepository interface {
	Save(ctx context.Context, product domain.Product) (domain.Product, error)
	Find(ctx context.Context, productId primitive.ObjectID) (domain.Product, error)
	FindAll(ctx context.Context) ([]domain.Product, error)
}
