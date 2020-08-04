var mysqlConn = require('../config/db.config');


var orders = function (order) {
    this.name = order.name;
    this.category = order.category;
    this.price = order.price;
    this.quantity = order.quantity;
    this.total = order.total;
    this.date = order.date;
    this.time = order.time;
};

orders.findAll = function (result) {
    mysqlConn.query("Select * from orders", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
orders.create = function (newOrder, result) {
    mysqlConn.query("INSERT INTO orders set ?", newOrder, function (err, res) {
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
orders.findById = function (id, result) {
    mysqlConn.query("Select * from orders where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

orders.update = function (product, result) {
    mysqlConn.query("UPDATE orders SET name=?,category=?,price=?,quantity=?,total=?,date=?,time=? WHERE id=?", [product.name, product.category, product.price, product.quantity, product.total, product.date, product.time, product.id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

orders.delete = function (id, result) {
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


module.exports = orders;