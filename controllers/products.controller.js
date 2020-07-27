const products = require("../models/products.model");

//get all products from db
exports.findAll = (req, res) => {
    products.getAll((err, results) => {
        if (err) {
            res.status(500).send({
                message: err.message || "error occured while retrieving products"
            });
        }
        res.render('products', {
            title: 'Mini Market',
            data: results
        });
    });
};

exports.findById = function (req, res) {
    let id = req.body.id;
    products.findById((id, results) => {
        if (err) {
            res.status(500).send({
                message: err.message || "error occured while retrieving products"
            });
        }
        res.render('products-single', {
            title: 'Mini Market',
            data: results
        });
    });
};