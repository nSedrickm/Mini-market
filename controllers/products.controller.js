const products = require("../models/products.model");

//get all products from db
exports.findAll = (req, res) => {
    products.findAll((err, results) => {
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


exports.create = function (req, res) {
    console.log(req.body);
    const new_product = new products(req.body);

    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        products.create(new_product, function (err, products) {
            if (err)
                res.send(err);
            /*res.json({ error: false, message: "product added successfully!", data: products }); */
            res.redirect("/products")
        });
    }
};


exports.findById = function (req, res) {
    products.findById(req.body.id, function (err, results) {
        console.log(results)
        if (err) {
            res.send(err);
        }
        res.render('edit_product', {
            title: 'Mini Market',
            data: results
        });
    });
};


exports.update = function (req, res) {
    products.update(req.body, function (err, product) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'product successfully updated' });
    });
};


exports.delete = function (req, res) {
    products.delete(req.params.id, function (err, product) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'product successfully deleted' });
    });
};