var mysqlConn = require('../config/db.config');

login = function (user, result) {
    mysqlConn.query("SELECT id FROM users WHERE name=? AND password=? ", [user.username, user.password], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};


module.exports = login
