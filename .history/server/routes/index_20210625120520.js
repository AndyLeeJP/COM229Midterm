/*
Chaehyun Lee 
301084271
25-June-2021
Midterm test
*/


// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');


/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});


router.get('/details', (req, res)=>{
  res.render('details.ejs');
})
module.exports = router;
