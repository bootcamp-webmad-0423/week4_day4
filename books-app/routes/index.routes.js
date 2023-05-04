const express = require('express')
const router = express.Router()

const Book = require('./../models/Book.model')


// index page
router.get("/", (req, res, next) => {
  res.render("index")
})


// books list
router.get("/libros/listado", (req, res, next) => {

  Book
    .find()
    .select({ title: 1 })         // Solo obtenemos el titulo e ID de la BBDD
    .sort({ title: 1 })           // Ordenamos por título ASC
    .then(books => res.render('books/list-page', { books: books }))
    .catch(err => console.log(err))
})


// book details
router.get('/libros/detalles/:book_id', (req, res) => {

  const { book_id } = req.params

  Book
    .findById(book_id)
    .then(book => res.render('books/details-page', book))
    .catch(err => console.log(err))
})

module.exports = router