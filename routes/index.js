var express = require('express');
var router = express.Router();
const mysqlConn = require('../config/db.config');

const productsController = require("../controllers/products.controller");
const ordersController = require("../controllers/orders.controller");
const homeController = require("../controllers/home.controller");
const loginController = require("../controllers/login.controller");
const reportsController = require("../controllers/reports.controller");
const suppliersController = require("../controllers/suppliers.controller");

/******** *********
 * login and registration block
 *
 * ********* **********/

router.get('/', function (req, res) {
    res.render('login', {
        layout: false,
        title: "login"
    });
});

router.post("/login", loginController.login);

router.get('/register', function (req, res) {
    res.render('register', {
        layout: false,
        title: "register"
    });
});

router.post('/register', function (req, res) {
    // registration process gotes here
});

/******** *********
 * products block
 *
 * ********* **********/


// Get all products
router.get('/products', productsController.findAll);

// Create a new product
router.post('/create_product', productsController.create);

// render create_product
router.get('/create_product', function (req, res) {
    res.render('create_product', {
        data: true,
        title: "Create New Product"
    });
});

// Retrieve a single product with id
router.post('/findId', productsController.findById);

// Update a product with id
router.post('/update_product', productsController.update);

// Delete a product with id
router.post('/delete_product', productsController.delete);


/******** *********
 * Orders block
 *
 * ********* **********/

router.get('/orders', ordersController.findAll);

router.get('/create_order', function (req, res) {
    res.render('create_order', {
        data: true,
        title: "Create New Order"
    });
});
// Create a new order
router.post('/create_order', ordersController.create);
// Retrieve a single order with id
router.post('/findOId', ordersController.findById);

// Update a order with id
router.post('/update_order', ordersController.update);

// Delete a order with id
router.post('/delete_order', ordersController.delete);



/******** *********
 * reports block
 *
 * ********* **********/

router.get('/reports', function (req, res) {
    res.render('reports');
});

router.get('/reports-product', reportsController.getProducts);

router.get('/reports-orders', reportsController.getOrders);

/******** *********
 * home block
 *
 * ********* **********/

router.get('/home', homeController.getMetrics);


/******** *********
 * suppliers block
 *
 * ********* **********/

router.get('/suppliers', suppliersController.findAll);

router.get('/create_supplier', function (req, res) {
    res.render('create_supplier', {
        data: true,
        title: "Create New supplier"
    });
});
// Create a new supplier
router.post('/create_supplier', suppliersController.create);
// Retrieve a single supplier with id
router.post('/findSId', suppliersController.findById);

// Update a supplier with id
router.post('/update_supplier', suppliersController.update);

// Delete a supplier with id
router.post('/delete_supplier', suppliersController.delete);

module.exports = router;
