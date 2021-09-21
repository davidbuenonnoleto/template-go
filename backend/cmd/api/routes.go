package main

import (
	"github.com/gorilla/mux"
)

func (app *application) routes() *mux.Router {

	router := mux.NewRouter()
	//r.HandleFunc("/products", handler).Methods("POST")

	return router
}
