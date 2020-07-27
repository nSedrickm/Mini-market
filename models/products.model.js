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



module.exports = products;