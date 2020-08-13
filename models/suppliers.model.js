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

suppliers.update = function (supplier, result) {
    mysqlConn.query("UPDATE suppliers SET name=?,phone_number=?,product_name=?,category=?,price=? WHERE id=?", [supplier.name, supplier.phone_number, supplier.product_name, supplier.category, supplier.price, supplier.id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

suppliers.delete = function (id, result) {
    mysqlConn.query("DELETE FROM suppliers WHERE id = ?", [id], function (err, res) {
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