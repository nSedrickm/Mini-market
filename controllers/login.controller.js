const login = require("../models/login.model");

exports.login = function (req, res) {
    let user = req.body;
    console.log("loggin user:", user);
    login(user, function (err, results) {

        if (err) {
            res.status(403).send('error');
        }

        if (results == "") {
            res.status(403).send('failed');
            console.log(results)
        }
        else {
            res.status(200).send('success');
            console.log(results)
        }
    });
};

