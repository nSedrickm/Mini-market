var mysqlConn = require('../config/db.config');


getMetrics = function (result) {
    mysqlConn.query("SELECT COUNT(*) number FROM products ", function (err, product_count) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, product_count);
        }
    });
};



module.exports = getMetrics
