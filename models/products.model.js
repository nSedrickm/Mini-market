var mysqlConn = require('../config/db.config');


var products = function (product) {
    this.name = product.name;
    this.category = product.category;
    this.price = product.price;
    this.supplier = product.supplier;
    this.created_at = new Date();
    this.updated_at = new Date();
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
products.findAll = function (result) {
    mysqlConn.query("Select * from products", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('products : ', res);
            result(null, res);
        }
    });
};
products.update = function (id, product, result) {
    mysqlConn.query("UPDATE products SET name=?,category=?,price=?,quantity=?,supplier=?,created_at=?,updated_at=? WHERE id = ?", [product.fname, product.category, product.price, product.quantity, product.supplier, product.created_at, product.updated_at, id], function (err, res) {
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