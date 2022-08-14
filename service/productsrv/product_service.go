package productsrv

import (
	"context"

	"github.com/faridlan/go-mongo/model/web/productweb"
)

type ProductService interface {
	Create(ctx context.Context, request productweb.ProductCreate) productweb.ProductResponse
	Find(ctx context.Context, productId string) productweb.ProductResponse
}
