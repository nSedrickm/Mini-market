var mysqlConn = require('../config/db.config');


var suppliers = function (supplier) {
    this.name = supplier.name;
    this.phone_number = supplier.phone_number;
    this.product_name = supplier.product_name;
    this.category = supplier.category;
    this.price = supplier.price;
};

suppliers.findAll = function (result) {
    mysqlConn.query("Select * from suppliers", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
suppliers.create = function (newSupplier, result) {
    mysqlConn.query("INSERT INTO suppliers set ?", newSupplier, function (err, res) {
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
suppliers.findById = function (id, result) {
    mysqlConn.query("Select * from suppliers where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

suppliers.update = function (product, result) {
    mysqlConn.query("UPDATE suppliers SET name=?,category=?,price=?,quantity=?,total=?,date=?,time=? WHERE id=?", [product.name, product.category, product.price, product.quantity, product.total, product.date, product.time, product.id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

suppliers.delete = function (id, result) {
    mysqlConn.query("DELETE FROM orders WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};


module.exports = suppliers;