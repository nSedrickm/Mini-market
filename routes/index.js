var express = require('express');
var router = express.Router();

const productsController = require("../controllers/products.controller");
const mysqlConn = require('../config/db.config');

router.get('/', productsController.findAll);

// Create a new product
router.post('/', productsController.create);

// Retrieve a single product with id
router.get('/:id', productsController.findById);

// Update a product with id
router.put('/update/:id', productsController.update);

// Delete a product with id
router.delete('/delete/:id', productsController.delete);

module.exports = router;
