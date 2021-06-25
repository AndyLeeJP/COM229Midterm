// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        books: books
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {

    render.get('/add', (req, res, next) =>{
      res.render('books/details', {
        title: 'add a book',
        books:'',
        action: '/books/add'
      });
    })

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {

    let data = req.body;

    const newBook ={
      title: data.title,
      description: data.description,
      price: parseInt(data.price),
      author: data.author,
      genre: data.genre
    }

});

book.create(newBook, function(err, result){
  if(err){
    res.send(err);
  }else{
    res.redirect('/books')
  }
})

// GET the Book Details page in order to edit an existing Book
router.get('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
});


module.exports = router;
