var mysqlConn = require('../config/db.config');


var products = function (product) {
    this.name = product.name;
    this.category = product.category;
    this.price = product.price;
    this.quantity = product.quantity;
    this.supplier = product.supplier;
    this.created_at = new Date();
};

products.getAll = result => {
    mysqlConn.query("SELECT * FROM products ", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });

}
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

products.update = function (id, product, result) {

    console.log(product);
    mysqlConn.query("UPDATE products SET name= ? WHERE id = ?", [product.name, id], function (err, res) {
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