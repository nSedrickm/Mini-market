const orders = require("../models/orders.model");

//get all orders from db
exports.findAll = (req, res) => {
    orders.findAll((err, results) => {
        if (err) {
            res.status(500).send({
                message: err.message || "error occured while retrieving orders"
            });
        }
        res.render('orders', {
            title: 'All Orders',
            data: results
        });
    });
};


exports.create = function (req, res) {
    console.log(req.body);
    const newOrder = new orders(req.body);

    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        orders.create(newOrder, function (err, orders) {
            if (err)
                res.send(err);
            /*res.json({ error: false, message: "order added successfully!", data: orders }); */
            res.render("create_order", {
                data: false,
                title: "Order Added",
                message: "Order added successfully",
                alert: true

            });
        });
    }
};


exports.findById = function (req, res) {
    orders.findById(req.body.id, function (err, results) {
        console.log(results)
        if (err) {
            res.send(err);
        }
        res.render('edit_order', {
            title: 'Find Order',
            data: results
        });
    });
};


exports.update = function (req, res) {
    orders.update(req.body, function (err, product) {
        if (err)
            res.send(err);
        //res.json({ error: false, message: 'product successfully updated' });
        res.render("edit_order", {
            data: false,
            title: "Order Updated",
            message: "Order updated successfully",
            alert: true
        });
    });
};


exports.delete = function (req, res) {
    orders.delete(req.body.id, function (err, product) {
        if (err)
            res.send(err);
        //res.json({ error: false, message: 'product successfully deleted' });
        res.render("orders", {
            data: false,
            title: "Product Deleted",
            message: "Product deleted successfully",
            alert: true
        });
    });
};