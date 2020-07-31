var express = require('express');
var router = express.Router();

const productsController = require("../controllers/products.controller");
const mysqlConn = require('../config/db.config');

router.get('/', function (req, res) {
    res.render('login', {
        layout: false,
        title: "login"
    });
});

router.post("/login", function (req, res) {
    //login processing goes here
});

router.get('/register', function (req, res) {
    res.render('register', {
        layout: false,
        title: "register"
    });
});

router.post('/register', function (req, res) {
    // registration process gotes here
});

router.get('/home', function (req, res) {
    res.render('home');
});

router.get('/new_product', function (req, res) {
    res.render('create_product');
});

router.get('/products', productsController.findAll);


// Create a new product
router.post('/create_product', productsController.create);

// Retrieve a single product with id
router.post('/findId', productsController.findById);

// Update a product with id
router.post('/update', productsController.update);

// Delete a product with id
router.delete('/delete/:id', productsController.delete);

module.exports = router;
