var mysqlConn = require('../config/db.config');


var products = function (product) {
    this.name = product.name;
    this.category = product.category;
    this.price = product.price;
    this.quantity = product.quantity;
    this.supplier = product.supplier;
    this.date = product.date;
    this.time = product.time;
};

products.findAll = function (result) {
    mysqlConn.query("Select * from products", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
products.create = function (newProd, result) {
    mysqlConn.query("INSERT INTO products set ?", newProd, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
products.findById = function (id, result) {
    mysqlConn.query("Select * from products where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

products.update = function (product, result) {
    console.log("logging product")
    console.log(product)

    mysqlConn.query("UPDATE products SET name=?,category=?,price=?,quantity=?,supplier=?,date=?,time=? WHERE id=?", [product.name, product.category, product.price, product.quantity, product.supplier, product.date, product.time, product.id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

products.delete = function (id, result) {
    mysqlConn.query("DELETE FROM products WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = products;