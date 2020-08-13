const suppliers = require("../models/suppliers.model");

//get all suppliers from db
exports.findAll = (req, res) => {
    suppliers.findAll((err, results) => {
        if (err) {
            res.status(500).send({
                message: err.message || "error occured while retrieving suppliers"
            });
        }
        res.render('suppliers', {
            title: 'All Suppliers',
            data: results
        });
    });
};


exports.create = function (req, res) {
    console.log(req.body);
    const newSupplier = new suppliers(req.body);

    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        suppliers.create(newSupplier, function (err, suppliers) {
            if (err)
                res.send(err);
            /*res.json({ error: false, message: "supplier added successfully!", data: suppliers }); */
            res.render("create_supplier", {
                data: false,
                title: "supplier Added",
                message: "supplier added successfully",
                alert: true

            });
        });
    }
};


exports.findById = function (req, res) {
    suppliers.findById(req.body.id, function (err, results) {
        console.log(results)
        if (err) {
            res.send(err);
        }
        res.render('edit_supplier', {
            title: 'Find supplier',
            data: results
        });
    });
};


exports.update = function (req, res) {
    suppliers.update(req.body, function (err, product) {
        if (err)
            res.send(err);
        //res.json({ error: false, message: 'product successfully updated' });
        res.render("edit_supplier", {
            data: false,
            title: "Supplier Updated",
            message: "Supplier updated successfully",
            alert: true
        });
    });
};


exports.delete = function (req, res) {
    suppliers.delete(req.body.id, function (err, product) {
        if (err)
            res.send(err);
        //res.json({ error: false, message: 'product successfully deleted' });
        res.render("suppliers", {
            data: false,
            title: "Supplier Deleted",
            message: "Supplier deleted successfully",
            alert: true
        });
    });
};