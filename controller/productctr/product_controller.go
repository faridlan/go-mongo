package productctr

import (
	"net/http"

	"github.com/julienschmidt/httprouter"
)

type ProductController interface {
	Create(writer http.ResponseWriter, request *http.Request, param httprouter.Params)
	Find(writer http.ResponseWriter, request *http.Request, param httprouter.Params)
}
