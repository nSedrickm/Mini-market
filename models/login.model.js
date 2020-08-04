var mysqlConn = require('../config/db.config');

login = function (user, result) {
    mysqlConn.query("Select * from users where name = ? ", user.username, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};


module.exports = login
