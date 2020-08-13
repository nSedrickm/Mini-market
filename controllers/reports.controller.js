const products = require("../models/products.model");
const orders = require("../models/orders.model");


//get all products from db
exports.getProducts = (req, res) => {
    products.findAll((err, results) => {
        if (err) {
            res.status(500).send({
                message: err.message || "error occured while retrieving products"
            });
        }
        res.render('reports-product', {
            title: 'Products Report',
            data: results
        });
    });
};


//get all orders from db
exports.getOrders = (req, res) => {
    orders.findAll((err, results) => {
        if (err) {
            res.status(500).send({
                message: err.message || "error occured while retrieving orders"
            });
        }
        res.render('reports-orders', {
            title: 'Orders Report',
            data: results
        });
    });
};
