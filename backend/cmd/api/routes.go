package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func routers() {
	r := mux.NewRouter()
	r.HandleFunc("/user/{key}", GetUser).Methods("GET")
	r.HandleFunc("/users", GetUsers).Methods("GET")
	http.ListenAndServe(":4000", r)
}

func GetUser(res http.ResponseWriter, req *http.Request) {
	fmt.Fprintln(res, "User 1")
}

func GetUsers(res http.ResponseWriter, req *http.Request) {
	fmt.Fprintln(res, "Usuarios")
	fmt.Fprintln(res, "Usuarios")
	fmt.Fprintln(res, "Usuarios")
}
