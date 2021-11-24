/*package main

import (
	"database/sql"

	"github.com/google/uuid"
)

type User struct {
	Id        uuid.UUID `json:"id" validate:"required"`
	UserName  string    `json:"username" validate:"required"`
	Password  string    `json:"password" validate:"required"`
	FirstName string    `json:"firstname" validate:"required"`
	LastName  string    `json:"lastname" validate:"required"`
}

func (u *User) getUser(db *sql.DB) error {
	return db.QueryRow("SELECT firstname, lastname FROM users WHERE id=$1",
	u.Id).Scan(&u.firstname, &u.lastname)
	return nil
}

func (p *user) updateUser(db *sql.DB) error {
	_, err :=
	db.Exec("UPDATE users SET firstname=$1, price=$2 WHERE id=$3",
		p.Name, p.Price, p.ID)

	return err

	return nil
}

func (p *user) deleteProduct(db *sql.DB) error {
	_, err := db.Exec("DELETE FROM products WHERE id=$1", p.ID)

	return err
	return nil
}

func (p *user) createProduct(db *sql.DB) error {
	/*err := db.QueryRow(
		"INSERT INTO products(name, price) VALUES($1, $2) RETURNING id",
		p.Name, p.Price).Scan(&p.ID)

	if err != nil {
		return err
	}

	return nil
}

func getProducts(db *sql.DB, start, count int) ([]user, error) {

		rows, err := db.Query(
			"SELECT id, name,  price FROM products LIMIT $1 OFFSET $2",
			count, start)

		if err != nil {
			return nil, err
		}

		defer rows.Close()

		products := []user{}

		for rows.Next() {
			var p user
			if err := rows.Scan(&p.ID, &p.Name, &p.Price); err != nil {
				return nil, err
			}
			products = append(products, p)
		}

		return products, nil

	return nil, nil

}
*/