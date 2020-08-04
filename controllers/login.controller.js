const login = require("../models/login.model");

exports.login = function (req, res) {
    login(req.body, function (err, results) {
        console.log(results)
        if (err) {
            res.send(err);
        }

        else {
            res.redirect('/home');
        }
    });
};

