var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Market' });
});

/* GET login. */
router.get('/login', function (req, res, next) {
  res.render('login', { title: 'Mini Market' });
});
/* register new user. */
router.get('/register', function (req, res, next) {
  res.render('index', { title: 'Mini Market' });
});
/* GET products. */
router.get('/products', function (req, res, next) {
  res.render('products', { title: 'Mini Market' });
});

/* GET orders */
router.get('/orders', function (req, res, next) {
  res.render('orders', { title: 'Mini Market' });
});

/* GET orders */
router.get('/new-order', function (req, res, next) {
  res.render('new-order', { title: 'Mini Market' });
});

/* GET orders */
router.get('/new-product', function (req, res, next) {
  res.render('new-product', { title: 'Mini Market' });
});
/* GET login. */
router.get('/suppliers', function (req, res, next) {
  res.render('suppliers', { title: 'Mini Market' });
});



module.exports = router;
