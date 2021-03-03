const express = require('express');
const router = express.Router();

const { getBooks, getBook, postBook, putBook, deleteBook } = require('../controllers/booksController')

router.get('/books', getBooks);
router.post('/books', postBook)
router.get('/books/:id', getBook)
router.delete('/books/:id', deleteBook)
router.put('/books/:id', putBook)


module.exports = router;