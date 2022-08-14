package helper

import (
	"encoding/json"
	"net/http"
)

func ReadFromRequestBody(request *http.Request, result interface{}) {
	decode := json.NewDecoder(request.Body)
	err := decode.Decode(result)
	PanicIfError(err)
}

func WriteResponseBody(writer http.ResponseWriter, response interface{}) {
	writer.Header().Add("content-type", "application/json")
	encode := json.NewEncoder(writer)
	err := encode.Encode(response)
	PanicIfError(err)
}
