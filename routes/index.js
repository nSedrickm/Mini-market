var express = require('express');
var router = express.Router();

const products = require("../controllers/products.controller");
const mysqlConn = require('../config/db.config');

//get all clients
router.get("/products", products.findAll);

router.get("/productID", function (req, res, next) {
    let id = req.query.id;
    let sql = "SELECT * FROM products WHERE id = " + id;
    let query = mysqlConn.query(sql, (err, data) => {
        if (err) {
            res.render('error');
            throw err;
        }
        res.render('single-product', {
            data: data,
            title: "product " + id
        });

    })
});

module.exports = router;
