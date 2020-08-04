const home = require("../models/home.model");

//get all metrics from db
exports.getMetrics = (req, res) => {
    getMetrics((err, product_count) => {
        if (err) {
            res.status(500).send({
                message: err.message || "error occured while retrieving metrics"
            });
        }
        res.render('home', {
            title: 'Dashboard',
            products: product_count
        });
    });
};


