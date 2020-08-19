var mysqlConn = require('../config/db.config');


getMetrics = function (result) {
    const sql = `SELECT (SELECT count(*) from products) AS products,
    (SELECT count(*) from orders)  AS orders, (SELECT name
        FROM orders
        GROUP BY name
        ORDER BY COUNT(*) DESC
        LIMIT 1) AS best_seller`;

    mysqlConn.query(sql, function (err, data) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log(data);
            result(null, data);
        }
    });
};

module.exports = getMetrics
