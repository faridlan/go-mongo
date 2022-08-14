package productctr

import (
	"net/http"

	"github.com/faridlan/go-mongo/helper"
	"github.com/faridlan/go-mongo/model/web"
	"github.com/faridlan/go-mongo/model/web/productweb"
	"github.com/faridlan/go-mongo/service/productsrv"
	"github.com/julienschmidt/httprouter"
)

type ProductControllerImpl struct {
	ProductService productsrv.ProductService
}

func NewProductController(productService productsrv.ProductService) ProductController {
	return &ProductControllerImpl{
		ProductService: productService,
	}
}

func (controller *ProductControllerImpl) Create(writer http.ResponseWriter, request *http.Request, param httprouter.Params) {
	productCreate := productweb.ProductCreate{}
	helper.ReadFromRequestBody(request, &productCreate)

	product := controller.ProductService.Create(request.Context(), productCreate)

	webResponse := web.WebResponse{
		Code:   200,
		Status: "OK",
		Data:   product,
	}

	helper.WriteResponseBody(writer, webResponse)
}

func (controller *ProductControllerImpl) Find(writer http.ResponseWriter, request *http.Request, param httprouter.Params) {
	id := param.ByName("productId")
	product := controller.ProductService.Find(request.Context(), id)
	webResponse := web.WebResponse{
		Code:   200,
		Status: "OK",
		Data:   product,
	}

	helper.WriteResponseBody(writer, webResponse)
}
